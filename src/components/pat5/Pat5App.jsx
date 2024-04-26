import React, { useState } from "react";
import Table from './Table'

function Pat5App() {
    const [data, setData] = useState({
        name: '',
        regNo: '',
        cgpa: '',
        gradStatus: '',
        placementStatus: ''
    });
    const [list, setList] = useState([]);

    function handleChnage(event) {
        const { name, value } = event.target;
        setData((prevValue) => {
            return({
                ...prevValue,
                [name]: value,
            })
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(data);
        setList((prevValue) => [...prevValue, data]);
    }

    return(
        <div className="pat5App">
            <form onSubmit={handleSubmit}>
                <input name='name' type='text' value={data.name} onChange={handleChnage} placeholder='Enter Name...'></input>
                <input name='regNo' type='text' value={data.regNo} onChange={handleChnage} placeholder='Enter Registration No...'></input>
                <input name='cgpa' type='number' value={data.cgpa} onChange={handleChnage} placeholder='Enter CGPA...'></input>
                <input name='gradStatus' type='text' value={data.gradStatus} onChange={handleChnage} placeholder='Enter Graduation Status...'></input>
                <input name='placementStatus' type='text' value={data.placementStatus} onChange={handleChnage} placeholder='Enter Placement Status...'></input>
                <button>Click Here!!</button>
            </form>
            {list.map((dataVal, index) => {
                return <Table Name={dataVal.name} RegistrationNumber={dataVal.regNo} Cgpa={dataVal.cgpa} graduationStatus={dataVal.gradStatus} placementStatus={dataVal.placementStatus} key={index}/>
            })}
        </div>
    );
}

export default Pat5App;