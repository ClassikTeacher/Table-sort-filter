import api from "../http";

export default class TableService {
    static fetchTable(){
        return api.get('/table')
    }

    static setRowTable(){
        return api.post('/table')
    }
}