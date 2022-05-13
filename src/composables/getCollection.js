import { ref, watchEffect } from 'vue'
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import { store } from "../firebase/config";

const getCollection = (collectionName) => {
  const error = ref(null)
  const documents = ref(null)

  const colRef = collection(store, collectionName)
  const q = query(colRef, orderBy('createdAt', 'asc'))

  const unsub = onSnapshot(q, (snap) => {
    let results = []

    snap.docs.forEach(doc => {
      results.push({ ...doc.data(), id: doc.id })
    })

    documents.value = results
    error.value = null
  }, (err) => {
    console.log(err);
    error.value = err.message
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })
  
  return { error, documents }
}

export default getCollection