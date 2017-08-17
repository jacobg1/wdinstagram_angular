angular
.module('wdinstagram')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  Router
])

function Router ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('gramIndex', {
      url: '/grams',
      controller: 'GramIndexController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/index.html'
    })
    .state('gramNew', {
      url: '/grams/new',
      controller: 'GramNewController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/new.html'
    })
    .state('gramEdit', {
      url: '/grams/:id/edit',
      controller: 'GramEditController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/edit.html'
    })
    .state('gramShow', {
      url: '/grams/:id',
      controller: 'GramShowController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/show.html'
    })
  $urlRouterProvider.otherwise('/grams')
}
