import "./App.css";

declare global {
  interface Window {
    analytics: any;
  }
}

function App() {
  function track() {
    window.analytics.track("tracking button", {
      plan: "Enterprise",
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Sample Segment</p>
        <p>
          <button type="button" onClick={() => track()}>
            track
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
