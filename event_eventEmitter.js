var events = require('events');

var eventEmitter = new events.EventEmitter();

var myeventHandler = function(){
    console.log('I heard the scream');
}

eventEmitter.on('scream', myeventHandler);

eventEmitter.emit('scream');