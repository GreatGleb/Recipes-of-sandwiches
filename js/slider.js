var counter = 0;
var sld_img = ["../img/recipes/caprese.jpg",
"../img/recipes/vetchin.jpg", "../img/recipes/avocado.jpg",
"../img/recipes/shpinat.jpg", "../img/recipes/burger.jpg",
"../img/recipes/american.jpg", "../img/recipes/chicken.jpg",
"../img/recipes/losos.jpg"];
var sld_nam = ['Сэндвич "Капрезе"',
"Сэндвич с ветчиной и сыром", "Сэндвич с курицей, беконом и авокадо",
"Сэндвич с яйцом и шпинатом", "Бургер по-мексикански",
"Клубный сэндвич", "Быстрый куриный пирог",
"Бутерброд с сыром и копчёным лососем"];
var sld_hef = ["caprese.html",
"vetchin.html", "avocado.html",
"shpinat.html", "burger.html",
"american.html", "chicken.html",
"losos.html"];

document.getElementById("id_rig_ar").addEventListener("click", function() {

		if(counter == 7) {
			counter = 0;
			document.getElementById("id_slider").setAttribute("src", sld_img[counter]);
			document.getElementById("slider_text").innerHTML = sld_nam[counter];
			document.getElementById("sld_href").setAttribute("href", sld_hef[counter]);
			document.getElementById("sld_href").style.cursor = "pointer";
			console.log("Counter "+counter);
		}
		else {
			counter++;
			document.getElementById("id_slider").setAttribute("src", sld_img[counter]);
			document.getElementById("slider_text").innerHTML = sld_nam[counter];
			document.getElementById("sld_href").setAttribute("href", sld_hef[counter]);
			document.getElementById("sld_href").style.cursor = "pointer";
			console.log("Counter "+counter);
		}
});

document.getElementById("id_lef_ar").addEventListener("click", function() {

		if((counter == 1)||(counter <= 0)) {
			counter = 7;

			document.getElementById("id_slider").setAttribute("src", sld_img[counter]);
			document.getElementById("slider_text").innerHTML = sld_nam[counter];
			document.getElementById("sld_href").setAttribute("href", sld_hef[counter]);
			document.getElementById("sld_href").style.cursor = "pointer";
			console.log("Counter "+counter);
		}
		else {
			counter--;
			document.getElementById("id_slider").setAttribute("src", sld_img[counter]);
			document.getElementById("slider_text").innerHTML = sld_nam[counter];
			document.getElementById("sld_href").setAttribute("href", sld_hef[counter]);
			document.getElementById("sld_href").style.cursor = "pointer";
			console.log("Counter "+counter);
		}
});

var timerId = setInterval(function() {
	console.log("Counter "+counter);
	if(counter!=8) {
		document.getElementById("id_slider").setAttribute("src", sld_img[counter]);
		document.getElementById("slider_text").innerHTML = sld_nam[counter];
		document.getElementById("sld_href").setAttribute("href", sld_hef[counter]);
		document.getElementById("sld_href").style.cursor = "pointer";
		counter++;
	}
	else {
		counter=0;
		document.getElementById("id_slider").setAttribute("src", sld_img[counter]);
		document.getElementById("slider_text").innerHTML = sld_nam[counter];
		document.getElementById("sld_href").setAttribute("href", sld_hef[counter]);
		document.getElementById("sld_href").style.cursor = "pointer";
		counter++;
	}
}, 6000);
