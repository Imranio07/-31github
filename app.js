// console.log('Hello')


//DOM -document object model

// console.log(document.body);

// document.body.style.background = 'red'

// const buttons = document.getElementsByClassName('btn')

// const button = document.getElementById('btn1')
// const button = document.getElementsByTagName('button')

// buttons[0].style.background = 'red'
//add() remove() contains()

// console.log(buttons[0].classList)
// buttons[0].classList.add('red')
// buttons[0].classList.remove('red')

// console.log()
// const logger = () => console.log('click')
//
// buttons[0].addEventListener('click', () => {
//     console.log('1')
// })

//
// buttons.forEach(button => {
//     button.onclick = (event) => {
//         if(event.target.classList.contains('red')) {
//             event.target.classList.remove('red')
//         }else{
//             event.target.classList.add('red')
//         }
//     }
// })
// const newButton = document.createElement('Button')
// wrapper.append(newButton)

// Делигирование событий


const buttons = document.querySelectorAll('button')
const wrapper = document.querySelectorAll('.btn-block')

wrapper.addEventListener('click', (event) => {
    const element =event.target()
    if(event.target.tagName.toLowerCase()=== 'button'){
        event.target.addEventListener('click', () => {
            if(e.target.classList.contains('red')){
                e.target.classList.remove('red')
            }else{
                e.target.classList.add('red')
            }
        })
    }
})