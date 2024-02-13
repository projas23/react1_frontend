import { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [formObj, setFormObj] = useState({ name: "", email: "", password: "", phone: "" });
    const [signedUp, setSignedUp] = useState(false);
    const [errorSigningUp, setErrorSigningUp] = useState('');

    const changeHandler = (e) => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formObj);

        try {
            let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+"signup", { ...formObj });
            console.log(resp);
            if (resp.data) {
                setSignedUp(true);
                console.log("Successfully signed up");
            } else {
                setSignedUp(false);
                setErrorSigningUp("Error while signing up");
            }
        } catch (error) {
            console.log("Error while signing up");
            console.log(error);
            setSignedUp(false);
            setErrorSigningUp("Error while signing up");
        }
    };

    return (
        signedUp
        ? 
        <div className="mb-4">
            <h5>Congratulations! You are now registered with us! Please login.</h5>
        </div>
        : 
        <>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="helpId"
                            placeholder=""
                            onChange={changeHandler} // Setting onChange handler for name input
                        />
                    </div>

                    {/* Input field for phone number */}
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            aria-describedby="helpId"
                            placeholder=""
                            onChange={changeHandler}
                        />
                    </div>

                    {/* Input field for email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="emailid"
                            aria-describedby="helpId"
                            placeholder=""
                            onChange={changeHandler} 
                        />
                    </div>

                    {/* Input field for password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            aria-describedby="helpId"
                            placeholder=""
                            onChange={changeHandler} 
                        />
                    </div>

                    {/* Sign Up button */}
                    <button type="submit" onClick={handleSubmit} className="btn btn-outline-primary m-2">Sign Up</button>
                    {errorSigningUp && <div className="alert alert-danger">{errorSigningUp}</div>}
                </form>
            </div>
        </>
    );
};

export default SignUp;
