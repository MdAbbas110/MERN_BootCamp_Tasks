function isStrongPassword(password) {
    if (password.length < 8 ){
        return false 
    }
    if (password.includes('password')) {
        return false
    }
    let hasUppercase = false 
    for (let char of password) {
        if(char === char.toUpperCase() && char !== char.toLowerCase()){
            hasUppercase = true
            break
        }
    }
    if (!hasUppercase) {
        return false 
    }
   return true
}

let pass = 'wee'
isStrongPassword(pass)