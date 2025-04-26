import Empty from './Empty'
function RightList({ participants, excludeParticipant }) {
    return (
        <div className="col-12 col-md-6">
            {
                participants.length == 0 ? <Empty /> :
                    <ul className="list-group list-group-flush">
                        {
                            participants.map(p => (
                                <li key={p.id} className="list-group-item d-flex justify-content-between">
                                    <button className='btn btn-sm btn-primary' onClick={() => excludeParticipant(p.id)} >
                                        <span className='bi bi-chevron-left'></span>
                                    </button>
                                    <span>{p.firstName} {p.lastName}</span>
                                </li>
                            ))
                        }
                    </ul>
            }
        </div>
    );
}

export default RightList;