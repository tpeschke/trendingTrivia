// Sim 4: 48c
angular.module('triviaApp').component('questionsComp', {
    template: 'app/questions/question.html',
    controllerAs: 'questionCtrl',

    controller: function(mainSrvc, $scope){
        $scope.questions = mainSrvc.getQuestions()

        console.log($scope.questions)
    }
})