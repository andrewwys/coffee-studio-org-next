import matter from 'gray-matter'
import Layout from '../components/layout'
import Hero from '../components/hero'
import InfoBlock from '../components/info-block'
import InfoRegistration from '../components/info-registration'
import InfoDetails from '../components/info-details'
import InfoRowSingleLine from '../components/info-row-single-line'
// import SnipcartButtonClasses from '../bits/snipcart-button-classes'
// import AddToCartShortcut from '../bits/add-to-cart-shortcut'
import  { useState } from 'react'
import { useAppContext } from '../src/context/state'
import { classes } from '../siteConfig.json'
// import { display, siteBaseUrl } from '../siteConfig.json'
import EmailLink from '../bits/link-email'
import WhatsappLink from '../bits/link-whatsapp'

const CoffeeClasses = ({ classList }) => {
  const { lang } = useAppContext();
  const courseMenu = classList.map((course)=> (
      {
        courseName: course.fm[lang].courseName,
        pid: course.fm[lang].pid,
      }
    )
  )
  const initialPid = classList[0].fm[lang].pid;
  const [currentPid, setPid] = useState(initialPid);
  const courseOnDisplay = classList.find(course => (
    course.fm[lang].pid === currentPid
  ));
  const courseOnDisplayLang = courseOnDisplay.fm[lang];
  // console.log(courseOnDisplayLang);
  const { courseName, description, time, content, price, pid, numParticipants,
     instructor, location, courseDesc, remarks } = courseOnDisplayLang;
  const regLink = () =>(
    <a href="https://wa.me/85269611689"
           style={{marginRight: "12px", fontSize: "1.33rem", textDecoration: "underline"}}
        >{"Whatsapp(Tommy)"}</a>
  )

  return (
    <div>
      <Layout bgImg='/images/bg-classes.png'>
        <Hero heroLine1={classes[lang].title} heroLine2={classes[lang].subtitle} />
        <div className='wrapper'>
          <div className='menu'>
            <div className='separator'>&#8727;</div>
            {courseMenu.map((course)=>{
              return(
                <div key={course.pid}>
                  <div 
                    className='menu-link' 
                    key={course.pid} 
                    onClick={()=> setPid(course.pid) }>
                    {course.courseName}
                  </div>
                  <div className='separator'>&#8727;</div>
                </div>
              )
            })}
          </div>
          <div className='content'>
            <InfoBlock title={courseName} content={description}/>
            <InfoDetails title={classes[lang].courseDesc} content={courseDesc}/>
            <InfoDetails title={classes[lang].instructor} content={instructor}/>
            <InfoDetails title={classes[lang].content} content={content}/>
            <InfoRowSingleLine title={classes[lang].duration} content={time} />
            <InfoRowSingleLine title={classes[lang].location} content={location} />
            <InfoRowSingleLine title={classes[lang].fee} content={price} />
            <InfoRowSingleLine title={classes[lang].numParticipants} content={numParticipants} />
            {/* <InfoBlock title={classes[lang].signUp} content={classes[lang].signUpDetails}/> */}
            <InfoRegistration/>
            
            {/* add to cart button */}
            {/*
            <div className='add-to-cart'>
              //  the floating icon to add product to cart 
              <div className='cart-button'>
                <SnipcartButtonClasses 
                  pid={pid} 
                  url={`${siteBaseUrl}/coffee-classes`} 
                  display_name={courseName} 
                  price={price} 
                  description={content}
                >
                  <AddToCartShortcut color={display.headerGreen} width={71} />
                </SnipcartButtonClasses>  
              </div>
              // the link to add product to cart 
              <div className='cart-link cart-fix'>
                <SnipcartButtonClasses
                  pid={pid} 
                  url={`${siteBaseUrl}/coffee-classes`} 
                  display_name={courseName} 
                  price={price} 
                  description={description}
                >
                  <div className='add-to-cart-text'>add to cart &gt;</div>
                </SnipcartButtonClasses>        
              </div>   
            </div>
            */}

          </div>
        </div>
        
      </Layout>
      <style jsx>{`
        .wrapper {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          top: 0px;
          padding: 0 128px 0 64px;
        }
        .menu {
          width: 30%;
          min-width: 250px;
          font-size: var(--fsize-5);
          display: flex;
          flex-direction: column;
          padding-right: 30px;
        }
        .menu-link{
          cursor: pointer;
          color: var(--peach-footer);
          text-decoration: underline;
        }
        .menu-link:hover{
          font-weight: bold;
        }
        .separator {
          color: var(--peach-footer);
        }
        .content {
          width: 70%;
          font-size: var(--fsize-4);
          padding-top: 128px;
        }
        .add-to-cart {
          margin-top: 130px;
        }
        .cart-link {
          padding-right: 175px;
          text-align: right;
          float: right;
        }
        .cart-fix {
          padding-right: 2px;
        }
        .cart-button {
          float: right;
          position: relative;
          bottom: 45px;
        }
        .add-to-cart-text {
          text-decoration: underline;
          font-size: var(--fsize-5);
          color: var(--green-header);
          cursor: pointer;
        }
        @media screen and (max-width: 1045px) {
          .wrapper{
            padding: 0 32px 0 64px;
            top: -50px;
          }
          .menu {
            width: auto;
            font-size: var(--fsize-6);
          }
          .content {
            padding-top: 64px;
            width: auto;
            font-size: var(--fsize-6);
          }
        }
        @media screen and (max-width: 470px) {
          .wrapper{
            padding: 0 16px 0 16px;
            top: -70px;
          }
          .menu {
            width: 100%;
          }
          .content {
            padding-top: 20px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const classes = ((context) => { 
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        fm: document.data,
        // markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../src/classes', true, /\.md$/))

  return {
    props: {
      classList: classes
    },
  }
}

export default CoffeeClasses;