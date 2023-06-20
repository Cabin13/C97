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
    var roomName= localStorage.getItem("roomName")

    function send() {
      var msg= document.getElementById("msg").value;
      firebase.database().ref(roomName).push ({
            username: username,
            message: msg,
            likes: 0
      })
      document.getElementById("msg").innerHTML= " "
    }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "roomName") {
         firebase_message_id = childKey;
         message_data = childData;
         var like_no= message_data["likes"]
         var username= message_data["username"]
         var message= message_data["message"]
         var tag_username= '<h3>' + username + '<img class= "user_tick" src="tick.png"></h3>'
         var tag_message= '<h4 class="message_h4">' + message + '</h4>'
         //var tag_button1= '<button class= "btn btn-info" onclick= "add_like(this.id)" value= ' + likes + 'id= ' + firebase_message_id + '>'
         //var tag_button2= '<span class= "glyphicon glyphicon-thumbs-up">Like: ' + likes + '</span></button><hr>'
         var likes ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like_no+" onclick='add_like(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like_no +"</span></button><hr>";
         var row= tag_username + tag_message + likes
         document.getElementById("output").innerHTML+= row
      } });  }); }
getData();

function add_like(msg_id) {
      var like= document.getElementById(msg_id).value
      var new_likes= Number(like) + 1
      console.log(like)
      console.log(new_like)
      console.log("any message")
      firebase.database().ref(roomName).child(msg_id).update({
            likes: new_likes
      })
}

function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("roomName")
      window.location= "index.html"
    }
