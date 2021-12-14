var box = document.querySelector(".main")
var rect = document.querySelector(".rectangle")
var brick  = document.querySelector(".brick")
//console.log(box, rect);


// function addEventListener(typeofevent, callingfunction) {
//     if (typeofevent == "mousemove") {
//         Event

//         callingfunction(even)
//     }
// }
var x =0;
window.addEventListener("keydown", function(e) {
    // var x = e.clientX - box.getBoundingClientRect().x
    // var y = e.clientY - box.getBoundingClientRect().y

    // var bottomBoundry = box.getBoundingClientRect().bottom;
    // var rightBoundry = box.getBoundingClientRect().right;

    // console.log(box.getBoundingClientRect());
    // if (e.clientY < (bottomBoundry - 100) && e.clientX < (rightBoundry - 100)) {
    //     rect.style.left = x + "px"
    //     rect.style.top = y + "px"
    // }
    //console.log(e.key)
   
    if (e.key==="ArrowRight") {
        
        brick.style.left= (x++)*100 + "px"
        console.log(brick.style.left) 
    }
    if (e.key==="ArrowLeft") {
        
        brick.style.left = (x--)*10 + "px" 
        console.log(brick.style.left)
    }
  
})
