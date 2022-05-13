import { ref } from 'vue'
import { addDoc, collection } from 'firebase/firestore';
import { store } from "../firebase/config";

const useCollection = (collectionName) => {
  const error = ref(null)

  const colRef = collection(store, collectionName)

  const addDocument = async (doc) => {
    error.value = null

    try {
      await addDoc(colRef, doc)
      error.value = null
    } catch (err) {
      error.value = err.message
    }
  }

  return { error, addDocument }
}

export default useCollection