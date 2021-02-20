import { createContext, useContext, useState } from 'react';

const AppContext = createContext({ lang: 'hk' });

export function AppWrapper({ children }) {
  const [lang, setLang] = useState('hk');
  const toggleLang = () => {
    lang === 'hk'
      ? setLang('en')
      : setLang('hk')
  } 
  // let sharedState = { lang: lang };

  return (
    <AppContext.Provider value={{lang, toggleLang}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}