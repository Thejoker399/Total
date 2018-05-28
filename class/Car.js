class Car {
    constructor(brand, price){
        this.brand = brand
        this.price = price
    }

    addPrice(addPrice){
        this.price += addPrice
    }

    getBrand(){
        return this.brand
    }

    setBrand(brandName){
        this.brand = brandName
    }

    showPrice(){
        console.log(`This car has price ${this.price} bath`)
    }


    drive(kilo = 10 ){
        console.log(`car ${this.brand} is running.... ${kilo} km`)
    }

    steerLeft(){
        console.log('car is runnung left')
    }
    steerRight(){
        console.log('car is runnung right')
    }


}

module.exports = Car