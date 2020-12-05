let log = console.log;

// Déplacement des vidéos youtube:

const video_1 = document.querySelector('.videoYT-1');
const video_2 = document.querySelector('.videoYT-2');

function displayVideo(video){
	video.style['left'] = '0';
};

window.addEventListener('scroll', () => {
	const scrolled =  window.scrollY;
	if(scrolled > 200){
		displayVideo(video_1);
		if(scrolled > 280){
			displayVideo(video_2);
		}
	}
});

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













