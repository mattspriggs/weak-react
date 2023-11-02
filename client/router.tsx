import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import App from './components/App'
import SVGbuttons from './components/SVGbuttons'
import SVGpattern from './components/SVGpattern'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="buttontest" element={<SVGbuttons />} />
      <Route path="patterntest" element={<SVGpattern />} />
    </Route>
  )
)

export default router
