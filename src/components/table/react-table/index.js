// App.js
import React from 'react';
import BasicTableComponent from './basic.table';
import FilterTableComponent from './filter.table';
import PaginationTableComponent from './pagination.table';
import SortingTableComponent from './sorting.table';
import ExpandableTableComponent from './expandable.table';

function Index() {

    return (
        <div className="App">

            <h3>Basic Table using <code>react-table</code></h3>

            <BasicTableComponent />

            <h3>Filter Table using <code>react-table</code></h3>

            <FilterTableComponent />

            <h3>Table with Pagination using <code>react-table</code></h3>

            <PaginationTableComponent />

            <h3>Sorting on Table using <code>react-table</code></h3>

            <SortingTableComponent />

            <h3>Expandable on Table using <code>react-table</code></h3>

            <ExpandableTableComponent />

        </div>
    );
}

export default Index;
