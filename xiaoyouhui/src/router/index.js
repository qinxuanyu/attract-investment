import Vue from 'vue'
import Router from 'vue-router'
import Qroute from './module/router_q'
import Lrouter from './module/router_l'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [...Qroute,...Lrouter]
})
