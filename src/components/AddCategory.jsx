import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length <=1) return;
        onNewCategory(inputValue)
        setInputValue('')
    }

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <input 
                type="text" 
                placeholder="Seatch Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
