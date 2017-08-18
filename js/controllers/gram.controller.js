/* global angular */
(function () {
  angular
.module('wdinstagram')
.controller('GramIndexController', [
  '$state',
  'Gram',
  GramIndexControllerFunction
])
.controller('GramShowController', [
  '$window',
  '$state',
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

  function GramShowControllerFunction ($window, $state, $stateParams, Gram) {
    this.gram = Gram.get({ id: $stateParams.id })
  // put edit here too
    this.edit = function () {
      this.gram.$update({ id: $state.params.id }, () => {
        $window.location.reload()
      })
    }
    this.delete = function () {
      this.gram.$delete({ id: $state.params.id }, (gram) => {
        $state.go('gramIndex')
      })
    }
  }
})()
