const print = (msg) => console.log(msg)
const regionNames = (locales, date, opts) => new Intl.DateTimeFormat(locales, opts).format(date)
const getDay = (locales, opts) => (date) => ({
    number: date.getDay()
    , locale: regionNames(locales, date, opts)
})

const exclaim = (str) => `${str}!`
const addEmoji = (emotions) => (dayNumber) => emotions[dayNumber] ?? '🤷🏻‍♂️'
const prop = (p) => (obj) => obj[p]
const merge = (...str) => str.flat(str).join(' ')

const day = new Date()
    |> getDay('es', {
        weekday: 'long'
    })

const message = day
    |> prop('locale')
    |> exclaim

const emoji = day
    |> prop('number')
    |> addEmoji(['😃', '😑', '🙂', '🙃', '😊', '😁'])

merge(message, emoji)
    |> print

