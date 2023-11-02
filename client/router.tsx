import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import App from './components/App'
import SVGbuttons from './components/SVGbuttons'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="buttontest" element={<SVGbuttons />} />
    </Route>
  )
)

export default router
