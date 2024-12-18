
import { Auth } from "../firebaseconfig";
import { signInWithEmailAndPassword, signOut,sendEmailVerification } from "firebase/auth";
import { sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const handleloginBackend = async ({ email, password }) => {
  await signInWithEmailAndPassword(Auth, email, password);
  return Auth.currentUser;
};
const signout = () => {
  signOut(Auth);
  console.log("user signedOut");
};
const IsEmailverified = () => {
 const user = Auth.currentUser;
console.log("email verified :",user.emailVerified)
return user.emailVerified;
}
function sendagain (){                     
//send link to email again (you have to wait few secondes to be able to send again)
    sendEmailVerification(Auth.currentUser).then(()=>{
        alert('email sent ')
    }).catch(()=>{alert('email sent failed try again in few seconds')})
}
const handleForgotPasswordBackend = async (email) => {
    await sendPasswordResetEmail(Auth,email)
    
};

export { handleloginBackend, signout ,IsEmailverified,sendagain,handleForgotPasswordBackend};
