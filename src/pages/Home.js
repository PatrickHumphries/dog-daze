import Nav from "../components/Nav"
import { useState } from "react";
import AuthModal from "../components/AuthModal";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    const authToken = false;

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav
                authToken={authToken}
                showModal={showModal}
                setShowModal={setShowModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="Home">
                <h1>Dog Daze</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? "Sign out" : "Create Account"}
                </button>

                {showModal && (
                    <AuthModal
                        setShowModal={setShowModal}
                        isSignUp={isSignUp}
                        setIsSignUp={setIsSignUp}
                    />
                )}
            </div>
        </div>
    )
};

export default Home;