///useMyState.jsx
import { useState, useEffect } from 'react';

export function useMyState(arg) {
  const [group, setGroup] = useState('');

  useEffect(() => {
    setGroup(arg);
    console.log(arg);
  }, [arg]);

  return [group, setGroup];
}

//DropdownExample
