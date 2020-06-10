import React from 'react';
import { Link } from 'react-router-dom';

function ConfigButton() {
  return (
    <div>
      <Link to="/settings">
        <button data-testid="btn-settings">Config.</button>
      </Link>
    </div>
  );
}

export default ConfigButton;
