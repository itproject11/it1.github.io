/* ============================================================
   LUXURY CARS AGENCY - COMPLETE MASTER SCRIPT
   ============================================================ */

// --- الجزء الأول: الـ Theme & Layout Switcher (مهم جداً للدرجات) ---
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedLayout = localStorage.getItem('layout');

    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        if (themeBtn) {
            themeBtn.textContent = savedTheme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }
    }
    if (savedLayout === 'true') {
        body.classList.add('alt-layout');
    }
});

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'light') {
            body.setAttribute('data-theme', 'dark');
            themeBtn.textContent = '🌙 Dark Mode';
        } else {
            body.setAttribute('data-theme', 'light');
            themeBtn.textContent = '☀️ Light Mode';
        }
        body.classList.toggle('alt-layout');
        localStorage.setItem('theme', body.getAttribute('data-theme'));
        localStorage.setItem('layout', body.classList.contains('alt-layout'));
    });
}

// --- الجزء الثاني: كود الحجز (Booking Form) اللي إنت كتبته ---
const bookingForm = document.querySelector('.booking-form');
const userName = document.getElementById('name1');
const userEmail = document.getElementById('email1');

if (bookingForm && userName && userEmail) {
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // فحص الاسم
        if (userName.value.trim().length < 5) {
            alert("الرجاء إدخال الاسم الكامل (أكثر من 5 أحرف)");
            userName.style.border = "2px solid red";
            return; 
        }

        // فحص الإيميل يدوياً
        if (!userEmail.value.includes("@") || !userEmail.value.includes(".")) {
            alert("الرجاء إدخال بريد إلكتروني صحيح يحتوي على @ ونقطة");
            userEmail.style.border = "2px solid red";
            return;
        }

        userName.style.border = "none";
        userEmail.style.border = "none";
        
        alert("Booking confirmed for " + userName.value + ". We will contact you soon.");
        
        // Storage: Write
        localStorage.setItem('lastBookingName', userName.value);
        bookingForm.reset();
    });
}

// --- الجزء الثالث: كود التواصل (Contact Form) ---
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (contactName.value.trim().length < 3) {
            alert("Please enter a valid name (at least 3 characters)");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(contactEmail.value)) {
            alert("Please enter a valid email address");
            return;
        }

        if (contactMessage.value.trim().length < 10) {
            alert("Your message is too short. Please tell us more.");
            return;
        }

        // Storage: Write
        localStorage.setItem('visitorName', contactName.value);
        alert("Thank you " + contactName.value + "! Your message has been sent successfully.");
        contactForm.reset();
    });
}

// --- الجزء الرابع: كود البحث (Search) ---
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const brand = searchForm.querySelector('select[name="brand"]').value;
        if (brand) {
            window.location.href = brand + ".html";
        } else {
            alert("Please select a brand to search.");
        }
    });
}