import React, {useState} from 'react'
import './Form.css'
function Form(){
    const[name, setName]= useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");

    const [errors, setErrors]=useState({});
    const [success, setSuccess]=useState("");

    function saveName(e){
        setName(e.target.value)
    }
    function saveEmail(e){
        setEmail(e.target.value)
    }
    function savePassword(e){
        setPassword(e.target.value);
    }

    function validate(){
        let newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            newErrors.email = "Invalid email format";
        }
        
        if(password.length<6){
            newErrors.password = "Password must be at least 6 characters long"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length===0;
    }

    function handleSubmit(e){
        e.preventDefault();

        if(validate()){
            setSuccess("Registration Successful !");
            setErrors({});
        }
        else{
            setSuccess("");
        }
    }
    
    return(
        <div className="container">
            <form  className="Form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={saveName}/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={saveEmail}/>
                {errors.email && <p className="error">{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={savePassword}/>
                {errors.password && <p className="error">{errors.password}</p>}
            
                <button type="submit">Submit</button>

                {success && <p className="success">{success}</p>}
            </form>
        </div>
    )
}
export default Form;