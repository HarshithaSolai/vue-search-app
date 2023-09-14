import mockData from '../data/mock-data.json'

export function fetchData(query, topic) {
  // Simulate an API call and return the data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredData = mockData[topic].filter((item) => {
        if (topic === 'people') {
          return (
            item.first_name.toLowerCase().includes(query.toLowerCase()) ||
            item.last_name.toLowerCase().includes(query.toLowerCase()) ||
            item.gender.toLowerCase().includes(query.toLowerCase()) ||
            item.email.toLowerCase().includes(query.toLowerCase())
          )
        } else if (topic === 'organizations') {
          return (
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.industry.toLowerCase().includes(query.toLowerCase())
          )
        } else if (topic === 'address') {
          return (
            item.street.toLowerCase().includes(query.toLowerCase()) ||
            item.house_number.toLowerCase().includes(query.toLowerCase()) ||
            item.city.toLowerCase().includes(query.toLowerCase()) ||
            item.state.includes(query) ||
            item.country.toLowerCase().includes(query.toLowerCase()) ||
            item.postal_code.toLowerCase().includes(query.toLowerCase())
          )
        } else {
          return false
        }
      })
      resolve(filteredData)
    }, 1000)
  })
}
