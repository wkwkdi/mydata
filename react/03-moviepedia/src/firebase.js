import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import{
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
 
 const firebaseConfig = {
    apiKey: "AIzaSyCvlILdnuBcOoYpER-GtBgwIK3aaESL_Ao",
    authDomain: "project0304-cd95c.firebaseapp.com",
    projectId: "project0304-cd95c",
    storageBucket: "project0304-cd95c.appspot.com",
    messagingSenderId: "29194615842",
    appId: "1:29194615842:web:d1b19a1650468e8e789e7b"
 };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  // throw new Error("에러가 아니라 기능입니다.");
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limit)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // 쿼리 query
  // orderBy, limit, startAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  const reviews = result.map((doc) => doc.data());

  const option = "";

  return { reviews, lastQuery };
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
};
