import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Pagination = ({page, setPage, limit, allLengthTable})=>{
    const [activePage, setActivePage] = useState(1)
    const [allPage, setAllPage] = useState([1])

    const arrPages = () =>{

        const maxPage = Math.ceil(allLengthTable/limit)
        const arrPage = []
        for(let i = 0; i < maxPage; i++){
            arrPage.push(i+1)
        }
        setAllPage([...arrPage])
        }
    useEffect(() => {
         arrPages()
    },[allLengthTable, limit])
   

    function changePage(p){
        
        setPage(page + ((p - activePage) * limit))
        setActivePage(p)
    }

    return(
        <div className='page__wrapper'>
        {allPage.map(p=>
        
          <span onClick={()=> changePage(p)}
          key={p} className={activePage === p ? 'page page__current' : 'page'}>{p}</span>
            )
        }
      </div> 
    )
}
export default Pagination