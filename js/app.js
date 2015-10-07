$(document).ready(function() {
	$('#search-term').submit(function (event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    $('#query').val('');
  });
});

function getRequest(searchTerm){
  var params = {
    'q': searchTerm,
    'key': 'AIzaSyDJui1btSi8ZhIwBKT2uC894536gOhyjKw',
    'part': 'snippet'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    if (data.pageInfo.totalResults == 0) {
      alert("No videos found!");
    }
    showResults(data.items);
  });
}

function showResults(results) {
  $('#search-results ul').html('');
	$.each(results, function (index, value) {
		$('#search-results ul').append('<li><p>' + value.snippet.title + '</p><a target="_blank" href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.high.url + '"/></a></li>');
	});
}