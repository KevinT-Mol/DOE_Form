import React from "react";
import { useState } from 'react';

import axios from "axios";

import '../Layout/layout.css'
import './LineManager.css'


const LineManager = () => {

    //_____________________________________________________________________________________
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(values => ({
            ...values, 
            [name]: type === 'checkbox' ? checked: value}))
    }

    // ___________________________Post to AWS_______________________________________
    const APIurl='https://3dsvq882x5.execute-api.eu-west-1.amazonaws.com/DevStage'

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log("Submitted Successfuly", formData);
    }
    return (
       <>
            <header>

                {/* logo images */}
                <img src={require('../logo/BMW Group Logo.png')} id="logo1" alt="BMW Logo" />
                <span>
                    <a>Annexure B</a>
                </span>
                <img src={require('../logo/BMW logo.png')} id="logo2" alt="BMW Logo" />

            </header>

            <body>

                <h2 id="titleHead">DECLARATION OF INTEREST AND RELATIONSHIP FORM</h2>
                <div id="titleContent">
                    <p>The purpose of this declaration is to provide a written record of interests that have been declared, if any, by Associates and Applicants.</p>
                    <p>This form must be provided upon recruitment or assignment and updated within 30 days of any changes to information supplied and submitted to the HR Department or to the TES provider in the case of TES contractors, for onward provision to BMW Contractor Steering. Please attach any supporting documentation that is relevant to this declaration.</p>
                    <p>BMW Group SA means collectively, BMW(South Africa)(Pty) Ltd, its subsidiaries in the Republic of South Africa and BMW Financial Services(South Africa)(Pty) Ltd.</p>
                </div>

                <br />

                <form onSubmit={handleSubmit}>

                    <h3 id="sectionASS_Summary">Associate Summary</h3> 
                    
                    <div id="AssSummaryContent">
                        <p>Associate summary content</p>
                    </div>

                    {/* SECTION 4: LINE MANAGER */}
                    <h3 id="sectionHead4">SECTION 4: LINE MANAGER</h3> 


                    <div id="sectionContent4">
                        
                        <b>I have reviewed the declaration and believe that the details provided:(tick the applicable box);</b>
                        <br />

                        <div class="checkbox-item LineManagerDC">
                            <input 
                                type="checkbox" 
                                id="checkboxInput_LM_DC1" 
                                name="checkboxInput_M_DC1"
                                value={formData.checkboxInput_M_DC1}
                                onChange={handleChange}
                            />
                            <label htmlFor="checkboxInput_LM_DC1">Do constitute an actual, potential or perceived conflict of interest (please provide a detailed action plan below).</label>
                        </div>
                        <div className="checkbox-item">
                            <input 
                                type="checkbox" 
                                id="checkboxInput_LM_DC2" 
                                name="checkboxInput_LM_DC2"
                                value={formData.checkboxInput_M_DC2}
                                onChange={handleChange}
                            />
                            <label htmlFor="checkboxInput_LM_DC2">Do not constitude a conflict of interest, and I authorise the employee to continue the activity.</label>
                        </div>
                        <br />

                        <div id="ManagerComent">
                            <div>
                                <label htmlFor="textareaInput_LM_coment">Comments: I request that the Associate takes the following action to eliminate/manage the conflict:</label>
                                <br />
                                <textarea 
                                    type="text" 
                                    id="textareaInput_LM_coment" 
                                    name="textareaInput_LM_coment"
                                    rows={10} placeholder="enter.."
                                    value={formData.textareaInput_LM_coment}
                                    onChange={handleChange}
                                />
                                    
                            </div>
                            
                        </div>

                        <div>
                            <label htmlFor="textInput_LMname">Name(s): 
                                <input 
                                    type="text" 
                                    id="textInput_LMname" 
                                    name="textInput_LMname"
                                    placeholder="enter name.."
                                    value={formData.textInput_LMname}
                                    onChange={handleChange} 
                                    required
                                />
                            </label> 
                        </div>
                        <div>
                            <label htmlFor="textInput_LMlname">Last name: 
                                <input 
                                    type="text" 
                                    id="textInput_LMlname" 
                                    name="textInput_LMlname"
                                    placeholder="enter last name.."
                                    value={formData.textInput_LMlname}
                                    onChange={handleChange} 
                                    required
                                />
                            </label> 
                        </div>
                        <div>
                            <label htmlFor="textInput_LMdepartment">Department: 
                                <input 
                                    type="text" 
                                    id="textInput_LMdepartment" 
                                    name="textInput_LMdepartment"
                                    placeholder="enter department.."
                                    value={formData.textInput_LMdepartment}
                                    onChange={handleChange} 
                                    required
                                />
                            </label> 
                        </div>


                    </div>

                    <div id="Ass_btn_Holder">
                            {/* <button class="button btn_AssSave">Save</button> */}
                            <button class="button btn_AssSubmit">Submit</button>
                        </div>
                        
                        <br />

                </form>
                
            </body> 

            <br />

            <footer>
                <p>Declaration of any actual or potential conflict of interest</p>
            </footer>

        </>

                       
    )

};

export default LineManager;