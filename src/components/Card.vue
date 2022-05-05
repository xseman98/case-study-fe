<template>
    <v-card 
        class="elevation-8"
        style="border-radius: max(2vw, 20px)"
        :height="cardHeight"
        :width="cardWidth"
        :color="cardColor"
        :loading="isLoading">
            <template slot="progress">
                <v-progress-linear color="warning" indeterminate></v-progress-linear>
            </template>
            
            <v-card-title class="justify-start">
                <p id="card-margin">
                    <slot name="heading"></slot>
                </p>
            </v-card-title>

            <v-card-text>
                <slot name="body" id="card-margin"></slot>
            </v-card-text>

            <v-card-actions class="justify-end">
                <p id="card-margin">
                    <slot name="footer" id="card-margin"></slot>
                </p>
            </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'Card',

    props: {
        'cardHeight': {
            type: String,
            default: 'auto',
            required: true,
        },

        'cardWidth': {
            type: String,
            default: '5vw',
            required: true,
        },

        'cardColor': {
            type: String,
            default: 'primary',
            required: false,
        },

        'isLoading': {
            type: Boolean,
            default: false,
            required: false,
        }
    },
}
</script>

<style scoped src="@/assets/css/style.css">
</style>