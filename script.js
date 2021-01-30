// Commmon Js
// This is for preventing to go to the top when any anchor element is clicked because by default if we click and anchor tag it redirects us to the top
document.querySelectorAll('.watch-control,.controls a,.iphone-btn').forEach((control) => {
    control.addEventListener('click', (e) => {
        e.preventDefault();
    })
})
// End of Commmon Js

// Slideshow
const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        if (i === 1)
            div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');
let a = 1;

const slideshow = () => {
    setInterval(() => {
        a++;
        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change')

        if (a < divs.length)
            div.nextElementSibling.classList.add('change')
        else {
            divs[0].classList.add('change');
            a = 1;
        }
    }, 20000)
}

slideshow();

// End of Slideshow

// Rotate Cube
const cube = document.querySelector('.cube')
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;


//Controls to each of the controls button
document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x+=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x-=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y-=20}deg) rotateZ(${z}deg)`
})
document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z}deg)`
})
document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z-=20}deg)`
})
document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z+=20}deg)`
})

//Automatic rollover of cube
const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = ` rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}
playPause();

//On hover cube stops rotating
document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false;
    playPause();
})
//On removing hover  cube starts rotating
document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true;
    playPause();
})
// End of Rotate Cube

// Section-3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    //checking if we have scrolled to half point of the section-3-content page or not
    if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})

// End of Section-3

// Section-4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0;
let axisX = 0;

//when the last image is reached the controls should hide so that the cases or bands dont move further inside hence we hide controls by making a barrier at 280rem or -280rem as then it reaches the last case or band
const hideControl = () => {
    if (axisY === -280) {
        watchTopControl.classList.add('hideControl')
    } else {
        watchTopControl.classList.remove('hideControl')
    }

    if (axisY === 280) {
        watchBottomControl.classList.add('hideControl')
    } else {
        watchBottomControl.classList.remove('hideControl')
    }

    if (axisX === -280) {
        watchRightControl.classList.add('hideControl')
    } else {
        watchRightControl.classList.remove('hideControl')
    }

    if (axisX === 280) {
        watchLeftControl.classList.add('hideControl')
    } else {
        watchLeftControl.classList.remove('hideControl')
    }
}

//here we are decresing or increasing the margin by 70rem to make the cases or bands move 
watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY-=70}rem`;
    hideControl();
})
watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY+=70}rem`;
    hideControl();
})
watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX+=70}rem`;
    hideControl();
})
watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX-=70}rem`;
    hideControl();
})
// End of Section-4