import { createStore } from "redux"

const initialState = {
    token: "",
    datas: "",
    modalIsOpen: false
}

export function tokenFetched(token) {
    return {
        type: "tokenFetched",
        payload: {
            token: token
        }
    }
}

export function datasFetched(datas) {
    return {
        type: "datasFetched",
        payload: {
            datas: datas
        }
    }
}

export function changeModalState() {
    return {
        type: "changeModalState",
    }
}

function reducer(state = initialState, action) {
    if (action.type === "datasFetched") {
        return {
            ...state,
            datas: action.payload.datas || {}
        }

    }

    if (action.type === "tokenFetched") {
        return {
            ...state,
            token: action.payload.token
        }
    }

    if (action.type === "changeModalState") {
        return {
            ...state,
            modalIsOpen: !state.modalIsOpen
        }
    }

    return state
}

export  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())