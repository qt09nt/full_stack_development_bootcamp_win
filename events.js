//events module
//node.js uses event-driven non-blocking I/O modlel
//events are signals that something occurred or happened, like clicking a button, opening a window or closing it

//in node.js some objects are called emitters; their job is to emit named events and in response to these named events,
//is another function object called listeners.

//any object that emits an event is an instance of the EventEmitter class

//events are emitted by those objects using the function eventEmitter(), which allow functions to be attached to these
//named emitted events
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('calling', ()=>{
    console.log('i have been called');
});
emitter.emit('calling');