var fs = require('fs')
array = fs.readFileSync('/Users/sirinrat/Downloads/double_squares.Small.input', 'utf8')
input = array.split('\n')
let countInput = parseInt(input[0])
for (k = 1; k <= countInput; k++) {
    let count = 0
    let number = parseInt(input[k])
    let total = Math.floor(Math.sqrt(number))
    for (let i = total; i >= 0; i--) {
        let sum = i * i
        for (j = i; j >= 0; j--) {
            let num = sum + (j * j)
            if (num === number) {
                count++
            }
        }

    }
    console.log(`Case #${k} :${count}`)
}

