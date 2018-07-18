<template lang="pug">
    div.container.d-flex.flex-column.about
        div.name About
        hr
        form
            div.title.d-flex
                div.text.d-flex
                    span {{'Title'.toUpperCase() }}
                    span.req  *
                div.content.d-flex
                    input.d-flex(v-model="title" placeholder="Make it short and clear")
            div.description.d-flex
                div.text.d-flex.align-items-start
                    span {{'Description'.toUpperCase() }}
                    span.req  *
                div.content.d-flex.flex-column
                    textarea.d-flex(rows="5" v-model="description" placeholder="Write about your event, be creative")
                    div.info.d-flex
                        div.warning.d-flex.justify-content-start Max length 140 characters
                        div.counter.d-flex.justify-content-end 0/140
            div.category.d-flex
                div.text.d-flex.align-items-start
                    span {{'category'.toUpperCase() }}
                div.content.d-flex.flex-column.select
                    select.d-flex(rows="5" v-model="category")
                    div.info.d-flex
                        div.warning.d-flex.justify-content-start Describes topic and people who shoud be interested in this event
            div.payment.d-flex
                div.text.d-flex
                    span {{'payment'.toUpperCase() }}
                div.content.d-flex
                    div.radio.d-flex.align-items-center
                        input.d-flex(type="radio" id="free" value="0" v-model="payment")
                        label.d-flex(for="free") Free event
                    div.radio.d-flex.align-items-center
                        input.d-flex(type="radio" id="paid" value="1" v-model="payment")
                        label.d-flex(for="paid") Paid event
            div.reward.d-flex
                div.text.d-flex
                    span {{'reward'.toUpperCase() }}
                div.content.d-flex
                    input.d-flex(type="number" placeholder="Number")
                    div.d-flex.align-items-center reward points for attendance
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            payment: 0
        }
    }
}
</script>
