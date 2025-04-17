import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { getDoc,
    setDoc,
    doc,
    getFirestore,
 } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyA8pjnNG4GiB-QcsNZPMg0Akzl2XXo7XAU",
    authDomain: "puneeth-clothing.firebaseapp.com",
    projectId: "puneeth-clothing",
    storageBucket: "puneeth-clothing.firebasestorage.app",
    messagingSenderId: "277685960539",
    appId: "1:277685960539:web:34aa2293b8255d1c7e247e"
  };
  const firebaseApp = initializeApp(firebaseConfig);
   
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  })

  const auth=getAuth();

  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

  export const db=getFirestore()

    export const createUserDocumentFromAuth=async (userAuth) =>{
        const userDocRef=doc(db,'users',userAuth.uid);
        //console.log(userDocRef);
        const userSnapshot=await getDoc(userDocRef);
        //console.log(userSnapshot.exists());
        if(!userSnapshot.exists()){
            const {displayName,email}=userAuth;
            const createdAt=new Date();
            try{
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt
                })
            }catch(error){
                console.log("error creating user",error.message);
            }
        }
        return userDocRef;
        
    }

  const app = initializeApp(firebaseConfig);