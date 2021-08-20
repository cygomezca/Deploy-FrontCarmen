<template>
    <div>
    <empresas-list>
    </empresas-list>
    </div>
</template>



<script>
import { mapActions, mapGetters } from 'vuex'

import EmpresasList from '@/components/EmpresasList'
export default {
    name: 'Empresas',
    components:{
        EmpresasList
    },
    mounted(){
        this.fetchEmpresas()
    },
    methods:{
        ...mapActions('empresas', ['fetchEmpresas'])
    }
}
</script>