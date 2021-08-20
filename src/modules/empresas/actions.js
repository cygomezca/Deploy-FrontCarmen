import Vue from 'vue'

export async function fetchEmpresas({ commit }){
    await Vue.axios.get('/empresas').then(({ data }) => {
        commit('setEmpresas', data);
    }).catch((error) => {
        commit('empresasError', error.message);
    }).finally(() => {
        console.log("Petición de fetchEmpresas resuelta");
    });
}

export async function updateEmpresa({ commit }, empresa){
    await Vue.axios.put(`/empresas/${ empresa.id }`, {
        id: empresa.id,
        nombre: empresa.nombre,
        direccion: empresa.direccion,
        departamento: empresa.departamento,
        cuidad: empresa.cuidad,
        telefono: empresa.telefono,
        done: empresa.done
    }).catch((error) => {
        commit('empresasError', error.message);
    }).finally(() => {
        console.log("Petición de updateTodo resuelta");
    });
}

export async function updateStatusEmpresa({ commit, dispatch }, todo){
    await Vue.axios.put(`/empresas/${ empresa.id }`, {
        id: empresa.id,
        nombre: empresa.nombre,
        direccion: empresa.direccion,
        departamento: empresa.departamento,
        cuidad: empresa.cuidad,
        telefono: empresa.telefono,
        done: !empresa.done
    }).catch((error) => {
        commit('empresasError', error.message);
    }).finally(() => {
        dispatch('fetchEmpresas');
        console.log("Petición de updateEmpresa resuelta");
    });
}
