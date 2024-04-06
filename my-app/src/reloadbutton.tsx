import React, { useState } from 'react';
import './App.css'; // Import styles

interface ReloadButtonProps {
  onReload: () => void; // Function to trigger reload
}

const ReloadButton: React.FC<ReloadButtonProps> = ({ onReload }) => {
  return (
    <button onClick={onReload} className="button2">Resimulate</button>
  );
}

export default ReloadButton;