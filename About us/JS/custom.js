/*-----------------------------------------------------------------------------------------------------
Custom JavaScript for TPO Online Portal

Version: 3.0
Author: Atul Sinha : atul_sinha89@yahoo.co.in

KINDLY MENTION UPDATES DONE HERE ALONG WITH YOUR NAME
------------------------------------------------

updates here

-------------------------------------------------
PLEASE CONTACT AUTHOR BEFORE MODIFYING THIS FILE.
------------------------------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------
function to enable disable page 3 , all sections of student details form.
-------------------------------------------------------------------------*/

function gradFlagChange(){
	var a = document.getElementById('gradFlag');
	var v = a.checked;
	if(v){
		//alert('this');
		$(".gradInput").prop("disabled",true);	
	}
	if(!v){
		//alert('this as well');
		$(".gradInput").prop("disabled",false);
	}
}

function diplomaFlagChange(){
	var a = document.getElementById('diplomaFlag');
	var v = a.checked;
	if(v){
		//alert('this');
		$(".diplomaInput").prop("disabled",true);	
	}
	if(!v){
		//alert('this as well');
		$(".diplomaInput").prop("disabled",false);
	}
}

function HSSchoolFlagChange(){
	var a = document.getElementById('HSSchoolFlag');
	var v = a.checked;
	if(v){
		//alert('this');
		$(".HSSchoolInput").prop("disabled",true);	
	}
	if(!v){
		//alert('this as well');
		$(".HSSchoolInput").prop("disabled",false);
	}
}

/*------------------------------------------------------------------------
a few basic functions for all sections of student details form.
-------------------------------------------------------------------------*/
//page 4 when Current address is same as Permanent address

function currentAddressFlagChange(){
	var a = document.getElementById('currentAddressFlag');
	var v = a.checked;
	
	if(v){
		//alert('this');
		$(".addCurrent").prop("disabled",true);	
	}
	if(!v){
		//alert('this as well');
		$(".addCurrent").prop("disabled",false);
	}
}

function handicapDetailFlagChange(){
	var a = document.getElementById('handicapDetailFlag');
	var v = a.value;
	
	if(v=="yes"){
		//alert('this');
		$("#handicapDescription").prop("disabled",false);
	}
	else{
		//alert('this as well');
		$("#handicapDescription").prop("disabled",true);
	}
}