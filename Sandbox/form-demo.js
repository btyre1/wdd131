function togglePaymentDetails(e) {
  // get a reference to the form. We can access all the named form inputs through the form element.
  const theForm = document.querySelector("#checkoutForm");
  // we will also need the creditCardContainer and paypalUsernameContainer
  const creditCardContainer = document.getElementById(
    "creditCardNumberContainer"
  );
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  // Hide payment containers
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");
  // Disable required for the hidden fields...if we hide a required field the browser will throw an error when we try to submit!
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // Show the container based on the selected payment method
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// attach a change event handler to the paymentMethod input
document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);