import { useState, useContext, useEffect, createContext } from "react";

const AppContext = createContext();
const AppProviderContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(!showSkeleton);
    }, 800);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSkeleton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { useGlobalContext, AppProviderContext, AppContext };
