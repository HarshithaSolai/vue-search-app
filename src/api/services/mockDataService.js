import mockData from '../data/mock-data.json'

// Simulated delay to mimic an API call
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchTopics() {
  try {
    const topics = Object.keys(mockData);
    await delay(1000);
    return topics;
  } catch (error) {
    console.error('Error fetching topic options:', error);
    throw error
  }
}

export function fetchData(query, topic) {
  // Simulate an API call and return the data
  return new Promise((resolve, reject) => {
    delay(1000) // Simulate network latency
      .then(() => {
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
              )
            } else if (key === 'organizations') {
              return (
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.industry.toLowerCase().includes(query.toLowerCase()) ||
                item.website.toLowerCase().includes(query.toLowerCase()) ||
                item.company_size === query
              )
            } else if (key === 'addresses') {
              return (
                item.street.toLowerCase().includes(query.toLowerCase()) ||
                item.house_number.toLowerCase().includes(query.toLowerCase()) ||
                item.city.toLowerCase().includes(query.toLowerCase()) ||
                item.country.toLowerCase().includes(query.toLowerCase()) ||
                item.postal_code?.toLowerCase().includes(query.toLowerCase())
              )
            } else {
              return false;
            }
          })

          results.push(...filteredData);
        })
        resolve(results)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        reject(error);
      })
  })
}
