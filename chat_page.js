var firebaseConfig = {
    apiKey: "AIzaSyAm-o9pljikNMcDYNLG28iVzMrdebpRM3Q",
    authDomain: "kwitter-5ce70.firebaseapp.com",
    projectId: "kwitter-5ce70",
    storageBucket: "kwitter-5ce70.appspot.com",
    messagingSenderId: "947678384082",
    appId: "1:947678384082:web:67b1d5ffc7ace537d4820b",
    measurementId: "G-CV7R61YV8P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");


  function send()
  {
    msg = document.getElementById("msg").value;
    firebaseConfig.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }