<template>
    <div>
        <b-card>
            <div>
            <b-table stacked :items="empresas" ></b-table>
            <!-- <b-button variant="primary"
                @click="goToUpdateEmpresa"
            >
            Editar
            </b-button> -->
            </div>
        </b-card>
    </div>
</template>


<script>
import {mapState,mapActions, mapMutations} from 'vuex'

export default {
    name: 'EmpresasList',
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
