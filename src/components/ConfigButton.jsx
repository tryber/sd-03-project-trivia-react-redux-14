import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function ConfigButton() {
  return (
    <div>
      <Link to="/settings">
        <button className='ButtonConfig' data-testid="btn-settings">Config.</button>
      </Link>
    </div>
  );
}

export default ConfigButton;
