var events = require('events');

var count = new events.EventEmitter();




function call(onStart, onProgress, onEnd) {
    onStart();
    for (var i = 1; i <= 100; i++){
            console.log(i);
          	onProgress(i);
        }
    onEnd();
    
}

function call2(count) {
    count.emit('start');
    for (var i = 1; i <= 100; i++){
            console.log(i);
          	count.emit('progress', i);
        }
    count.emit('end');
    
}

function onStart(){
        console.log('Getting started!');
  		
}

function onProgress(i){
    if ((i % 10) === 0)
    console.log("We've gone 10 more");
    else if (i === 100) 
        onEnd();
    
}

function onEnd(){
    console.log("We are finished!");
}
        
        
// call(onStart, onProgress, onEnd);
// call(function(){
//     console.log('Hello everyone.');
// }, onProgress, onEnd);



count.on('start', onStart);
count.on('progress', onProgress);
count.on('end', onEnd);

call2(count);