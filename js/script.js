const form = document.getElementById("contactForm");

// WhatsApp Configuration
const WHATSAPP_NUMBER = "917736086163"; // Your WhatsApp number (without +)

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill all fields.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid email.");
            return;
        }

        if (phone.length !== 10) {
            alert("Enter a valid phone number.");
            return;
        }

        // Format the enquiry message for WhatsApp
        const enquiryMessage = `Hello, I'm interested in your college programs.

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(enquiryMessage);

        // WhatsApp Web URL
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Show success message
        alert("Form Submitted Successfully! You'll be redirected to WhatsApp.");

        // Redirect to WhatsApp after a short delay
        setTimeout(function () {
            window.open(whatsappURL, "_blank");
            form.reset();
        }, 500);
    });
}

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (window.AOS) {
    AOS.init();
}
