angular
.module('wdinstagram')
.controller('GramIndexController', [
  '$state',
  'Gram',
  GramIndexControllerFunction
])
.controller('GramShowController', [
  '$stateParams',
  'Gram',
  GramShowControllerFunction
])
function GramIndexControllerFunction ($state, Gram) {
  this.grams = Gram.query()

  this.newGram = new Gram()

  this.create = function () {
    this.newGram.$save((newGram) => {
      $state.go('gramShow', {id: newGram.id})
    })
  }
}

function GramShowControllerFunction ($stateParams, Gram) {
  this.gram = Gram.get({ id: $stateParams.id })
}
