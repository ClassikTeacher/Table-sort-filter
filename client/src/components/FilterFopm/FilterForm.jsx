import React,{ useState } from 'react'
import { useMemo } from 'react'
import Input from '../input/Input'
import Select from '../select/Select'

const FilterForm = ({searchQuery, setSearchQuert, filterParams, setFilterParams})=>{
    const [filterColumn, setFilterColumn] = useState('')
    const [selectedCondition, setSelectedCondition] = useState('')

    
    useMemo(() => {
      setFilterParams({column: filterColumn, condition: selectedCondition})
    },[searchQuery, filterColumn, selectedCondition])
    
    return(
    <div className='filter-form'>
        <Input 
            value={searchQuery}
            onChange={e=> setSearchQuert(e.target.value)}
            placeholder='Filtet'
        />
        <Select
        value={filterColumn}
        onChange={e => setFilterColumn(e)}
        defaultValue={'selected column'}
        options={[
            {value: '', name:""},
            {value: 'date_event', name:"Date"},
            {value: 'name_event', name:"Name"},
            {value: 'amount', name:"Amount"},
            {value: 'distance', name:"Distance"},
        ]}
        />
        <Select
        value={selectedCondition}
        onChange={e => setSelectedCondition(e)}
        defaultValue={'condition'}
        options={[
            {value: '', name:""},
            {value: 'less', name:"<"},
            {value: 'more', name:">"},
            {value: 'equals', name:"="},
            {value: 'contains', name:"contains"},
        ]}
        />
    </div>
    )
}
export default FilterForm