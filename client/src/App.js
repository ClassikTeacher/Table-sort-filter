import { useState } from 'react';
import AddRowForm from './components/addRowForm/AddRowForm';
import Modal from './components/modal/Modal';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';
import Table from './components/Table';
import './styles/App.css';

function App() {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)
  const [allLengthTable, setAllLengthTable] = useState(0)
  const [visible, setVisible] = useState(false)



  return (
    <div className="App">
      <NavBar setVisible={setVisible} />
      <Modal visible={visible} setVisible={setVisible}>
        <AddRowForm /> 
      </Modal>
      <Table 
      page={page}
      setPage={setPage}
      limit={limit}
      allLengthTable={allLengthTable}
      setAllLengthTable={setAllLengthTable}
      />
      <Pagination 
      page={page}
      setPage={setPage}
      limit={limit}
      allLengthTable={allLengthTable}
      />
    </div>
  );
}

export default App;
