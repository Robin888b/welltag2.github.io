$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

function playSound(sound) {
  var song1 = document.getElementById(sound);
  song1.volume = .25; // setting the volume to 25% because the sound is loud
  if (song1.paused) {  // if song1 is paused
    song1.play();
  } else {
    song1.pause();
  }
}