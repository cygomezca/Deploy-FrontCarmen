<template>
    <div>
        <h1>Componente create tipodeplato</h1>
        <tipodeplato-form :tipodeplato="tipodeplato" @submitForm="addTipodeplato"></tipodeplato-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import TipodeplatoForm from '@/components/TipodeplatoForm'

export default {
    name: 'TipodeplatoCreate',
    components:{
        TipodeplatoForm
    },
    data(){
        return {
            tipodeplato: {
                id: null,
                type: '',
                done: false
            }
        }
    },
    methods: {
        ...mapActions({
            createTipodeplato: 'tipodeplatos/addTipodeplatos'
        }),
        addTipodeplato(tipodeplato){
            this.createTipodeplato(tipodeplato).then(() => {
                this.$router.push('/tipodeplatos')
            })
        }
    }
}
</script>