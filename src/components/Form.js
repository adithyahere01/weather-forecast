import React from 'react';
import { useState } from 'react';
import PropsTypes from 'prop-types';

function Form({submitSearch}) {
   const [value, setValue] = useState('')

   const handleSubmit = (e) => {
    e.preventDefault()
    if(!value || value === '') return
     submitSearch(value)
     setValue('')
   }

   const handleInput =(e) => {
       const inputValue = e.target.value
       setValue(inputValue)
   }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='form-input' placeholder='Type a location...' value={value} onChange={handleInput} required />

            <button type='submit' className='btn' onClick={handleSubmit}><i className="fas fa-search"></i></button>
        </form>
    )
}

Form.PropsTypes ={
    submitSearch: PropsTypes.func.isRequired
}


export default Form
