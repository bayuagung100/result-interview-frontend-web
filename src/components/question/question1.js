import axios from "axios";
import React, { useEffect } from "react";
import Datatables from "../table/datatables";
import { dummyQ1 } from "../table/dummyQ1";

const Question1 = () => {
    const dataDummy = dummyQ1;
    // console.log('dataDummy', dataDummy);

    // api nya ga bisa hit kena cors.
    // const getData = () => {
    //     axios.get(`${API_URL}${API_URL_Q1}`)
    //         .then(response => {
    //             console.log('response', response)
    //         })
    // };
    // useEffect(() => {
    //     getData();
    // }, [])

    

    return (
        <>
            <div className="header">Question 1</div>
            <div className="card">
                <div className="card-body table-responsive">
                    <Datatables id={'question1'} data={dataDummy} />
                </div>

            </div>
        </>
    )
}
export default Question1