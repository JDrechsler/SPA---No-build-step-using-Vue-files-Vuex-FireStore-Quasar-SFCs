var config = {
	apiKey: "AIzaSyCJXGDc2kvyJSOSzu_hvhS64sHDnyKn_qE",
	authDomain: "billersapp.firebaseapp.com",
	databaseURL: "https://billersapp.firebaseio.com",
	projectId: "billersapp",
	storageBucket: "billersapp.appspot.com",
	messagingSenderId: "5384173140"
};

firebase.initializeApp(config)

const db = firebase.firestore()

export var billsRef = db.collection('billers').orderBy("dayOfMonth", "asc")