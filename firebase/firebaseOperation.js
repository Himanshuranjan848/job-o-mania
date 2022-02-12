import { database, storage} from "./firebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";


class DataService {
  addJobData = ( refname, newData ) => {
    const CollectionRef = collection(database, refname);
    return addDoc(CollectionRef, newData);
  };

  addData = (collection , document, data) => {
    return setDoc(doc(database, collection , document), data);
  };

  updateData = (collection, document , newData) => {
    const DataDoc = doc(database, collection , document);
    return updateDoc(DataDoc, newData);
  };

  deleteData = (id , refname) => {
    const DataDoc = doc(database, refname , id);
    return deleteDoc(DataDoc);
  };

  getAll = (refname) => {
    const CollectionRef = collection(database, refname);
    return getDocs(CollectionRef);
  };

  getData = (collection , document) => {
    const Doc = doc(database, collection , document);
    return getDoc(Doc);
  };
  
}

export default new DataService();
