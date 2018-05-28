const calRoom = (numberRoom) => {
    if (numberRoom >= 101 && numberRoom <= 110 || numberRoom >= 201 && numberRoom <= 210 || numberRoom >= 301 && numberRoom <= 310) {
        return totalRoom = 4500
    } else if (numberRoom >= 401 && numberRoom <= 410 || numberRoom >= 501 && numberRoom <= 510) {
        return totalRoom = 5000
    } else if (numberRoom >= 601 && numberRoom <= 610) {
        return totalRoom = 5200
    } else {
        return totalRoom = "กรอกเลขห้องไม่ถูกต้อง!!"
    }
}
const calElectricity = (numberElectricity) => {
    return totalCost = numberElectricity * 8
}
const calWater = (waterUnit) => {
    if (waterUnit >= 0 && waterUnit <= 4) {
        totalWater = 100
    }
    if (waterUnit > 4) {
        totalWater = 100 + ((waterUnit - 4) * 30)
    }
    return totalWater
}
const calInternet = (numberInput, internet) => {
    if (internet === 'y' || internet === 'Y') {
        return totalInternet = numberInput * 150
    } else if (internet === 'n' || internet === 'N') {
        return totalInternet = 0
    }
}
const cal = (totalRoom, totalCost, totalInternet, totalWater) => {
    return total = totalRoom + totalCost + totalInternet + totalWater
}
const searchingRoom = (numberRoom) => {
    if (numberRoom >= 101 && numberRoom <= 110) {
        return `ชั้น 1 ห้อง ${numberRoom}`
    } else if (numberRoom >= 201 && numberRoom <= 210) {
        return `ชั้น 2 ห้อง ${numberRoom}`
    } else if (numberRoom >= 301 && numberRoom <= 310) {
        return `ชั้น 3 ห้อง ${numberRoom}`
    } else if (numberRoom >= 401 && numberRoom <= 410) {
        return `ชั้น 4 ห้อง ${numberRoom}`
    } else if (numberRoom >= 501 && numberRoom <= 510) {
        return `ชั้น 5 ห้อง ${numberRoom}`
    } else if (numberRoom >= 601 && numberRoom <= 610) {
        return `ชั้น 6 ห้อง ${numberRoom}`
    } else {
        return "กรอกเลขห้องไม่ถูกต้อง!!"
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log(`\n******** Program คำนวณค่าหอพัก ********`)
rl.question('\nกรอกเลขห้อง: ', (numberRoom) => {
    rl.question('\nกรอกจำนวนหน่วยน้ำ: ', (waterUnit) => {
        rl.question('\nกรอกจำนวนหน่วยไฟฟ้า: ', (numberElectricity) => {
            rl.question('\nมีเน็ต(y)/ไม่มีเน็ต(n): ', (internet) => {
                rl.question('\nกรอกจำนวนคน: ', (numberInput) => {
                    
                    console.log('\n')
                    console.log('-----ค่าหอพัก----- \n')
                    calRoom(numberRoom)
                    console.log(searchingRoom(numberRoom))
                    console.log(`ค่าห้อง: ${totalRoom}`)
                    calWater(parseInt(waterUnit))
                    console.log(`ค่าน้ำ: ${totalWater}`)
                    calElectricity(parseInt(numberElectricity))
                    console.log(`ค่าไฟ: ${totalCost}`)
                    calInternet(parseInt(numberInput), internet)
                    console.log(`ค่าอินเตอร์เน็ต: ${totalInternet}`)
                    cal(totalRoom, totalCost, totalInternet, totalWater)
                    console.log(`รวม: ${total} \n`)
                    rl.close()

                })
            })
        })
    })
})


