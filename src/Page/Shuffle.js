import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext'
import {Login} from "../Helper/Login"
export default function Shuffle() {
    const {user,setUser} = useContext(MainContext)
    return (
        <div>
            {JSON.stringify(user,null,2)}
            <br/>



            {!user?<><br/>
            

                <button onClick={async ()=>{
                    let login = await Login();
                    setUser(login)
                    }}>
                Click to check data
            </button>
            </>

:null}



           
        </div>
    )
}
