import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'
const CreateClass = () => {
    let navigate = useNavigate()
    const [isLoding, setisLoding] = useState(false)


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
                await axios.post(`https://64022203ab6b7399d0b4a6e9.mockapi.io/dashboard/teacher`, val)
                message.success("Class create")
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

export default CreateClass
