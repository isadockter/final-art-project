window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // line styles
    ctx.lineCap = 'round';
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;

    // effect settings
    // maxLevel - depth of fractal, how many times will the segments get smaller
    let size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.3;
    const maxLevel = 4;
    const branches = 2;

    let sides = 5;
    let scale = 0.5;
    let spread = 0.5;
    let color = 'hsl('+ Math.random() * 360 +', 100%, 50%)';
    let lineWidth = Math.floor(Math.random() * 20 + 10);
    // controls
    const randomizeButton = document.getElementById('randomizeButton');

    // delete
    const deleteButton = document.getElementById('delete');

    // slider spread
    const slider_spread = document.getElementById('spread');
    const label_spread = document.querySelector('[for="spread"]');

    slider_spread.addEventListener('change', function(e){
        spread = e.target.value;
        drawFractal();
    });

    // FRACTAL CREATION
    // drawing each branch of the fractal
    // level is conditional - complexitity of fractal
    // higher = more complex
    // uses branches, size, spread, scale vars
    function drawBranch(level){
        // recursion - when function calls itself
        // needs conditional to be met at some point bc infinite loop bad
        if (level > maxLevel) return;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(size,0);
        ctx.stroke();

        for (let i=0; i<branches; i++){
            ctx.save();
            ctx.translate(size - (size/branches) * i,0);
            ctx.rotate(spread);
            ctx.scale(scale,scale);
            drawBranch(level + 1);
            ctx.restore();
    
            ctx.save();
            ctx.translate(size - (size/branches) * i,0);
            ctx.rotate(-spread);
            ctx.scale(scale,scale);
            drawBranch(level + 1);
            ctx.restore();
        }
    }

    // draws fractal with drawBranch function
    function drawFractal(){
        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.translate(canvas.width/2,canvas.height/2);

        for (let i = 0; i < sides; i++){
            // creating circle with PI
            // rotate takes in value of radians
            ctx.rotate((Math.PI * 2)/sides);
            drawBranch(0);
        }
        ctx.restore();
    }

    // RANDOMIZE and DELETE
    function randomizeFractal(){
        drawFractal();
        sides = Math.random() * 7 + 2;
        scale = Math.random() * 0.2 + 0.4;
        spread = Math.random() * 2.9 + 0.1;
        color = 'hsl('+ Math.random() * 360 +', 100%, 50%)';
        lineWidth = Math.floor(Math.random() * 20 + 10);
    }
    function deleteCanvas(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
    }

    randomizeButton.addEventListener('click', randomizeFractal);
    deleteButton.addEventListener('click', deleteCanvas);

});

    // NOTES 
    // saves the entire state of canvas
    // any properties applied to canvas will be saved at this point
    // translate, scale, rotate
    // ADDS up when called multiple times
    // restores the most recently saved canvas state
    // similar to version history, making changes to shapes, layering, etc
    // beginning new path - start drawing new shape
    // ctx.beginPath();
    // set starting x and y coords of new shape
    // ctx.moveTo(0,0);
    // set ending coords of a line - or the next point 
    // ctx.lineTo(size,0);
    // outlines the current path with the current stroke style
    // ctx.stroke();
    // FRACTALS are created by repeating a simple process over and over in an ongoing feedback loop