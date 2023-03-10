$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive : {
      0: {
        dots: false,
        margin: 32,
        loop: true,
        items: 2, 
        stagePadding: 90,
      },

      601: {
        items: 2,
      },

      1001: {
        items: 3,
      },
    }
  });
});

// Video

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture')
const videoWrapper = document.querySelector('.video')
const video = document.querySelector('#video-file')

videoWrapper.addEventListener('click', function(){
  
  if(video.paused) {
    videoPicture.classList.add('hidden');
    videoWrapper.classList.remove('video-overlay');
    videoBtn.classList.add('none');
    video.play()
  }else{
    videoWrapper.classList.add('video-overlay');
    videoBtn.classList.remove('none');
    video.pause();
  }
    
})