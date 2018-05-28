const Car = require('./Car')

const dang = new Car('Nissan', 200)
dang.drive()
dang.showPrice()
// lhong.steerLeft()
// lhong.steerRight()

const dangBrand = dang.getBrand ()
console.log(dangBrand)

const pukki = new Car('Audi', 500)
pukki.drive()
pukki.showPrice()

const pukkiBrand = pukki.getBrand ()
console.log(pukkiBrand)


const tofu = new Car('Honda', 1000)
tofu.drive()
tofu.showPrice()
tofu.steerRight()
tofu.addPrice(50000)

const tofuBrand = tofu.getBrand ()
console.log(tofuBrand)