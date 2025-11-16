import React from "react";

const MyReact = (function MyReact() {
  const memorizeStates: any[] = [];
  const isInitialized: any[] = [];
  let deps: any[] = [];
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

  function useEffect(effect: () => void, nextDeps: any[]) {
    function runDedeferedEffect() {
      const ENOUGH_TIME_TO_RENDER = 1;
      setTimeout(effect, ENOUGH_TIME_TO_RENDER);
    }
    if (!isInitialized[cursor]) {
      isInitialized[cursor] = true;
      deps[cursor] = nextDeps;
      cursor += 1;
      runDedeferedEffect();
      return;
    }
    const prevDeps = deps[cursor];
    const depsSame = prevDeps.every(
      (prevDep, index: number) => prevDep === nextDeps[index]
    );
    if (depsSame) {
      cursor = cursor + 1;
      return;
    }

    deps[cursor] = nextDeps;
    cursor = cursor + 1;
    runDedeferedEffect();
  }

  function resetCursor() {
    cursor = 0;
  }

  return { useState, useEffect, resetCursor };
})();

export default MyReact;

// 1. 커링
// 2. 클로지를 이용한 _cursor  값 기억 커링 활용
