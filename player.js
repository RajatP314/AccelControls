class Player{
	constructor(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.xv = 0;
		this.yv = 0;
	}

		
	draw(ctx){
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}
