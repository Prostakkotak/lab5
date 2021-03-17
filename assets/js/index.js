let navButton = document.getElementById('nav-button'),
    nav = document.getElementById('nav');

document.addEventListener('click', function(e) {
    let target = e.target;

    while (target != this) {

        if (target == navButton) {
            nav.classList.toggle('open');
        }

        target = target.parentNode;
    }
})