const getIntlLocale = (date, locale, opts) => new Intl.DateTimeFormat(locale, opts).format(date)
const getDay = (locale, opts) => (date) => {
    return {
        number: date.getDay()
        , locale: getIntlLocale(date, locale, opts)
    }
}

const prop = (p) => (obj) => obj[p]
const print = (msg) => console.log(msg)
const merge = (...str) => str.flat(str)
const space = (str) => str.join(' ')
const exclaim = (str) => `${str}!`
const capitalice = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const addEmoji = (emotions) => (index) => emotions[index] ?? '🤷🏻‍♂️'

const emojis = ['😃', '😑', '🙂', '🙃', '😊', '😁']
const day = new Date()
    |> getDay('es', {
        weekday: 'long'
    })

const message = day
    |> prop('locale')
    |> capitalice
    |> exclaim

const emoji = day
    |> prop('number')
    |> addEmoji(emojis)

merge(message, emoji)
    |> space
    |> print

