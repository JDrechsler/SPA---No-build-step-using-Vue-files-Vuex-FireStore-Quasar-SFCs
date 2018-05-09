import { store } from "/store.js";
import { billsRefSorted } from "/firestore.js";

Vue.component('home-component', httpVueLoader('components/home-component.vue'));
Vue.component('card-comp', httpVueLoader("/components/card-component.vue"));
Vue.component('add-bill-comp', httpVueLoader("/components/add-bill-component.vue"));
Vue.component('edit-bill-comp', httpVueLoader("/components/edit-bill-component.vue"));

new Vue({
	el: '#my-app',
	store,
	data: {
		isInitialLoading: true
	},
	created() {
		this.isInitialLoading = false
		this.$store.dispatch('setBillsRef', billsRefSorted)
	}
});