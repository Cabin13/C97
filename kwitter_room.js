var firebaseConfig = {
      apiKey: "AIzaSyCvZm3PoPmlccyCTaH_k8f6DCZXV1WyI5o",
      authDomain: "kwitter-286b4.firebaseapp.com",
      databaseURL: "https://kwitter-286b4-default-rtdb.firebaseio.com",
      projectId: "kwitter-286b4",
      storageBucket: "kwitter-286b4.appspot.com",
      messagingSenderId: "997121643713",
      appId: "1:997121643713:web:1e26b1a03c5f7ab6fbb040"
    };
    
  firebase.initializeApp(firebaseConfig);

  var username= localStorage.getItem("username")
  document.getElementById("user_name").innerHTML= "Welcome " + username

  function add_room() {
    var room_name= document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
      roomName: "roomName"
    })
    localStorage.setItem("roomName", room_name)
    window.location= "kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      var row= '<div class="room_name" id="Room_names" onclick="open_room(this.id)"># ' + Room_names + '</div> <hr>'
      document.getElementById("output").innerHTML+= row
      });});}
getData();

function open_room(name) {
  localStorage.setItem("roomName", name)
  window.location= "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("username")
  localStorage.removeItem("roomName")
  window.location= "index.html"
}
