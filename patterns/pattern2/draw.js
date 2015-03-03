for (var i=0; i<20; i++) {
	
	moveTo(50+i*10, 50+i*10)
	lineColor("lightblue");
	lineWidth(30/i);
	rotate(3*i);
	line(3*(i*4));
}

for (var i=0; i<20; i++) {
	
	moveTo(50+i*10, 100+i*10)
	lineColor("maroon");
	lineWidth(30/i);
	rotate(3*i);
	line(3*(i*4));
}

function line(size) {
	speed(50);
	forward(size);
	rotate(-130);
	forward(size);
	rotate(-130);
	forward(size);
	rotate(120);
	forward(size);
	rotate(150);
	angle(0);
}