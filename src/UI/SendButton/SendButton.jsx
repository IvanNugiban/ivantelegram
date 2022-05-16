import React from 'react';
import cl from './SendButton.module.css'

const SendButton = (props) => {

    function onTransitionEnd(e) {
      setTimeout(() => e.target.blur() , 500)
    }

    return (
            <input {...props} value="" onFocus={onTransitionEnd}  className={cl.sendBtn} type="submit" />
    );
};

export default SendButton;