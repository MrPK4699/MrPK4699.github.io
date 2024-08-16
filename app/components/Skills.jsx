// components/Skills.js
import Image from 'next/image';

const mySkills=['HTML', 'CSS', 'Javascript', 'Java', 'React', 'Redux', 'MongoDb', 'ExpressJs', 'NodeJs','Mantine','Webflow'  ]

const Skills = () => (
  <section className="page-section" id="skills">
    <div className="container px-4 px-lg-5">
      <h2 className="text-center mt-0">Technical Skills</h2>
      <hr className="divider" />

      <div className="justify-content-center row gx-4 gx-lg-5">

        {
          mySkills.map((ele,i)=>(
            <div className="col-lg-2 col-sm-3 col-4 text-center " key={i}>
              <div className="shadow-lg mt-lg-5 mt-4 py-3 rounded-4 fs-6">
                <div className="mb-2 rotate-y">
                    <Image src={`assets/img/${ele}.png`} alt={ele} width={'40px'}/>
                </div>
                {/* <h3 className="h4 mb-2">{ele}</h3> */}
                <p className="text-muted mb-0">{ele}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  </section>
);

export default Skills;
