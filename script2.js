document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const errorMessage = document.getElementById("errorMessage");
    const formContainer = document.getElementById("formContainer");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

    
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

    
        if (email === "" || message === "") {
            errorMessage.innerText = "Please fill out all required fields.";
            return;
        }

        errorMessage.innerText = ""; 

        
        const randomNumber = Math.floor(Math.random() * 10000);
        const subject = `Wagging Wheels #${randomNumber}`;

   
        const mailtoLink = `mailto:waggingwheels@gmail.com?cc=dianamontero38@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;

        
        window.location.href = mailtoLink;

     
        formContainer.style.display = "none";
        successMessage.style.display = "block";

      
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 5000);
    });
});
