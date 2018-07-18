<template lang="pug">
    div
        #{'About'}
        button.submit.d-flex(@click="alert()") {{'Publish Event'.toUpperCase()}}
</template>

<script>
import About from './About'

export default {
    name: "Form",
    components: {
        About
    },
    methods: {
        alert() {
            return this.errors.items.length === 0 ? alert('ok') : alert('Please fix errors!')
        }
    }
}
</script>

<style scoped>

</style>