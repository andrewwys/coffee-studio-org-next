import matter from 'gray-matter'
import Layout from '../components/layout'
import Hero from '../components/hero'
import InfoBlock from '../components/info-block'
import InfoDetails from '../components/info-details'
import InfoRowSingleLine from '../components/info-row-single-line'
import { useAppContext } from '../src/context/state'
import { useState } from 'react'
import { classes } from '../siteConfig.json'

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
  console.log(courseOnDisplayLang);
  return (
    <div>
      <Layout>
        <Hero bgImg='/images/bg-classes.png' heroLine1={classes[lang].title} heroLine2={classes[lang].subtitle} />
        <div className='wrapper'>
          <div className='menu'>
            <div className='separator'>&#8727;</div>
            {courseMenu.map((course)=>{
              return(
                <div>
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
            <InfoBlock title={courseOnDisplayLang.courseName} content={courseOnDisplayLang.description}/>
            <InfoDetails title={classes[lang].content} content={courseOnDisplayLang.content}/>
            <InfoRowSingleLine title={classes[lang].duration} content={courseOnDisplayLang.time} />
            <InfoRowSingleLine title={classes[lang].fee} content={'HKD ' + courseOnDisplayLang.price} />
            <InfoBlock title={classes[lang].signUp} content={classes[lang].signUpDetails}/>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .wrapper {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          top: -300px;
          padding: 0 128px 0 64px;
        }
        .menu {
          width: 30%;
          min-width: 250px;
          font-size: var(--fsize-5);
          display: flex;
          flex-direction: column;
        }
        .menu-link{
          cursor: pointer;
          color: var(--peach-footer);
        }
        .menu-link:hover{
          text-decoration: underline;
        }
        .separator {
          color: var(--peach-footer);
        }
        .content {
          width: 70%;
          font-size: var(--fsize-4);
          padding-top: 128px;
        }
        @media screen and (max-width: 960px) {
          .wrapper{
            padding: 0 32px 0 64px;
            top: -480px;
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
            top: -440px;
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
    console.log('context:', context)
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