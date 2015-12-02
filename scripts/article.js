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
  $art.find('.title').html(this.title);
  $art.find('.author').html(this.author);
  $art.find('.body').html(this.body);
  $art.find('.category').html(this.category);
  $art.find('.publishedOn').html(this.publishedOn);
  $art.find('.authorUrl').html(this.authorUrl);
  $('main').append($art);
};
