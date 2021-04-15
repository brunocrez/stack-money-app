import React from 'react';
import ReduxToastr from 'react-redux-toastr';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const ToastMessages = (props) => (
  <ReduxToastr 
    timeOut={5000}
    newestOnTop={false}
    preventDuplicates={true}
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar />
);

export default ToastMessages;