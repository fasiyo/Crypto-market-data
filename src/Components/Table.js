import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table({ searchTerm, setSearchTerm, filteredData }) {
  return (
    <div className="container mt-4">
      <div className="jumbotron text-center">
        <h1 className="display-4">Crypto Market Data</h1>
        <p className="lead">Get the latest market data for cryptocurrencies.</p>
      </div>
      <h2 className="text-center mb-4">Market Data</h2>
      <div className="table-responsive">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-4"
        />
        <table className="table table-dark table-striped" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Symbol</th>
              <th style={{ width: '25%' }}>Last Price</th>
              <th style={{ width: '25%' }}>24hr Volume</th>
              <th style={{ width: '25%' }}>% Change (24hr)</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through filteredData array and render a row for each item */}
            {filteredData.map((item, index) => (
              <tr key={item.symbol}>
                <td>{item.symbol}</td>
                <td>{item.lastPrice}</td>
                <td>{item.volume}</td>
                <td className={item.priceChangePercent < 0 ? 'text-danger' : 'text-success'}>
                  {item.priceChangePercent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
