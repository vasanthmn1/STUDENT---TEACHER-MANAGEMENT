import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateClass from './components/CreateClass'
import EditClass from './components/EditClass'

import Home from './pages/Home'
import StudentList from './pages/StudentList'
import Teacher from './pages/Teacher'
import View from './pages/View'

const Portal = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route path='studentlist' element={<StudentList />} />
                        <Route path='teacher' element={<Teacher />} />
                        <Route path='createClass' element={<CreateClass />} />
                        <Route path='editClass/:id' element={<EditClass />} />
                        <Route path='view/:id' element={<View />} />


                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Portal
