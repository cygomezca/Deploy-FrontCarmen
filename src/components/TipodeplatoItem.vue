<template>
    <b-row class="mb-2">
        <b-col cols="4"> {{ tipodeplato.type }} </b-col>
        <b-col cols="2"> {{ tipodeplato.done }} </b-col>
        <b-col>
            <b-button variant="primary"
                @click="goToUpdateTipodeplato"
            >
                Editar
            </b-button>
            <b-button variant="warning"
                @click="updateStatusTipodeplato"
            >
                Estado
            </b-button>
            <b-button variant="danger"
                @click="deleteTipodeplato"
            >
                Eliminar
            </b-button>
        </b-col>
    </b-row>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
    name: 'TipodeplatoItem',
    props:{
        tipodeplato: {
            type: Object,
            required: true
        }
    },
    methods:{
        ...mapActions({
            _updateStatusTipodeplato: 'tipodeplatos/updateStatusTipodeplato',
            _removeTipodeplato: 'tipodeplatos/deleteTipodeplato'
        }),
        ...mapMutations('tipodeplatos', ['setTipodeplato']),
        goToUpdateTipodeplato(){
            this.setTipodeplato(this.tipodeplato)
            this.$router.push({
                name: 'tipodeplatos-update',
                params: { id: this.tipodeplato.id }
            })
        },
        updateStatusTipodeplato(){
            this._updateStatusTipodeplato(this.tipodeplato)
        },
        deleteTipodeplato(){
            this._removeTipodeplato(this.tipodeplato)
        }
    }
}
</script>