import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <h1>Welcome to Dev Says!</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
