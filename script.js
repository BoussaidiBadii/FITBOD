function validate()
{
    k=true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    if (name == "" || email == "" || age == "" || password == "" || cpassword == "") {
        alert('Fill all the form pls');
        k=false;
    }
    if(!email.match(mailformat)){
        alert('Invalid Email')
        k=false;
    }

    if (password.length <= 6) {
        alert('Password must be longer than 6 characters')
        k=false;
    }

    if (password.length >= 20) {
        alert('Password must be less than 20 characters')
       k=false;
    }

    if (password == 'password') {
        alert('Password cannot be password')
        k=false;
    }
    if (cpassword!=password){
        alert('Not same password')
        k=false;
    } 
      if (k) {
        window.location.assign("./main2.html")
      }
}