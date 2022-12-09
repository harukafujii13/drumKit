// for (var i = 0; i < document.querySelectorAll(".dram").length) //.はクラスを表す

var numberOfDrumButons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
       
        //what to do when click detected.
       });
       
}



