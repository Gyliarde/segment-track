import './App.css'

function App() {

  function track() {
    console.log('track segment')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Sample Segment</p>
        <p>
          <button type="button" onClick={() => track() }>
            track
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
