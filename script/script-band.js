
// Ajouter la classe  "is-open" au menu déroulant et aux éléments du menu Burger:
// Avec Jquery

$('.header-toggle').click(function(e){
	e.preventDefault();
	$('.header-ul-link').toggleClass('is-open');
	$('.header-toggle').toggleClass('is-open');
	$('.header-toggle-icons').toggleClass('is-open');
	$('.header-toggle-icons:before').toggleClass('is-open');
	$('.header-toggle-icons:after').toggleClass('is-open');
});

