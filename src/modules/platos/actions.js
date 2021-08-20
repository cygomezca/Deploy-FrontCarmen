import Vue from 'vue'

export async function fetchPlatos({ commit }){
    /* const data = await fetch('fixeddata/platos.json'); */
    const platos = await Vue.axios.get('/platos')
    .then(({data})=>{
    commit('setPlatos', data);
    }).catch((error) => {
    commit('platosError', error.message);
    }).finally(() => {
    console.log("Petición de platos resuelta");
});
}