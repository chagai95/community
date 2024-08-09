// script.js
document.addEventListener('DOMContentLoaded', function() {
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    const mapBtn = document.getElementById('mapBtn');
    const youtubeBtn = document.getElementById('youtubeBtn');
    const sheetBtn = document.getElementById('sheetBtn');
    const videoButtons = document.querySelectorAll('.video-btn');
    const swissTipsBtn = document.getElementById('swissTipsBtn');

    copyAddressBtn.addEventListener('click', function() {
        const address = "Brunnmattstrasse 67, 3007 Bern";
        navigator.clipboard.writeText(address).then(function() {
            copyAddressBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>Address Copied!';
            copyAddressBtn.style.backgroundColor = '#3a5f9a';
            setTimeout(function() {
                copyAddressBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>Copy Address';
                copyAddressBtn.style.backgroundColor = '';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
        });
    });

    mapBtn.addEventListener('click', function() {
        window.open('https://maps.app.goo.gl/eVrWCakUFpHGw2ZB7', '_blank');
    });

    youtubeBtn.addEventListener('click', function() {
        window.open('https://www.youtube.com/playlist?list=PLgL5d4DmTBmQpUsIYMUuy01c2SK7_6sF6', '_blank');
    });

    sheetBtn.addEventListener('click', function() {
        window.open('https://tiny.cc/sleepingplan', '_blank');
    });

    videoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });

    swissTipsBtn.addEventListener('click', function() {
        window.open('https://connectbern.ch/swiss-tips', '_blank');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to sections on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});