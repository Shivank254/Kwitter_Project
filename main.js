
function add_user(){

    user_login_username = document.getElementById("username").value;

    if( user_login_username == ""){

        alert("Please enter your username to get registered");

    }
    else{

        localStorage.setItem("username_key", user_login_username);

        window.location = "kwitter_room.html";
    }

}