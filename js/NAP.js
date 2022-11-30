window.HELP_IMPROVE_VIDEOJS = false;

$(function () {
   $('.toggle-menu').click(function () {
      $('.exo-menu').toggleClass('display');

   });

});

const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('#play-button')

// playButton.addEventListener('click', (e) => {
//    if (video.paused) {
//       video.play()
//       e.target.textContent = '❚ ❚'
//    } else {
//       video.pause()
//       e.target.textContent = '►'
//    }
// })



playButton.addEventListener('click', function (e) {
   e.preventDefault();
   if (!video.paused) {
      video.pause();
   } else {
      video.play();
   }
   playButton.classList.toggle('fa-play-circle');
   playButton.classList.toggle('fa-pause-circle');
   return false;
}, false);







const videoPlayerba = document.querySelector('.video-player-2')
const videoba = videoPlayerba.querySelector('.video-2')
const playButtonba = videoPlayerba.querySelector('#play-button-2')

// playButtonba.addEventListener('click', (e) => {
//    if (videoba.paused) {
//       videoba.play()
//       e.target.textContent = '❚ ❚'
//    } else {
//       videoba.pause()
//       e.target.textContent = '►'
//    }
// })

playButtonba.addEventListener('click', function (e) {
   e.preventDefault();
   if (!videoba.paused) {
      videoba.pause();
   } else {
      videoba.play();
   }
   playButtonba.classList.toggle('fa-play-circle');
   playButtonba.classList.toggle('fa-pause-circle');
   return false;
}, false);