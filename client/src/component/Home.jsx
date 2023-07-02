import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-12">
                <h2 className=' text-danger fst-italic fw-light text-center'>AddNote</h2>
                <div className="mb-3">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Title:</label>
                    <input type="text" className="form-control  fw-bold  fst-italic"  />

                </div>
                <div className="mb-3    ">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Description:</label>
                    <input type="text" className="form-control fw-bold fst-italic" />

                </div>  
                <div className="mb-3    ">
                    <label htmlFor="" className="form-label fw-bold fst-italic">Tag:</label>
                    <input type="text" className="form-control fw-bold fst-italic" />

                </div>
                <button className=' btn  btn-info  text-light  fst-italic fw-bold  '>Add Note</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
