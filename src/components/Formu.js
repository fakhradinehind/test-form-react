import React,{useState} from 'react'
import {Consumer} from './context'
import './form.css'
const Formu=()=> {
  const [state,setState]=useState({
    name:'',
    email:'',
    password:''
  }),
  onChangeInput=(e)=>setState({
    [e.target.name]:e.target.value
  }),
  submit=(e)=>{
    e.preventDefault();
    console.log("hello hind")
  }

  
  return(
    <Consumer>
      {value=>{
             return (
              <form onSubmit={submit}>
              <div className="card">
                <div className="card-body">
                  <div className="from-group">
                      <div className="form-control">
                          <label htmlFor="name">name:</label>
                          <input type="text" name="name" id="name" className="form-control" defaultValue={state.name} onChange={onChangeInput} placeholder="" aria-describedby="helpId  " />
                          <small id="helpId" className="text-muted">your name</small>
                      </div>
                      <div className="form-control">
                          <label htmlFor="email">email</label>
                          <input type="text" name="email" id="email" className="form-control" defaultValue={state.email} onChange={onChangeInput} placeholder="" aria-describedby="helpId" />
                          <small id="helpId" className="text-muted">your email</small>
                      </div>
                      <div className="form-control">
                          <label htmlFor="password">Password</label>
                          <input type="text" name="password" id="password" className="form-control" defaultValue={state.password} onChange={onChangeInput} placeholder="" aria-describedby="helpId" />
                          <small id="helpId" className="text-muted">your password</small>
                      </div>
                      <br/>
                      <div className="form-group ">
                          <button className="btn btn-primary">valider</button>
                      </div>
                      
                  </div>
                </div>
              </div>
            </form>
              
            )
      }}
    </Consumer>
    )
 
}
export default Formu