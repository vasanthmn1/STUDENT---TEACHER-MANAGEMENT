import { message } from 'antd'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditClass = () => {

    const params = useParams()
    let navigate = useNavigate()
    const [isLoding, setisLoding] = useState(false)
    const [edit, setedit] = useState([])

    useEffect(() => {
        getuser()
    }, [])

    const getuser = async () => {
        let data = await axios.get(`https://64022203ab6b7399d0b4a6e9.mockapi.io/dashboard/teacher/${params.id}`)
        myFormik.setValues(data.data)
        console.log(data.data);


    }
    const myFormik = useFormik({
        initialValues: {
            date: "",
            class: "",
        },
        validate: (value) => {
            let err = {}
            if (!value.date) {
                err.date = "enter Date"
            }
            if (!value.class) {
                err.class = "ender class"
            }

            return err
        },
        onSubmit: async (val) => {
            try {
                setisLoding(true)
                const edit = await axios.put(`https://64022203ab6b7399d0b4a6e9.mockapi.io/dashboard/teacher/${params.id}`, val)
                // setedit(edit.data)
                console.log(val);
                message.success('edit sussess')
                // setisLoding(true)
                navigate('/teacher')
            } catch (error) {
                console.log(error)
            }

        }
    })

    return (
        <div>
            <form onSubmit={myFormik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-5'>
                        <label className='form-lable'>Date</label>
                        <input value={myFormik.values.date}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}
                            name="date"
                            type='date'
                            className="form-control" />
                        <span className='text-danger' >{myFormik.errors.date}</span>
                    </div>
                    <div className='col-lg-5'>
                        <label className='form-lable'>Class</label>
                        <select className='form-control'
                            value={myFormik.values.class}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}
                            name="class"
                        >
                            <option value={''}>------</option>
                            <option value={'javascript'}>javascript</option>
                            <option value={'React'}>React</option>
                            <option value={'nodejs'}>nodejs</option>
                            <option value={'mongodb'}>mongodb</option>
                        </select>
                        <span className='text-danger' >{myFormik.errors.class}</span>


                    </div>
                </div>
                <button disabled={isLoding} type='sumit' className='btn btn-primary mt-4'>Sumit</button>

            </form>
        </div>
    )
}

export default EditClass
