import * as paper from "paper"
import EventHub from "./Observer"
import Paper from "paper";

let getColor = () => {
    let picker: any = document.getElementById('colorPicker');
    let color = 'rgb(241, 112, 19)';
    if (picker != null) {
        console.log(picker.style.background);
        color = picker.style.background;
    }
    return color;
}
const pageChange = {
    pageChangeBefore: () => {
        EventHub.emit('pageChangeBefore', null)
    },
    pageChangeAfter: () => {
        EventHub.emit('pageChangeAfter', null)
    }
}

const RemoveTool = () => {
    for (let i = 0; i < 30; i++) {
        let canvas: any = document.getElementById("canvas-" + i);
        if (canvas != null) canvas.onmousedown = null;
    }
    window.onmousedown = null
    window.onmousemove = null
    window.onmouseup = null
}
const Clear = () => {
    for (let i = 0; i < 30; i++) {
        let canvas: any = document.getElementById("canvas-" + i);
        if (canvas != null) {
            canvas.onmousedown = () => {
                paper.setup(canvas);
                localStorage.setItem("history" + i, JSON.stringify([]));
            }
        }
    }
}
/**
 * 绘制格子
 * @constructor
 */
const DrawGrid = () => {
    RemoveTool();
    let order: string | null = JSON.parse(localStorage.getItem("order"));
    if (order == null) order = '20';
    let isMouseDown: Boolean = false;
    let x: number;
    let y: number;
    let node: HTMLElement;
    let father: HTMLElement;
    let isMove: Boolean = false;
    window.onmousedown = (e) => {
        node = document.createElement("canvas")
        node.id = 'canvas-' + order;
        // canvas=document.getElementById('canvas-'+order);
        x = e.offsetX;
        y = e.offsetY;
        node.setAttribute('style', 'background:white;position: absolute;width: 0;height: 0;border: 3px solid black;left:' + x + 'px;top:' + y + 'px;');
        father = document.getElementById('container');
        if (father != null) father.appendChild(node);
        isMouseDown = true;
    }
    window.onmousemove = (e) => {
        if (isMouseDown) {
            isMove = true;
            node.style.width = e.offsetX - x + 'px';
            node.style.height = e.offsetY - y + 'px';
        }
    }
    window.onmouseup = () => {
        if (isMouseDown) {
            isMouseDown = false;
            if (!isMove && father != null) {
                father.removeChild(node);
            } else {
                localStorage.setItem("history" + order, JSON.stringify([]));
                isMove = false;
                localStorage.setItem("order", String(Number(order) + 1));
            }
        }
    }
}
/**
 * 自由画笔
 * @constructor
 */
const FreePen = () => {
    RemoveTool();
    for (let i = 0; i < 30; i++) {
        let path: paper.Path;
        //每当鼠标按下就新建一条路径
        let canvas: any = document.getElementById("canvas-" + i);
        if (canvas != null) {
            let history: string[] | null = JSON.parse(localStorage.getItem("history" + i));
            let last = null;
            let isMouseDown: Boolean = false;
            let isLeave: Boolean = false;
            let save = () => {
                if (paper.project != null) {
                    if (last !== paper.project.exportJSON()) {
                        if (history != null) {
                            if (history.length > 9) {
                                history.splice(0, 1);
                            }
                            history.push(paper.project.exportJSON());
                        }
                    }
                    if (history != null) localStorage.setItem("history" + i, JSON.stringify(history));
                    // path.smooth();
                }
            }
            canvas.onmousedown = () => {
                let t: any = document.getElementById('chosenId');
                t.className = i;
                isMouseDown = true;
                if (!history) history = [];
                if (history.length > 0) {
                    last = history[history.length - 1];
                }
                paper.setup(canvas);
                // paper.activate();
                if (last != null && last.length > 0) {
                    paper.project.importJSON(last);
                }
                path = new paper.Path({
                    strokeColor: getColor()
                })
            }
            canvas.onmouseleave = () => {
                isLeave = true;
            }
            canvas.onmouseenter = () => {
                isLeave = false;
            }
            window.addEventListener('mousemove', (e) => {
                if (isMouseDown && !isLeave) {
                    let point = new paper.Point(e.offsetX, e.offsetY);
                    path.add(point);
                }
            })
            window.addEventListener('mouseup', () => {
                if (isMouseDown) {
                    isMouseDown = false;
                    save();
                }
            });
            canvas.onwheel = (event: WheelEvent) => {
                //deltaY向上滚动时返回负值
                if (event.deltaY < 0) {
                    paper.view.scale(1.05, new paper.Point(event.offsetX, event.offsetY))
                } else {
                    paper.view.scale(0.95, new paper.Point(event.offsetX, event.offsetY))
                }
            }
        } else {
            console.log('can not find canvas', i);
        }
    }
}

/**
 * name ToolMove
 * desc 拖拽格子
 */
const ToolMove = () => {
    RemoveTool()
    let isMove: number[] = [0];
    for (let i = 1; i < 30; i++) {
        isMove.push(0);
        let canvas = document.getElementById('canvas-' + i);
        if (canvas != null) {
            let x: number = 0, y: number = 0;
            canvas.onmousedown = (e) => {
                let t: any = document.getElementById('chosenId');
                t.className = i;
                x = e.clientX - canvas.offsetLeft;
                y = e.clientY - canvas.offsetTop;
                isMove[x] = 1;
                // window.onmousemove=()=>{console.log('mouseMove')}
            }
            window.addEventListener('mousemove', (e) => {
                if (isMove[x]) {
                    // console.log(e.clientX-x+'px',e.clientY-y+'px');
                    canvas.style.left = e.clientX - x + 'px';
                    canvas.style.top = e.clientY - y + 'px';
                }
            })
            window.addEventListener('mouseup', () => {
                isMove[x] = 0;
                // window.removeEventListener('onmousemove',onmousemove)
            })
        }
    }
}
/**
 * 格子复制
 */
let Copy = (width: Number, height: Number) => {
    let order: string | null = JSON.parse(localStorage.getItem("order"));
    if (order == null) order = '20';
    let id = document.getElementById('chosenId');
    console.log(id.className);
    let nowChoose = document.getElementById('canvas-' + id.className);
    if (nowChoose != null) {
        let node = document.createElement("canvas")
        node.setAttribute('style', 'background:white;position: absolute;border: 3px solid black;left:100px;top:100px;width:' + width + 'px;height:' + height + 'px;');
        node.id = 'canvas-' + order;
        let fatherNode = document.getElementById('container');
        fatherNode.appendChild(node);
        let history: string[] | null = JSON.parse(localStorage.getItem("history" + id.className));
        let last: string | null = null;
        if (history != null && history.length > 0) {
            last = history[history.length - 1];
            if (last != null) {
                paper.setup(node);
                paper.project.importJSON(last);
                localStorage.setItem("history" + order, JSON.stringify(history));
                console.log('order: ', order)
            }
        }
        localStorage.setItem("order", String(Number(order) + 1));
    }
}
/**
 * 格子删除
 * @constructor
 */
let Del = () => {
    let t = document.getElementById('chosenId');
    console.log(t.className);
    let x = document.getElementById('canvas-' + t.className);
    if (x != null) x.remove();
}
/**
 * name ToolSelectPath
 * desc 选中路径并编辑
 */
//工具类的辅助函数

//将group中的更改应用到selectedShape中
const applyChange = (group: paper.Group, selectedShape: paper.Item[]) => {
    for (let i = 0; i < selectedShape.length; i++) {
        selectedShape[i].copyContent(group.children[i])
        selectedShape[i].copyAttributes(group.children[i], false)
        selectedShape[i].selected = false
    }
}
//将传进来的item[]复制一份，组成一个group;并将 原本 设置成不可见
const groupItem = (selectedShape: paper.Item[]) => {
    let group: paper.Group = null;
    let items: any = []
    if (selectedShape) {
        selectedShape.forEach(element => {
            items.push(element.clone())
            element.visible = false
        })
        console.log(items)
        group = new paper.Group(items)
        group.bounds.selected = true
        group.selected = true
    }
    return group
}

//选择的三个函数分别对应Down，Drag，Up

const selectOnMouseDown = (group: paper.Group, selectedShape: any) => {
    if (group) {//在每个选择开始阶段，都将上一个选择框创建的group删除
        group.remove()
        selectedShape.forEach((element: any) => {//并将selectedShape的每个图元设置为可见
            element.visible = true
        });
    }
}
const selectOnMouseDrag = (event: paper.ToolEvent) => {
    //下面这个Rect是虚线样式的选择框
    let Rect: paper.Path.Rectangle = new paper.Path.Rectangle({
        from: event.downPoint,
        to: event.point,
        strokeColor: "black",
        dashArray: [2, 2]
    })
    Rect.removeOn({
        drag: true,
        up: true
    })
}
const selectOnMouseUp = (event: paper.ToolEvent, project: paper.Project) => {
    let group: paper.Group
    let selectedShape
    if (event.downPoint.equals(event.point)) {
        selectedShape = project.getItems({//获取与点交叠的图形
            overlapping: new paper.Point(event.point),
            match: function (item: any) {
                return item.className === 'PointText' || item.className === 'Path';
            }
        })
        selectedShape = selectedShape.length !== 0 ? [selectedShape[0]] : selectedShape;//只选择一个
    } else {
        selectedShape = project.getItems({//获取与矩形框交叠的图形
            inside: new paper.Rectangle({
                from: event.downPoint,
                to: event.point,
            }),
            match: function (item: any) {
                return item.className === 'PointText' || item.className === 'Path';
            }
        })
    }

    group = groupItem(selectedShape)
    //返回    selectedShape：原本    group：副本
    return [selectedShape, group]
}
//选择的三个函数
const editOnMouseDown = () => {

}
const editOnMouseDrag = (event: paper.ToolEvent, group: paper.Group, isShiftDown: Boolean) => {
    let a: paper.Point = event.point.subtract(group.bounds.center)//变化的长度
    let b: paper.Point = group.bounds.bottomLeft.subtract(group.bounds.center)//原来图形的长度
    let factor: any //比例因子
    if (!isShiftDown) {
        factor = new paper.Point(1, 1).multiply(a.x / b.x).abs()//没有按下shift，则按原来比例缩放
    } else {
        factor = a.divide(b).abs()//按下shift，则不按原来比例缩放
    }
    group.scale(factor)
}
const editOnMouseUp = (group: paper.Group, selectedShape: paper.Item[]) => {
    applyChange(group, selectedShape)
}
//旋转的三个函数
const rotateOnMouseDown = () => {

}
const rotateOnMouseDrag = (event: paper.ToolEvent, group: paper.Group) => {
    let angle = -event.point.subtract(group.bounds.center).getDirectedAngle(event.lastPoint.subtract(group.bounds.center))
    group.rotate(angle, group.bounds.center)
}
const rotateOnMouseUp = (group: paper.Group, selectedShape: paper.Item[]) => {
    applyChange(group, selectedShape)
}
//移动的三个函数
const moveOnMouseDown = () => {

}
const moveOnMouseDrag = (event: paper.ToolEvent, group: paper.Group) => {
    group.translate(event.delta)
}
const moveOnMouseUp = (group: paper.Group, selectedShape: paper.Item[]) => {
    applyChange(group, selectedShape)
}

function ToolEditPath(scope: any) {//这个scope相当于this
    RemoveTool()
    let id = document.getElementById('chosenId');
    let canvas: any = document.getElementById('canvas-' + id.className);
    if (canvas != null) {
        Paper.setup(canvas);
        let history: string[] | null = JSON.parse(localStorage.getItem("history" + id.className));
        if (history != null && history.length > 0) {
            let last = history.pop();
            if (last != null) {
                paper.setup(canvas);
                paper.project.importJSON(last);
            }
            history.push(last);
        }
        canvas.onmousedown = () => {
        };

    }
    let tool: paper.Tool = new paper.Tool();//当前工具
    let project: paper.Project = paper.project;//这个是paper目前活跃的project，可以根据需求改成别的项目
    let selectedShape: any = scope.hasOwnProperty('length') ? scope : []//被选中的图元,看情况初始化成[]或paper.item[]
    let group: paper.Group = groupItem(selectedShape);//被选中的图形
    // let myCanvas: HTMLElement = document.getElementById("canvas-1");
    let className = '';
    let lockState: Boolean = false;
    let isShiftDown: Boolean = false;
    //全选
    document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.ctrlKey) {
            if (e.code === "KeyA") {
                selectedShape = null
                selectedShape = project.getItems({
                    class: paper.Path
                })
                group = groupItem(selectedShape)
            }
        }
    })
    tool.onKeyDown = (event: paper.KeyEvent) => {
        //判断shift是否按下
        if (event.key === "shift") {
            isShiftDown = true
        }
        //判断delete是否按下
        if (event.key === "delete") {
            pageChange.pageChangeBefore()
            paper.project.getItems({
                class: paper.Group,
                match: function (item) {
                    //console.log("item: ")
                    //console.log(item)
                    if (item.className === "Group")
                        return true
                }
            }).forEach(element => {
                //console.log("element； "+element)
                element.remove()
            })
            selectedShape.forEach(element => {
                element.remove()
            });
            pageChange.pageChangeAfter()
        }
    }
    tool.onKeyUp = (event: paper.KeyEvent) => {//判断shift是否松开
        if (event.key === "shift") {
            isShiftDown = false
        }
    }
    //onMouseMove是为了检测目前鼠标的位置，进而改变当前可做的动作和鼠标样式
    tool.onMouseMove = (event: paper.ToolEvent) => {
        if (!lockState && group) {
            let isEdit, isRotate, isMove;//判断当前的状态
            isEdit = !!group.hitTest(event.point, {//如果在边角就是可以编辑
                bounds: true
            })
            isRotate = !!group.hitTest(event.point, {//如果在范围较大的边角就是可以旋转
                bounds: true,
                tolerance: 16
            })
            isMove = group.bounds.contains(event.point)
            if (isEdit) {//编辑的优先级最高
                className = "edit"
            } else if (isMove) {//然后移动
                className = "move"
            } else if (isRotate) {
                className = "rotate"
            } else {
                className = "none"
            }
        }
    }
    //以下三个事件函数触发动作
    tool.onMouseDown = () => {
        pageChange.pageChangeBefore()
        lockState = true
        switch (className) {
            case 'edit':
                editOnMouseDown();
                break;
            case 'rotate':
                rotateOnMouseDown();
                break;
            case 'move':
                moveOnMouseDown();
                break;
            default:
                selectOnMouseDown(group, selectedShape);
                break;
        }
    }
    tool.onMouseDrag = (event: paper.ToolEvent) => {
        switch (className) {
            case 'edit':
                editOnMouseDrag(event, group, isShiftDown);
                break;
            case 'rotate':
                rotateOnMouseDrag(event, group);
                break;
            case 'move':
                moveOnMouseDrag(event, group);
                break;
            default:
                selectOnMouseDrag(event);
                break;
        }
    }
    tool.onMouseUp = (event: paper.ToolEvent) => {
        lockState = false
        switch (className) {
            case 'edit':
                editOnMouseUp(group, selectedShape);
                break;
            case 'rotate':
                rotateOnMouseUp(group, selectedShape);
                break;
            case 'move':
                moveOnMouseUp(group, selectedShape);
                break;
            default:
                [selectedShape, group] = selectOnMouseUp(event, project);
                break;//我选择用返回值来修改selectedShape
        }
        pageChange.pageChangeAfter()
    }
}

export {
    FreePen,
    ToolMove,
    ToolEditPath,
    Clear,
    DrawGrid,
    Copy,
    Del
}