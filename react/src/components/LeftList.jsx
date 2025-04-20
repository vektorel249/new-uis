import Empty from './Empty'

/*
array map fonsksiyonu bir dizi içindeki öğeleri başka bir forma dönüştürme yoludur:

C# => yield return
*/
function LeftList({ participants }) {
    return (
        <div className="col-12 col-md-6">
            <ul className="list-group list-group-flush" va-array="participants">
                {participants.map(p => (
                    <li key={p.id} className="list-group-item d-flex justify-content-between">
                        <span>{p.firstName} {p.lastName}</span>
                        <button className='btn btn-sm btn-primary'>
                            <span className='bi bi-chevron-right'></span>
                        </button>
                    </li>))}
            </ul>
        </div>);
}

export default LeftList;