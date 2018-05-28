const students = ['Tarn','Chai','Kwen','Noon']
const dog ={
    color: 'Red',
    legs: 4,
    name: 'gege',
    child: ['dam','dang','keaw',
    {
        name: 'namngeon',
        legs: 6
    }]
}

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

// if(studentsTall[0].tall < studentsTall[1].tall){
//     console.log('HelloWord')
// }

for(let i = 0; i<studentsTall.length; i++){
    if(studentsTall[i].tall > 165){
        console.log(studentsTall[i].name)
    }
}

