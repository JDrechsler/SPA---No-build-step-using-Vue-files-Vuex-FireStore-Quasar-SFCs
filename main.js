import { store } from "/store.js";
import { billsRef } from "/firestore.js";

new Vue({
	el: '#my-app',
	store,
	components: {
		'home-component': httpVueLoader('components/home-component.vue')
	},
	data: {
		isInitialLoading: true
	},
	created() {
		this.isInitialLoading = false
		this.$store.dispatch('setBillsRef', billsRef)
	}
});