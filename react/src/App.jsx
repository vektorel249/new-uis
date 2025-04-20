import { useState } from 'react'
import Form from "./components/Form"
import LeftList from "./components/LeftList"
import RightList from "./components/RightList"
function App() {

  const [newParticipant, setNewParticipant] = useState({ id: 0, firstName: "", lastName: "", birthDate: new Date() });
  const [participants, setParticipants] = useState([]);
  const [selected, setSelecteds] = useState([]);

  return (
    <div className="container m-5">
      <div className="grid">
        <Form setParticipant={updateParticipants} />
        <div className="row mt-2">
          <LeftList participants={participants} />
          <RightList />
        </div>
      </div>
      
    </div>
  )

  function updateParticipants(p) {
    setNewParticipant(p);

    //[ ...participants, p] => önce varolan diziyi al sonra p nesnesini al ve birleştir
    setParticipants(participants => [ ...participants, p]);
  }
}

export default App
