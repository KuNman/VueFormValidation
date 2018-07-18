import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        about: {
            title: '',
            description: '',
            category_id: '',
            paid_event: false,
            event_fee: 0,
            reward: '',
        },
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
        formFilled: false
    },
    getters: {
        title: state => state.about.title,
        description: state => state.about.description,
        category_id: state => state.about.category_id,
        categories: state => state.categories,
        paid_event: state => state.about.paid_event,
        event_fee: state => state.about.event_fee,
        reward: state => state.about.reward,
        formFilled: state => state.formFilled,
    },
    mutations: {
        title: (state, payload) => {
            state.about.title = payload
        },
        description: (state, payload) => {
            state.about.description = payload
        },
        category_id: (state, payload) => {
            state.about.category_id = payload
        },
        paid_event: (state, payload) => {
            state.about.paid_event = payload
        },
        event_fee: (state, payload) => {
            state.about.event_fee = payload
        },
        reward: (state, payload) => {
            state.about.reward = payload
        },
        formFilled: (state) => {
            state.formFilled = true
        }

    },
    actions: {
        formFilled({commit}) {
            console.log(this.state.about);
            commit('formFilled');
        }
    }
})