let toBe = "    SoNal GiLl   "
let trimmed = toBe.trim()
let lowerc = trimmed.toLowerCase()
let upperc = trimmed.toUpperCase() 

function trim(){
    console.log(trimmed)
}

function lower(){
   console.log(lowerc)
}

function upper(){
    console.log(upperc)
}

module.exports.trim = trim
module.exports.lower = lower
module.exports.upper = upper
