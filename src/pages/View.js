import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const params = useParams()
    // console.log(params);


    const [studentddata, setstudentddata] = useState([])

    const student = async () => {
        const studentList = await axios.get(`https://64022203ab6b7399d0b4a6e9.mockapi.io/dashboard/teacher/${params.id}`);
        // console.log(studentList.data);
        setstudentddata((studentList.data))
    }
    console.log(studentddata);
    useState(() => {
        student()
    }, [])
    return (
        <div>
            <p>{studentddata.class}</p>
            {/* {
                studentddata.map((val) => {
                    return (
                        <p>{val.id}</p>
                    )
                })
            } */}
        </div>
    )
}

export default View
