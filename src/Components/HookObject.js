import React, {useState} from 'react'

const HookObject = () => {
    const [name, setName] = useState({firstName: '', lastName: ''})
    
  return (
    <>
    <form>
        <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
        <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
    </form>
    <div>
        <h3>First Name is : {name.firstName}</h3>
        <h3>last Name is : {name.lastName}</h3>

    </div>
    </>
  )
}

export default HookObject
