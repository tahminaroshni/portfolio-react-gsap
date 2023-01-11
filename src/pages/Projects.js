import { useRef } from "react";
import { useGsapProjectTitleFall } from "../hooks/gsap";

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
  const projectSection = useRef(null);
  const projectTitle1 = useRef(null);
  const projectTitle2 = useRef(null);

  const projectTitleArr = [projectTitle1, projectTitle2];

  useGsapProjectTitleFall(projectTitleArr, projectSection);

  return (
    <div className="projects-section" ref={projectSection}>
      <div className="titles">
        <span ref={projectTitle1}>Selected Works (2019-2022)</span>
        <span ref={projectTitle2}>Projects</span>
      </div>
      <div className="projects-list-wrapper">
        {
          data.map(project => {
            return <div className="project-wrapper">
              <div className="project-item">
                <div className="project-titles">
                  <span className="project-number">{project.id}</span>
                  <h2 className="project-title">{project.title}</h2>
                </div>
                <div className="project-details">
                  <span className="project-date">{project.date}</span>
                  <span className="project-tools">{project.tools}</span>
                </div>
              </div>
              <hr />
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Projects;