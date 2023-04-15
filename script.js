let isPaused = false;
const marquee1 = document.getElementById("marquee1");
const marquee2 = document.getElementById("marquee2");

function toggleAnimation() {
  isPaused = !isPaused;
  if (isPaused) {
    marquee1.stop();
    marquee2.stop();
  } else {
    marquee1.start();
    marquee2.start();
  }
}
var audio = document.getElementById("myAudio");

		function toggleAudio() {
			if (audio.paused) {
				audio.play();
			} else {
				audio.pause();
			}
		}