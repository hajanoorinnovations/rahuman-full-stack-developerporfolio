
      
        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }

        
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        
        document.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
            document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
        });

        const revealEls = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            revealEls.forEach(el => observer.observe(el));
        } else {
            revealEls.forEach(el => el.classList.add('visible'));
        }

    
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.scrollY > 600);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    
        function handleSubmit(event) {
            event.preventDefault();
            const status = document.getElementById('formStatus');
            status.textContent = 'Thanks! Your message has been received. I will get back to you soon.';
            event.target.reset();
            setTimeout(() => { status.textContent = ''; }, 6000);
        }
    