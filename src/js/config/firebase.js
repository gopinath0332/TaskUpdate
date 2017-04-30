import * as firebase from "firebase";

const app = firebase.initializeApp({
	apiKey: "AIzaSyAnpr1j3lw44jY6NCmDtOUyPzVtPHqiVu0",
	authDomain: "tasks-554ad.firebaseapp.com",
	databaseURL: "https://tasks-554ad.firebaseio.com",
	projectId: "tasks-554ad",
	storageBucket: "tasks-554ad.appspot.com",
	messagingSenderId: "205949234536"
});

export default app.database();
