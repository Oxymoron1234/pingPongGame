var box = document.querySelector(".main")
var ball = document.querySelector(".rectangle")
var brick  = document.querySelector(".brick")
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
    //     ball.style.left = x + "px"
    //     ball.style.top = y + "px"
    // }
    //console.log(e.key)
    if (e.key==="ArrowRight") {
        if(x<50){
            brick.style.left= (++x)*10 + "px"
        } 
    }
    if (e.key==="ArrowLeft") {
        if(x>0){
            brick.style.left = (--x)*10 + "px" 
        }  
    } 
})
function calc() {
         var x =brick.offsetLeft-ball.offsetLeft;
         if((x <=100 && x>= -15)&& ball.offsetTop>=350 ){
           // console.log(ball.offsetLeft - brick.offsetLeft)
                alert("its a hit")
        }
        console.log((x <=30 && x>= -70)&& ball.offsetTop>=350)
}
setInterval(calc , 100);
