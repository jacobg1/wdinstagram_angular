angular
.module('wdinstagram')
.controller('GramIndexController', [
  'Gram',
  GramIndexControllerFunction
])

function GramIndexControllerFunction (Gram) {
  this.grams = Gram.query()
}
