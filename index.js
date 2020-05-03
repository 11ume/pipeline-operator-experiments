const createUser = ({ name, active = false }) => ({
    name
    , active
})

const capitalizeName = ({ name }) => name.charAt(0).toUpperCase() + name.slice(1)
const writeMessage = (name) => `${name}!`
const greet = (userName) => `Hello Im ${userName}`
// eslint-disable-next-line no-console
const print = (msg) => console.log(msg)

const horacio = createUser({
    name: 'horacio'
})

horacio
    |> writeMessage
    |> capitalizeName
    |> greet
    |> print
