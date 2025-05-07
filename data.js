let cars = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2023,
        price: 120000,
        mileage: 0,
        condition: 'new',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'White',
        description: '2023 Toyota Camry, brand new, automatic transmission, gasoline, white color, with factory warranty',
        features: ['Navigation System', 'Rear Camera', 'Leather Seats', 'Premium Sound System', 'Cruise Control'],
        images: [
            'images/camry-all.png',
            'images/camry-back.png',
            'images/camry-inside.png'
        ],
        seller: {
            name: 'Riyadh Car Showroom',
            phone: '966500000000',
            email: 'riyadhcars@gmail.com',
            location: 'Riyadh'
        },
        listingDate: '2023-05-15T10:30:00Z'
    },
    {
        id: 2,
        make: 'Honda',
        model: 'Accord',
        year: 2025,
        price: 110000,
        mileage: 15000,
        condition: 'Used',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'silver',
        description: 'Honda Accord 2025 in excellent condition, only 15,000 km, regular dealer maintenance',
        features: ['Touchscreen', '360 Camera', 'Dual Climate Control', 'Heated Seats', 'Sunroof'],
        images: [
            'images/acord-all.png',
            'images/acord-back.png',
            'images/acord-inside.png'
        ],
        seller: {
            name: 'Abdullah Al-Mutairi',
            phone: '966 500999005',
            email: 'abdullah@gmail.com',
            location: 'Khobar'
        }
    },
    {
        id: 3,
        make: 'Nissan',
        model: 'Altima',
        year: 2025,
        price: 85000,
        mileage: 30000,
        condition: 'Used',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'black',
        description: '2025 Nissan Altima, regular dealer maintenance, all features, like new condition',
        features: ['Bluetooth', 'Rear Camera', 'Cruise Control', 'Navigation System', 'Parking Sensors'],
        images: [
            'images/nisan-all.png',
            'images/nisan-inside.png'
        ],
        seller: {
            name: 'Naif Al-Otaibi',
            phone: '966512345678',
            email: 'saud@gmail.com',
            location: 'Dammam'
        }
    },
    {
        id: 4,
        make: 'Mercedes',
        model: 'S-Class',
        year: 2023,
        price: 280000,
        mileage: 0,
        condition: 'new',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Black',
        description: 'Mercedes-Benz S-Class 2025 Specifications',
        features: ['MBUX System', 'Advanced Touchscreen', 'Burmester Sound System', 'Heated & Cooled Seats', 'Adaptive Cruise Control'],
        images: [
            'images/bnz-all.png',
            'images/bnz-back.png',
            'images/bnz-open.png'
        ],
        seller: {
            name: 'Juffali Automotive Company',
            phone: '966500000001',
            email: 'juffali@gmail.com',
            location: 'Riyadh'
        }
    },
    {
        id: 5,
        make: 'Lexus',
        model: 'IS',
        year: 2022,
        price: 210000,
        mileage: 10000,
        condition: 'Used',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'gray',
        description: '2022 Lexus IS, like new, regular maintenance, dealer condition',
        features: ['Touchscreen', 'Mark Levinson Sound System', 'Leather Seats', 'Radar', '360 Camera'],
        images: [
            'images/ls-all.png',
            'images/la-med.png',
            'images/ls-inside.png'
        ],
        seller: {
            name: 'Fahad Al-mari',
            phone: '966555123456',
            email: 'fahad12121@gmail.com',
            location: 'Riyadh'
        }
    },
    {
        id: 6,
        make: 'Kia',
        model: 'K5',
        year: 2023,
        price: 95000,
        mileage: 0,
        condition: 'new',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'gray',
        description: 'All-new 2023 Kia K5, fully loaded, 5-year warranty',
        features: ['10.25-inch Touchscreen', 'Android Auto & Apple CarPlay', 'Leather Seats', 'Panoramic Sunroof', 'Smart Cruise Control'],
        images: [
            'images/k5-all.png',
            'images/k5-back.png',
            'images/k5-ins.png'
        ],
        seller: {
            name: 'Kingdom Auto Gallery',
            phone: '966500000002',
            email: 'kingdom@gmail.com',
            location: 'Jeddah'
        }
    },
    {
        id: 7,
        make: 'Hyundai',
        model: 'Sonata',
        year: 2025,
        price: 90000,
        mileage: 25000,
        condition: 'Used',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Black',
        description: '2022 Hyundai Sonata, excellent condition, regular dealer maintenance',
        features: ['Touchscreen', 'Rear Camera', 'Climate Control', 'Cruise Control', 'Premium Sound System'],
        images: [
            'images/so-all.png',
            'images/so-back.png',
            'images/so-ins.png'
        ],
        seller: {
            name: 'Abdulaziz Al-shahrani',
            phone: '966555987654',
            email: 'aziz@gmail.com',
            location: 'Riyadh'
        }
    },

    {
        id: 8,
        make: 'Cadillac ',
        model: 'CT5',
        year: 2018,
        price: 140000,
        mileage: 503,
        condition: 'Used',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Black',
        description: 'Cadillac CT5, excellent condition, regular dealer maintenance',
        features: ['Touchscreen', 'Rear Camera', 'Climate Control', 'Cruise Control', 'Premium Sound System'],
        images: [
            'images/cd.jpg'
        ],
        seller: {
            name: 'Fahd Al-Subaie',
            phone: '966505035030',
            email: 'Fahd@gmail.com',
            location: 'Riyadh'
        }
    },

    {
        id: 9,
        make: 'Chevrolet',
        model: 'Malibu',
        year: 2021,
        price: 75000,
        mileage: 40000,
        condition: 'Used',
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'White',
        description: '2021 Chevrolet Malibu, excellent condition, regular maintenance, personal use only',
        features: ['Touchscreen', 'Bluetooth', 'Rear Camera', 'Cruise Control', 'Climate Control'],
        images: [
            'images/ma-all.png',
            'images/ma-back.png',
            'images/ma-ins.png'
        ],
        seller: {
            name: 'Saeed Al-shahrani',
            phone: '966512345678',
            email: 'Saeed@gmail.com',
            location: 'Abha'
        }
        
    }
];

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getCarById(id) {
    return cars.find(car => car.id === parseInt(id));
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    
    card.innerHTML = `
        <div class="car-image">
            <img src="${car.images[0]}" alt="${car.make} ${car.model}">
        </div>
        <div class="car-content">
            <h3 class="car-title">${car.make} ${car.model} ${car.year}</h3>
            <div class="car-price">${formatPrice(car.price)} SAR</div>
            <div class="car-meta">
                <div><i class="fas fa-tachometer-alt"></i> ${formatPrice(car.mileage)} km</div>
                <div><i class="fas fa-cog"></i> ${car.transmission}</div>
                <div><i class="fas fa-gas-pump"></i> ${car.fuelType}</div>
            </div>
            <div class="car-footer">
                <div class="car-condition condition-${car.condition.toLowerCase()}">${car.condition}</div>
                <a href="car-details.html?id=${car.id}" class="btn btn-primary btn-sm">View Details</a>
            </div>
        </div>
    `;
    
    return card;
}

function getUniqueValues(property) {
    return [...new Set(cars.map(car => car[property]))];
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function filterCars(criteria) {
    return cars.filter(car => {
        let matchesCriteria = true;
        
        if (criteria.make && criteria.make !== 'all' && car.make !== criteria.make) {
            matchesCriteria = false;
        }
        
        if (criteria.model && car.model.toLowerCase().indexOf(criteria.model.toLowerCase()) === -1) {
            matchesCriteria = false;
        }
        
        if (criteria.minYear && car.year < criteria.minYear) {
            matchesCriteria = false;
        }
        
        if (criteria.maxYear && car.year > criteria.maxYear) {
            matchesCriteria = false;
        }
        
        if (criteria.minPrice && car.price < criteria.minPrice) {
            matchesCriteria = false;
        }
        
        if (criteria.maxPrice && car.price > criteria.maxPrice) {
            matchesCriteria = false;
        }
        
        if (criteria.condition && criteria.condition !== 'all' && 
            car.condition.toLowerCase() !== criteria.condition.toLowerCase()) {
            matchesCriteria = false;
        }
        
        if (criteria.transmission && criteria.transmission !== '' && 
            car.transmission !== criteria.transmission) {
            matchesCriteria = false;
        }
        
        return matchesCriteria;
    });
}

function sortCars(cars, sortBy) {
    const sortedCars = [...cars];
    
    switch (sortBy) {
        case 'price-asc':
            sortedCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedCars.sort((a, b) => b.price - a.price);
            break;
        case 'year-desc':
            sortedCars.sort((a, b) => b.year - a.year);
            break;
        case 'year-asc':
            sortedCars.sort((a, b) => a.year - b.year);
            break;
        default:
            break;
    }
    
    return sortedCars;
} 