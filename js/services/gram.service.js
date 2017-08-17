angular
.module('wdinstagram')
.factory('Gram', [
  '$resource',
  Gram
])

function Gram ($resource) {
  return $resource('http://localhost:3000/entries/:id', {}, {
    update: { method: 'PUT' }
  })
}
