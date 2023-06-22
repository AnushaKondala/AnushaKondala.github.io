const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvb0JsyloSjCJHDaE3aKdC71IdcyURa_8",
    authDomain: "login-authentication-70c3a.firebaseapp.com",
    databaseURL: "https://login-authentication-70c3a-default-rtdb.firebaseio.com",
    projectId: "login-authentication-70c3a",
    storageBucket: "login-authentication-70c3a.appspot.com",
    messagingSenderId: "75568377059",
    appId: "1:75568377059:web:a1344967d9a8fd7fdb69d6"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const signUp = () => {
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email + " " + password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Signed in 
          
          alert("user created")
          window.location.replace('login.html');
          
            // ...
        })
        .catch((error) => {
          alert("didn't sign up")
            console.log(error.code);
            alert(error.message);
            // ..
        });
}
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            // Signed in
            alert("signed in")
            window.location.replace('home.html');
            
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message);
            console.log(error.code);
            alert("wrong login")
        });
      /*signIn.addEventListener('click', () => {
            // Check if the user is authenticated
            const user = firebase.auth().currentUser;
            if (user) {
              // Navigate to the next page
              window.location.href = 'hello.html';
            } else {
              // Display an error message or redirect to a login page
              console.log('User is not authenticated');
            }
})*/
}