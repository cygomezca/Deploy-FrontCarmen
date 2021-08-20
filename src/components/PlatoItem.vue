<template>
    <b-card :title="plato.name"
        :img-src="plato.img"
        :img-alt="plato.name"
        img-top
        class="mb-2"
    >
        <p class="muted"> COL $. {{ plato.price }}</p>
        <b-button block
            variant="danger"
            @click="$emit('addToCart', plato)"
        >Agregar al domicilio</b-button>
    </b-card>
</template>

<script>
export default {
    props:{
        plato:{
            type: Object,
            required : true
        }
    }
}
</script>