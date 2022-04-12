import { useState } from "react";

const From = () => {
    const[image, setImage]= useState('')
    const[title, setTitle]= useState('')
    const[nidn, setNidn]= useState('')
    const[noTelp, setNoTelp]= useState('')

    const simpan=()=>{
        setImage('')
        setTitle('')
        setNidn('')
        setNoTelp('')
    }
    return ( 
        <div className="container border p-3 m-3" style={{backgroundColor:""}}>
            
            <h2>Input Data Dosen</h2>
            <label htmlFor="image" style={{margin:"4"}}>
                {image}
                <input type="text" className="form-control" placeholder="image" id="image" value={image} 
                onChange={(e)=>setImage(e.target.value)}
                ></input>
            </label>
            <label htmlFor="title">
                {title}
                <input type="text" className="form-control" placeholder="title" id="title" value={title}
                onChange={(e)=>setTitle(e.target.value)}
                ></input>
            </label>
            <label htmlFor="nidn">
                {nidn}
                <input type="text" className="form-control" placeholder="NIDN" value={nidn}
                onChange={(e)=>setNidn(e.target.value)}
                ></input>
            </label>
            <label htmlFor="noTelp">
                {noTelp}
                <input type="text" className="form-control" placeholder="No telepon" value={noTelp}
                onChange={(e)=>setNoTelp(e.target.value)}
                ></input>
            </label>
            <div className="d-flex flex-row mt-3">
                <button className="btn btn-primary" onClick={simpan}>simpan</button>
            </div>
        </div>
     );
}
 
export default From;