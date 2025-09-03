import { Route, Routes } from 'react-router-dom';
import { DetailPage, HomePage } from '@/pages';
import { Layout } from '@/components/layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/details' element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
