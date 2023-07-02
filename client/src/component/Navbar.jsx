import React from 'react'
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const {Color,bg,ModeSet}=props

let navigate=useNavigate()
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${Color} bg-${bg}`}>
  <div className="container-fluid">
    <a className={`navbar-brand    fst-italic  text-danger fw-bold bg-${bg}`} href="/">INoteBook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active  fst-italic fw-bold  text-${Color} bg-${bg}`} aria-current="page" href="/">Home</a>
        </li>
       
       
        
      </ul>
      <div className="ms-auto">
      {Color=='dark'?<MdDarkMode onClick={ModeSet} style={{cursor:'pointer'}} className=' me-3'/>   :<MdLightMode onClick={ModeSet} style={{cursor:'pointer'}} className=' me-3'/>}
      <button className=' btn btn-info text-light fw-bold fst-italic mx-2'onClick={()=>navigate('login')}>Login</button>
      <button className=' btn btn-info text-light fw-bold fst-italic mx-2' onClick={()=>navigate('signup')}>SignUp</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

