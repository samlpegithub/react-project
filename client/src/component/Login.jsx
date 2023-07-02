import React,{useState} from 'react'

const Login = () => {

    
const [data, setdata] = useState({
    email:'',
    password:''
  });
    const Change=(e)=>{
  setdata({...data,[e.target.name]:e.target.value})
  
  
    }
  const handle=(e)=>{
  e.preventDefault()
  


  setdata({
    email:'',
    password:""
  })
  
  
  
  }
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-12">
                <h2 className=' text-danger fst-italic fw-light text-center'>Login Form</h2>
                <form action="" onSubmit={handle}>
                <div className="mb-3 mt-5">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Email Address:</label>
                    <input type="email" className="form-control  fw-bold  fst-italic" placeholder='Email Address'  onChange={Change} value={data.email} name='email'  required />

                </div>
                <div className="mb-3    ">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Password:</label>
                    <input type="password" className="form-control fw-bold fst-italic" onChange={Change} value={data.password} name='password'  placeholder='Password' required  minLength={5}/>

                </div>
                <button className=' btn  btn-info  text-light  fst-italic fw-bold  '>Login</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
