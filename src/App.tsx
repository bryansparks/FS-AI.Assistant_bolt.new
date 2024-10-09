import React, { useState, useEffect } from 'react'
import { MessageSquare, Users } from 'lucide-react'
import ChatInterface from './components/ChatInterface'
import GenealogyPanel from './components/GenealogyPanel'
import AdditionalInfoPanel from './components/AdditionalInfoPanel'
import { fetchFamilyData, fetchPersonDetails } from './services/familySearchApi'

function App() {
  const [layout, setLayout] = useState<'initial' | 'detailed'>('initial')
  const [familyData, setFamilyData] = useState([])
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [personDetails, setPersonDetails] = useState(null)

  useEffect(() => {
    const loadFamilyData = async () => {
      const data = await fetchFamilyData()
      setFamilyData(data)
    }
    loadFamilyData()
  }, [])

  const handleKnowMore = async (person) => {
    setSelectedPerson(person)
    setLayout('detailed')
    const details = await fetchPersonDetails(person.name)
    setPersonDetails(details)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">FamilySearch Genealogical Assistant</h1>
      </header>
      <main className="flex-grow flex flex-col">
        <div className={`flex-grow flex ${layout === 'initial' ? 'flex-row' : 'flex-col'}`}>
          {layout === 'initial' ? (
            <>
              <ChatInterface className="w-1/2" onKnowMore={handleKnowMore} />
              <GenealogyPanel className="w-1/2" familyData={familyData} />
            </>
          ) : (
            <>
              <div className="flex-grow flex">
                <GenealogyPanel className="w-1/2" personDetails={personDetails} />
                <AdditionalInfoPanel className="w-1/2" info={personDetails} />
              </div>
              <ChatInterface className="h-1/3" onKnowMore={handleKnowMore} />
            </>
          )}
        </div>
      </main>
      <button
        onClick={() => setLayout(prev => prev === 'initial' ? 'detailed' : 'initial')}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        {layout === 'initial' ? <MessageSquare size={24} /> : <Users size={24} />}
      </button>
    </div>
  )
}

export default App