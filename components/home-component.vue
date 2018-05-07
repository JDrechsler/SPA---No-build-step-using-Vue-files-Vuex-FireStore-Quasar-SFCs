<template>
	<q-layout view="hHr LpR lFf">
		<q-layout-header>
			<q-toolbar>
				<q-toolbar-title>
					Bill Tracker - {{getDateToday}}
					<!-- <button @click="enableNotifications">Notifications</button> -->
				</q-toolbar-title>
			</q-toolbar>
		</q-layout-header>

		<q-page-container class='scroll-content'>
			<q-page>

				<div v-if='bills.length > 0'>

					<!-- unpaid bills -->
					<div v-for="bill in bills" :key="bill.id">
						<div v-if='!bill.isPaid'>
							<card-comp :propbiller="bill"></card-comp>
						</div>
					</div>

					<hr>

					<!-- paid bills -->
					<div v-for="bill in bills" :key="bill.title">
						<div v-if='bill.isPaid'>
							<card-comp :propbiller="bill"></card-comp>
						</div>
					</div>

				</div>
				<div v-else>
					No bills to show right now.
				</div>
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script>
export default {
	components: {
		"card-comp": httpVueLoader("components/card-component.vue")
	},
	data() {
		return {
			message: "Vuefire & Firestore",
			notificationSupported: false
		};
	},
	created() {
		this.enableNotifications()
		// this.notifyWithUpcomingBills()
	},
	methods: {
		enableNotifications() {
			if ("Notification" in window) {

				if (Notification.permission === 'granted') {
					return
				}

				Notification.requestPermission()
					.then(res => {
						console.log(res)
						if (res !== 'granted') {
							console.log('permission was denied for notifications')
							//alert('denied...')
						} else {

							navigator.serviceWorker.ready.then(function (registration) {
								registration.showNotification('Notification test was successful', {
									body: '$1',
									icon: '/assets/icon.png',
									vibrate: [200, 100, 200, 100, 200, 100, 200],
									badge: '/assets/icon.png'
									// image: 'http://www.leveragedloan.com/wp-content/uploads/2018/01/netflix-logo.png'
								});
							});
						}
					})

			} else {
				//alert("This browser does not support notifications, I am sorry :/")
				console.log('This browser does not support notifications :/')
			}
		},

		addBiller() {

			console.log("adding test biller");
			this.$firestore.billers.add({
				title: "Test new",
				amount: 0,
				isPaid: false,
				dayOfMonth: 2,
				imageUrl: ""
			});
		},
		deleteBiller(biller) {
			this.$firestore.billers.doc(biller[".key"]).delete();
		},
		presentAddModal() { },
		presentMoneyOverviewModal() { }
	},
	computed: {
		...Vuex.mapState(['bills']),
		/**@returns {string} Returns a date string */
		getDateToday() {
			let today = new Date
			return today.toDateString()
		}
	}
};
</script>

<style>
.scroll-content {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  display: block;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  contain: size style layout;
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
}
</style>