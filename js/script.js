const form = document.getElementById("contactForm");

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

        alert("Form Submitted Successfully!");
        form.reset();
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
