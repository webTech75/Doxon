'use strict';
$(document).ready(function() {

	var credentials = {
	 "Credentials" : {
	    "user": "PaulCosta",
	    "password": "Unix1234"
	  }
	};
	 $.ajax({ 
	    type: 'GET', 
	    url: '../json/getlastbills.json',  
	    dataType: 'json',
	    success: function (data) { 
	    	console.log(data);
	    	//var response = JSON.parse(data);
	    	//console.log(response);
	        //$('#billinfo').html(data.bills[0].billAmount); 
	    }
	});
});