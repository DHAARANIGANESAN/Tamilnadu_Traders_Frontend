import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Products');

  const categories = ['Products', 'Wire', 'Pipe', 'Switch','Fan', 'Drill', 'Paint'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'Products') {
      navigate('/search');
    } else {
      navigate(`/search/${category}`);
    }
  };

  return (
    <Dropdown onSelect={handleCategoryChange}>
      <Dropdown.Toggle variant='primary' id='dropdown-basic' className='drop'>
        {selectedCategory}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category) => (
          <Dropdown.Item key={category} eventKey={category}>
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBox;
