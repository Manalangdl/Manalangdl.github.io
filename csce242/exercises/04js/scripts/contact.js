//https://web3forms.com/

// e.target is the form
document.getElementById('contact-form').onsubmit = async(e) =>{
    formData.append("access_key", "80a420fe-5012-4720-a5db-b6c6069d4701");
    const result = document.getElementById("result");
    result.innerHTML = "Sending..."

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Message Sent";
            form.reset();
        } else {
            result.innerHTML = "Error: " + data.message;
        }

    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message"
    } finally {
        result.innerHTML = "";
    }

};

