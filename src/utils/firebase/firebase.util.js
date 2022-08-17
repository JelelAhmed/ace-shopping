import { initializeApp } from 'firebase/app';
import { 
	getAuth, 
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider 
} from 'firebase/auth';

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