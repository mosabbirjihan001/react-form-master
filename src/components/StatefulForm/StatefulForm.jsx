import { useState } from "react";


const StatefulForm = () => {

    const [email , setEmail] = useState(null);
    const [password , setPassword] = useState(null);
    const [error , setError] = useState('');

    const handleChangeEmail = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleChangePassword = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
        }
        console.log(email , password);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input 
                onChange={handleChangeEmail}
                type="email" name="email" id="" /> 
                <br />
                <input
                onChange={handleChangePassword}
                 type="password" name="password" required id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;