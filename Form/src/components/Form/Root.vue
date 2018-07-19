<template lang="pug">
    div(v-if="!formFilled")
        #{'About'}
        #{'Coordinator'}
        #{'When'}
        button.submit.d-flex(@click="send()") {{'Publish Event'.toUpperCase()}}
    div(v-else)
        div.d-flex.success.container
            div.d-flex.title Success
            div.d-flex.description Event has been created.
</template>

<script>
import About from './About'
import Coordinator from './Coordinator'
import When from './When'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: "Form",
    components: {
        About,
        Coordinator,
        When
    },
    methods: {
        ...mapGetters({
            titleGett: 'title',
            descriptionGett: 'description',
            formFilledGett: 'formFilled'
        }),
        ...mapActions({
            formFilledAct: 'formFilled',
        }),
        send() {
            return this.errors.items.length === 0 && this.titleGett() && this.descriptionGett()
                ? this.formFilledAct()
                : alert('Please fix errors!')
        }
    },
    computed: {
        formFilled() {
            return this.formFilledGett();
        }
    }
}
</script>
