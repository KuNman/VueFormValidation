<template lang="pug">
    div.container.d-flex.flex-column.about
        div.name When
        hr
        form.when
            div.title.d-flex
                div.text.d-flex
                    span {{'Starts on'.toUpperCase() }}
                    span.req  *
                div.content.d-flex
                    input.date.d-flex(type="date" :min="minDate" v-model="day" placeholder="dd/mm/yyyy")
                    span.d-flex.justify-content-center.align-items-center at
                    input.time.d-flex(type="time" placeholder="--:--" v-model="time" min="00:00" max="12:00")
                    div.am.d-flex.justify-content-center.align-items-center
                        input.d-flex(type="radio" id="am" value="am" v-model="clock")
                        label.d-flex(for="am") AM
                    div.pm.d-flex.justify-content-center.align-items-center
                        input.d-flex(type="radio" id="pm" value="pm" v-model="clock")
                        label.d-flex(for="pm") PM
            div.title.d-flex
                div.text.d-flex
                    span {{'Duration'.toUpperCase() }}
                div.content.d-flex
                    input.duration.d-flex(type="number" v-model="duration" placeholder="Number")
                    div.d-flex.align-items-center hours
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
    name: "When",
    data() {
        return {
            minDate: new Date().toISOString().split('T')[0]
        }
    },
    methods: {
        ...mapGetters({
            durationGett: 'duration',
            clockGett: 'clock',
            dayGett: 'day',
            timeGett: 'time',
        }),
        ...mapMutations({
            durationMutt: 'duration',
            clockMutt: 'clock',
            dayMutt: 'day',
            timeMutt: 'time',
        }),
    },
    computed: {
        duration: {
            set(payload) {
                return this.durationMutt(payload)
            },
            get() {
                return this.durationGett()
            }
        },
        clock: {
            set(payload) {
                return this.clockMutt(payload)
            },
            get() {
                return this.clockGett()
            }
        },
        day: {
            set(payload) {
                return this.dayMutt(payload)
            },
            get() {
                return this.dayGett()
            }
        },
        time: {
            set(payload) {
                return this.timeMutt(payload)
            },
            get() {
                return this.timeGett()
            }
        }
    },
}
</script>
