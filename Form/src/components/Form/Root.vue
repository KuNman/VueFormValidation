<template lang="pug">
    div
        #{'About'}
        button.submit.d-flex {{'Publish Event'.toUpperCase()}}

</template>

<script>
import About from './About'

export default {
    name: "Form",
    components: {
        About
    }
}
</script>

<style scoped>

</style>