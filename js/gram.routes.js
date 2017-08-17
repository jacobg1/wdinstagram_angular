angular
.module('wdinstagram')
.config([
  '$stateProvider',
  Router
])

function Router ($stateProvider) {
  $stateProvider
    .state('gramIndex', {
      url:'/grams'
    })
}
