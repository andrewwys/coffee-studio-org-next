import { useAppContext } from '../src/context/state'

const LanguageSwitch = () => {
  const {lang, toggleLang} = useAppContext();
  const displayName = lang === 'hk' ? 'EN' : 'HK'
  return (
    <div onClick={()=>{toggleLang()}}>{displayName}</div>
  );
}

export default LanguageSwitch;