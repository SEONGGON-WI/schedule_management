import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        version: '2.0.0',
        pathes:[''], //RELOAD時save,restore対象となる項目
        fetch_calendar_events: [],
        fetch_analytic_events: [],
        calendar_events: [],
        client_agenda: [],
        staff_name: '',
        root_folder: '',
    },
    getters:{
        version(state) {
            return state.version
        },
        fetch_calendar_events (state) {
            return state.fetch_calendar_events
        },
        fetch_analytic_events (state) {
            return state.fetch_analytic_events
        },
        calendar_events (state) {
            return state.calendar_events
        },
        client_agenda (state) {
            return state.client_agenda
        },
        staff_name (state) {
            return state.staff_name
        },
        root_folder (state) {
            return state.root_folder
        },

    },
    mutations:{
        set_fetch_calendar_events(state, payload) {
            state.fetch_calendar_events = payload
        },
        set_fetch_analytic_events(state, payload) {
            state.fetch_analytic_events = payload
        },
        set_calendar_events(state, payload) {
            state.calendar_events = payload
        },
        set_client_agenda(state, payload) {
            state.client_agenda = payload
        },
        set_staff_name(state, payload) {
            state.staff_name = payload
        },
        set_root_folder(state, payload) {
            state.root_folder = payload
        },
        save(state){
            const save_data = {}
            for (const key of state.pathes){
                save_data[key] = state[key]
            }
            sessionStorage.setItem('schedule_data',JSON.stringify(save_data))
        },
        clear(state){
            for (const key of Object.keys(state.pathes)){
                state[key] = ''
            }
            if (sessionStorage['schedule_data']){
                sessionStorage.removeItem('schedule_data')
            }
        },
    },
    actions: {
        setCalendarEvents({commit}, payload) {
            commit('set_calendar_events', payload);
        },
        setClientAgenda({commit}, payload) {
            commit('set_client_agenda', payload);
        },
        // async get_department_items(context){
        //     if (context.state.department_items.length !== 0){ return }
        //     var data = { }
        //     const url = '/api/department/list';
        //     const response = await axios.post(url, data)
        //     if(response.data.status == "true") {
        //         context.commit('set_department_items',response.data.list);
        //     }
        // },
        // async get_uke_info(context,payload){
        //     if (!context.state.uke_info.file_id || context.state.uke_info.file_id !== payload.fileId ){
        //         const data = {
        //             fileId: payload.fileId,
        //         };
        //         const url = "/api/" + (payload.dpcFlag ? 'dpc/':'') + "uke/get";
        //         const response = await axios.post( url, data)
        //         if (response.data.status == "true") {
        //             context.commit('set_uke_info',response.data.ukeInfo);
        //         }
        //     }
        // }
    }
})
export default store;