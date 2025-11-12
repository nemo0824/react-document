import React from "react";

const MyReact = (function MyReact() {
  let firstName: any;
  let initalized = false;
  function useName<T>(initialValue: T): [T, (newValue: T) => void] {
    const { forceUpdate } = useForceUpdate();
    if (!initalized) {
      firstName = initialValue;
      initalized = true;
    }

    const setFirstName = (newValue: T) => {
      if (firstName === newValue) return;
      firstName = newValue;
      forceUpdate();
    };

    return [firstName as T, setFirstName];
  }

  function useForceUpdate() {
    const [value, setValue] = React.useState(1);
    const forceUpdate = () => setValue(value + 1);
    return { forceUpdate };
  }

  return { useName };
})();

export default MyReact;
