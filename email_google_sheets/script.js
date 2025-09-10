const scriptURL = 'https://script.google.com/macros/s/AKfycbzpH8_rE9pzBpKsbWeW-RgKjNEb6YTpAQ3zR_vTi6m-7O9tAHLe0GbZT-RvanOk_iNFAQ/exec';
        const form = document.getElementById('submit-to-google-sheet');
        const msg = document.getElementById("msg");
        const submitButton = form.querySelector('button');

        form.addEventListener('submit', e => {
            e.preventDefault();

            submitButton.disabled = true;
            msg.innerHTML = "Processing your subscription...";

            const formData = new FormData(form);
            form.reset();

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    msg.innerHTML = "✅ Thank you for subscribing! Keep learning with me.";
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    msg.innerHTML = "⚠️ Oops! Something went wrong. Please try again.";
                })
                .finally(() => {
                    setTimeout(() => { msg.innerHTML = ""; }, 5000);
                    submitButton.disabled = false;
                });
        });