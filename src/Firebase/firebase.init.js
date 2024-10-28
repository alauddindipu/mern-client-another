
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
export default app;



// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyA53rYitpaVLWexgvX9JqrIuqWeTDnETs0",
//   authDomain: "course-react-routing-firebase.firebaseapp.com",
//   projectId: "course-react-routing-firebase",
//   storageBucket: "course-react-routing-firebase.appspot.com",
//   messagingSenderId: "694070425415",
//   appId: "1:694070425415:web:e63ffa6e13c2ee27e27e62"
// };

// const app = initializeApp(firebaseConfig);
// export default app;