<template>
    <div v-if="platos.length">
        <paginate
            name="platos"
            :list="platos"
            :per="perPage"
        >
            <b-card-group columns>
                <plato-item
                v-for="item in paginated('platos')"
                :key="item.id"
                :plato="item"
                @addToCart="addPlatoToCart"
                ></plato-item>
            </b-card-group>
        </paginate>
        <paginate-links for="platos"
            :classes ="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a':'page-link'
            }"
        ></paginate-links>
    </div>
<b-alert v-else variant="info" show>No hay este plato disponible</b-alert>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import PlatoItem from '@/components/PlatoItem'

export default {
    name: 'PlatosList',
    components:{
        PlatoItem
    },
    data(){
        return{
            paginate:['platos'],
            perPage:9,
        }
    },
    mounted(){
        this.fetchPlatos();
    },
    computed:{
        ...mapState('platos', ['platos'])
    },
    methods: {
        ...mapActions('platos', ['fetchPlatos']),
        ...mapMutations('cart', ['addPlato']),
        addPlatoToCart(plato){
            this.addPlato(plato);
        }
    }
}
</script>
