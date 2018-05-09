<template>

	<q-modal-layout>
		<q-toolbar slot="header">
			<q-btn flat round dense v-close-overlay icon="keyboard_arrow_left"></q-btn>
			<q-toolbar-title>
				Edit {{propbill.title}}
			</q-toolbar-title>
		</q-toolbar>

		<div class="layout-padding">

			<q-field label="Title:">
				<q-input v-model="propbill.title" type="text"></q-input>
			</q-field>

			<q-field label="Amount:">
				<q-input v-model="propbill.amount" type="number"></q-input>
			</q-field>

			<q-field label="Day of Month:">
				<q-input v-model="propbill.dayOfMonth" type="number"></q-input>
			</q-field>

			<q-field label="Image Url:">
				<q-input v-model="propbill.imageUrl" type="url"></q-input>
			</q-field>

			<br>
			<q-btn icon="add" color='positive' class="full-width" @click="updateBill">Save Changes to {{propbill.title}}</q-btn>

			<h4>Preview:</h4>
			<card-comp :propbiller="newBill"></card-comp>
		</div>

	</q-modal-layout>
</template>


<script>

// https://jsfiddle.net/mvwcqt43/

export default {
	data() {
		return {
			/**@type {Bill} */
			newBill: {
				isPaid: false,
				dayOfMonth: 1,
				imageUrl: 'https://visualpharm.com/assets/432/iOS%20Application%20Placeholder-595b40b75ba036ed117d63a8.svg',
				title: 'New Bill',
				amount: 0
			}
		}
	},
	created() {

	},
	methods: {
		updateBill() {
			if (this.newBill.title.trim()) {
				console.log('update bill...')
				// this.$billsRef.add(this.newBill)
				// this.newBill.title = 'New Bill'
			}
		}
	}
}
</script>

<style scoped>
.q-modal-layout-content.col.scroll {
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
}

.q-field-label * {
  color: rgb(0, 0, 0);
}

.q-if-addon,
.q-if-control,
.q-if-label {
  color: black;
}
</style>
