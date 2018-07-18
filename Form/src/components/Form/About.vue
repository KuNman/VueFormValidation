<template lang="pug">
    div.container.d-flex.flex-column.about
        div.name About
        hr
        form
            div.title.d-flex
                div.text.d-flex(:class="{ 'error' : errors.has('title') ? true : false }")
                    span {{'Title'.toUpperCase() }}
                    span.req  *
                div.content.d-flex
                    input.d-flex(v-model="title"
                    placeholder="Make it short and clear"
                    name="title"
                    v-validate="'required'"
                    :class="{'error' : errors.has('title') ? true : false }"
                    )
                div.errorMsg.d-flex.align-items-center(v-if="errors.has('title')")
                    span.d-flex Title cannot be empty
            div.description.d-flex(:class="{ 'error' : errors.has('description') ? true : false }")
                div.text.d-flex.align-items-start(:class="{'error' : errors.has('description') ? true : false }")
                    span {{'Description'.toUpperCase() }}
                    span.req  *
                div.content.d-flex.flex-column
                    textarea.d-flex(rows="5"
                    v-model="description"
                    name="description"
                    v-validate="'required|max:5'"
                    placeholder="Write about your event, be creative"
                    :class="{'error' : errors.has('description') ? true : false }"
                    )
                    div.info.d-flex
                        div.warning.d-flex.justify-content-start Max length 140 characters
                        div.counter.d-flex.justify-content-end {{description.length}}/140
                div.d-flex.errorMsg(v-if="errors.has('description')")
                    span.d-flex Description cannot be empty
            div.category.d-flex
                div.text.d-flex.align-items-start
                    span {{'category'.toUpperCase() }}
                div.content.d-flex.flex-column.select
                    select.d-flex(rows="5" v-model="category_id")
                        option(v-for="cat in categories" v-bind:value="cat.id") {{cat.name}}
                    div.info.d-flex
                        div.warning.d-flex.justify-content-start Describes topic and people who shoud be interested in this event
            div.payment.d-flex
                div.text.d-flex
                    span {{'payment'.toUpperCase() }}
                div.content.d-flex
                    div.radio.d-flex.align-items-center
                        input.d-flex(type="radio" id="free" :value="false" v-model="paid_event")
                        label.d-flex(for="free") Free event
                    div.radio.d-flex.align-items-center
                        input.d-flex(type="radio" id="paid" :value="true" v-model="paid_event")
                        label.d-flex(for="paid") Paid event
                    div.cost.d-flex(v-if="paid_event")
                        input.d-flex(type="number" v-model="event_fee" placeholder="Fee")
                        span.d-flex.justify-content-end.currency $
            div.reward.d-flex
                div.text.d-flex
                    span {{'reward'.toUpperCase() }}
                div.content.d-flex
                    input.d-flex(type="number" v-model="reward" placeholder="Number")
                    div.d-flex.align-items-center reward points for attendance
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    name: "About",
    methods: {
        ...mapGetters({
            titleGett: 'title',
            descriptionGett: 'description',
            categoryGett: 'category_id',
            categoriesGett: 'categories',
            paid_eventGett: 'paid_event',
            event_feeGett: 'event_fee',
            rewardGett: 'reward'
        }),
        ...mapMutations({
            titleMutt: 'title',
            descriptionMutt: 'description',
            categoryMutt: 'category_id',
            paid_eventMutt: 'paid_event',
            event_feeMutt: 'event_fee',
            rewardMutt: 'reward'
        }),
    },
    computed: {
        title: {
            get() {
                return this.titleGett();
            },
            set(payload) {
                return this.titleMutt(payload);
            }
        },
        description: {
            get() {
                return this.descriptionGett();
            },
            set(payload) {
                return this.descriptionMutt(payload)
            }
        },
        category_id: {
            get() {
                return this.categoryGett();
            },
            set(payload) {
                return this.categoryMutt(payload)
            }
        },
        categories() {
            return this.categoriesGett()
        },
        paid_event: {
            get() {
                return this.paid_eventGett();
            },
            set(payload) {
                return this.paid_eventMutt(payload)
            }
        },
        event_fee: {
            get() {
                return this.event_feeGett();
            },
            set(payload) {
                return this.event_feeMutt(payload)
            }
        },
        reward: {
            get() {
                return this.rewardGett();
            },
            set(payload) {
                return this.rewardMutt(payload)
            }
        },
    },
}
</script>
