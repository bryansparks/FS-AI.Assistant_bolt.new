// This is a mock API service. In a real application, you would integrate with the actual FamilySearch API.

export const fetchFamilyData = async () => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'John Doe', relation: 'Self', birthYear: 1980 },
        { name: 'Jane Doe', relation: 'Spouse', birthYear: 1982 },
        { name: 'Robert Doe', relation: 'Father', birthYear: 1950 },
        { name: 'Mary Doe', relation: 'Mother', birthYear: 1952 },
        { name: 'Emily Doe', relation: 'Daughter', birthYear: 2010 },
      ])
    }, 1000)
  })
}

export const fetchPersonDetails = async (personName: string) => {
  // Simulating an API call to fetch detailed person information
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: personName,
        birthDate: '15 Sep 1980',
        birthPlace: 'New York, NY',
        deathDate: '',
        deathPlace: '',
        marriageDate: '12 Jun 2005',
        spouse: 'Jane Doe',
        father: 'Robert Doe',
        mother: 'Mary Doe',
        children: ['Emily Doe'],
        biography: `${personName} was born on September 15, 1980, in New York City. He grew up in Brooklyn and attended local schools. After graduating from college, he pursued a career in software engineering.`,
        historicalContext: `The 1980s, when ${personName} was born, was a decade marked by the end of the Cold War, the rise of personal computers, and significant cultural shifts in music and fashion.`,
        sources: [
          'Birth Certificate: New York City Department of Health',
          'Marriage License: New York City Clerk\'s Office',
          'Family Bible Records',
          'Personal interview with Jane Doe (spouse)',
        ],
      })
    }, 1000)
  })
}