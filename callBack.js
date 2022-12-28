function anotherAddEventListener(typeOfEvent, callBack) {
    //Detect Event Code..

    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    if (eventThatHappened.eventType === typeOfEvent) {
        callBack(eventThatHappened);
    }
    
}

// anotherAddEventListener("keypress", function(event){
//     console.log(event);
// });

document.addEventListener("keypress", function(event){
    console.log(event);
});