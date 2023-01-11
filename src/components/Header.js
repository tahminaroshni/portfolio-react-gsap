import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { useRef } from "react";
import { useGsapLinkDownFall, useGsapLineForward, useGsapTextReveal, useGsapBoxScaling } from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const text6 = useRef(null);
  const text7 = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const linkArr = [link1, link2, link3, link4];
  const lineArr = [line1, line2, line3, line4];
  const textArr = [text1, text2, text3, text4, text5, text6, text7];
  const boxArr = [box1, box2, box3];

  useGsapLinkDownFall(linkArr);
  useGsapLineForward(lineArr);
  useGsapTextReveal(textArr);
  useGsapBoxScaling(boxArr);

  return (
    <div className="header container">

      <div className="row">
        <h2 ref={text1}>T<span>a</span>hmin<span>a</span></h2>
        <h2 ref={text2}>Akt<span>e</span>r</h2>
        <h2 ref={text3}>T<span>a</span>nni</h2>
      </div>

      <hr ref={line1} />

      <div className="row">
        <span ref={link1}>Front-end developer</span>
        <a href="https://www.google.com" target='_blank' rel="noreferrer" ref={link2}>
          View Resume
        </a>
        <a href="mailto:tonni.eee2017@gmail.com" target='_blank' rel="noreferrer" ref={link3}>
          Send Email
        </a>
        <Link to='/contact' ref={link4}>Contact Me</Link>
      </div>

      <div className="row">
        <Link to='/about' className="box about" ref={box1}>
          About
          <span><BsArrowUpRightCircle /></span>
        </Link>
        <h2 ref={text4}>Aspiring</h2>
        <Link to='/projects' className="box projects" ref={box2}>
          Projects
          <span><BsArrowUpRightCircle /></span>
        </Link>
      </div>

      <hr ref={line2} />

      <div className="row">
        <h2 ref={text5}>Front-E<span>n</span>d Dev<span>e</span>loper</h2>
      </div>

      <hr ref={line3} />

      <div className="row">
        <h2 ref={text6}>Based</h2>
        <Link to='/skills' className="box skills" ref={box3}>
          Skills
          <span><BsArrowUpRightCircle /></span>
        </Link>
        <h2 ref={text7}>in Bangladesh</h2>
      </div>

      <hr ref={line4} />

    </div>
  );
};

export default Header;