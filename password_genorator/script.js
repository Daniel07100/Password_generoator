const characterAmountR = document.getElementById('characterAmountR')
const characterAmountN = document.getElementById('characterAmountN')
var value = value
const uppercaseElement = document.getElementById('uppercase')
const iNumbersElement = document.getElementById('iNumbers')
const sCharactersElement = document.getElementById('sCharacters')
const form = document.getElementById('passwordGeneratorF')
characterAmountN.addEventListener('input', syncCharacterAmount)
characterAmountR.addEventListener('input', syncCharacterAmount)



const uppercase_chart_codes = arrayFromLowtoHigh(65, 90)
const lowercase_chart_codes = arrayFromLowtoHigh(97, 122)
const number_chart_codes = arrayFromLowtoHigh(48, 57)
const symbol_character_codes = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(60, 64)
)
const passwordDisplay = document.getElementById('password')

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountN.value
  const includeUppercase = uppercaseElement.checked
  const includeNumbers = iNumbersElement.checked
  const includeSymbols = sCharactersElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password

})
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowercase_chart_codes
  if (includeUppercase) charCodes = charCodes.concat(uppercase_chart_codes)
  if (includeNumbers) charCodes = charCodes.concat(number_chart_codes)
  if (includeSymbols) charCodes = charCodes.concat(symbol_character_codes)
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() *
      characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountN.value = value
  characterAmountR.value = value
}