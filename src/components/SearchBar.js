import React, { useState } from 'react';

const SearchBar = ({ data }) => {
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {
        const searchTerm = input.toLowerCase();
        // Check if the search term is empty before filtering
        if (searchTerm.trim() === '') {
            setFilteredData([]); // Reset filteredData if search term is empty
        } else {
            const filtering = data.filter((item) =>
                item.Adress.toLowerCase().includes(searchTerm)
            );
            setFilteredData(filtering);
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const uniqueAddresses = [...new Set(data.map((item) => item.Adress))];

    return (
        <div>
            <input
                type="text"
                placeholder="Search by BnB Address"
                value={input}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>

            {uniqueAddresses.map((address) => (
                <div key={address}>
                    
                    <ul>
                        {filteredData
                            .filter((item) => item.Adress.toLowerCase() === address.toLowerCase())
                            .map((item) => (
                                <li key={item.id}>
                                    <strong>Name:</strong> {item.name} <br />
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{ maxWidth: '500px', maxHeight: '500px' }}
                                        />
                                    )}
                                    <strong>Description:</strong> {item.Beds} <br />
                                    <strong>Address:</strong> {item.Adress} <br />
                                    <strong>Status:</strong> {item.Status} <br />
                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SearchBar;
