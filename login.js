const firebaseConfig = {
    apiKey: "AIzaSyC4dTwoOCSODPXXVo3xaazJtpF1nxdnn8o",
    authDomain: "weight-database.firebaseapp.com",
    databaseURL: "https://weight-database-default-rtdb.firebaseio.com",
    projectId: "weight-database",
    storageBucket: "weight-database.appspot.com",
    messagingSenderId: "1093545728349",
    appId: "1:1093545728349:web:23fbc42109129dcf0830b4",
    measurementId: "G-95RV6PWWH4"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var usersRef = firebase.database().ref('users');
  
  // Listen for form submit
  document.getElementById('loginForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  

    var email = getInputVal('email');
    var password = getInputVal('password');
  console.log(email);
  console.log(password);

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("it worked");
    window.alert("Login Successful");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Login Failed");
    window.alert("Login Failed");
  });
  
    // Clear form
    document.getElementById('loginForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  

