// creates each block/square - makes entire grid
class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 70;
    }
    // displays block
    display() {
        noFill();
        stroke(this.c);
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        this.drawX();

        pop();
    }
    // moves/rotates from mouse
    move() {
        let distance;

        // if mouse is moving, check distance between mouse x y  n center of square
        if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
            let distance = dist(mouseX, mouseY, this.x, this.y);

            if (distance < distMouse) {
                this.angle += 1;
                this.c = 255;
            }
        }

        // if squares are already rotating, stop rotate when 90
        if (this.angle > 0 && this.angle < 90) {
            this.angle += 1;
            if (this.c > 70) {
                this.c -= 3;
            }
        } else {
            this.angle = 0;
            this.c = 70;
        }

    
    }
    drawRect(){
        rect(0, 0, size - offset, size - offset);

    }
    drawX(){
        line(0, 0, size, size);
        line(size, 0, 0, size);
    }
}