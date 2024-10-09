import React, { useState } from 'react'
import { Send } from 'lucide-react'

interface ChatInterfaceProps {
  className?: string
  onKnowMore: (person: any) => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ className, onKnowMore }) => {
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm a genealogy bot. How can I help you?", sender: 'bot' }])
      }, 1000)

      // Check if it's a "know more" request
      if (input.toLowerCase().startsWith("tell me more about")) {
        const personName = input.slice(19).trim()
        onKnowMore({ name: personName })
      }
    }
  }

  const commonQueries = [
    "Tell me more about John Doe",
    "What are Jane Doe's parents' names?",
    "When was Emily Doe born?",
    "How are Robert Doe and Mary Doe related?",
    "What is the age difference between John Doe and Jane Doe?",
  ]

  const handleCommonQuery = (query: string) => {
    setInput(query)
  }

  return (
    <div className={`bg-white shadow-lg rounded-lg flex flex-col ${className}`}>
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">What do you wish to ask?</h2>
      </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Common Queries:</h3>
          <div className="flex flex-wrap gap-2">
            {commonQueries.map((query, index) => (
              <button
                key={index}
                onClick={() => handleCommonQuery(query)}
                className="bg-gray-200 text-sm px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface