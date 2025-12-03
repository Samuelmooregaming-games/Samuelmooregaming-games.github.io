//Open the correct modal when a "trigger" image is clicked
document.querySelectorAll('.open-modal').forEach(trigger => {
    trigger.addEventListener('click', function() {
        //The ID of the modal we want to open which is stored on its respective image
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        //Protection against having multiple modals open at the same time
        document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('active'));

        //Showing and activating the modal
        modal.style.display = 'flex';
        modal.classList.add('active');
        document.body.classList.add('modal-open');

        
    });
});

//Close the correct modal when a close button is clicked
document.querySelectorAll('.close-modal').forEach(close => {
    close.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.style.display = 'none';
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        
        modal.querySelectorAll('video').forEach(v => {
    v.pause();
    v.currentTime = 0;
        });
    });
});

//TODO: Think about allowing the user to close the modal by clicking outside of it

//Carousel functionality
//TODO: Think about making the carousel more generic so it can be used in multiple places
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const leftButton = document.querySelector('.carousel-btn-left');
    const rightButton = document.querySelector('.carousel-btn-right');
    let currentIndex = 0;

    function showImage(id) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === id);
        });
    }

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    //TODO: Think about adding a timer to automatically change the image every few seconds
});


document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    darkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
})

document.addEventListener("DOMContentLoaded", function(){
  const hamburger = document.getElementById('hamburger-btn');  
  const mobilemenu = document.getElementById('mobile-menu');
  
  if (hamburger && mobilemenu) {
    hamburger.addEventListener('click', function() {
        mobilemenu.classList.toggle('open');

    });
    const navbar = document.getElementById('navbar');

    if (navbar) {
        navbar.querySelectorAll('a.nav-button').forEach(button => {
        button.addEventListener('click', () => {
        mobilemenu.classList.remove('open');
        });
            
        });
    }

    mobilemenu.querySelectorAll('.nav-button, a.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        mobilemenu.classList.remove('open');
    })    
    });

    }

    

});