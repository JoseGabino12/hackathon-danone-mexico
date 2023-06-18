import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom'
import routes from './routes/routes'
import Footer from './components/footer'
import Nav from './components/nav'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
