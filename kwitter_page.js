//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD6xiY8kM-I-1Yk7Z-SgusGZDDcv_ORO-Q",
      authDomain: "ivyleague-28a44.firebaseapp.com",
      databaseURL: "https://ivyleague-28a44-default-rtdb.firebaseio.com",
      projectId: "ivyleague-28a44",
      storageBucket: "ivyleague-28a44.appspot.com",
      messagingSenderId: "43365757839",
      appId: "1:43365757839:web:86f24a37ff9f84fe0751fa",
      measurementId: "G-95V2TWNG2N"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name=localStorage.getItem("room_name")
    user_name=localStorage.getItem("user_name")
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like']
row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4>"+message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"'value'"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElemnetById(button_id).value;
      likes_in_number = Number(likes) + 1;
      console.log(likes_in_number);

      firebase.database().ref(room_name).child(message_id).update({
            like : likes_in_number
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}