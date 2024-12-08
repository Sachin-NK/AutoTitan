function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var zipCode = document.getElementById('zipCode').value;
    var creditCardNumber = document.getElementById('creditCardNumber').value;
    var cvv = document.getElementById('cvv').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Credit card number validation 
    var creditCardRegex = /^\d{4}\d{4}\d{4}\d{4}$/;
    if (!creditCardRegex.test(creditCardNumber)) {
        alert('Please enter a valid credit card number (e.g., 1111-2222-3333-4444)');
        return false;
    }

    // CVV validation
    var cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
        alert('Please enter a valid CVV');
        return false;
    }

    // Zip code validation
    var zipVal = /^\d{5}$/;
    if (!zipVal.test(zipCode)) {
        alert('Please enter a valid zip code');
        return false;
    }

    //submit the form
    var form = document.getElementById('checkoutForm');
    form.submit();

    // Redirect to another web page
    window.location.href = '../checkout/confarmation.html';
    return true;
}
