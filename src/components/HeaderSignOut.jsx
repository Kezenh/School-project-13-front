import argentBankLogo from "../assets/argentBankLogo.png"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function HeaderSignOut() {

    const datas = useSelector(state => state.datas)
    const navigate = useNavigate()

    function navigateToUser() {
        navigate("/user")
    }

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <i className="fa fa-user-circle" onClick={navigateToUser}>
                        {datas.firstName}
                    </i>
                    <Link className="main-nav-item" to="/">

                        Sign Out
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default HeaderSignOut