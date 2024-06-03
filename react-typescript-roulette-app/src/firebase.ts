import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDseI4WM783IzGEchIgdZnM7inPNArCCyw",
    authDomain: "rouletteapplication-104e6.firebaseapp.com",
    projectId: "rouletteapplication-104e6",
    storageBucket: "rouletteapplication-104e6.appspot.com",
    messagingSenderId: "955558441137",
    appId: "1:955558441137:web:0eae0c1fd70d4ed87d7290"
  }
  
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db