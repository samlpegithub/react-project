import React, { useState } from 'react'

const Signup = () => {

const [data, setdata] = useState({
  name:'',
  email:'',
  password:''
});
  const Change=(e)=>{
setdata({...data,[e.target.name]:e.target.value})


  }
const handle=(e)=>{
e.preventDefault()

setdata({
  name:"",
  email:'',
  password:""
})



}


  return (
    <>
      <div className="container mt-3">
        <div className="row">
            <div className="col-12">
            <h2 className=' text-danger fst-italic fw-light text-center'>SignUp Form</h2>
               <form action="" onSubmit={handle}>
               <div className="mb-4 mt-4">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Name:</label>
                    <input type="text"className="form-control  fw-bold  fst-italic" onChange={Change} value={data.name} name='name'  placeholder='Email Name' required  minLength={3}/>

                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Email Address:</label>
                    <input type="email" className="form-control  fw-bold  fst-italic"  onChange={Change} value={data.email} name='email' placeholder='Email Address' required />

                </div>
                <div className="mb-4">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Password:</label>
                    <input type="password" className="form-control  fw-bold  fst-italic" onChange={Change} value={data.password} name='password'  placeholder='Email Password' required  minLength={5}/>

                </div>
                <button className=' btn  btn-info  text-light  fst-italic fw-bold  '>SignUp</button>
               </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
