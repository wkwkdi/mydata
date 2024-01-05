import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
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
  where,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"


const firebaseConfig = {
    apiKey: "AIzaSyCBSExgM6aBKXSTptxJbhcW0jCzHZQZ8ec",
  authDomain: "dwds-f4c9c.firebaseapp.com",
  projectId: "dwds-f4c9c",
  storageBucket: "dwds-f4c9c.appspot.com",
  messagingSenderId: "470255838267",
  appId: "1:470255838267:web:8371ba9d9917df5ca5281e",
  measurementId: "G-Z4VFCSGDK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  // throw new Error("에러가 아니라 기능입니다.");
  // console.log();
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if(options === undefined){
    const querySnapshot = await getDocs(collection(db, collectionName));
    const result = querySnapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
    }));
  }
  else if (options === undefined) {
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
  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));
  // const reviews = result.map((doc) => {
  //   const obj = doc.data();
  //   obj.docId = doc.id;
  //   return obj;
  // });

  return { reviews, lastQuery };
}

async function getData(collection, filedName, condition, value){
  const docQuery = query(
    collection(db, collectionName),
    where(filedName,condition,value)
  );

  const querySnapshot = await getDocs(docQuery);
  const data = querySnapshot.docs.map((doc)=>({
    docId: doc.id,
    ...doc.data(),
  }));
  return data.length === 1 ? data[0] : data;
}


async function getMember(values) {
  const { id, password } = values;
  let message;
  let memberObj = {};

  const docQuery = query(collection(db, "member"), where("id", "==", id));
  const querySnapshot = await getDocs(docQuery);
  if (querySnapshot.docs.length !== 0) {
    const memberData = querySnapshot.docs.map((doc) => doc.data())[0];
    if (memberData.password === password) {
      memberObj = memberData;
    } else {
      message = "비밀번호가 일치하지 않습니다.";
    }
  } else {
    message = "일치하는 아이디가 없습니다.";
  }

  return { memberObj, message };
}

async function deleteDatas(collectionName, docId, imgUrl) {
  const storage = getStorage();

  try {
    const deleteRef = ref(storage, imgUrl);
    await deleteObject(deleteRef);
    await deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    return false;
  }
  return true;
}

async function addDatas(collectionName, formData) {
  const uuid = crypto.randomUUID();
  const path = `movie/${uuid}`;
  const lastId = (await getLastId(collectionName)) + 1;
  const time = new Date().getTime();
  // 파일을 저장하고 url 을 받아온다.
  const url = await uploadImage(path, formData.imgUrl);

  formData.id = lastId;
  formData.createdAt = time;
  formData.updatedAt = time;
  formData.imgUrl = url;

  const result = await addDoc(collection(db, collectionName), formData);
  const docSnap = await getDoc(result);
  if (docSnap.exists()) {
    const review = { docId: docSnap.id, ...docSnap.data() };
    return { review };
  }
}

async function updateDatas(collectionName, docId, updateData,options){
  const docRef = doc(db, collectionName, docId);
  try{
    if(options){
      if(options.type == "ADD"){
        await updateDoc(docRef, {[options.filedName] : arrayUnion(updateData)});

      }else if(options.type == "DELETE"){
        await updateDoc(docRef, {[options.filedName]: arrayRemove(updateData)});

      }
    }else{
        await updateDoc(docRef, updateData)
      }
      return true;
    }catch(error){
      return false;
    }
  }


async function updateDatas(collectionName, formData, docId, imgUrl) {
  const docRef = await doc(db, collectionName, docId);
  const time = new Date().getTime();

  const updateFormData = {
    title: formData.title,
    content: formData.content,
    rating: formData.rating,
    updatedAt: time,
  };

  // 사진 파일을 변경했을 때
  if (formData.imgUrl !== null) {
    // 사진파일 업로드 및 업로드한 파일 경로 가져오기
    const uuid = crypto.randomUUID();
    const path = `movie/${uuid}`;
    const url = await uploadImage(path, formData.imgUrl);

    // 기존사진 삭제하기
    const storage = getStorage();
    try {
      const deleteRef = ref(storage, imgUrl);
      await deleteObject(deleteRef);
    } catch (error) {
      return null;
    }

    // 가져온 사진 경로 updateInfoObj의 imgUrl 에 셋팅하기
    updateFormData.imgUrl = url;
  }
  // 문서 필드 데이터 수정
  await updateDoc(docRef, updateFormData);
  const docData = await getDoc(docRef);
  const review = { docId: docData.id, ...doc.data() };
  return { review };
}

async function uploadImage(path, imgFile) {
  const storage = getStorage();
  const imageRef = ref(storage, path);

  // File 객체를 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  // 저장한 File의 url 을 받아온다.
  const url = await getDownloadURL(imageRef);
  return url;
}

async function getLastId(collectionName) {
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
  updateDatas,
  getMember,
  getData,
};
