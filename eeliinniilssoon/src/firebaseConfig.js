
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWePqTkmTsH41rqICU1vr6R_DQAE-cwbw",
  authDomain: "eeliinniilssoon.firebaseapp.com",
  projectId: "eeliinniilssoon",
  storageBucket: "eeliinniilssoon.appspot.com",
  messagingSenderId: "512977113421",
  appId: "1:512977113421:web:5b4c555294fc53a2b2e704",
  measurementId: "G-0NNS1HV2JE"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;