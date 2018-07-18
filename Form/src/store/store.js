import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        title: '',
        description: '',
        category_id: '',
        categories: [
            {
                "id": 0,
                "name": "Cycling"
            },
            {
                "id": 1,
                "name": "Hiking"
            },
            {
                "id": 2,
                "name": "Cooking"
            },
            {
                "id": 3,
                "name": "Rock climbing"
            },
            {
                "id": 4,
                "name": "Yoga"
            },
            {
                "id": 5,
                "name": "Fencing"
            },
            {
                "id": 6,
                "name": "Swimming"
            },
            {
                "id": 7,
                "name": "Badminton"
            },
            {
                "id": 8,
                "name": "Running"
            },
            {
                "id": 9,
                "name": "Dance"
            }
        ],
        paid_event: false,
        event_fee: 0,
        reward: '',
    },
    getters: {
        title: state => state.title,
        description: state => state.description,
        category_id: state => state.category_id,
        categories: state => state.categories,
        paid_event: state => state.paid_event,
        event_fee: state => state.event_fee,
        reward: state => state.reward,
    },
    mutations: {
        title: (state, payload) => {
            state.title = payload
        },
        description: (state, payload) => {
            state.description = payload
        },
        category_id: (state, payload) => {
            state.category_id = payload
        },
        paid_event: (state, payload) => {
            state.paid_event = payload
        },
        event_fee: (state, payload) => {
            state.event_fee = payload
        },
        reward: (state, payload) => {
            state.reward = payload
        },

    },
    actions: {
        formFilled({commit}) {

        }
    }
})