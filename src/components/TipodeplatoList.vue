<template>
    <div v-if="tipodeplatos.length">
        <tipodeplato-item
            v-for="tipodeplato in tipodeplatos"
            :key="tipodeplato.id"
            :tipodeplato="tipodeplato"
        ></tipodeplato-item>
    </div>
    <b-alert v-else show variant="light">
        No hay tipodeplatos
    </b-alert>
</template>

<script>
import TipodeplatoItem from './TipodeplatoItem.vue'

export default {
    name: 'TipodeplatoList',
    components:{
        TipodeplatoItem
    },
    props:{
        tipodeplatos: {
            type: Array,
            required: true
        }
    }
}
</script>