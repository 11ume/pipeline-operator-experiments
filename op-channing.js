const getIntlLocale = (date, opts) => new Intl.DateTimeFormat('default', opts).format(date)
const getDay = (opts) => (date) => {
    return {
        number: date.getDay()
        , locale: getIntlLocale(date, opts)
    }
}

const prop = (p) => (obj) => obj[p]
const print = (msg) => console.log(msg)
const merge = (...str) => str.flat(str)
const space = (str) => str.join(' ')
const exclaim = (str) => `${str}!`
const addEmoji = (emotions) => (dayNumber) => emotions[dayNumber] ?? '🤷🏻‍♂️'

const day = new Date()
    |> getDay({
        weekday: 'long'
    })

const message = day
    |> prop('locale')
    |> exclaim

const emoji = day
    |> prop('number')
    |> addEmoji(['😃', '😑', '🙂', '🙃', '😊', '😁'])

merge(message, emoji)
    |> space
    |> print

