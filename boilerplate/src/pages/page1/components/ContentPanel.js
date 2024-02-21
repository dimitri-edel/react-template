import styles from '../css/ContentPanel.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConentPanel() {
  const navigate = useNavigate();
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);

  const data = { name, age };

  function handleClick() {
    navigate('/page2', { state: {data} });
  }

  return (
    <div className={styles.ConentPanel}> 
      <h1>Content Panel</h1>
      <p>Content Panel content...</p>
      <p>some</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" value={age} onChange={e => setAge(e.target.value)} />
      <button onClick={handleClick}>Go to Page 2</button>
    </div>
  );
}

export default ConentPanel;