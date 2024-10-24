import React, { useEffect, useState } from 'react';
import Tabs from '@theme/Tabs';

const OSTabs = ({ children, showLinux = true }) => {
  const [activeOS, setActiveOS] = useState('mac');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('win')) setActiveOS('windows');
    else if (userAgent.includes('linux') && showLinux) setActiveOS('linux');
    else setActiveOS('mac');
  }, [showLinux]);

  const tabValues = [
    { label: 'macOS', value: 'mac' },
    { label: 'Windows', value: 'windows' },
  ];

  if (showLinux) {
    tabValues.push({ label: 'Linux', value: 'linux' });
  }

  return (
    <Tabs
      defaultValue={activeOS}
      values={tabValues}
    >
      {children}
    </Tabs>
  );
};

export default OSTabs;
