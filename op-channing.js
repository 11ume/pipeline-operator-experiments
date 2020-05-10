import * as R from 'ramda'

const regionNames = (locales, date, opts = {
    weekday: 'long'
}) => new Intl.DateTimeFormat(locales, opts).format(date)

const print = (msg) => console.log(msg)

const getDay = (locales) => (date) => ({
    number: date.getDay()
    , locale: regionNames(locales, date)
})

const setEmoji = (emotions) => (dayNumber) => emotions[dayNumber] ?? '🤷🏻‍♂️'
const setDayLocale = R.curry(R.compose(
    R.join(''),
    R.juxt([R.compose(R.toUpper, R.head), R.tail])
))

const exclaim = R.curry(R.compose(
    R.join(''),
    R.append('!')))

const day = new Date()
    |> getDay('es')

const message = day
    |> R.prop('locale')
    |> setDayLocale
    |> exclaim

const emoji = day
    |> R.prop('number')
    |> setEmoji(['😃', '😑', '🙂', '🙃', '😊', '😁'])

R
    .append(message, emoji)
    .join('')
    |> print

