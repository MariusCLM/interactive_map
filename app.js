$( window ).on( "load", function() {
  console.log( "window loaded" );
  nodeNames = [];
  $("a").each(function(i) {
    //console.log( $( this ).attr("title") );
    nodeNames[ i ] = "<li><a id=\"list-" + $(this).attr("id") + "\" href=\"map2/departement.php?id=" + $(this).attr("id")+ "\">" + $(this).attr("xlink:title") + "</a></li>";
  });
  $( "<ul></ul>" ).append( nodeNames.join( "" ) ).appendTo($( "#map__list" ));

  console.log( "lines written" );

  var map = document.querySelector('#map');
  var paths = map.querySelectorAll('#map__image a');
  var links = map.querySelectorAll('#map__list a');

  // Polyfill du forEach
  if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function (callback) {
      [].forEach.call(this, callback);
    }
  }

  paths.forEach(function (path) {
    path.addEventListener('mouseover', function () {
      /*map.querySelectorAll('.is-active').forEach(function (item){
         item.classList.remove('is-active')
       })*/
      document.querySelector('#list-' + this.id).classList.add('is-active');
      document.querySelector('#' + this.id).classList.add('is-active');
    });
    path.addEventListener('mouseout', function () {
      document.querySelector('#list-' + this.id).classList.remove('is-active');
      document.querySelector('#' + this.id).classList.remove('is-active');
    });
  });

  links.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      var id = this.id.replace('list-','');
      document.querySelector('#' + id).classList.add('is-active');
      document.querySelector('#' + this.id).classList.add('is-active');
    });
    link.addEventListener('mouseout', function () {
      var id = this.id.replace('list-','');
      document.querySelector('#' + id).classList.remove('is-active');
      document.querySelector('#' + this.id).classList.remove('is-active');
    });
  });
});
