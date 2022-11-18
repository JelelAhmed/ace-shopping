import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { 
	getAuth, 
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider 
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDlsRjwQlhohJtlDMpiH-EWDeXQouW9O8k",
  authDomain: "ace-shopping-db.firebaseapp.com",
  projectId: "ace-shopping-db",
  storageBucket: "ace-shopping-db.appspot.com",
  messagingSenderId: "436016217584",
  appId: "1:436016217584:web:ab68e520a13d6950853135"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());


	if(!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			}); 
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	//if user data does not exist
	//create / set the document with the data from userAuth in my collection

	//if user does exists
	//set user doc wuth userAuth

}