const buttonprev = document.getElementById('button-prev');
const buttonnext =document.getElementById('button-next');
const track = document.getElementById("track");
const slicklist = document.getElementById('slick-list');
const slick = document.querySelectorAll('slick');

const slickWidth = slick[0].offsetWidth;

buttonprev.onclick =() => Move(1);
buttonnext.onclick =() => Move(2);


function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slicklist.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2)*-1);
    if(leftPosition < (trackWidth-listWidth) && value==2){
        track.style.left = `${-1 *(leftPosition + slickwidth)}}px`;
    }
    else if(leftPosition>0 && value==1){
        track.style.left = `${-1 *(leftPosition - slickwidth)}}px`;
    }
}