// javascript


let inputFields = document.getElementById("inputFields")

let succesUi = `
<div class="succesField">
    <img src="images/icon-complete.svg" />
    <p class="thanks">Thank you!</p>
    <p class ="sub">We've added your card details</p>
    <button class="btn">Continue</button>
</div>`

function getInputValue() {  // A method is used to get input value
  let cardNumberInput = document.getElementById("cardNumberInput").value.match(/.{1,4}/g).join(" ")
  let holderNameInput = document.getElementById("holderNameInput").value
  let expiryMonthInput = document.getElementById("expiryMonthInput").value
  let expiryYearInput = document.getElementById("expiryYearInput").value
  let cvcInput = document.getElementById("cvcInput").value

  let expiryDate = `${expiryMonthInput}/${expiryYearInput}`
  document.getElementById("cardNumber").innerHTML = cardNumberInput
  document.getElementById("holderName").innerHTML = holderNameInput
  document.getElementById("expiryDate").innerHTML = expiryDate

  document.getElementById("cvc").innerHTML = cvcInput
  inputFields.innerHTML = succesUi
}


const confirmBtn = document.querySelector("#confirmBtn")

confirmBtn.addEventListener("click", getInputValue)