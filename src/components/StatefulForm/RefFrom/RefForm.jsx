import React, { useRef } from 'react';

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id="" />
                <br />
                <input ref={emailRef} defaultValue={'mosabbirjihan@gmail.com'} type="email" name="email" id="" /> 
                <br />
                <input ref={passwordRef} type="password" required name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;