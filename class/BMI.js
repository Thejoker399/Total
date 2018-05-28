const Username = require('./generated.json')

// console.log(Username)

// let sumAge = 0
// let age = []

getBMI = (weight, height) => {
    const BMIcalculator = Math.floor((weight / Math.pow(height / 100, 2)))
    return BMIcalculator
}

// console.log(`จำนวนคน : ${count}`)
for (let i = 0; i < Username.length; i++) {
    const bmi = getBMI(Username[i].weight, Username[i].height)
    console.log(`ชื่อ : ${Username[i].name} , น้ำหนัก : ${Username[i].weight} , ส่วนสูง  : ${Username[i].height}`)
    console.log(`ค่าดัชนีมวลกาย : ${bmi}`)
    if (bmi > 0 && bmi < 18) {
        process.stdout.write('ผอม\n')
    } else if (bmi >= 18 && bmi <= 22) {
        process.stdout.write('ปกติ\n')
    } else if (bmi >= 23 && bmi <= 24) {
        process.stdout.write('ท้วม\n')
    } else if (bmi >= 25 && bmi <= 29) {
        process.stdout.write('อ้วน\n')
    } else if (bmi >= 30) {
        process.stdout.write('อ้วนมาก\n')
    }

}



// console.log(bmi)
// const readline = require('readline');
// const Bmi = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// Bmi.question('กรอกน้ำหนัก : ', (BmiInput) => {
//     if (BmiInput > 0 && BmiInput < 18) {
//         process.stdout.write('ผอม\n')
//     } else if(BmiInput >= 18 && BmiInput <= 22){
//         process.stdout.write('ปกติ\n')
//     } else if(BmiInput >= 23 && BmiInput <= 24){
//         process.stdout.write('ท้วม\n')
//     } else if(BmiInput >= 25 && BmiInput <= 29){
//         process.stdout.write('อ้วน\n')
//     } else if (BmiInput >= 30) {
//         process.stdout.write('อ้วนมาก\n')
//     }
//     Bmi.close()
// })

