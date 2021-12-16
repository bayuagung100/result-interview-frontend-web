import React, { Component } from "react";
import Datatable from 'datatables.net-bs4';
const $ = require('jquery')
$.Datatable = Datatable;

function DtTable(props) {
    // console.log('props', props)
    require('datatables.net-bs4/css/dataTables.bootstrap4.min.css');
    const id = props.id;
    const data = props.data;
    return (
        <table id={id} className="table table-striped table-bordered" width="100%" >
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Tags</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((value, index) => {
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
            </tbody>
        </table>
    )
}

class Datatables extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.id === 'question1') {
            // console.log('ajax', this.props.data)
            $(`#${this.props.id}`).DataTable()
            // $(`#${this.props.id}`).DataTable({
            //     ajax: this.props.data,
            //     columns: [
            //         { title: "Product Name", data: "title" },
            //         { title: "Product Code", data: "id" },
            //         { title: "Category", data: "category" },
            //         { title: "Description", data: "description" },
            //         { title: "Tags", data: "tags" },
            //     ],
            // });
        }
        if (this.props.id === 'question2') {
            // console.log('ajax', this.props.data)
            $(`#${this.props.id}`).DataTable()
            // $(`#${this.props.id}`).DataTable({
            //     ajax: this.props.data,
            //     columns: [
            //         { title: "Product Name", data: "title" },
            //         { title: "Product Code", data: "id" },
            //         { title: "Category", data: "category" },
            //         { title: "Description", data: "description" },
            //         { title: "Tags", data: "tags" },
            //     ],
            // });
        }
    }
    render() {
        return (
            <DtTable id={this.props.id} data={this.props.data} />
        )
    }
}

export default Datatables