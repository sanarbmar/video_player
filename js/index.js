const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log("click mother fukcer");
}
function handlePause() {
    $play.hidden = false;
    $pause.hidden = true;
    $video.pause();
    console.log("click mother fukcer");
}

$backward.addEventListener("click", handleBackward);
function handleBackward() {
    /* $video.currentTime = $video.currentTime - 10; */
    $video.currentTime -= 10;
    console.log("retorede 10 seg cabroncito");
}

$forward.addEventListener("click", handleForward);
function handleForward() {
    $video.currentTime = $video.currentTime + 10;

    console.log("avanza 10 seg ", $video.currentTime);
}
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
function handleLoaded() {
    $progress.max = $video.duration;
    console.log("ha cargado mi video", $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
    /* console.log("htiempo actual : ",$video.currentTime) */
}

$progress.addEventListener('input', handleInput);
function handleInput(){
    $video.currentTime = $progress.value;
    console.log($progress.value)
}