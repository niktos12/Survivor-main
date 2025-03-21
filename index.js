const burgerIcon = document.getElementById('burgerIcon');
        const mobileNav = document.getElementById('mobileNav');

        burgerIcon.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
        document.addEventListener("DOMContentLoaded", function () {
            const scrollContainer = document.getElementById("scroll-container");
            const leftButton = document.getElementById("left-arrow");
            const rightButton = document.getElementById("right-arrow");
            const cards = document.querySelectorAll(".card-technology");
        
            let currentIndex = 0;
            const cardWidth = cards[0].offsetWidth + 20; // Ширина карточки + отступы
        
            function updateCarousel() {
                scrollContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
            }
        
            rightButton.addEventListener("click", function () {
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            });
        
            leftButton.addEventListener("click", function () {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });
        });

        
        let currentIndex = 0;

        const carousel = document.querySelector('.carousel');
        const images = document.querySelectorAll('.carousel img');
        
        let counter = 0;
        const imageWidth = images[0].clientWidth;
        
        function scrollCarousel() {
            counter++;
            if (counter >= images.length) {
                counter = 0;
            }
            carousel.style.transform = `translateX(-${counter * imageWidth}px)`;
        }
        
        setInterval(scrollCarousel, 1500); // Меняйте значение (3000ms = 3 секунды)
        
