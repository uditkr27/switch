import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext'

export default function Shuffle() {
    const {user,setUser} = useContext(MainContext)
    return (
        <div>
            {JSON.stringify(user,null,2)}
            <br/>



            {!user?<><br/>
            

                <button onClick={()=>setUser({"name":"Udit","reg":"abc"})}>
                Click to check data
            </button>
            </>

:null}



           
        </div>
    )
}
