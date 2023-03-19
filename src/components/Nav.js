import logo from "../images/logo.png"

const Nav = (props) => {
    const { authToken, showModal, setShowModal, setIsSignUp } = props
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            {!authToken ? (
                <button
                    className="nav-button"
                    onClick={handleClick}
                    disabled={showModal}
                >
                    Log in
                </button>

            )
                :
                <></>
            }
        </nav>
    );
};

export default Nav;