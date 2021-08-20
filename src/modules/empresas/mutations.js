export function setEmpresas(state, empresas){
    state.empresas = empresas;
}

export function setEmpresa(state, empresa){
    state.selectedEmpresa = empresa;
}

export function updateEmpresaStatus(state, payload){
    const empresa = state.empresas.find(t => t.id === payload.id);
    if(empresa){
        empresa.done = !empresa.done;
    }
}

export function empresasError(state, payload){
    state.error = true;
    state.errorMessage = payload;
    state.empresas = [];
}