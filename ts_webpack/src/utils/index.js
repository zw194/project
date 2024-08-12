import {loadImage} from './lazyload'

function load_booklets() {
    setTimeout(() => {
        const imgs = document.querySelectorAll('.books-view .book-item .img-info .book-img');
        const avator_imgs = document.querySelectorAll('.avator-img');
        const rank_imgs = document.querySelectorAll('.rank img');
        loadImage(imgs)
        loadImage(avator_imgs)
        loadImage(rank_imgs)
    }, 2000);
}

function load_internal(){
    setTimeout(() => {
        const imgs = document.querySelectorAll('.books-view .byte-item .poster .book-img');
        loadImage(imgs)
    }, 2000);
}

export {load_booklets, load_internal}