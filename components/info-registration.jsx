import { useAppContext } from '../src/context/state'
import { classes } from '../siteConfig.json'
import WhatsappLink from '../bits/link-whatsapp'
import EmailLink from '../bits/link-email'

const InfoRegistration = () => {
    const { lang } = useAppContext();
    return (
      <div className='info-block'>
        <div className='title'>{classes[lang].signUp}</div>
        <div className='content'>
            <WhatsappLink/>
            <EmailLink/>
        </div>
        <style jsx>
          {`
            .info-block {
              margin-bottom: 40px;
            }
            .title {
              color: var(--gold-subtitle);
              font-size: var(--fsize-5);
              margin-bottom: 24px;
            }
            .content {
              font-size: var(--fsize-6);
            }
            @media screen and (max-width: 470px) {
              .title {
                font-size: var(--fsize-5);
                margin-bottom: 24px;
              }
              .content {
                font-size: var(--fsize-6);
              }
            }
          `}
        </style>
      </div>
    );
  }
  
  export default InfoRegistration;