import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
let navigate=useNavigate()

    return (
    <div>
      <div className="container m-5">
        <div className="row">
            <div className="col-12">
                <h1 className='  text-center text-danger'>Page Not Found </h1>
                <button className=' btn btn-info fw-bold fst-italic' onClick={()=>navigate('/')}>Go Back</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Error
