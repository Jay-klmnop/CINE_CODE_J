import { Route, Routes } from 'react-router-dom';
import { DetailPage, HomePage, SearchPage } from '@/pages';
import { Layout } from '@/components/layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:id' element={<DetailPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
