import React from 'react';
import LoginPopUp from '../../components/login/login-pop-up';

const Detail = () => {
  return (
    <div>
      <LoginPopUp
        isOpen={true}
        onClose={() => {
          console.log('close');
        }}
      />
    </div>
  );
};

export default Detail;
