import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { TbSql } from "react-icons/tb";



const competence = () => {
    return (
        <div id="competence">
            <h1>Mes competences</h1>
            <div id="box-skill">
                <div className='logo-box' id="skill1">
                    <FaHtml5 className='icons' />
                    <h3>HTML</h3>
                </div>
                <div className='logo-box' id="skill2">
                    <FaCss3Alt className='icons' />
                    <h3>CSS</h3>
                </div>
                <div className='logo-box' id="skill3">
                    <DiJavascript className='icons' />
                    <h3>JS</h3>
                </div>
                <div className='logo-box' id="skill4">
                    <FaReact className='icons' />
                    <h3>REACT</h3>
                </div>
                <div className='logo-box' id="skill5">
                    <FaPhp className='icons' />
                    <h3>PHP</h3>
                </div>
                <div className='logo-box' id="skill6">
                    <TbSql className='icons' />
                    <h3>SQL</h3>
                </div>

            </div>
        </div>
    );
};

export default competence;