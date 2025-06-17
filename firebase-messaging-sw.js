importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAX27di1k3zuHMdFVtuzFjqAnXKb-Juo7Y",
  authDomain: "community-edulearn.firebaseapp.com",
  projectId: "community-edulearn",
  storageBucket: "community-edulearn.firebasestorage.app",
  messagingSenderId: "517780625337",
  appId: "1:517780625337:web:b4d491cfe8057aa0dd4868",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/chat-icon.png'
  });
});
