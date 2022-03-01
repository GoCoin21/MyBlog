import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
	apiKey: "AIzaSyBpO-ngg9zEnrhP9TBC_DN9T8DQRigRY8k",
    authDomain: "blog-768d3.firebaseapp.com",
    projectId: "blog-768d3",
    storageBucket: "blog-768d3.appspot.com",
    messagingSenderId: "141934551310",
    appId: "1:141934551310:web:edb25fae31cef8dd5cb75f"
}

export const firebaseApp = initializeApp(firebaseConfig)

const storage = getStorage(firebaseApp)
const auth = getAuth()
const provide = new GoogleAuthProvider()