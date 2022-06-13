import React from 'react'
import MyButton from './Button/MyButton'

const NavBar = ({setVisible})=>{

    const createRow = () => {
        
    }

    return(
        <div className='navbar'>
            <MyButton onClick={() => setVisible(true)}>Create Row</MyButton>
           
        </div>
    )
}
export default NavBar