
$(document).ready(function() {
/*___LANGUAGE___________________*/
		  $(".lang-flag").click(function(){
			$(".language-dropdown").toggleClass("open");
		  });
		  $("ul.lang-list li").click(function(){
			$("ul.lang-list li").removeClass("selected");
			$(this).addClass("selected");
			if($(this).hasClass('lang-en')){
			  $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-es").removeClass("lang-pt");
			  $("#lang_selected").html("<p>EN</p>")
			}else if($(this).hasClass('lang-pt')){
			  $(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-es").removeClass("lang-en");
			$("#lang_selected").html("<p>UA</p>")
			}else{
			  $(".language-dropdown").find(".lang-flag").addClass("lang-es").removeClass("lang-en").removeClass("lang-pt");
			  $("#lang_selected").html("<p>RU</p>")
			}
			$(".language-dropdown").removeClass("open");
		  });
/*_/___LANGUAGE_____________*/		  
		  
		  $("#open-menu").on("click", function() {
			var target = $(this).attr("data-target");
			if ($(target).hasClass("open")) {
				$(target).removeClass("open");
				$(target).addClass("closse");
				var div = document.getElementsByClassName('blockbody')[0];
				div.parentNode.removeChild(div);	
				var span1 = document.getElementsByClassName('first')[0];
				span1.style.top = 0;
				span1.style.transform = "rotate(0deg)";
				var span2 = document.getElementsByClassName('second')[0];
				span2.style.top = 0;
				span2.style.opacity = 1;
				var span3 = document.getElementsByClassName('third')[0];
				span3.style.top = 0;
				span3.style.transform = "rotate(0deg)";
			} else {
				$(target).addClass("open");
				$(target).removeClass("closse");
				var div = document.createElement('div');
				div.className = "blockbody";
				document.body.appendChild(div);
				var span1 = document.getElementsByClassName('first')[0];
				span1.style.top = '2px';
				span1.style.transform = "rotate(45deg)";
				var span2 = document.getElementsByClassName('second')[0];
				span2.style.top = 0;
				span2.style.opacity = 0;
				var span3 = document.getElementsByClassName('third')[0];
				span3.style.top = '-10px';
				span3.style.transform = "rotate(-45deg)";
			}
		});

		$(window).on("load resize", windowSize);

		function windowSize() {
			if ($(window).width() > "991") {
				var menu = $("#open_menu").attr("data-target");
				$(menu).removeClass("open");
			}
		}
		});

function body_field_2(event) {
	var div = document.getElementsByClassName('blockbody')[0];
	console.log();
		if ((event.target.getAttribute("data-menu")!=1)&&($(window).width() < "621")&&(typeof div!= "undefined")) {
				var target = document.getElementById('collapse-menu');
				target.classList.remove("open");
				target.classList.add("closse");
				var div = document.getElementsByClassName('blockbody')[0];
				div.parentNode.removeChild(div);	
				var span1 = document.getElementsByClassName('first')[0];
				span1.style.top = 0;
				span1.style.transform = "rotate(0deg)";
				var span2 = document.getElementsByClassName('second')[0];
				span2.style.top = 0;
				span2.style.opacity = 1;
				var span3 = document.getElementsByClassName('third')[0];
				span3.style.top = 0;
				span3.style.transform = "rotate(0deg)";
			}	
	/*___LANGUAGE___________________*/
	if ((event.target.className!="flag")&&(event.target.className!="lang lang-pt")&&(event.target.className!="lang lang-es")&&(event.target.className!="lang lang-en")&&(event.target.className!="lang-flag lang-es")&&(event.target.className!="lang-flag lang-pt")&&(event.target.className!="lang-flag lang-en")) {
				$(".language-dropdown").removeClass("open");
				
			}
	/*_/___LANGUAGE_____________________*/
}

var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
	if (lang=="en") {
		var jut = document.createElement('div');
		jut.className = "modalbg";
		jut.id = 'openModal';
		document.body.appendChild(jut);
		var juz = document.createElement('div');
		juz.className = "dialog";
		juz.innerHTML = '<a href="#close" title="Close" class="close">&#5741</a> <h2>ALL RIGHTS RESERVED</h2> <h3>Not really.</h3> <p>Most of the text, images was taken from outside sources.</ P>					<p> Copyright for all materials on this site are not protected in accordance with the current legislation of Ukraine "On Copyright and Related Rights". </ p>					<p> When copying material from this site, you are unlikely to incur liability under the laws of Ukraine on copyright protection. </ p>					<p> But we would still be pleased if using materials from our site, you specify a link to this site. </ p>		';
		document.getElementsByClassName("modalbg")[0].appendChild(juz);		
	
	///////////////////////////////////////
		var juq = document.createElement('div');
		juq.className = "modalbg";
		juq.id = 'openModalAbout';
		document.body.appendChild(juq);
		var juw = document.createElement('div');
		juw.className = "dialog";
		juw.innerHTML = '<a href="#close" title="Close" class="close">&#5741</a>';
		juw.innerHTML = juw.innerHTML + "<h2>About the site</h2>		<p> This site is designed for educational purposes. </ p>			<p> All materials were borrowed from the resource - kitchenmag.ru / </ p>					<p> But the design was chosen by the developers of this site. </ p>					<p> Therefore, our site does not just copy other people's recipes, but demonstrates, if not its own, recipes in a new light. </ p>					";
		document.getElementsByClassName("modalbg")[1].appendChild(juw);			
	}
	
var lang = document.getElementsByTagName("html")[0].getAttribute("lang");
	if (lang=="ua") {
		var jut = document.createElement('div');
		jut.className = "modalbg";
		jut.id = 'openModal';
		document.body.appendChild(jut);
		var juz = document.createElement('div');
		juz.className = "dialog";
		juz.innerHTML = '<a href="#close" title="Close" class="close">&#5741</a> <h2>ВСІ ПРАВА ЗАХИЩЕНІ</h2> <h3>Насправді ні.</h3> <p>Велика частина тексту, зображень була взята зі сторонніх джерел.</ P>					<p>Авторські права на всі матеріали, розміщені на цьому сайті незахищені відповідно до чинного законодавства України «Про авторське право і суміжні права».</ p>					<p>При копіюванні матеріалу з цього сайту, ви навряд чи понесете відповідальність, передбачену законодавством України про захист авторських прав.</ p>					<p>Але нам все одно буде приємно, якщо користуючись матеріалами з нашого сайту, ви вкажете посилання на цей сайт.</ p>		';
		document.getElementsByClassName("modalbg")[0].appendChild(juz);		
	
	///////////////////////////////////////
		var juq = document.createElement('div');
		juq.className = "modalbg";
		juq.id = 'openModalAbout';
		document.body.appendChild(juq);
		var juw = document.createElement('div');
		juw.className = "dialog";
		juw.innerHTML = '<a href="#close" title="Close" class="close">&#5741</a>';
		juw.innerHTML = juw.innerHTML + "<h2>Про сайт</h2>		<p>Цей сайт розроблений в навчальних цілях.</ p>			<p>Всі матеріали були взяті з ресурсу - kitchenmag.ru/</ p>					<p>Але дизайн був обраний розробниками цього сайту.</ p>					<p>Тому наш сайт не просто копіює чужі рецепти, а демонструє, нехай і не свої, рецепти в новому світлі.</ p>					";
		document.getElementsByClassName("modalbg")[1].appendChild(juw);			
	}
