for (var i=0; i<400; i++) {
moveTo(i*5,i*5)
square(500)
}

function square(size) {
	speed(500)
	angle(180);
	forward(size);
	rotate(-90);
	forward(size);
	rotate(-90);
	forward(size);
	rotate(-90);
	forward(size);
	rotate(-90);
}