// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navbar ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav item
document.querySelectorAll('#navbar ul li a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('header').offsetHeight;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('#navbar ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show an alert
        alert(`Thank you for your message, ${name}! We will contact you soon.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Service Cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add subtle floating animation
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = '0 15px 30px rgba(255, 107, 49, 0.3)';
            
            // Highlight icon
            const icon = card.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Return to normal state
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            
            // Return icon to normal
            const icon = card.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Focus Cards hover effect
    const focusCards = document.querySelectorAll('.focus-card');
    focusCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add pop-up animation
            card.style.transform = 'translateY(-15px) scale(1.05)';
            card.style.boxShadow = '0 15px 30px rgba(255, 107, 49, 0.3)';
            
            // Animate icon
            const icon = card.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Return to normal state
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            
            // Return icon to normal
            const icon = card.querySelector('.icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Portfolio items hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add pop-up animation
            item.style.transform = 'translateY(-15px)';
            item.style.boxShadow = '0 15px 30px rgba(255, 107, 49, 0.3)';
            
            // Show info with animation
            const info = item.querySelector('.portfolio-info');
            if (info) {
                info.style.bottom = '0';
            }
            
            // Zoom image slightly
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            // Return to normal state
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            
            // Hide info
            const info = item.querySelector('.portfolio-info');
            if (info) {
                info.style.bottom = '-100%';
            }
            
            // Return image to normal
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
});

// Animation on scroll
window.addEventListener('load', () => {
    // Add animation classes to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .focus-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation elements
    document.querySelectorAll('.service-card, .portfolio-item, .focus-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on initial load
    animateOnScroll();
});

// Testimonial carousel (if added later)
class TestimonialCarousel {
    constructor(carouselSelector) {
        this.carousel = document.querySelector(carouselSelector);
        if (!this.carousel) return;
        
        this.slides = this.carousel.querySelectorAll('.testimonial-slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        
        if (this.totalSlides > 1) {
            this.initCarousel();
        }
    }
    
    initCarousel() {
        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.goToSlide(i);
            });
            
            dotsContainer.appendChild(dot);
        }
        
        this.carousel.appendChild(dotsContainer);
        
        // Set up auto-rotation
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.carousel.querySelectorAll('.carousel-dot')[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.carousel.querySelectorAll('.carousel-dot')[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= this.totalSlides) {
            nextIndex = 0;
        }
        
        this.goToSlide(nextIndex);
    }
}

// Initialize testimonial carousel if it exists
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialCarousel('.testimonial-carousel');
});
// Add this code to your existing script.js file

// Modal functionality for portfolio items
document.addEventListener('DOMContentLoaded', () => {
    // Get the modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close-btn');
    
    // Get all portfolio thumbnails
    const portfolioThumbnails = document.querySelectorAll('.portfolio-thumbnail');
    
    // Add click event to each portfolio thumbnail
    portfolioThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Display the modal
            modal.style.display = 'block';
            
            // Get the image source from the clicked thumbnail
            const img = this.querySelector('img');
            modalImg.src = img.src;
            
            // Get the caption from the portfolio info
            const portfolioItem = this.closest('.portfolio-item');
            const title = portfolioItem.querySelector('.portfolio-info h3').textContent;
            const description = portfolioItem.querySelector('.portfolio-info p').textContent;
            modalCaption.textContent = `${title} - ${description}`;
        });
    });
    
    // Close the modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close the modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close the modal with escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});