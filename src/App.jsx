import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleRemix = async () => {
    setIsLoading(true)
    try {
      // TODO: Add API call here
      // For now, just echo the input
      setOutputText(inputText)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Content Remixer</h1>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2">
              Input Text
            </label>
            <textarea
              id="input"
              className="w-full h-32 p-2 border rounded-lg"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text here..."
            />
          </div>

          <button
            onClick={handleRemix}
            disabled={isLoading || !inputText}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? 'Remixing...' : 'Remix Content'}
          </button>

          <div>
            <label htmlFor="output" className="block text-sm font-medium text-gray-700 mb-2">
              Remixed Output
            </label>
            <textarea
              id="output"
              className="w-full h-32 p-2 border rounded-lg bg-gray-50"
              value={outputText}
              readOnly
              placeholder="Remixed content will appear here..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 