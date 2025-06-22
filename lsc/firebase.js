<!-- Save this as firebase.js -->
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyAX27di1k3zuHMdFVtuzFjqAnXKb-Juo7Y",
    authDomain: "community-edulearn.firebaseapp.com",
    projectId: "community-edulearn",
    storageBucket: "community-edulearn.appspot.com",
    messagingSenderId: "517780625337",
    appId: "1:517780625337:web:b4d491cfe8057aa0dd4868",
    measurementId: "G-7T47TFT2ZX"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  const db = firebase.firestore();
</script>
