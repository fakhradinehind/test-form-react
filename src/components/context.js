import React,{useState} from 'react'
const Context=React.createContext()
const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_CONTACT':
        return{
          contacts:[action.payload,...state.contacts]
        };
        default:
          return state;
    }
  }
 export const Provider=()=> {
    const [state,setState]=({
        contacts:[
            {name:"hind1",email:"fakhrad@gmail.com",password:"hindhind"},
            {name:"hind", email:"fakhrad@gmail.com",password:"hindhind"},
            {name:"hind2",email:"fakhrad@gmail.com",password:"hindhind"},
            {name:"hind3",email:"fakhrad@gmail.com",password:"hindhind"},
            {name:"hind4",email:"fakhrad@gmail.com",password:"hindhind"},
            {name:"hind5",email:"fakhrad@gmail.com",password:"hindhind"}
        ],
        dispatch:action=>this.setState(state=>reducer(state,action))
    })
  return (
    <Context.Provider value={state}>
            
      </Context.Provider>
  )
}

export const Consumer = Context.Consumer