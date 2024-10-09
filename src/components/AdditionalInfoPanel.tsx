import React from 'react'

interface AdditionalInfoPanelProps {
  className?: string
  info: any
}

const AdditionalInfoPanel: React.FC<AdditionalInfoPanelProps> = ({ className, info }) => {
  if (!info) return null

  return (
    <div className={`bg-white shadow-lg rounded-lg flex flex-col ${className}`}>
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Additional Information</h2>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <h3 className="font-semibold text-lg mb-2">{info.name}</h3>
        <p className="mb-4">{info.biography}</p>
        <h4 className="font-semibold mb-2">Historical Context:</h4>
        <p>{info.historicalContext}</p>
        {info.sources && (
          <>
            <h4 className="font-semibold mt-4 mb-2">Sources:</h4>
            <ul className="list-disc pl-5">
              {info.sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default AdditionalInfoPanel