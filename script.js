//initial data

let currentColor = 'black';
let canDraw = false
let mouseX = 0;
let mouseY = 0;

let screnn = document.querySelector('#tela');
let ctx = screnn.getContext('2d');

//events


document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screnn.addEventListener('mousedown', mouseDownEvent);
screnn.addEventListener('mousemove', mouseMoveEvent);
screnn.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScrenn)


//functions


function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');

    e.target.classList.add('active');
}

function mouseDownEvent(e){
    canDraw = true
    mouseX = e.pageX - screnn.offsetLeft;
    mouseY = e.pageY - screnn.offsetTop;
}

function mouseMoveEvent(e){
    if(canDraw){
       draw(e.pageX, e.pageY)
    }
}

function mouseUpEvent(){
    canDraw = false
}

function draw(x,y){
    let pointX = x - screnn.offsetLeft;
    let pointY = y - screnn.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX,pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke()

    mouseX = pointX;
    mouseY = pointY
}

function clearScrenn(){
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}