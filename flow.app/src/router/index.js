import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/download',
			component: () => import ('../views/Download.vue')
		},
		{
			path: '/team',
			component: () => import ('../views/Team.vue')
		},
		{
			path: '/contact',
			component: () => import('../views/Contact.vue')
		},
		{
			path: '/story',
			component: () => import('../views/Story.vue')
		}	
	],
})

export default router