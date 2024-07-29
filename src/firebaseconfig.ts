
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGESENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCRL2UkcNLPY4NvChfSfUGZMlISbPQmsW0",
  authDomain: "mediabook-49.firebaseapp.com",
  projectId: "mediabook-49",
  storageBucket: "mediabook-49.appspot.com",
  messagingSenderId: "836397224197",
  appId: "1:836397224197:web:93226be7a669a4b917a76c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;