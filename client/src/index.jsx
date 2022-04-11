import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App';

import {createRoot} from 'react-dom/client'

// React 18
createRoot(
  document.getElementById('root')
).render(
  <Router>
    <App />
  </Router>
)

//React 17
// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );


