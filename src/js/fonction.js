function carrousel() {
    
	var carrousel__items = document.querySelectorAll('.carrousel__item');
    let d = 2000;
    let delta = 1000;

    carrousel__items.forEach(function(img,indice) {
        img.style.zIndex = carrousel__items.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: carrousel__items,
        translateX: [{value: '250', duration: d},
                     {value: '-250', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (3*delta)+(2*d);
                         if (ind == 1) return (2*delta)+d;
                         if (ind == 2) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            return (4*delta)+(3*d);
        }
    });
}




function monterLegende() {
    carrousel__txts = document.querySelectorAll('.carrousel__txt');
    return anime({
        targets: carrousel__txts,
        translateY: '1em',
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}

function descendreLegende() {
    return anime({
        targets: carrousel__txts,
        translateY: '6em',
        autoplay: false,
        duration: 300,
        easing: 'linear'
    }).play;
}