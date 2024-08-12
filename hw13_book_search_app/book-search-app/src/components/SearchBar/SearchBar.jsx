import _ from 'lodash'
import React, {  useCallback, useEffect, useState } from 'react'

export default function SearchBar({onSubmit}) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    // we use lodash's 'debounce' function to limit how often the onSubmit function is called
    // debounce the onSubmit function to prevent too many requests
    const debounceOnSubmit = useCallback(_.debounce(onSubmit, 1000), [onSubmit])

    //useEffect is used to call the debounced 'onSubmit' function whenever the input value changes
    useEffect(() => {
        // if(inputValue) {
            debounceOnSubmit(inputValue)
        // }
    }, [inputValue])


  return (
    <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={() => onSubmit(inputValue)}>
            submit
        </button>
    </div>
  )
}
