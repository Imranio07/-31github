//event loop - Цикл Событий
// Основы  асинхронасти
//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//
// setTimeout(() => {
//     console.log('1')
// }, 0)
//
// setTimeout(() => {
//     console.log('2')
// }, 0)
// console.log(3)
// setTimeout(() => {
//     console.log('4')
// }, 0)
//
// const interval = setInterval(() => {
//     console.log('Hello')
// },1000)
// setTimeout(() => {
//     clearInterval(interval)
// },5000)



// const logger = () => console.log('LOG!')
//
// setTimeout(logger, 3000)

//evet loop - цикл событий
// const btn =  document.querySelector('button').onclick = () => {
//     console.log('btn')
// }

// var num=0
//
// function count (){
//     num = num + 1
//     if(num=999999999999999999999999999999){
//         count()
//     }
//     console.log(num)
//     count()
// }
// count()

//HOF-high ordered functions

const subject = prompt('subject?')

const doHomeWork = ( finish, subject )=> {
    alert (`starting my ${subject} homework`)
    finish()
}
const alertFinish = () => alert('FINISH!')
doHomeWork(alertFinish, subject)

