export default class Particle {
    constructor(x, y) {
        this.width = 12;
        this.height = 12;
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;
    }

    update() {
        this.x += 1;
        this.y += 1;
    }

    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
