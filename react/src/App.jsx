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
          <LeftList participants={participants} selectParticipant={selectParticipant} />
          <RightList participants={selected} excludeParticipant={excludeParticipant} />
        </div>
      </div>
      
    </div>
  )

  function updateParticipants(p) {
    setNewParticipant(p);

    //[ ...participants, p] => önce varolan diziyi al sonra p nesnesini al ve birleştir
    setParticipants(participants => [ ...participants, p]);
  }

  function selectParticipant(id) {
    let s = participants.find(f => f.id == id); // önce seçileni id'den yakala
    setParticipants(participants.filter(f => f.id != id)); // sonra diziden bu id'ye sahip olmayanları ayıkla (seçileni ele)
    setSelecteds([...selected, s]); // var olan selected listesi + az önce ayıklanan
  }

  function excludeParticipant(id) {
    let e = selected.find(f => f.id == id);
    setSelecteds(selected.filter(f => f.id != id));
    setParticipants([...participants, e]);
  }
}


export default App
