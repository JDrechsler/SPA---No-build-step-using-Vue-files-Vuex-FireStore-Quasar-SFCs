<template>

	<q-modal-layout>
		<q-toolbar slot="header">
			<q-btn flat round dense v-close-overlay icon="keyboard_arrow_left"></q-btn>
			<q-toolbar-title>
				Edit {{updatedBill.title}}
			</q-toolbar-title>
		</q-toolbar>

		<div class="layout-padding">

			<q-field label="Title:">
				<q-input v-model="updatedBill.title" type="text"></q-input>
			</q-field>

			<q-field label="Amount:">
				<q-input v-model="updatedBill.amount" type="number"></q-input>
			</q-field>

			<q-field label="Day of Month:">
				<q-input v-model="updatedBill.dayOfMonth" type="number"></q-input>
			</q-field>

			<q-field label="Image Url:">
				<q-input v-model="updatedBill.imageUrl" type="url"></q-input>
			</q-field>

			<br>
			<q-btn color='positive' v-close-overlay class="full-width" @click="updateBill(updatedBill)">Save Changes to {{updatedBill.title}}</q-btn>

			<h4>Preview:</h4>
			<card-comp :propbill="updatedBill"></card-comp>
		</div>

	</q-modal-layout>
</template>


<script>

// https://jsfiddle.net/mvwcqt43/

export default {
	props: {
		/**@type {Bill} */
		propbill: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			/**@type {Bill} */
			updatedBill: {}
		}
	},
	created() {
		this.updatedBill = Object.assign({}, this.propbill);
	},
	methods: {
		updateBill(bill) {
			if (this.updatedBill.title.trim()) {
				console.log('update bill', this.updatedBill.title)
				// console.log(bill.id)
				// this.$billsRef.doc(bill.id).update(bill)
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
