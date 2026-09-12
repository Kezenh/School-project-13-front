import { useSelector, useDispatch } from "react-redux"
import { changeModalState, datasFetched } from "../redux/store"
import updateProfile from "../services/updateProfile"

function EditNameModal() {

    const dispatch = useDispatch()
    const datas = useSelector(state => state.datas)
    const token = useSelector(state => state.token)

    function OpenCloseModal() {
        dispatch(changeModalState())
    }

    async function editName() {
        const firstName = document.getElementById("firstNameChange")
        const lastName = document.getElementById("lastNameChange")
        const datas = await updateProfile(token, firstName.value, lastName.value)
        dispatch(datasFetched(datas))
        OpenCloseModal()
    }

    return (
        <form>
            <div>
                <input id="firstNameChange" className="inputForm" type="text" placeholder={datas.firstName} />
                <input id="lastNameChange" className="inputForm" type="text" placeholder={datas.lastName} />
            </div>
            <div>
                <button className="buttonForm" type="button" onClick={editName}>Save</button>
                <button className="buttonForm" type="button" onClick={OpenCloseModal}>Cancel</button>
            </div>
        </form>
    )
}

export default EditNameModal