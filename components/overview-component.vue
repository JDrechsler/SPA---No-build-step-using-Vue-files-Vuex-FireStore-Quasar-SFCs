<template>

	<q-modal-layout>
		<q-toolbar slot="header">
			<q-btn flat round dense v-close-overlay icon="keyboard_arrow_left"></q-btn>
			<q-toolbar-title>
				Overview
			</q-toolbar-title>
		</q-toolbar>

		<div class="layout-padding">
			<q-card>
				<q-list>
					<q-item>
						<q-item-side>
							<q-item-tile color="positive" icon="add" />
						</q-item-side>
						<q-item-main>
							<q-item-tile label>Monthly Income:</q-item-tile>
							<q-item-tile sublabel>${{monthlyIncome}}</q-item-tile>
						</q-item-main>
					</q-item>
					<q-item>
						<q-item-side>
							<q-item-tile color="red" icon="remove" />
						</q-item-side>
						<q-item-main>
							<q-item-tile label>Monthly amount for bills:</q-item-tile>
							<q-item-tile sublabel>${{getMonthlyAmountBills}}</q-item-tile>
						</q-item-main>
					</q-item>
					<q-card-separator></q-card-separator>
					<q-item>
						<q-item-side>
							<q-item-tile color="primary" icon="arrow_forward" />
						</q-item-side>
						<q-item-main>
							<q-item-tile label>Monthly money left:</q-item-tile>
							<q-item-tile sublabel>${{getMonthlyMoneyLeft.toFixed(2)}}</q-item-tile>
						</q-item-main>
					</q-item>
				</q-list>
			</q-card>

		</div>

	</q-modal-layout>
</template>


<script>

export default {
	data() {
		return {
			monthlyIncome: 2630
		}
	},
	methods: {

	},
	computed: {
		/**@returns {Array<Bill>} */
		bills() { return this.$store.state.bills },
		getMonthlyAmountBills() {
			let amountAllBills = 0
			for (let bill of this.bills) {
				amountAllBills += bill.amount
			}
			return amountAllBills
		},
		getMonthlyMoneyLeft() { return this.monthlyIncome - this.getMonthlyAmountBills }
	}
}
</script>

<style scoped>
.q-modal-layout-content.col.scroll {
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
}

.q-card {
  background: rgba(239, 239, 218, 0.63);
}

.q-icon {
  font-size: 28px;
}
</style>
