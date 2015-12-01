var Article = function(props) {
  this.title = props.title;
  this.category = props.category;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.body = props.body;
};

Article.prototype.toHTML = function() {
  var $art = $('article').first().clone();
  $art.find('.title').text(this.title);
  $art.find('.author').text(this.author);
  $art.find('.body').html(this.body);
  $art.find('.category').text(this.category);
  $art.find('.publishedOn').text(this.publishedOn);
  $art.find('.authorUrl').text(this.authorUrl);
  $('main').append($art);
};
