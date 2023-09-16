import mockData from '../data/mock-data.json';

export function fetchData(query, topic) {
  // Simulate an API call and return the data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = [];
      const topicsToSearch = topic === 'all' ? ['people', 'organizations', 'addresses'] : [topic];

      topicsToSearch.forEach((key) => {
        const filteredData = mockData[key].filter((item) => {
          if (key === 'people') {
            return (
              item.first_name.toLowerCase().includes(query.toLowerCase()) ||
              item.last_name.toLowerCase().includes(query.toLowerCase()) ||
              item.gender.toLowerCase().includes(query.toLowerCase()) ||
              item.email.toLowerCase().includes(query.toLowerCase())
            );
          } else if (key === 'organizations') {
            return (
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.industry.toLowerCase().includes(query.toLowerCase())
            );
          } else if (key === 'addresses') {
            return (
              item.street.toLowerCase().includes(query.toLowerCase()) ||
              item.house_number.toLowerCase().includes(query.toLowerCase()) ||
              item.city.toLowerCase().includes(query.toLowerCase()) ||
              item.country.toLowerCase().includes(query.toLowerCase()) ||
              item.postal_code.toLowerCase().includes(query.toLowerCase())
            );
          } else {
            return false;
          }
        });

        results.push(...filteredData);
      });

      if (results.length > 0) {
        resolve(results);
      } else {
        // Reject the promise with an error message
        reject(new Error('No matching data found'));
      }
    }, 1000);
  });
}
