import Vue from 'vue'
import Router from 'vue-router'
import Qroute from './module/router_q'
import Lrouter from './module/router_l'

Vue.use(Router)

let router = new Router({
	base: process.env.BASE_URL,
	routes: [...Qroute, ...Lrouter],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 700 }
		}
	}
})
router.beforeEach((to, from, next) => {
	if (/^\/http/.test(to.path) || /^\/https/.test(to.path)) {
		// console.log(to.path)
		window.location.href = to.path.substr(1);
		// console.log(to.path)
		return;
	};
	next()
})

export default router
