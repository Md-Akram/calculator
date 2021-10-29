// selecting dom elements
const body = document.querySelector('body')
const inputs = document.querySelectorAll('input')
const numDisplay = document.querySelector('.num-display')
const buttons = document.querySelectorAll('button')
let value = ''

// adding eventListeners
inputs.forEach((input) => {
  input.addEventListener('click', (e) => {
    let themeNum = e.target.value
    themeChanger(themeNum)
  })
})

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let clickedBtn = e.target.value

    if (clickedBtn == 'del') {
      let length = value.length
      value = value.substring(0, value.length - 1)
      numDisplay.textContent = value
    } else if (clickedBtn == 'reset') {
      value = ''
      numDisplay.textContent = ''
    } else if (clickedBtn == '=') {
      let evaluated = eval(value)
      numDisplay.textContent = evaluated
      value = evaluated
    } else {
      value += clickedBtn
      numDisplay.textContent = value
    }
  })
})

// functions
function themeChanger(themeNum) {
  body.classList = `theme-${themeNum}`
}
