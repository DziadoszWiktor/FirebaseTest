import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { collection, doc, getDocs, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import { getStorage, ref, uploadString } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";

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

const querySnapshot = await getDocs(collection(db, "cars"));
    var but = document.getElementById("submit")
    refresh()
    but.addEventListener("click", async function(event, make ="default", model = "default", engine = "default", color = "default"){
        
        make = document.getElementById("marka").value;
        model = document.getElementById("model").value;
        engine = document.getElementById("silnik").value;
        color = document.getElementById("kolor").value;
        let r = (Math.random() + 1).toString(36).substring(7);

        await setDoc(doc(db, "cars", r), {
            make: make,
            model: model,
            engine: engine,
            color: color
        });

        const storage = getStorage();
        const refImg = ref(storage, pathImage);
        uploadString(refImg, selectedFile64,'data_url').then((snapshot) =>{
            console.log("The photo has been sent in path cars/"+id+".jpg");
        })

        refresh()
        })

    async function refresh(){
        let element = document.getElementById("cars")
        element.innerHTML = "<table border=1 style='border:1px solid;border-color:black;'>"
        element.innerHTML = "<tr><th>Marka</th><th>Model</th><th>Silnik</th><th>Color</th></tr>"
        const querySnapshot2 = await getDocs(collection(db, "cars"));
        querySnapshot2.forEach((doc) => {
            //console.log(doc.data());
            //console.log(doc.data()['make'],doc.data()['model'],doc.data()['engine'],doc.data()['color']);
            //console.log(element)
            let elementProduct = document.createElement("div")
            elementProduct.innerHTML = " <tr> <td>"+doc.data()['make'] +"</td>"+' <td> '+ doc.data()['model']+' '+"</td> <td>"+doc.data()['engine'] +"</td>"+ ' <td>'+ doc.data()['color']+ "</td> </tr>"
            
            element.appendChild(elementProduct)
    });
    element.innerHTML = element.innerHTML +"</table>"
} 

document.getElementById('cameraFileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function () {
        var imageBase64String = reader.result;
        document.getElementById('pictureFromCamera').src = imageBase64String;
    }
    reader.readAsDataURL(file);
});

/*
var file = document.querySelector('input[type=file]')['files'][0];
var reader = new FileReader();
console.log("reader init");
reader.onload = function () {
    this.selectedFile64 = reader.result;
    this.imageBase64Stringsep = this.selectedFile64;

    console.log(this.selectedFile64);
    
    document.getElementById("pictureFromCamera").setAttribute("src",this.selectedFile64)
    const desc = document.getElementById('desc').value
    const email = auth.currentUser.email
    const username = email.substring(0, email.indexOf('@'));
    const name = document.getElementById('name').value
    const id = username+"-"+name+"-"+desc
    console.log(id); 
    this.pathImage = 'cars/'+id+'.jpg';
    //db.collection('posts').where("path", "==", "").update({path:this.pathImage});
    const refImg = reff(storage, this.pathImage);
    uploadString(refImg,this.selectedFile64,'data_url').then((snapshot) =>{
        console.log("The photo has been sent in path cars/"+id+".jpg");
    });
}
reader.readAsDataURL(file);*/


