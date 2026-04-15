import React, { useState, useEffect } from 'react';

interface SafeEmailProps {
  user: string;
  domain: string;
  className?: string;
  children?: React.ReactNode;
}

export const SafeEmail: React.FC<SafeEmailProps> = ({ user, domain, className, children }) => {
  const [href, setHref] = useState('#');

  const handleInteraction = () => {
    if (href === '#') {
      setHref(`mailto:${user}@${domain}`);
    }
  };

  return (
    <a
      href={href}
      onMouseEnter={handleInteraction}
      onFocus={handleInteraction}
      onClick={(e) => {
        if (href === '#') {
          e.preventDefault();
          window.location.href = `mailto:${user}@${domain}`;
        }
      }}
      className={className}
    >
      {children || (
        <>
          {user}
          <span className="hidden">ignore-this-bot</span>
          @
          <span className="hidden">ignore-this-bot</span>
          {domain}
        </>
      )}
    </a>
  );
};
