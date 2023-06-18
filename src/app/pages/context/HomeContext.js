import { useState } from "react";
import { createContext } from "react";

export const HomeContextApi = createContext();

export const HomeContextProivider = ({ children }) => {
  const [render, setRender] = useState(Math.random());
  const renderFn = () => {
    setRender(Math.random());
  };
  <HomeContextApi.Provider value={{ render, renderFn }}>
    {children}
  </HomeContextApi.Provider>;
};
