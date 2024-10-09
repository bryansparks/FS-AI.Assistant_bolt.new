import React from 'react'

interface GenealogyPanelProps {
  className?: string
  familyData?: any[]
  personDetails?: any
}

const GenealogyPanel: React.FC<GenealogyPanelProps> = ({ className, familyData, personDetails }) => {
  if (personDetails) {
    return (
      <div className={`bg-white shadow-lg rounded-lg flex flex-col ${className}`}>
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Person Record</h2>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          <h3 className="font-semibold text-lg mb-2">{personDetails.name}</h3>
          <ul className="space-y-2">
            <li><strong>Birth:</strong> {personDetails.birthDate} in {personDetails.birthPlace}</li>
            {personDetails.deathDate && (
              <li><strong>Death:</strong> {personDetails.deathDate} in {personDetails.deathPlace}</li>
            )}
            {personDetails.marriageDate && (
              <li><strong>Marriage:</strong> {personDetails.marriageDate} to {personDetails.spouse}</li>
            )}
            <li>
              <strong>Parents:</strong>
              <ul className="ml-4">
                <li>Father: {personDetails.father}</li>
                <li>Mother: {personDetails.mother}</li>
              </ul>
            </li>
            {personDetails.children.length > 0 && (
              <li>
                <strong>Children:</strong>
                <ul className="ml-4">
                  {personDetails.children.map((child, index) => (
                    <li key={index}>{child}</li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white shadow-lg rounded-lg flex flex-col ${className}`}>
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Family Tree</h2>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <ul className="space-y-2">
          {familyData?.map((member, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">
                {member.relation} • Born: {member.birthYear}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GenealogyPanel