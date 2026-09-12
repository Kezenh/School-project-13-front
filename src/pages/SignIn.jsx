import getSignInToken from "../services/getSignInToken"
import getUserDatas from "../services/getUserDatas"
import { tokenFetched, datasFetched } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

function SignIn() {

    const token = useSelector(state => state.token)
    const datas = useSelector(state => state.datas)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            dispatchDatas()
        }
        // eslint-disable-next-line
    }, [token])

    useEffect(() => {
        if (datas) {
            navigateToUser()
        }
        // eslint-disable-next-line
    }, [datas])

    function submitSignIn() {
        dispatchToken()
    }

    async function dispatchToken() {
        const username = document.getElementById("username")
        const password = document.getElementById("password")
        const token = await getSignInToken(username, password)
        dispatch(tokenFetched(token))
    }

    async function dispatchDatas() {
        const datas = await getUserDatas(token)
        dispatch(datasFetched(datas))
    }

    function navigateToUser() {
        navigate("/user")
    }

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <input type="button" className="sign-in-button" value="Sign In" onClick={submitSignIn} />
                    </form>
                    <p id="error"></p>
                </section>
            </main>
        </>
    )
}

export default SignIn