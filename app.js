/*
//NaN
var number = 78 / 'qwerty'
console.log(typeof number)

//switch..case
var age = Number(prompt('age'))
switch (age){
    case 18:
        console.log('error')
        break
    case 19:
        console.log('noob')
        break
    case 20:
        console.log('goob')
        break
    default:
        console.log('Ostrich')
}
*/
//ссылочные типы данных
//object
var human = {
    name: 'John',
    age: 32,
    phoneNumber: undefined,
    isMarried: true,
    f: {
        d: {

        }
    },
    // 32: 'age',
    // [12]:{}
}
console.log(human.f)

//добавление
human.course = 'GEEKS'
console.log(human)
//удаление
delete human.f
console.log(human)
//Изменение
human['phoneNumber'] = null
console.log(human)
//методы
console.log(Object.keys(human))
console.log(Object.values(human))
console.log(Object.entries(human))
console.log(Object.hasOwnProperty('name'))

//array
var array = ['a','b','c', 5, true, null,6]
console.log(array[0])
console.log(array.length-1)
console.log(array[8])
array[8]='t'

var num = 10;
num = 'text'
console.log(num)

//циклы
//while
// var count = 0
// while(count!=11){
//     console.log(count)
//     count++
// }
/*
while (10){
    console.log(count)
    count++
}*/
//for
for (var count = 0; count < 20;count++){
    console.log(count)
}

var names = ['aidana','john','aliya']
//for..in
for(var i=0;i<names.length;i++){
    if(names[i].substr(0,1)==="a"){
        console.log(names[i])
    }
    if(names[i][0]==='a' || names[i][0]==='A'){
        console.log(`name with letter a- ${names[i]}`)
    }else{
        console.log(` other names- ${names[i]}`)
    }
}
//for.. of[]
var numbers = [1,2,3,4,5,6]
for(var number2 of numbers){
    console.log(number2)
}

//for..in{}
for(var key in human){
    console.log(human[key])
}

//методы массива
var arr = ['a', 'b', 'c','d', 'e']
console.log(arr)
arr.reverse()
console.log(arr)

arr.push('f')
console.log(arr)
arr.unshift('p')
console.log(arr)

var sr =arr.pop()
console.log(sr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.length)
arr.splice(0, 3, 'o')
console.log(arr)
arr.splice(1)
console.log(arr)