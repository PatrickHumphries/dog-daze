import { useState } from "react";
import closeWindow from "../images/close-window.png"

const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    console.log(email, password, confirmPassword);

    const handleClick = () => {
        setShowModal(false);
        console.log("closed");
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (isSignUp && password !== confirmPassword) {
                setError("Passwords must match");
            }
            console.log("Make POST request to our DB")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="authModal">
            <div className="close-icon" onClick={handleClick}>
                <img src={closeWindow} alt="" />
            </div>
            <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam maiores illo, dicta esse repellat?</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                }
                <input className="secondary-button" type="submit" />
                <p>{error}</p>
            </form>
            <hr />
            <h2>GET THE APP</h2>
        </div>
    )
};

export default AuthModal;