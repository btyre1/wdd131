let participantCount = 1;

const addButton = document.getElementById("add");
const form = document.querySelector("form");
const summary = document.getElementById("summary");

addButton.addEventListener("click", () => {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  
  addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
});

function participantTemplate(count) {
  return `
  <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}"> First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date <span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select id="grade${count}">
        <option selected value="" disabled></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const adultName = document.getElementById("adult_name").value.trim();
  if (adultName === "") {
    alert("Please enter the Adult Primary Contact name.");
    return;
  }

  const total = totalFees();

  form.style.display = "none";
  summary.innerHTML = successTemplate({
    name: adultName,
    participants: participantCount,
    total: total
  });
});

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements]; 

  const total = feeElements.reduce((sum, el) => {
    const value = parseFloat(el.value);
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  return total;
}

function successTemplate(info) {
  return `
    <div class="success-message">
      <h2>Thank you ${info.name} for registering!</h2>
      <p>You have registered <strong>${info.participants}</strong> participant(s)
      and owe <strong>$${info.total}</strong> in fees.</p>
    </div>
  `;
}
