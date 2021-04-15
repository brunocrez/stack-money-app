import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import ToastMessages from '../common/messages/ToastMessages';
import Routes from './routes';

const App = () => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
      <ToastMessages />
    </div>
  </HashRouter>
);

export default App;