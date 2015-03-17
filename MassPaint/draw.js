record();
reset();
hide();

$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 replay();
});

$("#button-eraser").on("click",function(){
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	
	tool = "eraser";
	lineColor("white");
	lineWidth(50);
});

$("#button-pen").on("click",function(){
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	
	tool = "pen"
	
	if($(this).text == "") {
    $(this).text("line");
	tool = "pen";
  } else if($(this).text() == "line") {
    $(this).text("triangle");
	tool = "triangle";
  }	else if($(this).text() == "triangle") {
    $(this).text("square");
	tool = "square";
  } else {
    $(this).text("line");
	tool = "pen"
  }
});



$("#button-color").on("click",function() {
	if($(this).text() == "black") {
    $(this).text("blue");
	lineColor("blue");
  } else if($(this).text() == "blue") {
    $(this).text("yellow");
	lineColor("yellow");
  }	else if($(this).text() == "yellow") {
    $(this).text("green");
	lineColor("green");
  } else {
    $(this).text("black");
	lineColor("black");
  }
})

$("#button-width").on("click",function() {
  if($(this).text() == "width 1") {
    $(this).text("width 2");
	lineWidth(5);
  } else if($(this).text() == "width 2") {
    $(this).text("width 3");
	lineWidth(10);
  }	else if($(this).text() == "width 3") {
    $(this).text("width 4");
	lineWidth(15);
  } else {
    $(this).text("width 1");
	lineWidth(1);
  }
})



var drawing = false;

$(document).on("mousedown",function(e) {
  e.preventDefault();
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool == "eraser") { 
    drawing = true;
  }
});

$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});


$(document).on("click", function(e){
	e.preventDefault();
	moveTo(e.pageX,e.pageY);
	if(tool == "triangle") {
		rotate(30);
		forward(100);
		rotate(-120);
		forward(100);
		rotate(-120);
		forward(100);
		speed(1000);
	}
})


$(document).on("click", function(e){
	e.preventDefault();
	moveTo(e.pageX,e.pageY);
	if(tool == "square") {
		rotate(90);
		forward(100);
		rotate(90);
		forward(100);
		rotate(90);
		forward(100);
		rotate(90);
		forward(100);
		speed(1000);
	}
})