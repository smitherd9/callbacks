function call(onStart, onProgress, onEnd) {
    onStart();
    
}

function onStart(){
        for (var i = 1; i <= 100; i++){
            console.log[i];
        }
}

function onProgress(i){
    if ((i % 10) == 0)
    console.log("We've gone 10 more");
    else if (i == 100) {
        onEnd();
    }
}

function onEnd(){
    console.log("We are finished!");
}
        
        
call(onStart, onProgress, onEnd);