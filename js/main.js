

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navp');
        const navbarLinks = navbar.querySelectorAll('.nav-link');

        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    

