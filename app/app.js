

var app = angular.module('mailApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/login/_login.html',
        controller: 'LoginController'
    }).state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/_profile.html',
        controller: 'ProfileController'
    }).state('mails', {
        url: '/mails?page',
        templateUrl: 'app/mails/_mails.html',
        controller: 'MailsController'
    });

    $urlRouterProvider.otherwise('/login');
});

app.controller('LoginController', function ($scope) {
    $scope.message = 'Hi from the LoginController scope!';
});

app.controller('ProfileController', function ($scope) {
    $scope.message = 'Hi from the ProfileController scope!';
});

app.controller('MailsController', function ($scope, $stateParams) {
    $scope.page = $stateParams.page ? +$stateParams.page : 1;
    $scope.message = 'Hi from the MailsController scope!';
});