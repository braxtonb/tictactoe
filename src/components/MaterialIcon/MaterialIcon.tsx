import React from 'react';

interface MaterialIconProps {
  iconName: string
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ iconName }) => {
  return (
    <i className="material-icons">{iconName}</i>
  );
}

export default MaterialIcon;