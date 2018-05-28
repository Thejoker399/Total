const studentsTall = [
    {
        name: 'Danny',
        tall:155
    },{
        name: 'Panny',
        tall:165
    },{
        name: 'Canny',
        tall:167
    },{
        name: 'Mommy',
        tall:180
    }
]


const log =(message) => {
    console.log(message)
}

// log ('hello world - 1')
// log ('hello world - 2')
// log ('hello world - 3')

// const exampleFunction = (callback) => {
//     console.log('main function')
//     callback ('a')
// }

// const callback1 = () => {
//     console.log('Teemo')
// }

// exampleFunction(callback1)

const printNameStudent = (student) => {
    log(student.name)
}

const printTallStudent = (student) => {
    log(student.tall)
}

const filterTallStudent = 

studentsTall.forEach((student) => {
    if(student.tall > 165){
        log(student.name)
    }
})