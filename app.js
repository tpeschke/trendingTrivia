angular.module('triviaApp',['ui.router']).config( function ( $stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: 'app/questions/question.html'
    }).state({
        name: 'addnew',
        url: '/addnew',
        template: 'addNew'
    })

    $urlRouterProvider.otherwise('/')
})