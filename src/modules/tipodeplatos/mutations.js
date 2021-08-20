export function setTipodeplatos(state, tipodeplatos){
    state.tipodeplatos = tipodeplatos;
}

export function setTipodeplato(state, tipodeplato){
    state.selectedTipodeplato = tipodeplato;
}

export function updateTipodeplatoStatus(state, payload){
    const tipodeplato = state.tipodeplatos.find(t => t.id === payload.id);
    if(tipodeplato){
        tipodeplato.done = !tipodeplato.done;
    }
}

export function tipodeplatosError(state, payload){
    state.error = true;
    state.errorMessage = payload;
    state.tipodeplatos = [];
}