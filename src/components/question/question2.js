import axios from "axios";
import React, { useEffect } from "react";
import Datatables from "../table/datatables";
import { dummyQ2 } from "../table/dummyQ2";
import DtTable from "../table/table";

const Question2 = () => {
    const dataDummy = dummyQ2;
    // console.log('dataDummy', dataDummy);

    // api nya ga bisa hit kena cors.
    // const getData = () => {
    //     axios.get(`${API_URL}${API_URL_Q2}`)
    //         .then(response => {
    //             console.log('response', response)
    //         })
    // };
    // useEffect(() => {
    //     getData();
    // }, [])

    

    return (
        <>
            <div className="header">Question 2</div>
            <div className="card">
                <div className="card-body table-responsive">
                    <Datatables id={'question2'} data={dataDummy} />
                    {/* <DtTable data={dataDummy} /> */}
                </div>

            </div>
        </>
    )
}
export default Question2