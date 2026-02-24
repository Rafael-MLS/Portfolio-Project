// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the form element
    const form = document.getElementById('recommendation-form');
    
    // Get the recommendations container
    const recommendationsContainer = document.querySelector('.recommendations-container');
    
    // Get popup elements
    const popup = document.getElementById('popup');
    const popupClose = document.querySelector('.popup-close');
    
    // Counter for unique IDs and avatars
    let recommendationCount = document.querySelectorAll('.recommendation-card').length;
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const position = document.getElementById('position').value.trim();
        const message = document.getElementById('message').value.trim();
        const rating = document.getElementById('rating').value;
        
        // Validate that message is not empty
        if (message === '') {
            alert('Please enter a recommendation message.');
            return;
        }
        
        // Generate initials for avatar
        let initials = 'GU'; // Default Guest User
        if (name !== '') {
            const nameParts = name.split(' ');
            if (nameParts.length >= 2) {
                initials = nameParts[0].charAt(0) + nameParts[1].charAt(0);
            } else {
                initials = nameParts[0].charAt(0) + nameParts[0].charAt(1).toUpperCase();
            }
        }
        
        // Create position text
        const positionText = position !== '' ? position : 'Community Member';
        
        // Create star rating HTML
        const stars = '★'.repeat(parseInt(rating)) + '☆'.repeat(5 - parseInt(rating));
        
        // Create new recommendation card
        const newCard = document.createElement('div');
        newCard.className = 'recommendation-card';
        newCard.style.animation = 'fadeInUp 0.6s ease-out forwards';
        
        // You can choose which style to use - comment out the one you don't want
        
        // Style 1: With avatar (matches your current design)
        newCard.innerHTML = `
            <div class="quote-icon">"</div>
            <p class="recommendation-text">${message}</p>
            <div class="recommendation-author">
                <div class="author-avatar">${initials}</div>
                <div class="author-info">
                    <h4>${name !== '' ? name : 'Anonymous'}</h4>
                    <p>${positionText}</p>
                    <div class="rating-display" style="color: #ffc107; font-size: 14px; margin-top: 5px;">${stars}</div>
                </div>
            </div>
        `;
        
        /*
        // Style 2: Simple version with stars (uncomment to use this instead)
        newCard.innerHTML = `
            <div class="stars" style="color: #ffc107; font-size: 18px; margin-bottom: 10px;">${stars}</div>
            <p class="simple-quote" style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 10px; font-style: italic;">"${message}"</p>
            <p class="simple-author" style="font-size: 14px; color: rgb(108, 28, 145); font-weight: 500; text-align: right;">— ${name !== '' ? name : 'Anonymous'}, ${positionText}</p>
        `;
        newCard.style.backgroundColor = 'white';
        newCard.style.borderRadius = '10px';
        newCard.style.padding = '25px';
        newCard.style.marginBottom = '20px';
        newCard.style.borderLeft = '5px solid rgb(108, 28, 145)';
        newCard.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        */
        
        // Add the new card to the container
        recommendationsContainer.appendChild(newCard);
        
        // Show popup
        popup.style.display = 'flex';
        
        // Reset form
        form.reset();
        
        // Increment counter
        recommendationCount++;
    });
    
    // Close popup when clicking the close button
    popupClose.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    // Close popup when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
    
    // Optional: Auto-hide popup after 3 seconds
    /*
    function showPopup() {
        popup.style.display = 'flex';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 3000);
    }
    */
});

// Home button functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the home button
    const homeBtn = document.getElementById('homeBtn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Show after scrolling 300px
            homeBtn.classList.add('visible');
        } else {
            homeBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    homeBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Optional: Check initial scroll position on page load
    if (window.pageYOffset > 300) {
        homeBtn.classList.add('visible');
    }
});