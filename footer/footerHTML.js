/* Footer HTML */
$(document).ready(function() {
    var footerHTML = `
    <footer>
        <div class="signup-form">
            <h2>Subscribe to our Newsletter</h2>
            <p id="successMessage" style="display: none;">Thank you for subscribing!</p>
            <form id="subscriptionForm" action="#">
                <input type="email" name="email" id="emailInput" placeholder="Enter your email" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </footer>
    `;
    
    $('body').append(footerHTML);
    
    /* Not actually saving the email, just simulating that it got saved */
    $('#subscriptionForm').submit(function(event) {
        event.preventDefault();
        $('#successMessage').fadeIn(500).delay(2000).fadeOut(500);
        $('#emailInput').val('');
    });
});