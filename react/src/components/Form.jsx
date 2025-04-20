import { useState } from "react"
function Form({setParticipant}) {
    const [id, setId] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState(new Date(1990, 0, 1));

    const formatDate = (date) => {
      const year = date.getFullYear();
      //Ocak: 0 => 1 => 01
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    function save() {
      setParticipant({ id: id, firstName:firstName, lastName: lastName, birthDate: birthDate});

      setFirstName("");
      setLastName("");
      setBirthDate(new Date());

      setId(id+1);
    }

    return (
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Yeni Kayıt</h5>
              </div>
              <div className="card-body">
                <div className="grid">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <label className="form-label">Adı</label>
                      <input className="form-control" autoComplete="off" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="form-label">Soyadı</label>
                      <input className="form-control" autoComplete="off" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="form-label">Adı</label>
                      <input className="form-control" type="date" autoComplete="off" value={formatDate(birthDate)} onChange={(e) => setBirthDate(new Date(e.target.value))} />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 d-flex justify-content-end">
                      <button className="btn btn-primary" onClick={save}>Kaydet</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Form;