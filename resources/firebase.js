import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import{
  getFirestore, 
  collection, 
  getDocs,
  setDoc,
  addDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
 
 const firebaseConfig = {
   apiKey: "AIzaSyAJcbfO9kN2i_Ap22mLCch3H0BUaXO-2I0",
   authDomain: "test-50c50.firebaseapp.com",
   projectId: "test-50c50",
   storageBucket: "test-50c50.appspot.com",
   messagingSenderId: "100957826346",
   appId: "1:100957826346:web:3e61f17bd09bad4cb08253",
   measurementId: "G-2F7T0J10W2"
 };
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const  db = getFirestore(app);


 async function getDatas(collectionName){
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot
}
async function addDatas(collection, dataObj){
  await addDoc(collection(db,collectionName), dataObj);
}
 export { db,getDocs,collection,getDatas,setDoc,addDoc,doc,addDatas };