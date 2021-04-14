import React from 'react';

import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import ToastMessages from '../common/messages/ToastMessages';

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      {props.children}
    </div>
    <Footer />
    <ToastMessages />
  </div>
);