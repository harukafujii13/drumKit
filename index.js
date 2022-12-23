// for (var i = 0; i < document.querySelectorAll(".dram").length) //.はクラスを表す

var numberOfDrumButons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got clicked!");
    
       this.style.color = "white";

        
       });
       
}

//addEventListener(①, ②)
        //①どのイベントをリスニングすべきかを指定
        //②そのイベントが検出された時に何をすべきかを指定
        //what to do when click detected.

// var audio = new Audio("sounds/tom-1.mp3")
//         audio.play();



