import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [invalidCredentials, setInvalidCredentials] = useState(false);
    let navigate = useNavigate();

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL+"login", { email, password });
            if (response.data.length > 0) {
                sessionStorage.setItem("name", response.data[0].name);
                sessionStorage.setItem("email", response.data[0].email);
                sessionStorage.setItem("role", response.data[0].role);
                response.data[0].role === "realtor" ? navigate('/enquiries') : navigate('/');
            } else {
                setInvalidCredentials(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={submitHandler}>
                {invalidCredentials && (
                    <div className="mb-3">
                        <h5 className="text-danger">Invalid credentials, please try again.</h5>
                    </div>
                )}
                {/* Email input field */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={emailHandler}
                    />
                </div>

                {/* Password input field */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={passwordHandler}
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    className="btn btn-outline-primary m-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
