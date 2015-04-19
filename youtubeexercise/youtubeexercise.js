function addVideo(video) {
  
  var title = video.snippet.title
  var thumbnail = video.snippet.thumbnails.default.url;
  
  console.log(thumbnail)
  
  var $div = $("<div>");
  var $image = $("<img>").attr("src", thumbnail)
  var $title = $("<h4>").text(title);
  
  $div.append($title).append($image);
  
  $(".container").append($div);
  
  $(".title").append($title);
  
}

function showModal(item) {

  $(".modal").empty();

  var title = video.snippet.title;
  var description = video.snippet.description;

  var $("<div>");

  var $title = $("<h4>").text(title)
  var $description = $("<p>").text(description)

  $div.append($title).append($description);

  $(".modal").append($div)
   
   $(".overlay").show();
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}


function loadYoutube(videosData) {
  for(var i = 0; i < videosData.items.length; i++) {
    addVideo(videosData.items[i]);
  }
}


showModal();