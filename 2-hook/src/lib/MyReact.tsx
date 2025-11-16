import React from "react";

const MyReact = (function MyReact() {
  const memorizeStates: any[] = [];
  const isInitialized: any[] = [];
  let cursor = 0;
  function useState<T>(initialVlaue = "") {
    const { forceUpdate } = useForceUpdate();
    if (!isInitialized[cursor]) {
      memorizeStates[cursor] = initialVlaue;
      isInitialized[cursor] = true;
    }

    const state = memorizeStates[cursor];

    const setStateAt = (_cursor: number) => (nextState: any) => {
      if (state === nextState) return;
      memorizeStates[_cursor] = nextState;
      forceUpdate();
    };
    const setState = setStateAt(cursor);

    cursor += 1;
    return [state, setState];
  }

  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => {
      setValue(value + 1);
      cursor = 0;
    };
    return { forceUpdate };
  }

  return { useState };
})();

export default MyReact;
