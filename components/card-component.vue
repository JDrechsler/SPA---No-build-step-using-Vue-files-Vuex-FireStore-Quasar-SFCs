<template>
	<q-card :class="getDueClass()">
		<div class="card-biller-due">
			{{propbiller.dayOfMonth}}
		</div>
		<div class="card-biller-image">
			<img :src="propbiller.imageUrl" />
		</div>
		<div class="card-biller-title">
			{{propbiller.title}}
		</div>
		<div class="card-biller-price" :class='getPriceClass()'>
			${{propbiller.amount}}
		</div>
	</q-card>
</template>

<script>

// @fts-check

const date = new Date

export default {
	props: {
		/**@type {Bill} */
		propbiller: {
			required: true,
			type: Object,
			default: {}
		}
	},
	data() {
		return {
			/**@type {Bill} */
			// propbiller: {}
		};
	},
	created() {
		// this.billers.filter(b => b.)

	},
	methods: {
		getPriceClass() {
			return {
				isPaid: this.propbiller.isPaid,
				isNotPaid: !this.propbiller.isPaid
			};
		},
		getDueClass() {
			return {
				duePast: !this.propbiller.isPaid && this.propbiller.dayOfMonth < date.getDate(),
				dueToday: this.propbiller.dayOfMonth === date.getDate(),
				dueOneDay: this.propbiller.dayOfMonth === (date.getDate() + 1),
				dueTwoDays: this.propbiller.dayOfMonth === (date.getDate() + 2),
				dueThreeDays: this.propbiller.dayOfMonth === (date.getDate() + 3)
			}
		}
	},
	computed: {
		/**@returns {Array<Bill>} */
		getUpcomingBills() {
			/**@type {Array<Bill>} */
			let upcomingBills
			// upcomingBills.

			return upcomingBills
		}
	}
};
</script>

<style>
.q-card {
  display: grid !important;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-areas: "card-biller-due card-biller-image card-biller-title card-biller-price";
  padding-right: 10px;
  margin-bottom: 10px;
  min-width: 250px;
  min-height: 120px;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: rgba(239, 239, 218, 0.63);
}

.card-biller-due {
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
  grid-area: card-biller-due;
  justify-self: center;
  align-self: center;
}

.card-biller-image {
  grid-area: card-biller-image;
  justify-self: start;
  align-self: center;
}

.card-biller-title {
  font-size: 16px;
  grid-area: card-biller-title;
  justify-self: start;
  align-self: center;
}

.card-biller-price {
  font-size: 16px;
  grid-area: card-biller-price;
  justify-self: end;
  align-self: center;
}

.isPaid {
  color: green;
  text-decoration: line-through;
}

.isNotPaid {
  /* color: red; */
  font-weight: 500;
}

.dueToday {
  /* color: red; */
  border-right: 6px solid red;
}

.dueOneDay {
  /* color: rgb(204, 66, 16); */
  border-right: 6px solid rgb(204, 66, 16);
}

.dueTwoDays {
  border-right: 6px solid rgb(209, 169, 66);
  /* color: rgb(209, 169, 66); */
}

.dueThreeDays {
  border-right: 3px solid rgb(66, 209, 142);
  /* color: rgb(66, 209, 142); */
}

.duePast {
  /* color: red; */
  border: 6px solid red;
}

@media screen and (max-width: 300px) {
  .card-biller-image > img {
    width: 60px;
  }
}

@media screen and (min-width: 301px) {
  .card-biller-image > img {
    width: 70px;
  }
}

@media screen and (min-width: 351px) {
  .card-biller-image > img {
    width: 80px;
  }
}

@media screen and (min-width: 401px) {
  .card-biller-image > img {
    width: 100px;
  }
}
</style>

