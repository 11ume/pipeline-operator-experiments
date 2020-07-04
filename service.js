// in utils module
const fetch = require('node-fetch')

const delay = (time) => new Promise((r) => setTimeout(r, time))
const fetchDataSafe = (url, options = {}, res = null) => new Promise((resolve) => {
    let reso = null
    fetch(url, options)
        .then((body) => {
            if (res) {
                res(body)
                resolve()
                return
            }

            resolve(body)
        })
        .catch(async () => {
            await delay(5000)
            if (reso === null) {
                reso = resolve
            }

            reso && resolve()
            fetchDataSafe(url, options, reso)
        })
})

const work = 'https://jsonplaceholder.typicode.com/todos/1'
const fail = 'https://jsonplaceholder.typicode'
const e = [fail]

setTimeout(() => {
    e[0] = work
}, 2000)

fetchDataSafe(e).then(console.log).catch(console.error)
// const composeFetchData = (url) => (...methods) => Promise
//     .all(methods.map((method) => method(url)))

// // in user service module
// const getUserByEmail = (email) => (url) => fetchData(`${url}/user?email=${email}`)
// const getSubastas = (url) => fetchData(`${url}/subastas`)
// const getSorteos = (url) => fetchData(`${url}/sorteos`)

// const handleUserDataSucces = ([userData, sorteos, subastas]) => ({
//     error: null
//     , data: {
//         userData
//         , sorteos
//         , subastas
//     }
// })

// const handleUserDataError = (error) => {
//     console.error(error)
//     return {
//         error
//         , data: null
//     }
// }

// export const getUserData = (config) => (email) => {
//     const fetchUserData = composeFetchData(config.url)
//     const resp = fetchUserData(
//         getUserByEmail(email)
//         , getSubastas
//         , getSorteos)

//     return resp
//         .then(handleUserDataSucces)
//         .catch(handleUserDataError)
// }

// const whatDayIsToday = ({ dayNumber, dayLocale }) => ({
//     0: () => createDayMessage(dayLocale, '😃')
//     , 1: () => createDayMessage(dayLocale, '😑')
//     , 3: () => createDayMessage(dayLocale, '🙂')
//     , 4: () => createDayMessage(dayLocale, '🙃')
//     , 5: () => createDayMessage(dayLocale, '😊')
//     , 6: () => createDayMessage(dayLocale, '😁')
// })[dayNumber]?.() ?? '🤷🏻‍♂️'
