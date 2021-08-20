<template>
    <empresas-list></empresas-list>
</template>

<script>
import {mapState,mapActions, mapMutations} from 'vuex'

export default {
    name: 'EmpresasForm',
    mounted(){
        this.fetchEmpresas();
    },
    computed:{
        ...mapState('empresas', ['empresas']),
    },
    methods:{
        ...mapActions('empresas', ['fetchEmpresas']),
        ...mapMutations('empresas', ['setEmpresa']),
            goToUpdateEmpresa(){
                this.setEmpresa(this.empresas)
                this.$router.push({
                    name: 'empresas-update',
                    params: { id: this.empresa.id }
                })
            }
    }
}
</script>
