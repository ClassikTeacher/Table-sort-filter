import React from 'react'
import cl from './Modal.module.css'

const Modal = ({children, visible, setVisible})=>{
 
    const rootClasses = [cl.modal]
    if(visible){
        rootClasses.push(cl.active)
    }

    return(
    <div onClick={()=> setVisible(false)} className={rootClasses.join(' ')}>
        <div className={cl.modalContent} onClick={(e)=> e.stopPropagation()}>
            {children}
        </div>
    </div>
    )
}
export default Modal