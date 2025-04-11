// 🔥 Your Firebase config (replace with yours!)
const firebaseConfig = {
    apiKey: "AIzaSyBWQN5byKwp-ArP3wR1atnADhrvWEq6T-0",
    authDomain: "stealth-ea9bf.firebaseapp.com",
    databaseURL: "https://stealth-ea9bf-default-rtdb.firebaseio.com",
    projectId: "stealth-ea9bf",
    storageBucket: "stealth-ea9bf.firebasestorage.app",
    messagingSenderId: "1026325715495",
    appId: "1:1026325715495:web:7349860eb345ce8ac40c02"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  function sendMessage() {
    const message = document.getElementById('message').value;
    if (!message.trim()) {
      alert('Please enter a message!');
      return;
    }
  
    db.ref('overlay/text').set(message)
      .then(() => {
        // alert('Message sent successfully!');
        document.getElementById('message').value = '';
      })
      .catch(error => {
        console.error(error);
        alert('Error sending message.');
      });
  }
  