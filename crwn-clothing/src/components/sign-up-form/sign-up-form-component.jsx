import { useState } from "react"

import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase-utils';
import FormInput from '../form-input/form-input-component';
import Button from "../button/button-component";
import './sign-up-form-styles.scss';
const defaultformFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const SignUpForm=() =>{
    const [formFields,setFormFields]=useState(defaultformFields);
    const {displayName,email,password,confirmPassword}=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultformFields)
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("passwords do not match");
            return;
        }
        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
           // console.log(user); her by console.logging we can see the user object which has the uid and other details of the user does not have the value of displayName so we need to update the user object with the displayName and other details. we are intorducing additionalInformation(in firebase-utils) to the createUserDocumentFromAuth function which will take the displayName and other details and update the user object with the displayName and other details.
            setFormFields(defaultformFields);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch(error){
            //this 'auth/email-already-in-use' is found if we did console.log(user)
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot use already used Email')
            }
            console.log("error creating user",error.message);
        }
    }

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='Display Name'
                 type="text" required  onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label='Email' 
                type="email" required  onChange={handleChange} name="email" value={email} />
                
                <FormInput label='Password'
                type="password" required  onChange={handleChange} name="password" value={password}/>
                
                <FormInput label='Confirm Password'
                type="password" required  onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                
                < Button  type="submit"> Sign Up  </Button>{/*If there is no button type the it is default */}
            </form>
        </div>
    )
}

export default SignUpForm;