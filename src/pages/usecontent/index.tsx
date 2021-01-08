import React, { useContext, useRef, createContext, memo } from 'react';

const Foo = memo(props => {
  console.log(props);
  const fooContext = useContext(props.AppContext);

  return <div>{fooContext}</div>;
});

const App = () => {
  const AppContext = createContext('0');
  return (
    <AppContext.Provider value="red">
      <Foo AppContext={AppContext} />
    </AppContext.Provider>
  );
};

export default App;
