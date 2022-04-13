// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'
import { collection, doc, getDocs, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpRlGDGuk1JUXi0VhvSpVcJwcCm1Q2ep8",
    authDomain: "cars-cf954.firebaseapp.com",
    projectId: "cars-cf954",
    storageBucket: "cars-cf954.appspot.com",
    messagingSenderId: "943137422806",
    appId: "1:943137422806:web:60df9a425e9cf25a26b877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "cars"));

    var but = document.getElementById("submit")
    
    refresh()
    but.addEventListener("click", async function(event, make ="default", model = "default", engine = "default", color = "default"){
        
        make = document.getElementById("marka").value;
        model = document.getElementById("model").value;
        engine = document.getElementById("silnik").value;
        color = document.getElementById("kolor").value;
        let r = (Math.random() + 1).toString(36).substring(7);
        await setDoc(doc(db, "cars", "new "+r), {
            make: make,
            model: model,
            engine: engine,
            color: color
            });
        refresh()
        })

async function refresh(){
    // Read data
    let element = document.getElementById("cars")
    element.innerHTML = "<table border=1 style='border:1px solid;border-color:black;'>"
    element.innerHTML = "<tr><th>Marka</th><th>Model</th><th>Silnik</th><th>Color</th></tr>"
    const querySnapshot2 = await getDocs(collection(db, "cars"));
    querySnapshot2.forEach((doc) => {
        console.log(doc.data());
        console.log(doc.data()['make'],doc.data()['model'],doc.data()['engine'],doc.data()['color']);

        console.log(element)
        let elementProduct = document.createElement("div")
        elementProduct.innerHTML = " <tr> <td>"+doc.data()['make'] +"</td>"+' <td> '+ doc.data()['model']+' '+"</td> <td>"+doc.data()['engine'] +"</td>"+ ' <td>'+ doc.data()['color']+ "</td> </tr>"
        
        element.appendChild(elementProduct)
    });
    element.innerHTML = element.innerHTML +"</table>"
}

//window.onload = refresh();




/*
var CarMake = document.getElementById("marka");
var CarModel = document.getElementById("model");
var CarEngine = document.getElementById("silnik");
var CarColor = document.getElementById("kolor");

var SubmitButton = document.getElementById("submit");
var LoadButton = document.getElementById("load");
*/

