import React from 'react';
import './searchContainer.css';

import Input from './Input'

function SearchContainer() {
    return (
        <div className="search-container">
            <div className="content">
                <h1>IP Address Tracker</h1>
                <Input />
            </div>
        </div>
    )
}

export default SearchContainer
