const contactform = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");


const publicKey = "uCj34N-OEe7j-kgMe";
const serviceID = "service_qy5m2oe";
const templateID = "template_u2jmehj";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {

  e.preventDefault();

  submitBtn.innerText = "Just a moment.";

  const inputFields = {
      name: nameInput.value,
      email: emailInput.value,
  }

  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message sent successfully";

      nameInput.value = "";
      emailInput.value = "";
    }, (error) => {
      console.log(error);

      submitBtn.innerText = "Something went Wrong";
    });

  });
