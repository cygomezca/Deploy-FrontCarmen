<template>
    <div v-if="selectedEmpresas">
        <empresa-form :empresa="selectedEmpresas"
            @submitForm="updateEmpresa"
            submitText="Actualizar Empresa"
        ></empresa-form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import EmpresasForm from '@/components/EmpresasForm.vue'

export default {
    name: 'EmpresaUpdate',
    components: {
        EmpresasForm
    },
    computed: {
        ...mapState('empresas', ['selectedEmpresa'])
    },
    methods: {
        ...mapActions({
            _updateEmpresa: 'empresas/updateEmpresa'
        }),
        updateEmpresa(empresa){
            this._updateEmpresa(empresa).then(() => {
                this.$router.push({ name: 'empresas' })
            })
        }
    }
}
</script>