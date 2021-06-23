// import React from "react";

let events: any = {};
const EventHub = {
    emit(eventName: any, data: any) {
        if (!events[eventName]) {
            return;
        }
        events[eventName].forEach((callback: any) => {
            callback.call(null, data);
        })
    },
    on(eventName: any, callbacks: any) {
        if (!events[eventName]) {
            events[eventName] = []
        }
        callbacks.forEach((callback: any) => {
            events[eventName].push(callback);
        })
    }
}
export default EventHub;
