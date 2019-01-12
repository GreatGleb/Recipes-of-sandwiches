var doc = document;

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function isNumeric(inp) {
inp.value = inp.value.replace(/[^\d,.]*/g, '')
                         .replace(/([,.])[,.]+/g, '$1')
                         .replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, '$1');
						 

inp.value = inp.value.replace(/,/,'.');
}

function arrow_up() {
	
	if (document.getElementById('n1').value=="") {
	document.getElementById('n1').value = 1;
	}
	
	else if (document.getElementById('n1').value==0) {
	document.getElementById('n1').value = 1;
	} 
	
	else if (document.getElementById('n1').value==".") {
	document.getElementById('n1').value = 1;
	} 
	
	else {
	document.getElementById('n1').value++;
	}
}

function arrow_down() {
	
	if (document.getElementById('n1').value=="") {
	document.getElementById('n1').value = 0;
	}
	
	else if (document.getElementById('n1').value==0) {
	document.getElementById('n1').value = 0;
	} 
	
	else if (document.getElementById('n1').value==".") {
	document.getElementById('n1').value = 0;
	} 
	
	else {
	document.getElementById('n1').value = document.getElementById('n1').value - 1;
	}
}

function arrow_up_2() {
	
	if (document.getElementById('oa1').value=="") {
	document.getElementById('oa1').value = round((0.1), 1);
	}
	
	else if (document.getElementById('oa1').value==0 || (document.getElementById('oa1').value<0)) {
	document.getElementById('oa1').value = round((0.1), 1);
	} 
	
	else if (document.getElementById('oa1').value==".") {
	document.getElementById('oa1').value = round((0.1), 1);
	} 
	else if (document.getElementById('oa1').value<0.1) {
	document.getElementById('oa1').value = Number(0.1);
	} 
	
	else {
	document.getElementById('oa1').value = Number(document.getElementById('oa1').value)+0.1;
	document.getElementById('oa1').value = round((document.getElementById('oa1').value), 1);
	}
}

function arrow_down_2() {
	
	if (document.getElementById('oa1').value=="") {
	document.getElementById('oa1').value = round(0.1, 1);
	}
	
	else if ((document.getElementById('oa1').value<0.2) && (document.getElementById('oa1').value>0.1)) {
	document.getElementById('oa1').value = round(0.1, 1);
	} 
	
	else if ((document.getElementById('oa1').value==0.1) || (document.getElementById('oa1').value<0.1)) {
	document.getElementById('oa1').value = Number(0.05);
	} 
	
	else if (document.getElementById('oa1').value==".") {
	document.getElementById('oa1').value = round(0.1, 1);
	} 
	
	else {
	document.getElementById('oa1').value = round((document.getElementById('oa1').value - 0.1), 1);
	}
}

function arrow_up_3() {
	
	if (document.getElementById('pa1').value=="") {
	document.getElementById('pa1').value = round((5), 1);
	}
	
	else if (document.getElementById('pa1').value==0 || (document.getElementById('pa1').value<0)) {
	document.getElementById('pa1').value = round((5), 1);
	} 
	
	else if (document.getElementById('pa1').value==".") {
	document.getElementById('pa1').value = round((5), 1);
	} 
	
	else {
	document.getElementById('pa1').value = Number(document.getElementById('pa1').value)+5;
	document.getElementById('pa1').value = round((document.getElementById('pa1').value), 1);
	}
}

function arrow_down_3() {
	
	if (document.getElementById('pa1').value=="") {
	document.getElementById('pa1').value = round(0, 1);
	}
	
	else if ((document.getElementById('pa1').value==0) || (document.getElementById('pa1').value<0)) {
	document.getElementById('pa1').value = round(0, 1);
	} 
	
	else if (document.getElementById('pa1').value==".") {
	document.getElementById('pa1').value = round(0, 1);
	} 
	
	else {
	document.getElementById('pa1').value = round((document.getElementById('pa1').value - 5), 1);
	}
}


/* BREAD ============================*/

if ( (document.getElementById('oa1').value == "" ) && (document.getElementById('pa1').value == "" ) ) {
	arr_bread = ["0.5", "90"];
}
else if  ( (document.getElementById('oa1').value == "" ) 
			&& (document.getElementById('pa1').value != "" ) && (document.getElementById('pa1').value != "." ) ) {
				
			arr_bread[0]="0.5";
			arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if  ( (document.getElementById('oa1').value != "" ) && (document.getElementById('oa1').value != "." )
			&& (document.getElementById('pa1').value == "" ) ) {
				
			arr_bread[0]=Number(document.getElementById('oa1').value);
			arr_bread[1]="90";
}
else if  ( (document.getElementById('oa1').value != "" ) && (document.getElementById('oa1').value != "." )
			&& (document.getElementById('pa1').value != "" ) && (document.getElementById('pa1').value != "." ) ) {
				
			arr_bread[0]=Number(document.getElementById('oa1').value);
			arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if ((document.getElementById('oa1').value == ".") && (document.getElementById('pa1').value == ".")) {
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}
else if ((document.getElementById('oa1').value == ".") 
	&& (document.getElementById('pa1').value != ".") && (document.getElementById('pa1').value != "") ) {
	arr_bread[0]="0.5";
	arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if ( (document.getElementById('oa1').value != ".") && (document.getElementById('oa1').value != "" )
	&& (document.getElementById('pa1').value==".")) {
		
	arr_bread[0]=Number(document.getElementById('oa1').value);
	arr_bread[1]="90";
}
else if ( (document.getElementById('oa1').value == ".") && (document.getElementById('pa1').value == "" )  ) {
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}
else if ( (document.getElementById('oa1').value == "") && (document.getElementById('pa1').value == ".") ) {		
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}

if ( (document.getElementById('n1').value == "." ) ) {
	document.getElementById('n1').value = "";
}

doc.getElementById('m_bread').innerHTML = arr_bread[0];
/* /BREAD ============================*/

/* OIL ============================*/
var arr_oil = new Array(2); 

if ( document.getElementById('oa2').value == "" ) {
	arr_oil = ["1", "16"];
}
else if  ( document.getElementById('oa2').value != "" ) {
			arr_oil[0]=Number(document.getElementById('oa2').value);
			arr_oil[1]=Number(document.getElementById('pa2').value);
}

doc.getElementById('oil').innerHTML = arr_oil[0];
/* /OIL ============================*/

/* CHEESE ============================*/
var arr_cheese = new Array(2); 
if ( document.getElementById('oa3').value == "" ) {
	arr_cheese = ["1", "10"];
}
else if  ( document.getElementById('oa3').value != "" ) {
			arr_cheese[0]=Number(document.getElementById('oa3').value);
			arr_cheese[1]=Number(document.getElementById('pa3').value);
}
doc.getElementById('cheese').innerHTML = arr_cheese[0];
/* /CHEESE ============================*/

/* TOMATOES ============================*/
var arr_tomatoes = new Array(2); 

if ( document.getElementById('oa4').value == "" ) {
	arr_tomatoes = ["1", "71.5"];
}
else if  ( document.getElementById('oa4').value != "" ) {
			arr_tomatoes[0]=Number(document.getElementById('oa4').value);
			arr_tomatoes[1]=Number(document.getElementById('pa4').value);
}

doc.getElementById('tomatoes').innerHTML = arr_tomatoes[0];
/* /TOMATOES ============================*/

/* LOSOS ============================*/
var arr_losos = new Array(2); 

if ( document.getElementById('oa5').value == "" ) {
	arr_losos = ["0.1", "50"];
}
else if  ( document.getElementById('oa5').value != "" ) {
			arr_losos[0]=Number(document.getElementById('oa5').value);
			arr_losos[1]=Number(document.getElementById('pa5').value);
}

doc.getElementById('losos').innerHTML = arr_losos[0];
/* /LOSOS ============================*/

/* ONION ============================*/
var arr_onion = new Array(2); 

if ( document.getElementById('oa6').value == "" ) {
	arr_onion = ["1", "23"];
}
else if  ( document.getElementById('oa6').value != "" ) {
			arr_onion[0]=Number(document.getElementById('oa6').value);
			arr_onion[1]=Number(document.getElementById('pa6').value);
}

doc.getElementById('onion').innerHTML = arr_onion[0];
/* /ONION ============================*/


function sum() {

/* BREAD ============================*/
if ( (document.getElementById('oa1').value == "" ) && (document.getElementById('pa1').value == "" ) ) {
	arr_bread = ["0.5", "90"];
}
else if  ( (document.getElementById('oa1').value == "" ) 
			&& (document.getElementById('pa1').value != "" ) && (document.getElementById('pa1').value != "." ) ) {
				
			arr_bread[0]="0.5";
			arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if  ( (document.getElementById('oa1').value != "" ) && (document.getElementById('oa1').value != "." )
			&& (document.getElementById('pa1').value == "" ) ) {
				
			arr_bread[0]=Number(document.getElementById('oa1').value);
			arr_bread[1]="90";
}
else if  ( (document.getElementById('oa1').value != "" ) && (document.getElementById('oa1').value != "." )
			&& (document.getElementById('pa1').value != "" ) && (document.getElementById('pa1').value != "." ) ) {
				
			arr_bread[0]=Number(document.getElementById('oa1').value);
			arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if ((document.getElementById('oa1').value == ".") && (document.getElementById('pa1').value == ".")) {
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}
else if ((document.getElementById('oa1').value == ".") 
	&& (document.getElementById('pa1').value != ".") && (document.getElementById('pa1').value != "") ) {
	arr_bread[0]="0.5";
	arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if ( (document.getElementById('oa1').value != ".") && (document.getElementById('oa1').value != "" )
	&& (document.getElementById('pa1').value==".")) {
		
	arr_bread[0]=Number(document.getElementById('oa1').value);
	arr_bread[1]="90";
}
else if ( (document.getElementById('oa1').value == ".") && (document.getElementById('pa1').value == "" )  ) {
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}
else if ( (document.getElementById('oa1').value == "") && (document.getElementById('pa1').value == ".") ) {		
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}

if ( (document.getElementById('n1').value == "." ) ) {
	document.getElementById('n1').value = "";
}

doc.getElementById('m_bread').innerHTML = arr_bread[0];
/* /BREAD ============================*/

/* OIL ============================*/
if ( document.getElementById('oa2').value == "" ) {
	arr_oil = ["1", "16"];
}
else if  ( document.getElementById('oa2').value != "" ) {
			arr_oil[0]=Number(document.getElementById('oa2').value);
			arr_oil[1]=Number(document.getElementById('pa2').value);
}
doc.getElementById('oil').innerHTML = arr_oil[0];
/* /OIL ============================*/

/* CHEESE ============================*/
if ( document.getElementById('oa3').value == "" ) {
	arr_cheese = ["1", "10"];
}
else if  ( document.getElementById('oa3').value != "" ) {
			arr_cheese[0]=Number(document.getElementById('oa3').value);
			arr_cheese[1]=Number(document.getElementById('pa3').value);
}
doc.getElementById('cheese').innerHTML = arr_cheese[0];
/* /CHEESE ============================*/

/* TOMATOES ============================*/
if ( document.getElementById('oa4').value == "" ) {
	arr_tomatoes = ["1", "71.5"];
}
else if  ( document.getElementById('oa4').value != "" ) {
			arr_tomatoes[0]=Number(document.getElementById('oa4').value);
			arr_tomatoes[1]=Number(document.getElementById('pa4').value);
}
doc.getElementById('tomatoes').innerHTML = arr_tomatoes[0];
/* /TOMATOES ============================*/

/* LOSOS ============================*/
if ( document.getElementById('oa5').value == "" ) {
	arr_losos = ["0.1", "50"];
}
else if  ( document.getElementById('oa5').value != "" ) {
			arr_losos[0]=Number(document.getElementById('oa5').value);
			arr_losos[1]=Number(document.getElementById('pa5').value);
}
doc.getElementById('losos').innerHTML = arr_losos[0];
/* /LOSOS ============================*/

/* ONION ============================*/
if ( document.getElementById('oa6').value == "" ) {
	arr_onion = ["1", "23"];
}
else if  ( document.getElementById('oa6').value != "" ) {
			arr_onion[0]=Number(document.getElementById('oa6').value);
			arr_onion[1]=Number(document.getElementById('pa6').value);
}
doc.getElementById('onion').innerHTML = arr_onion[0];
/* /ONION ============================*/

var arr = [];
var inputs = $(".butter");
	for(var i = 0; i < inputs.length; i++) {
		arr.push($(inputs[i]).val());
	}
console.log("Цены: "); console.log(arr);
console.log("Настройки для хлеба: "); console.log(arr_bread);
console.log("Настройки для масла: "); console.log(arr_oil);
console.log("Настройки для сыра: "); console.log(arr_cheese);
console.log("Настройки для помидор: "); console.log(arr_tomatoes);
console.log("Настройки для лосося: "); console.log(arr_losos);
console.log("Настройки для лука: "); console.log(arr_onion);

var values = new Array(6); /*['5.55555555555555555', '62.5', '100', '14', '2', '44'];  */

var massa_bread_gramm=1000*arr_bread[0];
values[0]=massa_bread_gramm/arr_bread[1];

var massa_oil_ml=1000*arr_oil[0];
values[1]=massa_oil_ml/arr_oil[1];

var massa_cheese_gramm=1000*arr_cheese[0];
values[2]=massa_cheese_gramm/arr_cheese[1];

var massa_tomatoes_gramm=1000*arr_tomatoes[0];
values[3]=massa_tomatoes_gramm/arr_tomatoes[1];

var massa_losos_gramm=1000*arr_losos[0];
values[4]=massa_losos_gramm/arr_losos[1];

var massa_onion_gramm=1000*arr_onion[0];
values[5]=massa_onion_gramm/arr_onion[1];

	for (var ir = 0; ir < values.length; ir++) {
	values[ir] = Number(values[ir]);  }
console.log("Делители: "); console.log(values);

var result = [];
	for (var iz = 0; iz < values.length; iz++) {
	result[iz] = arr[iz]/values[iz];	}
	
var Sum_result = 0;
	for(var i = 0; i < result.length; i++){
    Sum_result += result[i];    }
	Sum_result = round(Sum_result,1);
console.log("Стоимость: ");console.log(Sum_result);
	
doc.getElementById('color_for_form').style.paddingBottom = "0px";
document.getElementsByClassName('additionalClass')[0].style.display = "block";
var additional = document.getElementsByClassName('additionalClass')[0].firstChild;
	additional.innerHTML="Итоговая стоимость: "+Sum_result;
}

function setting_bread() {
	doc.getElementById('n1').style.display = "none";
	doc.getElementById('na1').style.display = "none";
	doc.getElementById('nb1').style.display = "none";
	
	doc.getElementById('arrow_box_2').style.display = "none";
	doc.getElementById('arrow_box').style.display = "none";
	
	doc.getElementById('o1').style.display = "block";	
	doc.getElementById('p1').style.display = "block";
	
	doc.getElementById('button_setting_bread').style.display = "none";

	doc.getElementById('arrow_left_bread').style.display = "inline-block";
	doc.getElementById('sppace_bread').style.marginLeft = "280px";
	doc.getElementById('pRices').style.paddingTop = "30px";	
}

function setting_oil() {
	doc.getElementById('n2').style.display = "none";
	doc.getElementById('na2').style.display = "none";
	doc.getElementById('nb2').style.display = "none";
	
	doc.getElementById('o2').style.display = "block";	
	doc.getElementById('p2').style.display = "block";
	
	doc.getElementById('button_setting_oil').style.display = "none";

	doc.getElementById('arrow_left_oil').style.display = "inline-block";
	doc.getElementById('sppace_oil').style.marginLeft = "280px";
	doc.getElementsByClassName('group')[0].style.marginBottom = "15px";
}

function setting_cheese() {
	doc.getElementById('n3').style.display = "none";
	doc.getElementById('na3').style.display = "none";
	doc.getElementById('nb3').style.display = "none";
	
	doc.getElementById('o3').style.display = "block";	
	doc.getElementById('p3').style.display = "block";
	
	doc.getElementById('button_setting_cheese').style.display = "none";

	doc.getElementById('arrow_left_cheese').style.display = "inline-block";
	doc.getElementById('sppace_cheese').style.marginLeft = "280px";
	doc.getElementsByClassName('group')[1].style.marginBottom = "15px";
}

function setting_tomatoes() {
	doc.getElementById('n4').style.display = "none";
	doc.getElementById('na4').style.display = "none";
	doc.getElementById('nb4').style.display = "none";
	
	doc.getElementById('o4').style.display = "block";	
	doc.getElementById('p4').style.display = "block";
	
	doc.getElementById('button_setting_tomatoes').style.display = "none";

	doc.getElementById('arrow_left_tomatoes').style.display = "inline-block";
	doc.getElementById('sppace_tomatoes').style.marginLeft = "280px";
	doc.getElementsByClassName('group')[2].style.marginBottom = "15px";
}

function setting_losos() {
	doc.getElementById('n5').style.display = "none";
	doc.getElementById('na5').style.display = "none";
	doc.getElementById('nb5').style.display = "none";
	
	doc.getElementById('o5').style.display = "block";	
	doc.getElementById('p5').style.display = "block";
	
	doc.getElementById('button_setting_losos').style.display = "none";

	doc.getElementById('arrow_left_losos').style.display = "inline-block";
	doc.getElementById('sppace_losos').style.marginLeft = "280px";
	doc.getElementsByClassName('group')[3].style.marginBottom = "15px";
}

function setting_onion() {
	doc.getElementById('n6').style.display = "none";
	doc.getElementById('na6').style.display = "none";
	doc.getElementById('nb6').style.display = "none";
	
	doc.getElementById('o6').style.display = "block";	
	doc.getElementById('p6').style.display = "block";
	
	doc.getElementById('button_setting_onion').style.display = "none";

	doc.getElementById('arrow_left_onion').style.display = "inline-block";
	doc.getElementById('sppace_onion').style.marginLeft = "280px";
	doc.getElementsByClassName('group')[4].style.marginBottom = "15px";
}

function back_bread() {
	doc.getElementById('arrow_left_bread').style.display = "none";
	doc.getElementById('o1').style.display = "none";	
	doc.getElementById('p1').style.display = "none";
	
	doc.getElementById('arrow_box_2').style.display = "block";
	doc.getElementById('arrow_box').style.display = "block";
	
	doc.getElementById('n1').style.display = "block";
	doc.getElementById('na1').style.display = "block";
	doc.getElementById('nb1').style.display = "block";
	doc.getElementById('button_setting_bread').style.display = "inline-block";
	doc.getElementById('sppace_bread').style.marginLeft = "285px";
	doc.getElementById('pRices').style.paddingTop = "20px";
/* BREAD ============================*/

if ( (document.getElementById('oa1').value == "" ) && (document.getElementById('pa1').value == "" ) ) {
	arr_bread = ["0.5", "90"];
}
else if  ( (document.getElementById('oa1').value == "" ) 
			&& (document.getElementById('pa1').value != "" ) && (document.getElementById('pa1').value != "." ) ) {
				
			arr_bread[0]="0.5";
			arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if  ( (document.getElementById('oa1').value != "" ) && (document.getElementById('oa1').value != "." )
			&& (document.getElementById('pa1').value == "" ) ) {
				
			arr_bread[0]=Number(document.getElementById('oa1').value);
			arr_bread[1]="90";
}
else if  ( (document.getElementById('oa1').value != "" ) && (document.getElementById('oa1').value != "." )
			&& (document.getElementById('pa1').value != "" ) && (document.getElementById('pa1').value != "." ) 
			&& (document.getElementById('oa1').value > 0 ) && (document.getElementById('pa1').value > 0 ) ) {
				
			arr_bread[0]=Number(document.getElementById('oa1').value);
			arr_bread[1]=Number(document.getElementById('pa1').value);
			console.log("hljhvv");
}
else if ((document.getElementById('oa1').value == ".") && (document.getElementById('pa1').value == ".")) {
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}
else if ((document.getElementById('oa1').value == ".") 
	&& (document.getElementById('pa1').value != ".") && (document.getElementById('pa1').value != "") ) {
	arr_bread[0]="0.5";
	arr_bread[1]=Number(document.getElementById('pa1').value);
}
else if ( (document.getElementById('oa1').value != ".") && (document.getElementById('oa1').value != "" )
	&& (document.getElementById('pa1').value==".")) {
		
	arr_bread[0]=Number(document.getElementById('oa1').value);
	arr_bread[1]="90";
}
else if ( (document.getElementById('oa1').value == ".") && (document.getElementById('pa1').value == "" )  ) {
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}
else if ( (document.getElementById('oa1').value == "") && (document.getElementById('pa1').value == ".") ) {		
	arr_bread[0]="0.5";
	arr_bread[1]="90";
}
else if ( (document.getElementById('oa1').value <= 0 ) && (document.getElementById('pa1').value <= 0) ) {		
	arr_bread[0]="0.5";
	arr_bread[1]="90";
	console.log("jhgggg");
}
else if ( (document.getElementById('oa1').value <= 0 ) && (document.getElementById('pa1').value > 0) ) {		
	arr_bread[0]="0.5";
	arr_bread[1]=Number(document.getElementById('pa1').value);
	console.log("YYYhgggg");
}
else if ( (document.getElementById('oa1').value > 0 ) && (document.getElementById('pa1').value <= 0) ) {		
	arr_bread[0]=Number(document.getElementById('oa1').value);
	arr_bread[1]="90";
	console.log("YTYhgggg");
}

if ( (document.getElementById('n1').value == "." ) ) {
	document.getElementById('n1').value = "";
}

doc.getElementById('m_bread').innerHTML = arr_bread[0];
/* /BREAD ============================*/
}
function back_oil() {
	doc.getElementById('arrow_left_oil').style.display = "none";
	doc.getElementById('o2').style.display = "none";	
	doc.getElementById('p2').style.display = "none";
	
	doc.getElementById('n2').style.display = "block";
	doc.getElementById('na2').style.display = "block";
	doc.getElementById('nb2').style.display = "block";
	doc.getElementById('button_setting_oil').style.display = "inline-block";
	doc.getElementById('sppace_oil').style.marginLeft = "285px";
	doc.getElementsByClassName('group')[0].style.marginBottom = "0";

/* OIL ============================*/
if ( document.getElementById('oa2').value == "" ) {
	arr_oil = ["1", "16"];
}
else if  ( document.getElementById('oa2').value != "" ) {
			arr_oil[0]=Number(document.getElementById('oa2').value);
			arr_oil[1]=Number(document.getElementById('pa2').value);
}
doc.getElementById('oil').innerHTML = arr_oil[0];
/* /OIL ============================*/
}
function back_cheese() {
	doc.getElementById('arrow_left_cheese').style.display = "none";
	doc.getElementById('o3').style.display = "none";	
	doc.getElementById('p3').style.display = "none";
	
	doc.getElementById('n3').style.display = "block";
	doc.getElementById('na3').style.display = "block";
	doc.getElementById('nb3').style.display = "block";
	doc.getElementById('button_setting_cheese').style.display = "inline-block";
	doc.getElementById('sppace_cheese').style.marginLeft = "285px";
	doc.getElementsByClassName('group')[1].style.marginBottom = "0";

/* CHEESE ============================*/
if ( document.getElementById('oa3').value == "" ) {
	arr_cheese = ["1", "10"];
}
else if  ( document.getElementById('oa3').value != "" ) {
			arr_cheese[0]=Number(document.getElementById('oa3').value);
			arr_cheese[1]=Number(document.getElementById('pa3').value);
}
doc.getElementById('cheese').innerHTML = arr_cheese[0];
/* /CHEESE ============================*/
}
function back_tomatoes() {
	doc.getElementById('arrow_left_tomatoes').style.display = "none";
	doc.getElementById('o4').style.display = "none";	
	doc.getElementById('p4').style.display = "none";
	
	doc.getElementById('n4').style.display = "block";
	doc.getElementById('na4').style.display = "block";
	doc.getElementById('nb4').style.display = "block";
	doc.getElementById('button_setting_tomatoes').style.display = "inline-block";
	doc.getElementById('sppace_tomatoes').style.marginLeft = "285px";
	doc.getElementsByClassName('group')[2].style.marginBottom = "0";

/* TOMATOES ============================*/
if ( document.getElementById('oa4').value == "" ) {
	arr_tomatoes = ["1", "71.5"];
}
else if  ( document.getElementById('oa4').value != "" ) {
			arr_tomatoes[0]=Number(document.getElementById('oa4').value);
			arr_tomatoes[1]=Number(document.getElementById('pa4').value);
}
doc.getElementById('tomatoes').innerHTML = arr_tomatoes[0];
/* /TOMATOES ============================*/
}

function back_losos() {
	doc.getElementById('arrow_left_losos').style.display = "none";
	doc.getElementById('o5').style.display = "none";	
	doc.getElementById('p5').style.display = "none";
	
	doc.getElementById('n5').style.display = "block";
	doc.getElementById('na5').style.display = "block";
	doc.getElementById('nb5').style.display = "block";
	doc.getElementById('button_setting_losos').style.display = "inline-block";
	doc.getElementById('sppace_losos').style.marginLeft = "285px";
	doc.getElementsByClassName('group')[3].style.marginBottom = "0";

/* LOSOS ============================*/
if ( document.getElementById('oa5').value == "" ) {
	arr_losos = ["0.1", "50"];
}
else if  ( document.getElementById('oa5').value != "" ) {
			arr_losos[0]=Number(document.getElementById('oa5').value);
			arr_losos[1]=Number(document.getElementById('pa5').value);
}
doc.getElementById('losos').innerHTML = arr_losos[0];
/* /LOSOS ============================*/
}
function back_onion() {
	doc.getElementById('arrow_left_onion').style.display = "none";
	doc.getElementById('o6').style.display = "none";	
	doc.getElementById('p6').style.display = "none";
	
	doc.getElementById('n6').style.display = "block";
	doc.getElementById('na6').style.display = "block";
	doc.getElementById('nb6').style.display = "block";
	doc.getElementById('button_setting_onion').style.display = "inline-block";
	doc.getElementById('sppace_onion').style.marginLeft = "285px";
	doc.getElementsByClassName('group')[4].style.marginBottom = "0";

/* ONION ============================*/
if ( document.getElementById('oa6').value == "" ) {
	arr_onion = ["1", "23"];
}
else if  ( document.getElementById('oa6').value != "" ) {
			arr_onion[0]=Number(document.getElementById('oa6').value);
			arr_onion[1]=Number(document.getElementById('pa6').value);
}
doc.getElementById('onion').innerHTML = arr_onion[0];
/* /ONION ============================*/
}


function value_bread1() {
	doc.getElementById('arrow_box_2-2').style.display = "block";
	doc.getElementById('arrow_box-2').style.display = "block";
	
	doc.getElementById('oa1').setAttribute('value', '0.5');
}
	
function value_bread2() {
	
		doc.getElementById('arrow_box_2-3').style.display = "block";
		doc.getElementById('arrow_box-3').style.display = "block";
	
	doc.getElementById('pa1').setAttribute('value', '90');		
}

document.body.addEventListener ("mousedown", body_field, false);
function body_field() {	
	if (doc.getElementById('pa1').value == "") {
		doc.getElementById('arrow_box_2-3').style.display = "none";
		doc.getElementById('arrow_box-3').style.display = "none";
	}
}

var Stringobj_id, Stringobj_class;
function body_field_2(event) {
	if ((doc.getElementById('oa1').value == "")&&(event.target.id!="arrow_box-2")&&(event.target.id!="arrow_box_2-2")&&(event.target.id!="oa1")) {
		doc.getElementById('arrow_box_2-2').style.display = "none";
		doc.getElementById('arrow_box-2').style.display = "none";
	}
	else if (event.target.id=="oa1") {
		doc.getElementById('arrow_box_2-2').style.display = "block";
		doc.getElementById('arrow_box-2').style.display = "block";
	}
	/*console.log(event.target.id);*/
	var Click_Objectid = event.target.id;
	Stringobj_id = String(Click_Objectid);
	
	var Click_Objectcls = event.target.className;
	Stringobj_class = String(Click_Objectcls);
}

document.getElementById('oa1').addEventListener ("blur", field_1_focus, false);
function field_1_focus() {
	if ((doc.getElementById('oa1').value == "")&&(getComputedStyle(doc.getElementById('oc1')).getPropertyValue('color')=="rgb(106, 107, 136)")) {
		doc.getElementById('arrow_box_2-2').style.display = "none";
		doc.getElementById('arrow_box-2').style.display = "none";
	}
}

document.getElementById('pa1').addEventListener ("blur", field_2_focus, false);
function field_2_focus() {	
	if (doc.getElementById('pa1').value == "") {
		doc.getElementById('arrow_box_2-3').style.display = "none";
		doc.getElementById('arrow_box-3').style.display = "none";
	}
}
document.getElementById('oa1').addEventListener ("focus", field_1_onfocus, false);
function field_1_onfocus() {	
	if (doc.getElementById('oa1').value == "") {
		doc.getElementById('arrow_box_2-2').style.display = "block";
		doc.getElementById('arrow_box-2').style.display = "block";
	}
}
document.getElementById('pa1').addEventListener ("focus", field_2_onfocus, false);
function field_2_onfocus() {	
	if (doc.getElementById('pa1').value == "") {
		doc.getElementById('arrow_box_2-3').style.display = "block";
		doc.getElementById('arrow_box-3').style.display = "block";
	}
}

function value_oil1() {
	doc.getElementById('oa2').setAttribute('value', '1');
}
	
function value_oil2() {
	doc.getElementById('pa2').setAttribute('value', '16');
}

function value_cheese1() {
	doc.getElementById('oa3').setAttribute('value', '1');
}
	
function value_cheese2() {
	doc.getElementById('pa3').setAttribute('value', '10');
}

function value_tomatoes1() {
	doc.getElementById('oa4').setAttribute('value', '1');
}
	
function value_tomatoes2() {
	doc.getElementById('pa4').setAttribute('value', '71.5');
}

function value_losos1() {
	doc.getElementById('oa5').setAttribute('value', '0.1');
}
	
function value_losos2() {
	doc.getElementById('pa5').setAttribute('value', '50');
}

function value_onion1() {
	doc.getElementById('oa6').setAttribute('value', '1');
}
	
function value_onion2() {
	doc.getElementById('pa6').setAttribute('value', '23');
}