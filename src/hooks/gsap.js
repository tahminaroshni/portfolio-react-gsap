import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapLinkDownFall = (arr) => {
  useEffect(() => {
    const el = arr.map(link => link.current);

    gsap.fromTo(el,
      {
        y: -500
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2
      })
  }, [])
}

export const useGsapLineForward = (arr) => {
  useEffect(() => {
    const el = arr.map(line => line.current);

    gsap.fromTo(el,
      {
        width: 0
      },
      {
        width: '100%',
        duration: 1,
        delay: 1.5,
        ease: "power4.out",
        stagger: 0.1
      })
  }, [])
}

export const useGsapTextReveal = (arr) => {
  useEffect(() => {
    const el = arr.map(text => text.current);

    gsap.fromTo(el,
      {
        y: 500
      },
      {
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power4.out",
        stagger: 0.1
      })
  }, [])
}

export const useGsapBoxScaling = (arr) => {
  useEffect(() => {
    const el = arr.map(box => box.current);

    gsap.fromTo(el,
      {
        scale: 0
      },
      {
        scale: 1,
        duration: 1,
        delay: 2.5,
        ease: "power4.out",
        stagger: 0.1
      })
  }, [])
}

export const useGsapProjectTitleFall = (arr, trig) => {
  useEffect(() => {
    const el = arr.map(title => title.current);

    gsap.fromTo(el,
      {
        y: -500
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: trig.current,
          start: 'top center'
        }
      })
  }, [])
}