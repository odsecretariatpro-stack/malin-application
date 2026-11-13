importScripts("https://www.gstatic.com/firebasejs/13.3.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.3.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAbix_o11EqUTNk0aBOH0E0detRdFbXwU",
  authDomain: "malin-5e7ea.firebaseapp.com",
  projectId: "malin-5e7ea",
  storageBucket: "malin-5e7ea.firebasestorage.app",
  messagingSenderId: "838482025022",
  appId: "1:838482025022:web:ef3938d4fb8775b5374f6f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "MALIN";
  const options = {
    body: payload.notification?.body || "Tu as un rappel !",
    icon: "/icon-192.png"
  };

  self.registration.showNotification(title, options);
});
