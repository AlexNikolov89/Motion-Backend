import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registrationAction } from '../../store/actions/registrationAction'
import  {validationAction}  from '../../store/actions/validationAction'
import {FirtsContainer,
        EmailSignUpContainer,
        Button
} from '../../style/SignUpStyle'

export const SignUp = () => {
    const [email, setEmail] = useState('');


    const handleEmail = e => {
        setEmail(e.currentTarget.value);
    }



    return (
        <FirtsContainer>
            <h2>Sign Up</h2>
                <form>
                    <EmailSignUpContainer>
                     <p>Email</p>
                        <label style={{marginRight: '25px'}}><image>Image</image></label>
                        <input type='text' placeholder='Email' value={email} style={{border: 'none'}} onChange={handleEmail} />
                        <hr />
                    </EmailSignUpContainer>
                </form>
                <Button>Continue</Button>
        </FirtsContainer>
    )
}



