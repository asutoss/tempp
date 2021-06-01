import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBK6vmF4AaS97jkHy6fflmaQ8U7Jm_E7K4",
    authDomain: "badmintion-55f94.firebaseapp.com",
    databaseURL: "https://badmintion-55f94.firebaseio.com",
    projectId: "badmintion-55f94",
    storageBucket: "badmintion-55f94.appspot.com",
    messagingSenderId: "844004088760",
    appId: "1:844004088760:web:b349b83a341ea7a5520d4d"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
console.log('firebase added');
export default database;