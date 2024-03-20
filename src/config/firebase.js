// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA041C2B8K1oPY0uCGKssb8MONjCyUVBTc",
  authDomain: "f-meu-app-react-native.firebaseapp.com",
  projectId: "f-meu-app-react-native",
  storageBucket: "f-meu-app-react-native.appspot.com",
  messagingSenderId: "125553490068",
  appId: "1:125553490068:web:fd6618e07818782da7dc81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
