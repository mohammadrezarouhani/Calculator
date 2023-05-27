
const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumulativeCalculation

function calculate(button) {
    const value = button.textContent
    console.log(value)
    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === '=') {
        let cal=eval(accumulativeCalculation)
        screenDisplay.textContent = cal
        calculation=[cal]
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)))