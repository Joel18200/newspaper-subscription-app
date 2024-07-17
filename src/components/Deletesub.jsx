import React from 'react'
import Navbar from './Navbar'

const Deletesub = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <br />
            <div class="card">
  <div class="card-body">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label"><b>Enter Subscriber-Name</b></label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success"><b>DELETE</b></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Deletesub
