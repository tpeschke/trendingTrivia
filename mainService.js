angular.module('triviaApp').service('mainSrvc', function($http) {
    this.getQuestions = function() {
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then()
    }
})