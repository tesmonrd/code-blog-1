var blog = {};
blog.articles = [];

blog.sortRawData = function() {
  this.rawData.sort(function(a, b) {
    if (a.publishedOn > b.publishedOn) {return -1;}
    if (a.publishedOn < b.publishedOn) {return 1;}
  });
};

blog.createArticles = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var temp = new Article (blog.rawData[i]);
    this.articles.push(temp);
    temp.toHTML();
  }
  $('#template').remove();
};

blog.truncateArticles = function() {
  $('article p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};

blog.revealArticles = function() {
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').show();
  });
};

//$('select[id="category"]').change(function() {
  //$('#author').find('option:first').attr('selected', 'selected'); // reset other menu
  //$('#main').find('article').show();
  //console.log($(this).val());
  //if ($(this).val() !== 'none') {
    //$('.postCategory:not(:contains(' + $(this).val() + '))').parent().hide();
  //}
//});
