
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAm-o9pljikNMcDYNLG28iVzMrdebpRM3Q",
    authDomain: "Chat-5ce70.firebaseapp.com",
    projectId: "Chat-5ce70",
    storageBucket: "Chat-5ce70.appspot.com",
    messagingSenderId: "947678384082",
    appId: "1:947678384082:web:67b1d5ffc7ace537d4820b",
    measurementId: "G-CV7R61YV8P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" +user_name+ "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "Chat_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName (name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "Chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}