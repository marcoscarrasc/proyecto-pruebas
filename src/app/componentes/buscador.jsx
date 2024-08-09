// components/SearchBar.js
import { useState } from 'react';

const Buscador = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;