setTimeout(()=>{
    console.log('hello5')
},0)

const helloSome=()=>{
    console.log("hello")
}
console.log("hello2")

setTimeout(()=> {
    console.log('hello4')
},1000)

const helloSomeTwo=()=>{
    console.log('hello3')
}
helloSomeTwo()
helloSome()

//hello2
//hello3
//hello
//hello5
//hello4