<template>
    <div>
        <b-card>
            <div>
            <b-table stacked :items="empresa" ></b-table>
            <b-button variant="primary"
                @click="goToUpdateEmpresa"
            >
            Editar
            </b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
    name: 'EmpresaItem',
    props:{
        empresa: {
            type: Object,
            required: true
        }
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