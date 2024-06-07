document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        formResponse.style.display = "block";
        formResponse.innerText = `Thank you, ${name}! Your message has been received.`;
        
        contactForm.reset();
    });
});
