function pentagram(size) {
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

for (var i=0; i<20; i++) {
	
	lineColor("plum");
	lineWidth(20/i);
	rotate(5*i);
	pentagram(30+(i*10));
}