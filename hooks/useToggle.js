import { useState } from 'react';

export function useToggle(initialState) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((currentState) => !currentState);

  return [state, toggle, setState];
}
