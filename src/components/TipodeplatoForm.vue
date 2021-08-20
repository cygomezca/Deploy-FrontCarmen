<template>
    <b-form @submit.prevent="$emit('submitForm', tipodeplato)">
        <b-form-group id="tipodeplato-input"
            label="Tipodeplato"
            label-for="tipodeplato"
        >
            <b-form-input autocomplete="off"
                id="tipodeplato"
                v-model="tipodeplato.text"
                placeholder="Introduce la tarea"
                :state="!$v.tipodeplato.type.$invalid"
                @input="$v.tipodeplato.$touch"
            > </b-form-input>
            <b-form-invalid-feedback id="tipodeplatoInfo"
                v-if="$v.tipodeplato.$dirty"
            >
                Este campo es requerido y con unas long min de 4 char
            </b-form-invalid-feedback>
        </b-form-group>

        <b-button type="submit"
            variant="primary"
            :disabled="$v.tipodeplato.$invalid"
        >
            {{ submitType }}
        </b-button>
    </b-form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'TipodeplatoForm',
    mixins: [validationMixin],
    props:{
        tipodeplato: {
            type: Object,
            required: true
        },
        submitType: {
            type: String,
            default: 'Crear tipodeplato'
        }
    },
    validations: {
        tipodeplato: {
            type: {
                required, minLength: minLength(4)
            }
        }
    }
}
</script>