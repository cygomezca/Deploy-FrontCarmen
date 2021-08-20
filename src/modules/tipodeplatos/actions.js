import Vue from 'vue'

export async function fetchTipodeplatos({ commit }){
    await Vue.axios.get('/tipodeplatos').then(({ data }) => {
        commit('setTipodeplatos', data);
    }).catch((error) => {
        commit('tipodeplatosError', error.message);
    }).finally(() => {
        console.log("Petición de fetchTipodeplatos resuelta");
    });
}

export async function addtipodeplatos({ commit, dispatch }, tipodeplato){
    await Vue.axios.post('/tipodeplatos', {
        id: Date.now(),
        type: tipodeplato.type,
        done: false
    }).catch((error) => {
        commit('tipodeplatosError', error.message);
    }).finally(() => {
        dispatch('fetchTipodeplatos');
        console.log("Petición de addTipodeplatos resuelta");
    });
}

export async function updatetipodeplato({ commit }, tipodeplato){
    await Vue.axios.put(`/tipodeplatos/${ tipodeplato.id }`, {
        id: tipodeplato.id,
        type: tipodeplato.type,
        done: tipodeplato.done
    }).catch((error) => {
        commit('tipodeplatosError', error.message);
    }).finally(() => {
        console.log("Petición de updateTodo resuelta");
    });
}

export async function updateStatusTipodeplato({ commit, dispatch }, todo){
    await Vue.axios.put(`/tipodeplatos/${ tipodeplato.id }`, {
        id: tipodeplato.id,
        type: tipodeplato.type,
        done: !tipodeplato.done
    }).catch((error) => {
        commit('tipodeplatos Error', error.message);
    }).finally(() => {
        dispatch('fetchTipodeplatos');
        console.log("Petición de updateTipodeplato resuelta");
    });
}

export async function deleteTipodeplato({ commit, dispatch }, tipodeplato){
    await Vue.axios.delete(`/tipodeplatos/${ tipodeplato.id }`)
    .catch((error) => {
        commit('tipodeplatosError', error.message);
    }).finally(() => {
        dispatch('fetchTipodeplatos');
        console.log("Petición de deleteTipodeplato resuelta");
    });
}