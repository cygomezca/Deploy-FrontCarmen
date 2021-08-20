<template>
    <b-container class="mt-3">
        <b-row>
            <b-col cols="9">
                <slot name="platos"></slot>
            </b-col>
            <b-col cols="3">
                <slot name="cart"></slot>
            </b-col>
        </b-row>
    </b-container>
</template>