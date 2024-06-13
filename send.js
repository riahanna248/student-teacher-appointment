const firebaseConfig = {
    apiKey: "AIzaSyB-lUkskNHowi00aEDwASAJPp8hEOHGW6M",
    authDomain: "sendmessagest.firebaseapp.com",
    databaseURL: "https://sendmessagest-default-rtdb.firebaseio.com",
    projectId: "sendmessagest",
    storageBucket: "sendmessagest.appspot.com",
    messagingSenderId: "323382819735",
    appId: "1:323382819735:web:e512c4019db9087af722d2"
  };
        // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
              //reference message collections
      var messagesRef = firebase.database().ref('messages');

      // listen for form submit
      document.getElementById("form1").addEventListener("submit", submitForm);

      //submit form
      function submitForm(e) {
          e.preventDefault();

          //get values
          var name = getInputVal('name');
          var email = getInputVal('email');
          var message = getInputVal('message');


          //save message
          saveMessage(name,email,message);

          //show alert

        //   document.querySelector(".alert").style.display = "block";

          //hide alert after sec
        //   setTimeout(() =>{
        //       document.querySelector(".alert").style.display ="none";
        //   },3000);

          // clear form
          document.getElementById("form1").reset();

      }

      //function to get form values
      function getInputVal(id){
          return document.getElementById(id).value;
      }

      //save message to firebase

      function saveMessage(name,email,message){
          var newMessageRef = messagesRef.push();
          newMessageRef.set({
              name:name,
              email:email,
              message:message,

          });
      }
    