function validateInfo() {
    var nameInput = document.getElementById("name"),
        emailInput = document.getElementById("email"),
        phoneInput = document.getElementById("phone"),
        reasonInput = document.getElementById("reason"),
        infoIntput = document.getElementById("info");

    var message = "";

    if (!(nameInput.value && emailInput.value && phoneInput.value)) {
        if (!nameInput.value) message += "\u25B6 Please enter your name.\n\n"
        else message += "\u25B6 We need both your email address and phone number.\n\n";
    }

    if (reasonInput.value == "other" && !infoIntput.value) {
        message += "\u25B6 Please leave more details below.\n\n";
    }

    var daysToContact = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (daysToContact < 1) {
        message += "\u25B6 Please select the best day to connect with you.\n\n";
    }

    if (message) {
        alert(message);
        return false;
    }
    else {
        alert("Thank you for contacting us - we will get back to you within 1-2 business days.")
    }
}