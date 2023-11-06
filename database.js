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
  var users = firebase.database().ref('users');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var userN = getInputVal('userN');
    var firstN = getInputVal('firstN');
    var lastN = getInputVal('lastN');
    var email = getInputVal('email');
    var password = getInputVal('password');
    document.getElementById('contactForm').reset();


    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("Created user!");
    window.alert("Account Created!");

    saveMessage(userN, firstN, lastN, email, password);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error creating user");
    window.alert("Account exists already with that email");
  });
    
   }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(userN, firstN, lastN, email, password){
    const usersRef = users;
    usersRef.child(userN).set({
      firstN : firstN,
      lastN: lastN,
      email: email,
      password: password
    });

  }
