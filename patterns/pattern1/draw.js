for (var i=0; i<20; i++) {
	
	lineColor("plum");
	lineWidth(20/i);
	rotate(5*i);
	pentagram(30+(i*10));
}

function pentagram(size) {
	speed(50)
	forward(size);
	rotate(72);
	forward(size);
	rotate(72);
	forward(size);
	rotate(72);
	forward(size);
	rotate(72);
	forward(size);
	rotate(72);
}