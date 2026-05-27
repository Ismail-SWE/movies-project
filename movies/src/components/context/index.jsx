import { createContext, useReducer} from "react";


const initialValue = {
    data: [],
    term: '',
    filter: ""
}

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const {type, payload} = action   // action bu object ichida type va payload bor.
    switch(type){
        case 'ON_DELETE' : 
            const deleteArr = state.data.filter(c => c.id !== payload)
            return {...state, data: deleteArr}
        default: 
          return {state}
    }
} 



const Provider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue) // bu degani providerimizda state va reducer function qo'limiz boradi degani 


     
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>

}

export default Provider;