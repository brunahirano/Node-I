//aula dia 10.05.22 Professor Ademir
import fetch from 'node-fetch'

//setTimeout(() => console.log("hello"), 10)

//fetch usamos para consumir uma API
// fetch("https://gorest.co.in/public/v2/users/3874")
//     .then(response => response.json())
//     .then(data => console.log('result ...', data))
//     .then(() => {
//         throw new Error('erro forcado')
//     })
//     .catch((err) => {
//         console.log('Erro ...', err)
//     })

// console.log("What soup?")

const endPoints = [
    "https://gorest.co.in/public/v2/users/3874",
    "https://gorest.co.in/public/v2/users/3872",
    "https://gorest.co.in/public/v2/users/3871",
    "https://gorest.co.in/public/v2/users/3869"
]

const promises = endPoints.map(
    url => fetch(url)
    .then(res => res.json())
)

//só vai imprimir quando ele conseguir fazer o fetch de todos os endPoints
Promise.all(promises)
    .then(response => console.log(response))