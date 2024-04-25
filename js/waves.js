let x = [];
let y = [];
let amplitude = 50;
let angle = 0;

let num; let size = 40;

function setup(){
    createCanvas(400, 400);
    num = height/size;
    
}

function draw(){
    background(220);
    for (let i = 0; i < num; i++) {
        x[i] = amplitude * cos(angle);
        y[i] = i * size;
        rect(x[i], y[i], size, size);
        rect(i, 0, size, size);

        
    }
}