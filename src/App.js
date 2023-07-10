import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Components/Table';
import backgroundImage from './Images/32.png';

function App() {
  const [marketData, setMarketData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    // Fetch market data from API
    const fetchMarketData = () => {
      fetch(`https://api.binance.com/api/v3/ticker/24hr`)
        .then((response) => response.json())
        .then((responseData) => {
          setMarketData(responseData);
        })
        .catch((error) => {
          console.error('Error fetching market data:', error);
          // Handle error
        });
    };

    fetchMarketData();
  }, []);

  if (marketData.length === 0) {
    // Show loading message while data is being fetched
    return <div>Loading...</div>;
  }

  // Filter market data based on search term
  const filteredData = marketData.filter((item) => {
    const symbol = item.symbol || '';
    const name = item.name || '';

    return (
      symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container-fluid min-vh-100">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-8 col-lg-6">
          {/* Add shadow to the parent component */}
          <div className="card bg-dark shadow">
            <div className="card-body">
              <Table
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filteredData={filteredData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


