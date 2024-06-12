import React from 'react';

function MyForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submit');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;