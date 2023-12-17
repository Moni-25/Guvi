let pro1 = new Promise((resolve, reject) =>{
    console.log("Welcome Promise1")
    resolve("Promise1 is Success")
    //reject("Promise1 is Reject")
})

let pro2 = new Promise((resolve, reject) =>{
    console.log("Welcome Promise2")
    //resolve("Promise2 is Success")
    reject("Promise2 is Reject")
})

let pro3 = new Promise((resolve, reject) =>{
    console.log("Welcome Promise3")
    resolve("Promise3 is Success")
    //reject("Promise3 is Reject")
})

pro1.then((val) => {
    console.log(val)
    pro2.then((val) => {
        console.log(val)
        pro3.then((val) => {
            console.log(val)
        })
        .catch(reason => console.error(reason))
    })
    .catch(reason => console.error(reason))
})
.catch(reason => console.error(reason))

