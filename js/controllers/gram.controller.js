angular
.module('wdinstagram')
.controller('GramIndexController', [
  'Gram',
  GramIndexControllerFunction
])
.controller('GramShowController', [
  '$stateParams',
  'Gram',
  GramShowControllerFunction
])
function GramIndexControllerFunction (Gram) {
  this.grams = Gram.query()
}
function GramShowControllerFunction ($stateParams, Gram) {
  this.gram = Gram.get({ id: $stateParams.id })
}
