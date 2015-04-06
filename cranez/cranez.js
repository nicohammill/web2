function addCrane (title, image, link, caption) {

var $div = $("<div>");

var $title = $("<h4>").text(title);
var $image = $("<img>").attr("src",image);
var $link = $("<a>").attr("href",link).append($image);
var $caption = $("<p>").text(caption);


$div.append($title).append($link).append($caption);

var $list = $("body");
$list.append($div);

};

addCrane("red crane!", "http://www.peteykins.com/sparklepics2/RedCrane1Big.jpg", "http://upload.wikimedia.org/wikipedia/commons/1/1d/Sarus_Crane_(Grus_antigone)_at_Sultanpur_I_Picture_151.jpg", "look at how massive this red crane is");
addCrane("oh my heck", "http://static.flickr.com/113/299367913_124a5fa6fe_o.jpg", "http://www.sdakotabirds.com/species/photos/whooping_crane_1.jpg", "is this crane too big? probably.");
addCrane("so many", "http://www.dw.de/image/0,,566544_4,00.jpg", "https://s-media-cache-ak0.pinimg.com/originals/43/2b/b7/432bb723793dddc042891b59155aca85.jpg", "cranes! cranes! cranes! cranes! cranes! cranes!");
addCrane("boat cranes", "http://lovefreo.com/wp-content/uploads/2010/03/crane-ship.jpg", "http://petcaregt.com/blog/wp-content/uploads/2008/11/crane-bird.jpg", "these cranes are on a boat!!");
addCrane("holy fuck!?", "http://i.imgur.com/ag8Lm.jpg", "http://www.florida-tourism.net/florida-wildlife/bird-images/sandhill-crane/sandhill-crane-orlando7.jpg", "cranes on cranes on cranes");



function drawImages(data) {
	
	for (var i = 0; i < data.data.length; i++) {

	var title = data.data[i].user.full_name
	console.log(title);

	var image = data.data[i].images.standard_resolution.url
	console.log(image);

	var link = data.data[i].link
	console.log(link);

	var caption = data.data[i].caption.text
	console.log(caption);

	console.log(data)

	addCrane(title, image, link, caption);
}
}











