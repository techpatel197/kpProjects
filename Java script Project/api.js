let p = fetch("https://api.instagram.com/v1/users/{user-id}?")
p.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})