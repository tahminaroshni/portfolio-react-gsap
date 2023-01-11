import { useRef, useState } from "react";
import { useGsapProjectDetailsFall, useGsapProjectLineForward, useGsapProjectSectionTitleFall, useGsapProjectTitleUpward } from "../hooks/gsap";

const data = [
  {
    id: '01',
    title: 'React Todo App',
    date: 'Dec 22',
    tools: 'React - Tailwind CSS'
  },
  {
    id: '02',
    title: 'Immeomorial',
    date: 'Dec 22',
    tools: 'React - React Router - Tailwind CSS'
  },
  {
    id: '03',
    title: 'Foodverse',
    date: 'Dec 22',
    tools: 'React - React Router - Tailwind CSS'
  },
  {
    id: '04',
    title: 'Tech Alpha',
    date: 'Jan 23',
    tools: 'React - React Router - Redux - Tailwind CSS'
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const projectSection = useRef(null);
  const projectTitle1 = useRef(null);
  const projectTitle2 = useRef(null);

  const lineRef = useRef([]);
  const titleRef = useRef([]);
  const numberRef = useRef([]);
  const dateRef = useRef([]);
  const toolsRef = useRef([]);
  // console.log(lineRef);

  const projectTitleArr = [projectTitle1, projectTitle2];

  const colors = ['#db4c44', '#32b8cb', '#00AD6F', 'hotpink'];

  const projectBackgroundStyles = {
    background: colors[currentProject]
  }

  useGsapProjectSectionTitleFall(projectTitleArr, projectSection);
  useGsapProjectLineForward(lineRef.current, projectSection);
  useGsapProjectTitleUpward(titleRef.current, projectSection);
  useGsapProjectDetailsFall(numberRef.current, projectSection, 1);
  useGsapProjectDetailsFall(toolsRef.current, projectSection, 1.5);
  useGsapProjectDetailsFall(dateRef.current, projectSection, 2);

  return (
    <div className="projects-section" ref={projectSection}>
      <div className="titles">
        <span ref={projectTitle1}>Selected Works (2022-2023)</span>
        <span ref={projectTitle2}>Projects</span>
      </div>
      <div className="projects-list-wrapper" style={projectBackgroundStyles}>
        {
          data.map((project, i) => {
            return <div
              className="project-wrapper"
              onMouseOver={() => setCurrentProject(i)}>
              <div className="project-item">
                <div className="project-titles">
                  <span ref={(el) => numberRef.current[i] = el} className="project-number">{project.id}</span>
                  <h2 ref={(el) => titleRef.current[i] = el} className="project-title single-h2">{project.title}</h2>
                  <h2 className="multiple-h2">{project.title} - {project.title} - {project.title}</h2>
                </div>

                <div className="project-details">
                  <span ref={(el) => dateRef.current[i] = el} className="project-date">{project.date}</span>
                  <span ref={(el) => toolsRef.current[i] = el} className="project-tools">{project.tools}</span>
                </div>
              </div>

              <hr ref={(el) => lineRef.current[i] = el} />

            </div>
          })
        }
      </div>
    </div>
  );
};

export default Projects;