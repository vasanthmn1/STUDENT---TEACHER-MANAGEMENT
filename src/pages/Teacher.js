import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Teacher = () => {
    const [studentddata, setstudentddata] = useState([])

    useEffect(() => {
        student()
    }, [])

    const student = async () => {
        const studentList = await axios.get("https://64022203ab6b7399d0b4a6e9.mockapi.io/dashboard/teacher");
        console.log(studentList.data);
        setstudentddata(studentList.data)
    }

    const deleteList = async (id) => {
        const confirmDel = window.confirm("delete")
        if (confirmDel) {
            await axios.delete(`https://64022203ab6b7399d0b4a6e9.mockapi.io/dashboard/teacher/${id}`)
        }
        student()
    }
    const addstudent = async (id) => {
        const studentList = await axios.get(`https://638dc11aaefc455fb2aaf125.mockapi.io/teacher/${id}`);

    }

    return (
        <div>
            <div className=' mb-3 py-2 px-3 bg-primary d-flex justify-content-between align-items-center'>
                <h4 className='text-white'>Teacher</h4>
                <Link to={'/createClass'}>
                    <button className='btn btn-sm btn-success'>Create class</button>
                </Link>
                {/* <select class="form-select">

                    <option>-----------</option>
                    <option value="batch-1"
                        onClick={() => {
                            addstudent()
                        }}

                    >Batch-1</option>
                    <option>Batch-2</option>

                </select> */}
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date</th>

                        {/* <th scope="col">Time</th> */}
                        <th scope="col">Class</th>
                        <th></th>
                        <th>Host Class</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {studentddata.map((value, idx) => {
                        return (
                            <tr key={idx}>
                                {/* <td>{value.name}</td> */}
                                <td>{moment(value.date).format("DD-MM-YYYY")}</td>
                                <td>{value.class}</td>
                                {/* <td>{value.name}</td> */}
                                <td></td>

                                <td >
                                    <button className='btn btn-primary btn-sm ml-4'>
                                        Host
                                    </button>
                                </td>

                                <td className='text-center'>
                                    <button className='btn btn-danger btn-sm ml-4' onClick={() => {
                                        deleteList(value.id)
                                    }}>
                                        Delete
                                    </button>
                                    <Link to={`/editClass/${value.id}`}>
                                        <button className='btn btn-primary btn-sm ml-4'>
                                            Edit
                                        </button>
                                    </Link>
                                    <Link to={`/view/${value.id}`}>
                                        <button className='btn btn-primary btn-sm ml-4'>
                                            view
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>


        </div>
    )
}

export default Teacher

{/* <table class="table">
<thead class="thead-dark">
    <tr>
        <th scope="col">Date</th>

        <th scope="col">Time</th>
        <th scope="col">Class</th>
        <th scope="col">Task</th>
        <th>Join Class</th>

    </tr>
</thead>
<tbody>

    {studentddata.map((value, idx) => {
        return (
            <tr key={idx}>
                {/* <td>{value.name}</td> */}
//             <td>{value.date}</td>

//             <td>{value.time}</td>
//             <td>{value.name}</td>
//             <td>{value.task}</td>

//             <td className='btn btn-primary ml-4'>Join</td>




//         </tr>
//     )
// })}
{/* <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
//     </tr> */}
// </tbody>
// </table> */}
