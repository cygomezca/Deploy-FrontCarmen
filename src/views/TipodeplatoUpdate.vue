<template>
    <div v-if="selectedTipodeplato">
        <tipodeplato-form :tipodeplato="selectedTipodeplato"
            @submitForm="updateTipodeplato"
            submitText="Actualizar tipodeplato"
        ></tipodeplato-form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import TipodeplatoForm from '@/components/TipodeplatoForm'

export default {
    name: 'TipodeplatoUpdate',
    components: {
        TipodeplatoForm
    },
    computed: {
        ...mapState('tipodeplatos', ['selectedTipodeplato'])
    },
    methods: {
        ...mapActions({
            _updateTipodeplato: 'tipodeplatos/updateTipodeplato'
        }),
        updateTipodeplato(tipodeplato){
            this._updateTipodeplato(tipodeplato).then(() => {
                this.$router.push({ name: 'tipodeplatos' })
            })
        }
    }
}
</script>