import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        js: {
            title: '',
            description: '',
            category_id: '',
            paid_event: false,
            event_fee: null,
            reward: '',
            coordinator: {
                id: '3',
                email: 'walter.nelson@hussa.rs'
            },
            duration: null,
            date: null
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
        employers: [
            {
                "id": 0,
                "name": "Daniel",
                "lastname": "Mitchell",
                "email": "daniel.mitchell@hussa.rs"
            },
            {
                "id": 1,
                "name": "Albert",
                "lastname": "Alexander",
                "email": "albert.alexander@hussa.rs"
            },
            {
                "id": 2,
                "name": "Philip",
                "lastname": "Hughes",
                "email": "philip.hughes@hussa.rs"
            },
            {
                "id": 3,
                "name": "Walter",
                "lastname": "Nelson",
                "email": "walter.nelson@hussa.rs"
            },
            {
                "id": 4,
                "name": "Ashley",
                "lastname": "Hernandez",
                "email": "ashley.hernandez@hussa.rs"
            },
            {
                "id": 5,
                "name": "Donna",
                "lastname": "Washington",
                "email": "donna.washington@hussa.rs"
            },
            {
                "id": 6,
                "name": "Andrew",
                "lastname": "White",
                "email": "andrew.white@hussa.rs"
            },
            {
                "id": 7,
                "name": "Sharon",
                "lastname": "Allen",
                "email": "sharon.allen@hussa.rs"
            },
            {
                "id": 8,
                "name": "Russell",
                "lastname": "Parker",
                "email": "russell.parker@hussa.rs"
            },
            {
                "id": 9,
                "name": "Janet",
                "lastname": "Stewart",
                "email": "janet.stewart@hussa.rs"
            }
        ],
        formFilled: false,
        clock: null,
        day: null,
        time: null
    },
    getters: {
        title: state => state.js.title,
        description: state => state.js.description,
        category_id: state => state.js.category_id,
        categories: state => state.categories,
        paid_event: state => state.js.paid_event,
        event_fee: state => state.js.event_fee,
        reward: state => state.js.reward,
        formFilled: state => state.formFilled,
        employers: state => state.employers,
        coordinator: state => state.js.coordinator,
        duration: state => state.js.duration,
        clock: state => state.clock,
        day: state => state.date,
        time: state => state.time,
    },
    mutations: {
        title: (state, payload) => {
            state.js.title = payload
        },
        description: (state, payload) => {
            state.js.description = payload
        },
        category_id: (state, payload) => {
            state.js.category_id = payload
        },
        paid_event: (state, payload) => {
            state.js.paid_event = payload
        },
        event_fee: (state, payload) => {
            state.js.event_fee = payload
        },
        reward: (state, payload) => {
            state.js.reward = payload
        },
        formFilled: (state) => {
            state.formFilled = !state.formFilled
        },
        coordinator: (state, payload) => {
            state.js.coordinator = {id: payload.id, email: payload.email}
        },
        duration: (state, payload) => {
            state.js.duration = payload
        },
        clock: (state, payload) => {
            state.clock = payload
            store.dispatch('updateDate')
        },
        day: (state, payload) => {
            state.day = payload
            store.dispatch('updateDate')
        },
        time: (state, payload) => {
            state.time = payload
            store.dispatch('updateDate')
        },
        date: (state, payload) => {
            state.js.date = payload
        },

    },
    actions: {
        formFilled({commit}) {
            console.log(this.state.js);
            console.log('%c It works!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');            commit('formFilled');
        },
        updateDate({commit}) {
            if(this.state.day && this.state.time && this.state.clock) {
                let momentDate = moment(this.state.day +' '+ this.state.time +' '+this.state.clock, 'YYYY-mm-DD h:mm A').toISOString();
                commit('date', momentDate)
            }
        }
    }
})