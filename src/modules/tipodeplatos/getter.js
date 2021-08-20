export function pending(state){
    return state.tipodeplatos.filter(tipodeplato => !tipodeplato.done)
}

export function done(state){
    return state.tipodeplatos.filter(tipodeplato => tipodeplato.done)
}