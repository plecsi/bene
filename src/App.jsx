import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import PageOne from './pages/page-one';
import PageTwo from './pages/page-two';
import PageThree from './pages/page-three';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageOne />} />
          <Route path="PageTwo" index element={<PageTwo />} />
          <Route path="cities/:id" element={<PageThree />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
