console.log('Ayudaaaaaa')

// function
function myFunction(){
    let name = 'Leticia'
    console.log(name)
}

myFunction()

// arrow functions
const myMoney = () => {
    console.log('no money')
}

// callback
function myNames(callback){
    callback()
}

myNames(myMoney)
