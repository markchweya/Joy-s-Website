let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

let timeRunning = 3000;
let runTimeOut;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemsThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemsThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemsThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
        
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);
}
