import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const StudentList = () => {


    const [studentddata, setstudentddata] = useState([])

    const student = async () => {
        const studentList = await axios.get(`https://64022203ab6b7399d0b4a6e9.mockapi.io/dashboard/teacher`);
        // console.log(studentList.data);
        setstudentddata(studentList.data)
    }



    useEffect(() => {
        student()
    }, [])

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date</th>

                        <th scope="col">Class</th>
                        <th>Join Class</th>

                    </tr>
                </thead>
                <tbody>

                    {studentddata.map((value, idx) => {
                        return (
                            <tr key={idx}>
                                {/* <td>{value.name}</td> */}
                                <td>{moment(value.date).format("DD-MM-YYYY")}</td>
                                <td>{value.class}</td>
                                <td className='btn btn-primary ml-4' >Join</td>



                            </tr>
                        )
                    })}
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
                    </tr> */}
                </tbody>
            </table>


        </div>
    )
}

export default StudentList
