import React from 'react'
import { useRef, useEffect } from 'react'

export default function Skills() {
    var html = useRef(null)
    var css = useRef(null)
    var js = useRef(null)
    var react = useRef(null)
    var py = useRef(null)
    var cpp = useRef(null)
    var c = useRef(null)
    var skill = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    html.current.style = 'animation: html 1s forwards linear;'
                    css.current.style = 'animation: css 1s forwards linear;'
                    js.current.style = 'animation: javascript 1s forwards linear;'
                    react.current.style = 'animation: react 1s forwards linear;'
                    py.current.style = 'animation: python 1s forwards linear;'
                    cpp.current.style = 'animation: cpp 1s forwards linear;'
                    c.current.style = 'animation: c 1s forwards linear;'
                }
            });
        });

        observer.observe(skill.current);

        // Clean up the observer on unmount
        return () => observer.disconnect();
    }, []);
    return (
        <div className='skills' ref={skill} >
            <div className="Skill-heading">My Skills</div>
            <div className="my-all-skills">


                <div id="first-skill" className='all-skills'>
                    <div className="s-name">HTML</div>
                    <div className="box box-1"><span className="grey-html grey" ref={html}></span></div>
                    <div className="html-percentage perc">80%</div>
                </div>


                <div id="second-skill" className='all-skills'>
                    <div className="s-name">CSS</div>
                    <div className="box box-2"><span className="grey-css grey" ref={css}></span></div>
                    <div className="css-percentage perc">70%</div>
                </div>


                <div id="third-skill" className='all-skills'>
                    <div className="s-name">Javascript</div>
                    <div className="box box-3"><span className="grey-javascript grey" ref={js}></span></div>
                    <div className="javascript-percentage perc">60%</div>
                </div>


                <div id="forth-skill" className='all-skills'>
                    <div className="s-name">React JS</div>
                    <div className="box box-4"><span className="grey-react grey" ref={react}></span></div>
                    <div className="react-percentage perc">50%</div>
                </div>


                <div id="fifth-skill" className='all-skills'>
                    <div className="s-name">Python</div>
                    <div className="box box-5"><span className="grey-py grey" ref={py}></span></div>
                    <div className="python-percentage perc">85%</div>
                </div>


                <div id="sixth-skill" className='all-skills'>
                    <div className="s-name">C++</div>
                    <div className="box box-6"><span className="grey-cpp grey" ref={cpp}></span></div>
                    <div className="cpp-percentage perc">60%</div>
                </div>


                <div id="seventh-skill" className='all-skills'>
                    <div className="s-name">C</div>
                    <div className="box box-7"><span className="grey-c grey" ref={c}></span></div>
                    <div className="c-percentage perc">30%</div>
                </div>

            </div>
        </div>
    )
}
