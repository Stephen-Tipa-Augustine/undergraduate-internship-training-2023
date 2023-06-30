import { createStore } from 'vuex'
import axios from 'axios'
const baseURL = 'http://127.0.0.1:8000';

const store = createStore({
    state: {
        accessToken: null,
        refreshToken: null,
        APIData: [],
    },
    mutations: {
        updateStorage(state, {access, refresh}) {
            state.accessToken = access;
            state.refreshToken = refresh;
        },
        updateAccidentData(state, {data}) {
            state.APIDate = data;
        },
    },
    actions: {
        async login(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post(`${baseURL}/authentication/login/`, credentials,
                    {
                        headers: { 'Content-Type': 'application/json',}})
                    .then(res => {
                        context.commit('updateStorage', {access: res.data.access, refresh: res.data.refresh});
                        localStorage.setItem('user', JSON.stringify(res.data));
                        resolve(res.data);
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },

        async retrieveJobs() {
            let api = `${baseURL}/jobs/opportunities/`
            const token = JSON.parse(localStorage.getItem('user')).access;
            return new Promise((resolve, reject) => {
                axios.get(api, {
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  }).then((response) => {
                      resolve(response.data);
                  }).catch((error) => reject(error))
            });
        },

        async addJob(context, payload) {
            let api = `${baseURL}/jobs/opportunities/`
            const token = JSON.parse(localStorage.getItem('user')).access;
            return new Promise((resolve, reject) => {
                axios.post(api, payload,{
                    headers: {
                      'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                  }).then((response) => {
                      resolve(response.data);
                  }).catch((error) => reject(error))
            });
        },

    },
})

export default store;
