let priceroom
const readline = require('readline');
const num = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

num.question('กรอกเลขห้อง : ', (room) => {
    num.question('กรอกเลขค่าไฟ : ', (unit) => {
        num.question('กรอกเลขค่าน้ำ: ', (water) => {
            num.question('รับเน็ตไหม? (Y/N): ', (countNet) => {
                if (countNet === 'Y' || countNet === 'y') {
                    num.question('กรอกจำนวนคน: ', (net) => {
                        console.log(`***********************************`)
                        console.log(`ค่าห้อง : ${getRoomprice(room)}`)
                        console.log(`ค่าไฟ : ${getUnit(unit)}`)
                        console.log(`ค่าน้ำ : ${getWater(water)}`)
                        console.log(`ค่าเน็ต : ${getNet(net, countNet)}`)
                        console.log(`-------------ค่าหอพัก---------------`)
                        getNet(net, countNet)
                        console.log(`ค่าใช้จ่ายทั้งหมด : ${getTotal(unit, water, net, room, countNet)}`)
                        num.close()
                    })

                } else if (countNet === 'N' || countNet === 'n') {
                    let net 
                    getNet(net, countNet)
                    console.log(`ค่าใช้จ่ายทั้งหมด : ${getTotal(unit, water, net, room, countNet)}`)
                    num.close()
                }

            })
        })
    })
})

getUnit = (unit) => {
    const unitsCalculator = unit * 8
    return unitsCalculator
}


getWater = (water) => {
    let waterCalculator
    if (water <= 4) {
        waterCalculator = 100
    } else {
        waterCalculator = water * 30
    }
    return waterCalculator
}


getNet = (net, countNet) => {
    let netCalculator

    if (countNet === 'Y' || countNet === 'y') {
        netCalculator = net * 150
    } else if (countNet === 'N' || countNet === 'n') {

        netCalculator = 0
    }
    return netCalculator
}


getRoomprice = (room) => {
    let roompriceCalculator
    if (room >= 101 && room <= 110) {
        process.stdout.write("ชั้น 1\n")
        roompriceCalculator = 4500
    } else if (room >= 201 && room <= 210) {
        process.stdout.write("ชั้น 2\n")
        roompriceCalculator = 4500
    } else if (room >= 301 && room <= 310) {
        process.stdout.write("ชั้น 3\n")
        roompriceCalculator = 4500
    } else if (room >= 401 && room <= 410) {
        process.stdout.write("ชั้น 4\n")
        roompriceCalculator = 5000
    } else if (room >= 501 && room <= 510) {
        process.stdout.write("ชั้น 5\n")
        roompriceCalculator = 5000
    } else if (room >= 601 && room <= 610) {
        process.stdout.write("ชั้น 6\n")
        roompriceCalculator = 5200

    } else {
        process.stdout.write("เลขที่ห้องของท่านผิดผลาด\n")

    }
    return roompriceCalculator
}
getTotal = (unit, water, net, room, countNet) => {
    const totalCalculator = getUnit(unit) + getWater(water) + getNet(net, countNet) + getRoomprice(room)
    return totalCalculator
}