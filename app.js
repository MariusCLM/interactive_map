var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image a')
var links = map.querySelectorAll('.map__list a')

// Polyfill du forEach
if (NodeList.prototype.forEach === undefined) {
  NodeList.prototype.forEach = function (callback) {
    [].forEach.call(this, callback)
  }
}

paths.forEach(function (path) {
  path.addEventListener('mouseover', function (e) {
      var id = this.id.replace('region-','')
      /*map.querySelectorAll('.is-active').forEach(function (item){
        item.classList.remove('is-active')
      })*/
      document.querySelector('#list-' + id).classList.add('is-active')
      document.querySelector('#' + id).classList.add('is-active')
  })
  path.addEventListener('mouseout', function (e) {
      var id = this.id.replace('region-','')
      document.querySelector('#list-' + id).classList.remove('is-active')
      document.querySelector('#' + id).classList.remove('is-active')
  })
})
