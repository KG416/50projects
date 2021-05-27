const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;

// func to synchronize load (goes from 0-100) with opacity (1-0) & blur (30-0)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

const blurring = () => {
    load++;

    // stops blurring from running every 30ms once load gets to 100
    if (load > 99) {
        clearInterval(int);
    }

    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
};

// runs the function blurring every 30ms
let int = setInterval(blurring, 30);

