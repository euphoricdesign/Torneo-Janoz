import firebase from 'firebase/app'
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyC95Dq1vTo4VIu0YWt2CtrPVOpJ4rX2f4M",
  authDomain: "landing-redbull-1b39f.firebaseapp.com",
  databaseURL: "https://landing-redbull-1b39f-default-rtdb.firebaseio.com",
  projectId: "landing-redbull-1b39f",
  storageBucket: "landing-redbull-1b39f.appspot.com",
  messagingSenderId: "252224478184",
  appId: "1:252224478184:web:b1fbc57f45d727cafaa25d",
  measurementId: "G-WRD5R55QX8"
}

firebase.initializeApp(firebaseConfig)

const firebaseApp = firebase

export default firebaseApp