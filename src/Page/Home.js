import React,{useContext} from 'react'
import { MainContext } from '../Context/MainContext'
import { Logout } from '../Helper/Logout'

export default function Home() {
    const {user,setUser} = useContext(MainContext)
    return (
        <div>
            {JSON.stringify(user,null,2)}
            {user?<><br/>
            

            <button onClick={()=>{
               
                setUser(null)
            }}>
                remove data
            </button>
            </>

:null}
        </div>
    )
}
