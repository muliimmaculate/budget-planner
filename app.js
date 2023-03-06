// //define an array of colors
// const colors =['#3b92da', '#ce5656', '#d64e99', '#2cddce', '#dd7c2c', '#c82cdd'];

// //get a reference to the body element body
// const body = document.querySelector('body');

// //set an initial color
// let currentColor = 0;

// //define a function to change the background color
// function changeBackgroundColor() {
//     //increment the color index and wrap around if necessary
//     currentColor = (currentColor + 1) % colors.length;

//     //set the background color of the body element
//     body.style.backgroundColor = colors[currentColor];

// }

// //call the function to change the background color every 5seconds
// setInterval(changeBackgroundColor, 5000);



//initialize firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//get auth buttons and content{
    const signinBtn = document.getElementById("signin-btn");
    const signupBtn = document.getElementById("signup-btn");

    //add event listeners to auth buttons
    signinBtn.addEventListener("click", () => {
        const email = prompt("Please enter your email");
        const password = prompt("Please enter your password");

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                //signed in
                const user = userCredential.user;
                console.log(`signed in as $user.email}`)
                //redirect to budget planner
                // window.location.href="budgetplanner.html"
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage);
                // alert("failed to sign in. please try again")
            });
    });
    

