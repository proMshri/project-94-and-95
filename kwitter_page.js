// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBMQYddykEPjx5up4SMTo_ya5k3JKamKHU",
      authDomain: "kwitter-60f89.firebaseapp.com",
      databaseURL: "https://kwitter-60f89-default-rtdb.firebaseio.com",
      projectId: "kwitter-60f89",
      storageBucket: "kwitter-60f89.appspot.com",
      messagingSenderId: "295366994671",
      appId: "1:295366994671:web:792f21365a5133f1a5491a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                user_name:user_name,
                msg:msg,
                like:0
          })
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
