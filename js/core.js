$(document).ready(function () {
	$("#phoneA input").keyup(handlePhoneAChange);
	$("#phoneB input").keyup(handlePhoneBChange);
	
	$("#save").click(handleSave);
	
});

var handleSave = function handleSave() {
	var bOk = true;
	if (bOk) bOk = checkPhoneA();
	if (bOk) bOk = checkPhoneB()
	else checkPhoneB();
	if (bOk) {
		saveOrder();
	}
}


function saveOrder(){
	$.ajax({
	        type:'POST',
	        url:'/voxi/send.php',
	        data:{ 'phonea':$("#phoneA input").val(),  'phoneb':$("#phoneB input").val()  },
	        response:'text',
	        success:function (data) {
	    	    console.log(data);
	        }
	    });
    
  };
  


/* CHANGE */

function handlePhoneAChange() {
	$("#phoneA label").text("Телефон 79992223311:");
	$("#phoneA label").css('color', 'black');
}

function handlePhoneBChange() {
	$("#phoneB label").text("Телефон 79992223322:");
	$("#phoneB label").css('color', 'black');
}


/* CHECK */

function checkPhoneA() {
	if ($("#phoneA input").val() == "") {
		$("#phoneA label").text("Укажите контактный номер 79992223355:");
		$("#phoneA label").css('color','red');
		return false;	
	}
	return true;
}


function checkPhoneB() {
	if ($("#phoneB input").val() == "") {
		$("#phoneB label").text("Укажите контактный номер 79992223344:");
		$("#phoneB label").css('color','red');
		return false;	
	}
	return true;
}
