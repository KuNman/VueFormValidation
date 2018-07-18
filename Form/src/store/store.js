import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        form: {
            about: {
                title: null,
                description: null,
                category: null,
                payment: null,
                reward: null
            }
        }
    },
    getters: {
        title: state => state.form.about.title,
        description: state => state.form.about.description,
        category: state => state.form.about.category,
        payment: state => state.form.about.payment,
        reward: state => state.form.about.reward,

    },
    mutations: {
        title: (state, payload) => {
            state.form.about.title = payload
        },
        payment: (state, payload) => {
            state.form.about.payment = payload
        },
    },
})