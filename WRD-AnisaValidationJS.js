var elements = document.getElementsByTagName("input");
for (var i = 0; i < elements.length; i++) {
        elements[i].onblur = validateInput;
}
document.getElementById("message").onblur=validateInput;

function validateInput(e) {
  var element = e.target;
  if (element == null)
      element = e;

  var valid = true;
  var errormessage="";
  if (element.value == "")
  {
      valid = false;
  }
  else
  {
      switch (element.id) {
          case "name":
              if(element.value.length < 3)
                  valid=false;
              break;
          case "email":
              var regExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              valid = regExEmail.test(element.value);
              break;
          case "message":
              if(element.value.length == 0)
              valid=false;
              break;
          default:
      
      }
  }
 
  if(!valid)
      element.classList.add("error");
  else
      element.classList.remove("error");

 
  return valid;
}
function validateForm() {
    
  var valid = true;

  for (var i = 0; i < elements.length; i++) {
      if (!validateInput(elements[i]))
          valid = false;
  }

  if (!validateInput(document.getElementById("message")))
      valid=false;
  
  return valid;
}