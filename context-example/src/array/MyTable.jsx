import React from 'react';

function MyTable() {
  const data = [
    {brand: 'Ford', model: 'Mustang'},
    {brand: 'VW', model: 'Beetle'},
    {brand: 'Tesla', model: 'Model S'},
  ]
  return (
    <div>
      <table>
        {
          data.map((item, index) => 
            <tr key={index}>
              <td>{item.brand} : </td><td>{item.model}</td>
            </tr>
          )
        }
      </table>
    </div>
  );
}

export default MyTable;