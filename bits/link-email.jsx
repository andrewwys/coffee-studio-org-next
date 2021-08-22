import { useAppContext } from '../src/context/state'
import { labels } from '../siteConfig.json'

const EmailLink = () => {
  const { lang } = useAppContext();
    return (
        <a href="mailto:order@coffeestudio.org"
          style={{fontSize: "1.33rem", textDecoration: "underline"}}
        >{labels[lang].email}</a>
    );
  }
  
  export default EmailLink;