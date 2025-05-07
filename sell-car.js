document.addEventListener('DOMContentLoaded', function() {
    const sellCarForm = document.getElementById('sell-car-form');
    const fileInput = document.getElementById('car-images');
    const fileHelp = document.querySelector('.file-help');
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const MAX_FILES = 5;
    
    const yearField = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearField.value = currentYear;
    yearField.max = currentYear + 1; 
    
    fileInput.addEventListener('change', function(e) {
        const files = e.target.files;
        
        if (files.length > MAX_FILES) {
            fileHelp.textContent = `You can only upload a maximum of ${MAX_FILES} images.`;
            fileHelp.classList.add('error');
            fileInput.value = '';
            return;
        }
        
        let isValid = true;
        for (let i = 0; i < files.length; i++) {
            if (files[i].size > MAX_FILE_SIZE) {
                isValid = false;
                break;
            }
        }
        
        if (!isValid) {
            fileHelp.textContent = `Each image must be less than 5MB in size.`;
            fileHelp.classList.add('error');
            fileInput.value = '';
            return;
        }
        
        fileHelp.textContent = `${files.length} image(s) selected. Click Submit to upload.`;
        fileHelp.classList.remove('error');
    });
    
    sellCarForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        const formData = new FormData(sellCarForm);
        const carData = {
            make: formData.get('make'),
            model: formData.get('model'),
            year: parseInt(formData.get('year')),
            price: parseInt(formData.get('price')),
            mileage: parseInt(formData.get('mileage')),
            condition: formData.get('condition'),
            transmission: formData.get('transmission'),
            fuelType: formData.get('fuel-type'),
            color: formData.get('color'),
            features: getSelectedFeatures(),
            description: formData.get('description'),
            seller: {
                name: formData.get('seller-name'),
                phone: formData.get('seller-phone'),
                email: formData.get('seller-email'),
                location: formData.get('seller-location')
            },
            images: ['placeholder-image.jpg'], 
            listingDate: new Date().toISOString(),
            id: generateUniqueId()
        };
        
        if (typeof cars !== 'undefined') {
            cars.push(carData);
            showSuccessMessage();
            sellCarForm.reset();
        } else {
            showErrorMessage('Cars database not found. Could not save listing.');
        }
    });
    
    function getSelectedFeatures() {
        const features = [];
        const checkboxes = document.querySelectorAll('input[name="features"]:checked');
        
        checkboxes.forEach(checkbox => {
            features.push(checkbox.value);
        });
        
        return features;
    }
    
    function validateForm() {
        clearErrors();
        
        let isValid = true;
        
        const requiredFields = [
            'make', 'model', 'year', 'price', 'mileage', 'condition',
            'transmission', 'fuel-type', 'color', 'description',
            'seller-name', 'seller-phone', 'seller-email', 'seller-location'
        ];
        
        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                showError(input, 'This field is required');
                isValid = false;
            }
        });
        
        const emailField = document.getElementById('seller-email');
        if (emailField.value && !isValidEmail(emailField.value)) {
            showError(emailField, 'Please enter a valid email address');
            isValid = false;
        }
        
        const phoneField = document.getElementById('seller-phone');
        if (phoneField.value && !isValidPhone(phoneField.value)) {
            showError(phoneField, 'Please enter a valid phone number');
            isValid = false;
        }
        
        if (fileInput.files.length === 0) {
            showError(fileInput, 'Please upload at least one image');
            isValid = false;
        }
        
        const termsCheckbox = document.getElementById('agree-terms');
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, 'You must agree to the terms and conditions');
            isValid = false;
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^\+?[0-9]{8,15}$/;
        return phoneRegex.test(phone);
    }
    
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        formGroup.appendChild(errorElement);
        input.classList.add('error-input');
    }
    
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
        
        const errorInputs = document.querySelectorAll('.error-input');
        errorInputs.forEach(input => input.classList.remove('error-input'));
    }
    
    function generateUniqueId() {
        return 'car_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Listing Submitted Successfully for our project in Web programing !</h3>
            <p>Your car listing has been added to our database and will be visible to potential buyers.</p>
            <p>You can <a href="cars.html">view all cars</a> or <a href="sell-car.html">submit another listing</a>.</p>
        `;
        
        const formContainer = document.querySelector('.sell-car-form-container');
        formContainer.innerHTML = '';
        formContainer.appendChild(successMessage);
        
        successMessage.scrollIntoView({ behavior: 'smooth' });
    }
    
    function showErrorMessage(message) {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'form-error-message';
        errorContainer.textContent = message;
        
        const formButtons = document.querySelector('.form-buttons');
        formButtons.before(errorContainer);
        
        setTimeout(() => {
            errorContainer.remove();
        }, 5000);
    }
}); 