'use strict';

// Define the `phonecatApp` module
angular.module('cinemaTicketApp', [
	 // ...which depends on the `phoneList` module
     'ngRoute',
  'cinemaList',
  'cinemaDetail'
  ]);
