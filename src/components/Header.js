import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    let loginHandler = () => {
        navigate('/login');
    };

    let logoutHandler = () => {
        sessionStorage.clear();
        navigate('/');
    };

    let signupHandler = () => {
        navigate('/signup');
    };

    return (
        <div className="row align-items-center border bg-warning">
            <div className="col-sm-2">
                <Link to="/"><img className="w-50 rounded-pill" src="./img/logo.png" alt="logo" /></Link>
            </div>
            <div className="col-sm-8">
                <h1 className="display-6 text-center">Find your home</h1>
            </div>
            <div className="col-sm-2">
                {sessionStorage.getItem("name") ? (
                    <button onClick={logoutHandler} className="btn btn-outline-primary m-2 mx-3">Logout</button>
                ) : (
                    <>
                        <button onClick={loginHandler} className="btn btn-outline-primary m-2 mx-3">Login</button>
                        <button onClick={signupHandler} className="btn btn-outline-primary m-2 mx-3">Sign Up</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
