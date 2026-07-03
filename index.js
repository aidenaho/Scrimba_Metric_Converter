/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthMetrics = document.getElementById("length-el")
const volumeMetrics = document.getElementById("volume-el")
const massMetrics = document.getElementById("mass-el")
const valueInput = document.getElementById("amt")

const meterConv = 3.281
const literConv = 0.264
const kilogramConv = 2.204

setMetrics()

function setMetrics() {
    console.log("ran")
    lengthMetrics.textContent = (`${valueInput.value} meters = ${(valueInput.value*meterConv).toFixed(3)} feet | ${valueInput.value} feet = ${(valueInput.value/meterConv).toFixed(3)} meters`)
    
    volumeMetrics.textContent = (`${valueInput.value} liters = ${(valueInput.value*literConv).toFixed(3)} gallons | ${valueInput.value} gallons = ${(valueInput.value/literConv).toFixed(3)} liters`)
    
    massMetrics.textContent = (`${valueInput.value} kilos = ${(valueInput.value*kilogramConv).toFixed(3)} pounds | ${valueInput.value} pounds = ${(valueInput.value/kilogramConv).toFixed(3)} kilos`)
}

convertBtn.addEventListener("click", function(){
    setMetrics()
})