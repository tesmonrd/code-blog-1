$(document).ready(function() {
  $('#newArticle').on('submit', function(event){
    event.preventDefault();
    var newArticle = {
      title: $('#title').val(),
      category: $('#category').val(),
      author: $('#author').val(),
      authorUrl: $('#authorUrl').val(),
      publishedOn: $('#publishedOn').val(),
      body: $('body').val(),
    };
    console.log(newArticle);
  });
})
