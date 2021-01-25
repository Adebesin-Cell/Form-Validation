
function error(inerr, msg) {
  document.getElementById(inerr).textContent = msg;
}

const validate = ( ) => {

    let name = document.getElementById("name").value;
    let lname = document.getElementById("lastname").value;
    let uname = document.getElementById("username").value;
    let pass= document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let email = document.getElementById("email").value;



    let firstnamerr = lastnamerr = usererror = passworderr = confirmerr = emailerror = true;

    if (name === "") {
        error("firstnamerr", "Please enter your first name");
    } else if (name.length === 2) {
        error("firstnamerr", "first name should be at least 2 chs");
    } else {
        error("firstnamerr"," ");
        firstnamerr = false;
    }


    if (lname === "") {
        error("lastnamerr", "Please enter your last name");
    } else if(lname.length === 2) {
      error("lastnamerr","Last name must be at least 2 chs");
    } else {
      error("lastnamerr", " ");
      lastnamerr = false;
    }


    if ((uname === "") || (uname.length < 6) || (uname.length === 0)) {
        error("usererror", "Please a valid username,username must be at least 6 chs");
    } else {
        error("usererror"," ");
        usererror = false;
    }

    if ((pass === "") || (pass.length < 8) || (pass.length === 0)) {
        error("passworderr", "Please a valid password, password must be at least 8 chs");
    } else {
        error("passworderr","");
        passworderr = false;
    }
    if (confirm === "" || confirm !== pass ) {
        error("confirmerr", "Password mismatch!!!");
    } else {
        error("confirmerr", " ");
        confirmerr = false;
    }

    if (email.indexOf("@") && email.lastIndexOf(".")) {
        if (email.indexOf("@") < 1 || email.indexOf("@") + 2 > email.lastIndexOf(".") || email.indexOf("@").length <= email.lastIndexOf(".") + 2) {
          error("emailerror", "Please enter a valid email address")
        } else {
          error("emailerror", "");

          emailerror = false;
        }
    }

    if((firstnamerr || lastnamerr || usererror || passworderr|| confirmerr || emailerror) === true) {
       return false;
    }



}
