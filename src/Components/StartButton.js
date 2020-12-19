import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';


const StartButton = (props) => {

    const [menuClassName, setMenuClassName] = useState('topicMenuIn');

    const slideOut = () => {
        setMenuClassName('topicMenuOut');
    }

    return (
       <div className={menuClassName}>
           <h1>Ready to Play?</h1>
           <Button variant="dark" onClick={() => {
               slideOut();
               setTimeout(() => props.enableTopicMenu(), 1000);
               
               }}>Trivia!</Button>
       </div>

    );
}

export default StartButton;