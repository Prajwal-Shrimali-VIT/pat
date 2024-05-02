import React, { useState } from 'react';
import PasswordChecker from './PasswordChecker';

function Pat6App() {
    const [password, setPassword] = useState('');

    function returnCallBack(value) {
        setPassword(value);
    }

    return(
        <div className='pat6App'>
            <PasswordChecker callback={returnCallBack} />
            <textarea name="password" id="password" cols="30" rows="10" readOnly value={password}></textarea>
        </div>
    );
}

export default Pat6App;
