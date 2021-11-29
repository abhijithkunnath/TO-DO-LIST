function login() {
    
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    if(username =='')
    {
        alert("please enter user name.");
    }
    else if(password=='')
    {
        alert("enter the password");
    }
    else if(username !=="admin")
    {
        alert("Enter valid email id.");
    }
    else if(password!=="12345")
    {
        alert("Enter Valid Password");
    }
    
    else
    {
    redirect();
  
    }

    function redirect(){
		window.open("main.html");
 	}
	






f
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true)
    xhttp.send();
}



