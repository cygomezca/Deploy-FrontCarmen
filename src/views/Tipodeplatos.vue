<template>
    <div class="mt-5">
        <b-row>
            <b-col cols="6">
                <h2>Tipodeplatos pendientes</h2>
                <tipodeplato-list :tipodeplatos="pending"></tipodeplato-list>
            </b-col>
            <b-col cols="6">
                <h2>Tipodeplatos listos</h2>
                <tipodeplato-list :tipodeplatos="done"></tipodeplato-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import TipodeplatoList from '@/components/TipodeplatoList'

export default {
    name: 'Tipodeplatos',
    components:{
        TipodeplatoList
    },
    computed:{
        ...mapGetters('tipodeplatos', ['pending', 'done'])
    },
    mounted(){
        this.fetchTipodeplatos()
    },
    methods:{
        ...mapActions('tipodeplatos', ['fetchTipodeplatos'])
    }
}
</script>