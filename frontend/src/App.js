import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/components.products.list';
import { ProductAddForm } from './components/components.products.add';
import {ConnexionLogin}  from './components/components.connexion.login';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/components.home';
import { AdminLayout } from './components/component .admin.layout';
import ContactForm from './components/component.contact';

function App() {
  return (


    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/new' element={<ProductAddForm />} />
        <Route path='/connexion' element={<ConnexionLogin />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<ContactForm />} />
   
      </Route>
    </Routes>

  );
}

export default App;
