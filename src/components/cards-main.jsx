import React from "react";
const Cardfunc = ()=>{
   
    let [qiymat,setqiymat]= React.useState(0)
    
    return <div>
        <h1 className="qiymat">{qiymat}</h1>
        
        <button className="button1" onClick={()=>{
            setqiymat(qiymat+=1)
        }}>qoshish ✅</button>
                <button className="button2"  onClick={()=>{
           setqiymat(0)
        }}>qaytadan 😉</button>
        <button className="button3" onClick={()=>{
          if(qiymat>0){
            setqiymat(qiymat-=1)
            
          }
        }}>ochirish ❌</button>

    </div>
}
export default Cardfunc