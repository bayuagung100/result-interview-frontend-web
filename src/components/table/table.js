import React, { useEffect, useState } from "react";

const DtTable = (props) => {
    const { data } = props;
    // console.log('data', data)
    const [search, setSearch] = useState('');

    const searching = (rows) => {
        const columns = rows[0] && Object.keys(rows[0])
        return rows.filter((row) => {
            // console.log('row', row)
            return columns.some((column) => {
                // console.log('column', column)
                if (row['tags']) {
                    // console.log('tags',
                    //     row['tags']?.toString().toLowerCase().indexOf(search.toLowerCase()) > -1
                    // )
                    return row['tags']?.toString().toLowerCase().indexOf(search.toLowerCase()) > -1
                }
                return row[column]?.toString().toLowerCase().indexOf(search.toLowerCase()) > -1
            }
            )
        });
    }

    const dataTable = searching(data)

    return (
        <>
            <div>
                <input style={{
                    float: 'right'
                }} type={'text'} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
            </div>
            <br />
            <br />
            <table id={props.id} className="table">
                <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Tags</th>
                </tr>
                {
                    dataTable?.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {
                                        value.title
                                    }
                                </td>
                                <td>
                                    {
                                        value.id
                                    }
                                </td>
                                <td>
                                    {
                                        value.category
                                    }
                                </td>
                                <td>
                                    {
                                        value.description
                                    }
                                </td>
                                <td>
                                    {
                                        value?.tags && (
                                            <ul>
                                                {value.tags.map((val, ind) => {
                                                    return (
                                                        <li key={ind}>
                                                            {val}
                                                        </li >
                                                    )
                                                })}
                                            </ul>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default DtTable