function toggleContent(element) {
  const content = element.nextElementSibling;

  // Check if the content is already visible
  if (content.classList.contains("show")) {
      content.classList.remove("show"); // Hide the content
  } else {
      // Hide other open sections
      document.querySelectorAll('.contact-content').forEach(section => {
          section.classList.remove("show");
      });

      content.classList.add("show"); // Show the clicked section
  }
}







    document.addEventListener("DOMContentLoaded", () => {
        const textContents = document.querySelectorAll(".text-content");

        // Check if an element is in the viewport
        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0;
        };

        // Add 'visible' class when the element is in the viewport
        const handleScroll = () => {
            textContents.forEach((textContent) => {
                if (isInViewport(textContent)) {
                    textContent.classList.add("visible");
                }
            });
        };

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);

        // Trigger animation on page load for elements already in the viewport
        handleScroll();
    });



    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
    
        // Check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
    
        // Add the 'visible' class when in the viewport
        function handleScroll() {
            cards.forEach((card) => {
                if (isInViewport(card)) {
                    card.classList.add("visible");
                }
            });
        }
    
        // Listen to scroll and call handleScroll
        window.addEventListener("scroll", handleScroll);
    
        // Initial check
        handleScroll();
    });
    






    function validateForm() {
        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const agree = document.getElementById("agree").checked;
        const nameError = document.getElementById("name-error");
        const usernameError = document.getElementById("username-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const agreeError = document.getElementById("agree-error");
    
        nameError.textContent = "";
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        agreeError.textContent = "";
    
        let isValid = true;
    
        if (name === "" || /\d/.test(name)) {
            nameError.textContent = "Please enter your name properly.";
            isValid = false;
        }
    
        if (!/^[A-Za-z]\w{5,29}$/.test(username)) {
            usernameError.textContent = "Please enter a valid username (letters and numbers, 6-30 characters).";
            isValid = false;
        }
    
        if (email === "" || !email.includes("@")) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }
    
        if (password === "" || password.length < 6) {
            passwordError.textContent = "Please enter a password with at least 6 characters.";
            isValid = false;
        }
    
        if (!agree) {
            agreeError.textContent = "Please agree to the above information.";
            isValid = false;
        }
    
        return isValid;
    }
    