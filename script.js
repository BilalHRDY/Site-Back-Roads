let log = console.log;

const video_1 = document.querySelector('.videoYT-1');
const video_2 = document.querySelector('.videoYT-2');

function displayVideo(video){
	// video.style['position'] = 'relative';
	video.style['left'] = '0%';
	
	
};
window.addEventListener('scroll', () => {
	const scrolled =  window.scrollY;
	console.log(scrolled);

	if(scrolled > 200){
		displayVideo(video_1);
		if(scrolled > 280){
			displayVideo(video_2);
		}
	}

});

