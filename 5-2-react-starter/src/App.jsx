import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <div>
            <h1>Student Info</h1>
            <StudentCard name="Abdulmajeed Aljuhaymi" id="001" dept="22"/>
            <StudentCard name="Rayan Alamri" id="002" dept="24"/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
