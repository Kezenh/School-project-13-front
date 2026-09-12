import argentBankLogo from "../assets/argentBankLogo.png"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function HeaderSignOut() {

    const datas = useSelector(state => state.datas)
    const navigate = useNavigate()

    function navigateToUser() {
        navigate("/user")
    }

    return (
        <header>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <i className="fa fa-user-circle" onClick={navigateToUser}>
                        {datas.firstName}
                    </i>
                    <a className="main-nav-item" href="/">
                        Sign Out
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default HeaderSignOut