import fetch from 'node-fetch'

// async function getUser(userId) {
//     let response = await fetch(`https://gorest.co.in/public/v2/users/${userId}`)
//     let userData = await response.json()
//     return userData
// }

// let [user1, user2] = await Promise.all([getUser(3874), getUser(3872)])

// console.log('use1 ....', user1)
// console.log('use2 ....', user2)



async function getUser(userId) {
    let response = await fetch(`https://gorest.co.in/public/v2/users/${userId}`)
    let userData = await response.json()
    return userData
}

let [user1, user2] = await Promise.all([getUser(3874), getUser(3872)])

const ids = [
    3874,
    3872,
    3871
]

for(let id in ids) {
  getUser(id)
  .then(result => console.log(result))
}

