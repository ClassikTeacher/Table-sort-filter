import { useMemo } from "react"

export const useConditon = (table, column, condition, query) => {
    if(condition && column){
        if(column == 'date_event'){
            const dateQuery = new Date(query)
            switch(condition) {
                case 'less':
                    return table.filter(item => new Date(item[column]).getTime() < dateQuery.getTime())
                break

                case 'more':
                    return table.filter(item => new Date(item[column]).getTime() > dateQuery.getTime())
                break

                case 'equals':
                    return table.filter(item => new Date(item[column]).getTime() == dateQuery.getTime())
                break

                case 'contains':
                    return table.filter(item => new Date(item[column]).getTime() >= dateQuery.getTime())
                break
                default:
                    console.log(condition)
                break
            } 
        } else {
            switch(condition) {
                case 'less':
                    return table.filter(item => item[column] < query)
                break

                case 'more':
                    return table.filter(item => item[column] > query)
                break

                case 'equals':
                    return table.filter(item => item[column] == query)
                break

                case 'contains':
                    switch(column) {
        
                        case 'name_event':
                            return table.filter(item => item[column].toLocaleLowerCase().includes(query.toLocaleLowerCase()))
                        break
                
                        case 'amount':

                            return table.filter(item => String(item[column]).includes(query))
                        break
                
                        case 'distance':
                            return table.filter(item => String(item[column]).includes(query))
                        break
                        default:
                            console.log(column)
                        break
                    }
                    
                break
                default:
                    console.log(condition)
                break
            }
        }
    }
    else {return table}
}






export const useFilter = (table, column, condition, query) => {
    
            
    const fitredTable = useConditon(table, column, condition, query)

    const FilteredAndSortedTable = useMemo(() => {
        
       return fitredTable
        
    },[table, query, column, condition])
    
    return FilteredAndSortedTable
}