import './Fcis.css'
export default function Fci({fciStudent}){
    return(
        <div className='css'>
            <p>Id : {fciStudent.id}</p>
            <p>Name : {fciStudent.name} </p>
            <p>Roll : {fciStudent.roll} </p>
        </div>
    )
}