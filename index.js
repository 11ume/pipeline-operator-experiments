import * as R from 'ramda'

const print = (str) => console.log(str)
const devices = [
    {
        id: 'avbe3'
        , brand: 'iphone'
        , type: 'phone'
        , model: '11'
        , alias: undefined
    }
    , {
        id: 'xsbe5'
        , brand: 'xiaomi'
        , type: 'phone'
        , model: 'note 8'
        , alias: undefined
    }
]

const getDevice = (devs) => devs |> R.find(R.where({
    brand: R.equals('iphone')
}))

const setAlias = (device) => {
    const d = R.clone(device)
    d.alias ??= 'cool'
    return d
}

devices
    |> getDevice
    |> setAlias
    |> R.prop('alias')
    |> R.toUpper
    |> print
