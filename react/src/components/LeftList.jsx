import Empty from './Empty'

/*
array map fonsksiyonu bir dizi içindeki öğeleri başka bir forma dönüştürme yoludur:

C# => yield return
*/
function LeftList({ participants, selectParticipant }) {
    return (
        <div className="col-12 col-md-6">
            {participants.length == 0 ? <Empty /> :
                <ul className="list-group list-group-flush">
                    {participants.map(p => (
                        <li key={p.id} className="list-group-item d-flex justify-content-between">
                            <span>{p.firstName} {p.lastName}</span>
                            <button className='btn btn-sm btn-primary' onClick={() => selectParticipant(p.id)}>
                                <span className='bi bi-chevron-right'></span>
                            </button>
                        </li>))}
                </ul>
            }
        </div>);
}

export default LeftList;