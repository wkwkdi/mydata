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
  exists,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
import { getStorage, ref,uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"

 
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
  const reviews = result.map((doc) => ({docId:doc.id, ...doc.data()}));
  
  // const reviews = result.map((doc)=>{
  //   const obj = doc.data();
  //   obj.docId = doc.id;
  //   return obj;
  // });
 
  return { reviews, lastQuery };
}

async function deleteDatas(collectionName, docId){
  await deleteDoc(doc(db, collectionName,docId));
}

async function addDatas(collectionName, formData){
  const uuid = crypto.randomUUID();
  const path = `movie/${uuid}`;
  const lastId = (await getLastId(collectionName)) + 1;
  const time = new Date().getTime();
  //파일을 저장하고 url을 받아온다
  const url = await uploadImage(path, formData.imgUrl);
  
  formData.id = lastId;
  formData.createdAt = time;
  formData.updateAt = time;
  formData.imgUrl = url;

  const result = await addDoc(collection(db,collectionName),formData);
  const docSnap = await getDoc(result);
  if(docSnap.exists()){
  const review = { docId: docSnap.id, ...docSnap.data() };
  return { review };
  }
}
async function uploadImage(path, imgFile){
  const storage = getStorage();
  const imageRef = ref(storage, path);

  //File 객체를 스토리지에 저장
  await uploadBytes(imageRef,imgFile);

  //formDaata.imgurl = 받아온 url
  const url = await getDownloadURL(imageRef);
  return url;
}

async function getLastId(collectionName){
  const docQuery = query(
    collection(db, collectionName),
    orderBy("id", "desc"),
    limit(1)
  );
  const lastDoc = await getDocs(docQuery);
  const lastId = lastDoc.docs[0].data().id;
  return lastId;
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
  addDatas,
  deleteDatas,
};
