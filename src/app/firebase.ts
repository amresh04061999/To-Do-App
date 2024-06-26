// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 export const firebaseConfig = {
  apiKey: "AIzaSyAcwNB7EeoaCIpKJ_iheykpbwFQKvOJ_7M",
  authDomain: "task-manage-fe526.firebaseapp.com",
  projectId: "task-manage-fe526",
  storageBucket: "task-manage-fe526.appspot.com",
  messagingSenderId: "645266619072",
  appId: "1:645266619072:web:012dd1198ba8b0736dcb25",
  measurementId: "G-06TCPFBXX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

