import React from 'react';
import { Link } from 'react-router-dom';

function ConfigButton() {
  return (
    <Link to="/settings">
      <button className="ButtonConfig" data-testid="btn-settings">Configuraçẽos</button>
    </Link>
  );
}

export default ConfigButton;
