
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
import { collection, doc, getDocs, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyDpRlGDGuk1JUXi0VhvSpVcJwcCm1Q2ep8",
    authDomain: "cars-cf954.firebaseapp.com",
    projectId: "cars-cf954",
    storageBucket: "cars-cf954.appspot.com",
    messagingSenderId: "943137422806",
    appId: "1:943137422806:web:60df9a425e9cf25a26b877"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log(db);
var but = document.getElementById("submit")

const uid = (Math.random() + 1).toString(36).substring(7);

but.addEventListener("click", async function(event) {
    await setDoc(doc(db, "cities", uid), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });
});

/*
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const querySnapshot = await getDocs(collection(db, "cars"));

var but = document.getElementById("submit");

but.addEventListener("click", async function(event) {
    try {
        const make = document.getElementById("marka").value;
        const model = document.getElementById("model").value;
        const engine = document.getElementById("silnik").value;
        const color = document.getElementById("kolor").value;
        let r = (Math.random() + 1).toString(36).substring(7);
        await setDoc(doc(db, "cars", "new " + r), {
            color: color,
            engine: engine,
            make: make,
            model: model,
            path: '-',
        });
    } catch (error) {
        console.error("Error writing to Firestore:", error);
        //debugger
    }
});*/

/*
but.addEventListener("click", async function(event) {
    try {
        const make = document.getElementById("marka").value;
        const model = document.getElementById("model").value;
        const engine = document.getElementById("silnik").value;
        const color = document.getElementById("kolor").value;
        let r = (Math.random() + 1).toString(36).substring(7);
        const car = {
            color: color,
            engine: engine,
            make: make,
            model: model,
            path: '-',
        }
        console.log(car);
        db.collection('test-items').set(car).then(() => {
            window.console.log('Post added!')
          })
    } catch (error) {
        console.error("Error writing to Firestore:", error);
        //debugger
    }
});*/
