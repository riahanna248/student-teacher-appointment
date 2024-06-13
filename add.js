// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBl8YtGdEycPWK3Vb4hQYhupGrQb5pdW9A",
    authDomain: "stappointment-2c481.firebaseapp.com",
    databaseURL:"https://stappointment-2c481-default-rtdb.firebaseio.com",
    projectId: "stappointment-2c481",
    storageBucket: "stappointment-2c481.appspot.com",
    messagingSenderId: "60604924700",
    appId: "1:60604924700:web:e432e1e33c7f29ef0630d9"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
  //reference message collections
var messagesRef = firebase.database().ref('stappointment-2c481');

// listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var dept = getInputVal('dept');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var password = getInputVal('password');


    //save message
    saveMessage(name,dept,subject,email,password);

    //show alert

    document.querySelector(".alert").style.display = "block";

    //hide alert after sec
    setTimeout(() =>{
        document.querySelector(".alert").style.display ="none";
    },3000);

    // clear form
    document.getElementById("contactForm").reset();

} 

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase

function saveMessage(name,dept,subject,email,password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        dept:dept,
        subject:subject,
        email:email,
        password:password,
    });
}