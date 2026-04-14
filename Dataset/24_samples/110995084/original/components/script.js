document.addEventListener('DOMContentLoaded', function() {
    // Credit card validation
    const cardForm = document.getElementById('payment-form');
    if (cardForm) {
        const cardNumber = document.getElementById('card_number');
        const cardHolder = document.getElementById('card_holder');
        const expiryDate = document.getElementById('expiry_date');
        const cvv = document.getElementById('cvv');
        
        // Luhn algorithm for card validation
        function isValidCreditCard(number) {
            const digits = number.replace(/\D/g, '');
            if (digits.length < 13 || digits.length > 19) return false;
            
            let sum = 0;
            let isEven = false;
            
            for (let i = digits.length - 1; i >= 0; i--) {
                let digit = parseInt(digits[i], 10);
                
                if (isEven) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }
                
                sum += digit;
                isEven = !isEven;
            }
            
            return sum % 10 === 0;
        }
        
        // Card type detection
        function getCardType(number) {
            const patterns = {
                visa: /^4/,
                mastercard: /^5[1-5]/,
                amex: /^3[47]/,
                discover: /^6(?:011|5)/,
                dinersclub: /^3(?:0[0-5]|[68])/,
                jcb: /^(?:2131|1800|35)/
            };
            
            for (let card in patterns) {
                if (patterns[card].test(number)) {
                    return card;
                }
            }
            return 'unknown';
        }
        
        // Format card number with spaces
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let formattedValue = '';
            
            for (let i = 0; i < value.length && i < 16; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedValue += ' ';
                }
                formattedValue += value[i];
            }
            
            e.target.value = formattedValue;
            
            // Validate card number
            const isValid = isValidCreditCard(value);
            const cardType = getCardType(value);
            
            if (value.length > 0) {
                if (!isValid) {
                    showError(cardNumber, 'Invalid card number');
                } else {
                    clearError(cardNumber);
                    // Update card type display if needed
                }
            }
        });
        
        // Format expiry date
        expiryDate.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length >= 2) {
                const month = parseInt(value.substring(0, 2));
                if (month < 1 || month > 12) {
                    showError(expiryDate, 'Invalid month');
                } else {
                    clearError(expiryDate);
                }
                
                if (value.length > 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
            }
            
            e.target.value = value.substring(0, 5);
        });
        
        // Validate CVV
        cvv.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value.substring(0, 3);
            
            if (value.length === 3) {
                clearError(cvv);
            }
        });
        
        // Form submission
        cardForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Clear previous errors
            clearAllErrors();
            
            // Validate card holder
            if (!cardHolder.value.trim()) {
                showError(cardHolder, 'Card holder name is required');
                isValid = false;
            }
            
            // Validate card number
            if (!isValidCreditCard(cardNumber.value.replace(/\s/g, ''))) {
                showError(cardNumber, 'Invalid card number');
                isValid = false;
            }
            
            // Validate expiry date
            const expiry = expiryDate.value.split('/');
            if (expiry.length !== 2 || !isValidExpiry(expiry[0], expiry[1])) {
                showError(expiryDate, 'Invalid expiry date');
                isValid = false;
            }
            
            // Validate CVV
            if (cvv.value.length !== 3) {
                showError(cvv, 'Invalid CVV');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Helper functions
    function showError(element, message) {
        clearError(element);
        element.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
        element.parentNode.appendChild(errorDiv);
    }
    
    function clearError(element) {
        element.classList.remove('error');
        const errorMessage = element.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    function clearAllErrors() {
        document.querySelectorAll('.error-message').forEach(msg => msg.remove());
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    }
    
    function isValidExpiry(month, year) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;
        
        month = parseInt(month);
        year = parseInt(year);
        
        if (month < 1 || month > 12) return false;
        if (year < currentYear) return false;
        if (year === currentYear && month < currentMonth) return false;
        
        return true;
    }
    
    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
});