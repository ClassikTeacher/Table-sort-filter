import React, {useEffect, useState} from 'react'
import { useMemo } from 'react'
import { useFilter } from '../hooks/useFilter'
import TableService from '../servise/TableService'
import FilterForm from './FilterFopm/FilterForm'
import Select from './select/Select'

const Table = ({page, setPage, limit, allLengthTable, setAllLengthTable})=>{
    const [itemsTable, setItemsTable] = useState([])
    const [tablePage, setTablePage] = useState([])
    const [selectSort, setSelectSort] = useState('')
    const [searchQuery, setSearchQuert] = useState('')
    const [filterParams, setFilterParams] = useState({})

    
    async function fetchTable(){
        try{const response = await TableService.fetchTable()
        setItemsTable(response.data)
        
        } catch (e) {
            console.log(e)
        }
    }   

    useEffect(() => {
         getTablePage()
    }, [itemsTable, page, selectSort, searchQuery, filterParams])


   function getTablePage(){
        const itemPage = []
        setAllLengthTable(filterAndSortedTamle.length)
        const limitPage = ()=>{
            if(filterAndSortedTamle.length-page >= limit) {
                return limit
            } else 
            if(filterAndSortedTamle.length-page <= 0){
               return 0
            } 
            else 
            {
                return filterAndSortedTamle.length-page
            }
        }
        for(let i = page; i < page + limitPage(); i++){
        itemPage.push(filterAndSortedTamle[i])
        }
        setTablePage([...itemPage])
   }
 
    
    const sortedTable = useMemo(() => {
        if(selectSort) {
            const arr = selectSort.split(',')
            console.log('sorted')
            if(arr[0] == 'name_event'){
                if(arr[1] == 0){
                    return [...itemsTable].sort((a, b) => a[arr[0]].localeCompare(b[arr[0]]))
                } else{
                    return [...itemsTable].sort((b, a) => a[arr[0]].localeCompare(b[arr[0]]))
                }} else {
                    if(arr[1] == 0){
                        return [...itemsTable].sort((a, b) => a[arr[0]]-(b[arr[0]]))
                    } else{
                        return [...itemsTable].sort((b, a) => a[arr[0]]-(b[arr[0]]))
                    }
            }
        }
        return itemsTable
    }, [selectSort, itemsTable])

    const filterAndSortedTamle =  useFilter(sortedTable, filterParams.column, filterParams.condition, searchQuery)


    const sortTable = (sort) => {
        setSelectSort(sort)
        console.log(tablePage)
    }
   

    

    useEffect(()=>{
        fetchTable() 
    },[])

    return(
        <div className='table-container'>
            <FilterForm
            searchQuery={searchQuery}
            setSearchQuert={setSearchQuert}
            filterParams={filterParams}
            setFilterParams={setFilterParams}
            />
             <table className='table'>
                 <tr>
                     <td>
                     <div className='table__title-column'> Date </div>
                     
                     </td>
                     <td>
                     <div className='table__title-column'>Name</div>
                        <Select 
                        value={selectSort}
                        onChange={sortTable}
                        defaultValue={'sorted on'}
                        options={[
                            {value: [], name:""},
                            {value: ['name_event', 0], name:"ascending"},
                            {value: ['name_event', 1], name:"descending"}
                        ]}
                        />
                     </td>
                     <td>
                     <div className='table__title-column'>Amount</div>
                        <Select 
                        value={selectSort}
                        onChange={sortTable}
                        defaultValue={'sorted on'}
                        options={[
                            {value: [], name:""},
                            {value: ['amount', 0], name:"ascending"},
                            {value: ['amount', 1], name:"descending"}
                        ]}
                        />
                     </td>
                     <td>
                        <div className='table__title-column'>Distance</div>
                        <Select 
                        value={selectSort}
                        onChange={sortTable}
                        defaultValue={'sorted on'}
                        options={[
                            {value: [], name:""},
                            {value: ['distance', 0], name:"ascending"},
                            {value: ['distance', 1], name:"descending"}
                        ]}
                        />
                     </td>
                 </tr>
                {itemsTable.length
                ? tablePage.map(item=>
                    <tr>
                        <td>
                            {item.date_event.slice(0,10)}
                        </td>
                        <td>
                            {item.name_event}
                        </td>
                        <td>
                            {item.amount}
                        </td>
                        <td>
                            {item.distance}
                        </td>
                    </tr>
                )
                    : <h2>table is void</h2>
                    
            }
             </table>
        </div>
    )
}
export default Table