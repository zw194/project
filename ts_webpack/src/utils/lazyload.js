function loadImage(imgs) {
    if(!imgs) return;
    const num = imgs.length;
    let screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < num; i++) {
        if (getTop(imgs[i]) < screenHeight + scrollTop && imgs[i].src === '') {
            imgs[i].src = imgs[i].dataset.src;
        }
    }
}
// getTop()获得当前节点到
function getTop(el) {
    let T = el.offsetTop;
    while(el = el.offsetParent) {
        T += el.offsetTop;
    }
    return T;
}

export { loadImage }