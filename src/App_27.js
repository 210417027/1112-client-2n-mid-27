import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';

import BlogsStaticPages_27 from './pages/BlogsStaticPage_27';
import HomePage_27 from './pages/HomePage_27';
import BlogsLocalJsonPage_27 from './pages/BlogsLocalJsonPage_27';
import BlogsNodeServerPage_27 from './pages/BlogsNodeServerPage_27';
import BlogsSupabasePage_27 from './pages/BlogsSupabasePage_27';

import Narbar from './components/NarbarResp_27';


function App_27() {
  return (
    <BrowserRouter>
    <Narbar/>
    <Routes>
      <Route path='/card_27' element={<BlogsStaticPages_27/>}/>
      <Route path='/local_27' element={<BlogsLocalJsonPage_27/>}/>
      <Route path='/node_27' element={<BlogsNodeServerPage_27/>}/>
      <Route path='/supabase_27' element={<BlogsSupabasePage_27/>}/>
    </Routes>
      </BrowserRouter>
    );
}

export default App_27;
