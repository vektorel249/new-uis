function Form() {
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
                      <input id="txtFirstName" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="form-label">Soyadı</label>
                      <input id="txtLastName" className="form-control" autoComplete="off" />
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="form-label">Adı</label>
                      <input id="txtBirthDate" className="form-control" type="date" autoComplete="off" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 d-flex justify-content-end">
                      <button className="btn btn-primary" va-click="save">Kaydet</button>
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