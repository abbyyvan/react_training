import React, { useState, useEffect } from 'react';

function withDataFetching(WrappedComponent, dataSource) {
  return function DataFetchingComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(dataSource);
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [dataSource]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <WrappedComponent data={data} {...props} />;
  };
}

// Usage
const MyComponent = ({ data }) => (
  <div>
    <h1>Data:</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

const MyComponentWithData = withDataFetching(MyComponent, 'https://api.example.com/data');
