import './App.css'
import Auth from './components/Auth'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Content from './components/Content'
import Counter from './components/Counter'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AuthProvider from './Providers/AuthProvider'
import ThemeProvider from './Providers/ThemeProvider'
import ToastProvider from './Providers/ToastProvider'
import ToastContainer from './components/ToastContainer'
import Navbar from './components/Navbar'
import AppRoutes from './Routes/AppRoutes'

function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <ToastProvider>
          <Navbar />          
        <div className='app-container'>
          <AppRoutes />
        </div>
        </ToastProvider>
      </ThemeProvider>
      
    </AuthProvider>
  )
}

export default App
