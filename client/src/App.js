// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} />
       </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <div>Welcome to my App!</div>; 
}

export default App;