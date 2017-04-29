//touch test
//sample from :https://matome.naver.jp/odai/2140737777856073701


var context;
var flag=false;

document.addEventListener("touchstart", function(event){
    flag=true;
    context.beginPath();
    context.moveTo(event.touches[0].clientX,event.touches[0].clientY);
});

document.addEventListener("touchmove", function(event){
    event.preventDefault();
    if (flag){
        context.lineTo(event.touches[0].clientX,event.touches[0].clientY);
        context.stroke();
    }
});

document.addEventListener("touchend", function(event){
    flag=false;
});

function color(obj){
    context.strokeStyle = obj.options[obj.selectedIndex].value;
}
