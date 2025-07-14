export function sendEmail(data) {

  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      const submitBtn = document.getElementById("submitForm");
      if (submitBtn) {
        submitBtn.textContent = "Email Sent";
        submitBtn.classList.remove("bg-cyan-400");
        submitBtn.classList.add("bg-green-500");
      }

      const form = document.getElementById("contactForm");
      if (form) {
        // Clear all input and textarea fields
        form.querySelectorAll("input, textarea").forEach((el) => {
          el.value = "";
        });
      }
    })
    .catch((err) => {
      const submitBtn = document.getElementById("submitForm");
      if (submitBtn) {
        submitBtn.textContent = "Error Sending";
        submitBtn.classList.remove("bg-cyan-400");
        submitBtn.classList.add("bg-red-500");
      }
    });
}
