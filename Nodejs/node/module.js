const city = {
    name: 'Santa Cruz',
    country: 'Bolivia'
}


function myName(){
    return new Promise ((resolve) => {
        setTimeout(() => resolve('Jean'), 2000)
    })
}

async function start() {
    const name = await myName()
    console.log(name)
}

start()

export default city