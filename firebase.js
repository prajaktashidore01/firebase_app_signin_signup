import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPQYZh3Q737jTQ5jBSvq7VIppblemYoVc",
  authDomain: "app-681aa.firebaseapp.com",
  projectId: "app-681aa",
  storageBucket: "app-681aa.firebasestorage.app",
  messagingSenderId: "594045758092",
  appId: "1:594045758092:web:c84b4554c73568696369a9",
  databaseURL:"https://app-681aa-default-rtdb.firebaseio.com/"
};

export const app=initializeApp(firebaseConfig);