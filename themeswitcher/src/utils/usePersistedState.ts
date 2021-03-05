import { useState, useEffect, Dispatch, SetStateAction } from 'react'
type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

//Precisa de uma chave para guardar com nome no local storage
function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue){
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })

    useEffect(() => {
        //Converte para JSON para guardar qualquer coisa
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default usePersistedState