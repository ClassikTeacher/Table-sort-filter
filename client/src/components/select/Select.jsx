import React from 'react'
import classes from './Select.module.css'

const Select = ({options, defaultValue, value, onChange, disabled})=>{
    return(
        <select className={classes.select}
        value={value}
        onChange={event => onChange(event.target.value)}
        >
            <option selected disabled value="">{defaultValue}</option>
            
            
            {options.map(option => 
                <option key={option.value} value={option.value}>{option.name}</option>
                )}
        </select>
    )
}
export default Select