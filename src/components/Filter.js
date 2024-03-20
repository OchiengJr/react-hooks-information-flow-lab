import React from 'react';

const Filter = ({ onCategoryChange }) => {
    return (
        <div className="Filter">
            <label htmlFor="categoryFilter">Filter by category:</label>
            <select id="categoryFilter" name="filter" onChange={onCategoryChange}>
                <option value="All">All</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    );
};

export default Filter;
