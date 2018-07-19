<template lang="pug">
    div.container.d-flex.flex-column.about
        div.name Coordinator
        hr
        form
            div.title.d-flex
                div.text.d-flex(:class="{ 'error' : errors.has('coordinator') ? true : false }")
                    span {{'coordinators'.toUpperCase() }}
                    span.req  *
                div.content.d-flex.flex-column.select
                    select.d-flex(v-model="coordinator")
                        optgroup(label="Me")
                            option(
                            v-for="e in employers"
                            v-if="e.id === 3"
                            :value="{id: e.id, email: e.email}"
                            ) Mr - {{e.name}} {{e.lastname}}
                        optgroup(label="Other")
                            option(
                            v-for="e in employers"
                            v-if="e.id !== 3"
                            :value="{id: e.id, email: e.email}"
                            ) {{Math.ceil(Math.random()*10) > 5 ? 'Mr' : 'Mrs'}} {{e.name}} {{e.lastname}}
            div.title.d-flex
                div.text.d-flex
                    span {{'email'.toUpperCase() }}
                div.content.d-flex
                    input.d-flex(v-model="coordinator.email")



</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';


export default {
    name: "Coordinator",
    methods: {
        ...mapGetters({
            employersGett: 'employers',
            coordinatorGett: 'coordinator',
        }),
        ...mapMutations({
            coordinatorMutt: 'coordinator',
        }),
    },
    computed: {
        employers() {
            return this.employersGett()
        },
        coordinator: {
            set(payload) {
                return this.coordinatorMutt(payload)
            },
            get() {
                return this.coordinatorGett()
            }
        }
    },
}
</script>
