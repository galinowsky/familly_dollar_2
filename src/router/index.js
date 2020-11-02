import Vue from 'vue';
import Router from 'vue-router';
import DataView from '../views/DataView.vue';
import Scorecard from '../views/Scorecard.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Scorecard',
            component: Scorecard
        },
        {
            path:'/data',
            name: 'data',
            component: DataView
        }
    ]
})