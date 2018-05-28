const Username = require('./user.json')

// console.log(Username)
let count = 0
// for(let i = 0; i<Username.length; i++){
//     if(Username[i].age >= 30){
//         console.log(`ชื่อ : ${Username[i].name} , อายุ : ${Username[i].age}`)
//         count +=1
//     }
// }

let sumAge = 0
let age = []
// console.log(`จำนวนคน : ${count}`)
for(let i=0;i<Username.length;i++){
        // console.log(Username[i].age)
        // count +=1
        sumAge += Username[i].age
        age.push(Username[i].age)
}
console.log(`ค่าเฉี่ลย : ${sumAge/Username.length}`)
console.log(`ค่าน้อยสุด : ${Math.min(...age)}`)
console.log(`ค่ามากสุด : ${Math.max(...age)}`)
