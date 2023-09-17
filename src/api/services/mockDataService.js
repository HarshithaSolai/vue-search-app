import mockData from '../data/mock-data.json'

// Simulated delay to mimic an API call
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Simulated function to fetch data based on query and topic
export function fetchData(query, topic) {
  // Simulate an API call and return the data
  return new Promise((resolve, reject) => {
    delay(1000) // Simulate network latency (remove in production)
      .then(() => {
        const results = []
        const topicsToSearch = topic === 'all' ? ['people', 'organizations', 'addresses'] : [topic]

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
                item.industry.toLowerCase().includes(query.toLowerCase())
              )
            } else if (key === 'addresses') {
              return (
                item.street.toLowerCase().includes(query.toLowerCase()) ||
                item.house_number.toLowerCase().includes(query.toLowerCase()) ||
                item.city.toLowerCase().includes(query.toLowerCase()) ||
                item.country.toLowerCase().includes(query.toLowerCase()) ||
                item.postal_code.toLowerCase().includes(query.toLowerCase())
              )
            } else {
              return false
            }
          })

          results.push(...filteredData)
        })
        resolve(results)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        reject(error)
      })
  })
}

// Simulated function to fetch topic options from the mock JSON data
export async function fetchTopics() {
  try {
    // Extract the keys (topics) from the mock JSON data
    const topics = Object.keys(mockData)

    // Simulate an API call to fetch topic options
    // You can replace this with an actual API call in a real application
    await delay(1000) // Simulate network latency (remove in production)
    return topics
  } catch (error) {
    console.error('Error fetching topic options:', error)
    throw error
  }
}
