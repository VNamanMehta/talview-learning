import './App.css'
import AuthProvider from './contexts/AuthProvider'
import AppRoutes from './routes/AppRoutes'

function App() {


  return (
    <AuthProvider>
      <div>
        <main>
          <AppRoutes />
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
