const n = 0
let sum
let sum2
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('กรอกเลขห้อง: ', (inputRoomNumber) => {
    rl.question('กรอกค่าน้ำ: ', (inputWaterUnit) => {
        rl.question('กรอกค่าไฟ(หน่วย): ', (inputPEA) => {
            rl.question('ใช้เน็ตหรือไม่(Y/N): ', (chackNet) => {
                rl.question('จำนวนคนที่ใช้เน็ต:', (inputPeple) => {
                    GetSum(inputRoomNumber,inputWaterUnit,inputPEA,chackNet, inputPeple)
                    console.log(`รวม${sum}`)
                    rl.close()
                })
            })
        })
    })
})

GetRoom = (inputRoomNumber) => {
    if (inputRoomNumber >= 100 && inputRoomNumber <= 399) {
        return RoomPrice = 4500
    } else if (inputRoomNumber >= 400 && inputRoomNumber <= 599) {
        return RoomPrice = 5000
    } else if (inputRoomNumber >= 500 && inputRoomNumber <= 599) {
        return RoomPrice = 5200
    } else {
        close.log('หมายเลขห้องผิด')
        
    }

}
GetWaterUnit = (inputWaterUnit) => {
    if (inputWaterUnit <= 4) {
        WaterUnitPrice = 100
        return WaterUnitPrice
    } else if (inputWaterUnit > 5) {
        WaterUnitPrice = inputWaterUnit * 30
        return WaterUnitPrice
    } else {
        return WaterUnitPrice = 0
    }

}
GetPEA = (inputPEA) => {
    const pricePEA = inputPEA * 8
    return pricePEA

}
GetChackNet = (chackNet, inputPeple) => {
    if (chackNet === 'y' || chackNet === 'Y') {
        return priceNet = 150 * inputPeple
    } else if (chackNet === 'n' || chackNet === 'N') {
        return priceNet = 0
    }

} 
GetSum = (inputRoomNumber,inputWaterUnit,inputPEA,chackNet, inputPeple)=>{
    sum = GetRoom(inputRoomNumber)+GetWaterUnit(inputWaterUnit)+GetPEA(inputPEA)+GetChackNet(chackNet, inputPeple)
    return sum
}
