import React from 'react'; 
import { useState } from 'react';

import axios from "axios";

import '../Layout/layout.css'

const Associate = () => {

    // ____________________________________________________________________________________
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.display = "block";
            // document.getElementById("navbar").style.top = "calc(35px+2vmin)";
        } else {
            document.getElementById("navbar").style.display = "none";
        }
    }
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

        const DOE_DATA = {
            // Form Entry ID
            ID: formData.textInput_AssEmail+'_'+formData.textInput_AssSurname+'_1',

            // Section 1
            "ID Number/Passport No/Associate ID": formData.textInput_AssID,
            "Associate Name(s)": formData.textInput_AssName,
            "Associate Surname": formData.textInput_AssSurname,
            "Associate Department": formData.textInput_AssDepartment,
            "Associate Job Title": formData.textInput_AssJobtitle,
            "Associate Email": formData.textInput_AssEmail,
            "Line Manager Email": formData.textInput_LineManagerEmail,
            managerEmail: formData.textInput_LineManagerEmail,

            // Section 2
            "Declare2 - Confirmation": formData.selectInput_AssDeclare,
            "Declare2 - Shares and direct/indirect personal interest": formData.checkboxInput_AssDeclareYes1,
            "Declare2 - Partnerships/memberships or directorship": formData.checkboxInput_AssDeclareYes2,
            "Declare2 - Remunerated work outside BMW Group SA": formData.checkboxInput_AssDeclareYes3,
            "Declare2 - Consultancies and retainerships": formData.checkboxInput_AssDeclareYes4,
            "Declare2 - Sponsorships by a vendor or supplier": formData.checkboxInput_AssDeclareYes5,
            "Declare2 - Relationships with BMW Group SA Vendors, Competitors and/or Associates": formData.checkboxInput_AssDeclareYes6,
            "Declare2 - Other": formData.checkboxInput_AssDeclareYes7,
            // 2A
            "subDeclare2A - Shares/direct/indirect personal interest": formData.checkboxInput_AssDeclare_sub_A1,
            "subDeclare2A - Partnerships/memberships of a Close Corporation": formData.checkboxInput_AssDeclare_sub_A2,
            "subDeclare2A - Directorship": formData.checkboxInput_AssDeclare_sub_A3,
            "subDeclare2A - Full Name and Registration number of Company": formData.textareaInput_AssDeclare_sub_A1,
            "subDeclare2A - Capacity": formData.textareaInput_AssDeclare_sub_A2,
            "subDeclare2A - Date of appointment": formData.textareaInput_AssDeclare_sub_A3,
            "subDeclare2A - Details of remuneration received": formData.textareaInput_AssDeclare_sub_A4,
            "subDeclare2A - Brief description of the nature/extent of interest": formData.textareaInput_AssDeclare_sub_A5,
            // 2B
            "subDeclare2B - Name of Employer/Client": formData.textareaInput_AssDeclare_sub_B1,
            "subDeclare2B - Type of work/Nature of business activity": formData.textareaInput_AssDeclare_sub_B2,
            "subDeclare2B - Amount of remuneration/Value of benefits received": formData.textareaInput_AssDeclare_sub_B3,
            "subDeclare2B - Time spent": formData.textareaInput_AssDeclare_sub_B4,
            // 2C
            "subDeclare2C - Source of the Assistance/Sponsorship": formData.textareaInput_AssDeclare_sub_C1,
            "subDeclare2C - Description of the Assistance/Sponsorship": formData.textareaInput_AssDeclare_sub_C2,
            "subDeclare2C - Value of Assistance/Sponsorship": formData.textareaInput_AssDeclare_sub_C3,
            // 2D
            "subDeclare2D - Name of BMW Group SA Vendor, Competitor and/or Associate": formData.textareaInput_AssDeclare_sub_D1,
            "subDeclare2D - brief description of the nature/extent of the relationship": formData.textareaInput_AssDeclare_sub_D2,
            // 2E
            "subDeclare2E - Other": formData.textareaInput_AssDeclare_sub_E1,

            // Section 3
            "Declare3 - Signature": formData.checkboxInput_AssSignature,
            "Declare3 - Date": formData.dateInput_AssSignature_date

        };

        console.log(DOE_DATA)

        const response= await axios.post(APIurl, DOE_DATA);

        console.log("Form submitted successfully:", response.data,{
          headers: {'Content-Type': 'application/json'}
        });
    };
    //______________________________________________________________________________________

    return (
        // <layout>
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

                    <div id="navbar">
                        <a href="#1">PERSONAL DETAILS</a>
                        <a href="#2">DISCLOSURE DETAILS</a>
                        <a href="#3">APPLICANT/ASSOCIATE DECLARATION</a>
                    </div>
                    <br />
               

                    {/* <h3 id="titleHead">Annexure B</h3> */}
                    <h2 id="titleHead">DECLARATION OF INTEREST AND RELATIONSHIP FORM</h2>
                    <div id="titleContent">
                        <p>The purpose of this declaration is to provide a written record of interests that have been declared, if any, by Associates and Applicants.</p>
                        <p>This form must be provided upon recruitment or assignment and updated within 30 days of any changes to information supplied and submitted to the HR Department or to the TES provider in the case of TES contractors, for onward provision to BMW Contractor Steering. Please attach any supporting documentation that is relevant to this declaration.</p>
                        <p>BMW Group SA means collectively, BMW(South Africa)(Pty) Ltd, its subsidiaries in the Republic of South Africa and BMW Financial Services(South Africa)(Pty) Ltd.</p>
                    </div>

                    <span id='1'></span> {/* for navbar reference to Section 1 */}
                    <br />


                    <form onSubmit={handleSubmit}>

                        {/* SECTION 1: PERSONAL DETAILS */}
                        <h3 id="sectionHead1">SECTION 1: PERSONAL DETAILS</h3> 

                        <div id="sectionContent1">
                            <div>
                                <label htmlFor="textInput_AssName">Name(s): 
                                    <input 
                                        type="text" 
                                        id="textInput_AssName" 
                                        name="textInput_AssName"
                                        placeholder="enter name.."
                                        value={formData.textInput_AssName}
                                        onChange={handleChange} 
                                        required
                                    />
                                </label> 
                            </div>
                            <div>
                                <label htmlFor="textInput_AssSurname">Last name:
                                    <input 
                                        type="text" 
                                        id="textInput_AssSurname" 
                                        name="textInput_AssSurname"
                                        placeholder="enter last name.."
                                        value={formData.textInput_AssSurname}
                                        onChange={handleChange} 
                                        required
                                    />
                                </label> 
                            </div>
                            <div>
                                <label htmlFor="textInput_AssID">ID/Passport/ AssociateNo:
                                    <input 
                                        type="text" 
                                        id="textInput_AssID" 
                                        name="textInput_AssID"
                                        placeholder="enter ID,passport, associate number" 
                                        value={formData.textInput_AssID}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="textInput_AssDepartment">Department:
                                    <input 
                                        type="text" 
                                        id="textInput_AssDepartment" 
                                        name="textInput_AssDepartment" 
                                        placeholder="enter department.." 
                                        value={formData.textInput_AssDepartment}
                                        onChange={handleChange}
                                    />
                                </label> 
                            </div>
                            <span id='2'></span> {/* for navbar reference to Section 2 */}
                            <div>
                                <label htmlFor="textInput_AssJobtitle">Job title:
                                    <input 
                                        type="text" 
                                        id="textInput_AssJobtitle" 
                                        name="textInput_AssJobtitle" 
                                        placeholder="enter job title.."
                                        value={formData.textInput_AssJobtitle}
                                        onChange={handleChange} 
                                    />
                                </label> 
                            </div>
                            <div>
                                <label htmlFor="textInput_AssEmail">Email address:
                                    <input 
                                        type="text" 
                                        id="textInput_AssEmail" 
                                        name="textInput_AssEmail" 
                                        placeholder="enter email.." 
                                        value={formData.textInput_AssEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </label> 
                            </div>
                            <div>
                                <label htmlFor="textInput_LManagerEmail">Line manager's email address:
                                    <input 
                                        type="text" 
                                        id="textInput_LManagerEmail" 
                                        name="textInput_LManagerEmail" 
                                        placeholder="enter email.." 
                                        value={formData.textInput_LineManagerEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </label> 
                            </div>

                        </div>


                        {/* SECTION 2: DISCLOSURE DETAILS */}
                        <h3 id="sectionHead2">SECTION 2: DISCLOSURE DETAILS</h3> 

                        <div id="sectionContent2">

                            <label htmlFor="selectInput_AssDeclare">Do you have anything to declare?</label>
                            <br/>
                            <select 
                                id="selectInput_AssDeclare" 
                                name="selectInput_AssDeclare"
                                value={formData.selectInput_AssDeclare}
                                onChange={handleChange}
                                required>
                                    <br/>
                                <option value = ''>Select Choice</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <br />
                            <br />

                            <div id="Disclosure-checks">

                                <b>Please provide a brief description of the nature/extent of the interest whether actual, potential or perceived conflict of interest:(tick the applicable box/es);</b>
                                <br />

                                <div id="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id="checkboxInput_AssDeclareYes1" 
                                        name="checkboxInput_AssDeclareYes1"
                                        value={formData.checkboxInput_AssDeclareYes1}
                                        onChange={handleChange} 
                                    />
                                    <label htmlFor="checkboxInput_AssDeclareYes1">Shares and direct/indirect personal interest in a trade/business undertaking.</label>
                                </div>
                                <div className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id="checkboxInput_AssDeclareYes2" 
                                        name="checkboxInput_AssDeclareYes2" 
                                        value={formData.checkboxInput_AssDeclareYes2}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="checkboxInput_AssDeclareYes2">Partnerships/memberships or directorship.</label>
                                </div>
                                <div className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id="checkboxInput_AssDeclareYes3" 
                                        name="checkboxInput_AssDeclareYes3" 
                                        value={formData.checkboxInput_AssDeclareYes3}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="checkboxInput_AssDeclareYes3">Remunerated work outside of BMW Group SA.</label>
                                </div>
                                <div className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id="checkboxInput_AssDeclareYes4" 
                                        name="checkboxInput_AssDeclareYes4" 
                                        value={formData.checkboxInput_AssDeclareYes4}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="checkboxInput_AssDeclareYes4">Consultancies and retainerships</label>
                                </div>
                                <div className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id="checkboxInput_AssDeclareYes5" 
                                        name="checkboxInput_AssDeclareYes5" 
                                        value={formData.checkboxInput_AssDeclareYes5}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="checkboxInput_AssDeclareYes5">Sponsorships by a vendor or supplier of BMW Group SA for the benefit of a BMW Group SA Associate or their family members.</label>
                                </div>
                                <div className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id="checkboxInput_AssDeclareYes6" 
                                        name="checkboxInput_AssDeclareYes6" 
                                        value={formData.checkboxInput_AssDeclareYes6}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="checkboxInput_AssDeclareYes6">Relationships with BMW Group SA Vendors, Competitors and/or Associates.</label>
                                </div>
                                <div className="checkbox-item">
                                    <input 
                                        type="checkbox" 
                                        id="checkboxInput_AssDeclareYes7" 
                                        name="checkboxInput_AssDeclareYes7"
                                        value={formData.checkboxInput_AssDeclareYes7}
                                        onChange={handleChange} 
                                    />
                                    <label htmlFor="checkboxInput_AssDeclareYes7">Other (if you selected other, please provide details under field "E" below)"</label>
                                </div>

                                <div id="sub-DisclosureA">
                                    <b>A. If you hold shares or financial interests/directorship in a company/ a member of a close corparation/have a direct/indirect personal interest in a trade/business undertaking (please complete the relevant section below).</b>

                                    <div className="checkbox-item">
                                        <input 
                                            type="checkbox" 
                                            id="checkboxInput_AssDeclare_sub_A1" 
                                            name="checkboxInput_AssDeclare_sub_A1" 
                                            value={formData.checkboxInput_AssDeclare_sub_A1}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="checkboxInput_AssDeclare_sub_A1">Shares/direct/indirect personal interest in a trade/business undertaking in a company.</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input 
                                            type="checkbox" 
                                            id="checkboxInput_AssDeclare_sub_A2" 
                                            name="checkboxInput_AssDeclare_sub_A2" 
                                            value={formData.checkboxInput_AssDeclare_sub_A2}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="checkboxInput_AssDeclare_sub_A2">Partnerships/memberships of a Close Corporation.</label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input 
                                            type="checkbox" 
                                            id="checkboxInput_AssDeclare_sub_A3" 
                                            name="checkboxInput_AssDeclare_sub_A3" 
                                            value={formData.checkboxInput_AssDeclare_sub_A3}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="checkboxInput_AssDeclare_sub_A3">Directorship.</label>
                                    </div> 
                                    <br />


                                    {/* fg */}
                                    <div id="SubDC_input-textbox_A">
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_A1">Full Name and Registration number of the Company/Close Corparation/Business undertaking/Trade:</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_A1" 
                                                name="textareaInput_AssDeclare_sub_A1" 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_A1}
                                                onChange={handleChange}
                                            />                                                   
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_A2">Capacity i.e,Director,Member,Chairman, Trustee, etc.:</label> 
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_A2" 
                                                name='textareaInput_AssDeclare_sub_A2' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_A2}
                                                onChange={handleChange}
                                            />                                               
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_A3">Date of appointment and/or details of investment:</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_A3" 
                                                name='textareaInput_AssDeclare_sub_A3' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_A3}
                                                onChange={handleChange}
                                            />                                          
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_A4">Details of remuneration received i.e, annual director's fees, dividends etc.:</label> 
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_A4" 
                                                name='textareaInput_AssDeclare_sub_A4' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_A4}
                                                onChange={handleChange}
                                            />      
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_A5">Please provide a brief description of the nature/extent of interest/s i.e, % shareholding and/or other beneficial interest or contracts, annual turnover, and the main purpose of the Company/Close Corpa:ration/Business undertaking/Trade(List them):</label> 
                                            <br />
                                            <textarea type="text" 
                                                id="textareaInput_AssDeclare_sub_A5" 
                                                name='textareaInput_AssDeclare_sub_A5' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_A5}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div id="comment">
                                            <p>1. Associates are required to disclose the following details regarding shares and other financial interests held in a company or any other corporate entity recognised by law such as a trust whether held by an Associate or the Associates' family members. Associates are also required to declare private interests in the form of sole proprietorships.</p>
                                            <b>Express exclusions:</b>
                                            <div>
                                                <p>(a) Unit trust shares or shares held in a listed entity are where the interest does not exceed 5% of the issued stock/shares of the entity concerned.</p>
                                                <p>(b) Interest in residential property-owning companies, close corporations or trusts.</p>
                                            </div>

                                            <p>2. Associates are required to desclose the following information with reegards to <strong>directorships and partnerships.</strong></p>
                                            <div>
                                                <p>(a) The name, and type of business activity of the company/ entity or partnerships; and</p>
                                                <p>(b) Interests in residential property-owning companies, close corporations or trusts.</p>
                                            </div>
                                            
                                        </div>
                                    </div>


                                </div>

                                <div id="sub-DisclosureB">
                                    <b>B. Remunerated work outside of BMW Group SA/Consultancies and Retainerships.</b>

                                    <div id="SubDC_input-textbox_B">
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_B1">Name of Employer/Client:</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_B1" 
                                                name='textareaInput_AssDeclare_sub_B1' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_B1}
                                                onChange={handleChange}
                                            />      
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_B2">Type of work/Nature of business activity:</label> 
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_B2" 
                                                name='textareaInput_AssDeclare_sub_B2' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_B2}
                                                onChange={handleChange}
                                            />                                                
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_B3">Amount of remuneration/Value of benefits received:</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_B3" 
                                                name='textareaInput_AssDeclare_sub_B3' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_B3}
                                                onChange={handleChange}
                                            />                                                
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_B4">Time spent (per week/month):</label> 
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_B4" 
                                                name='textareaInput_AssDeclare_sub_B4' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_B4}
                                                onChange={handleChange}
                                            />    
                                        </div>

                                        <div id="comment">
                                            <p>3. Associates are obliged to devote their energies and skills to furthering BMW Group SA's business interests. Associates may not place themselves in positions
                                                    where their own interests conflict with BMW Group SA's interests. Associates are therefore required to disclose the following information with regards to remunerated work outside of BMW Group SA:</p>
                                            <div>
                                                <p>(a) The type of work;</p>
                                                <p>(b) The name and type of business activity of the employer; and.</p>
                                                <p>(c) The amount of the remuneration received for such work.</p>

                                            </div>

                                            <p><strong>Remuneration</strong> means the receipts of benefits in cash or kind.</p>
                                            <p><strong>Work</strong> means the rendering of the service or a delivery of the product for which a person receives remuneration.</p>
                                            <br />

                                            <p>4. Associates are required to disclose the following information regarding <strong>Consultancies and retainerships:</strong></p>

                                            <div>
                                                <p>(a) The nature of the consultancy or retainership of any kind;</p>
                                                <p>(b) The name and type of the business activity of the client concerned; and</p>
                                                <p>(c) The value of any benefits received for such consultancy or retainership.</p>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>


                                <div id="sub-DisclosureC">
                                    <b>C. Sponsorships by a vendsor or supplier of BMW Group SA for the benefit of a BMW Group SA Associate or their family member.</b> 
                                    <br />
                                    <b>   (Please specify how you are related)</b>


                                    {/* fg */}
                                    <div id="SubDC_input-textbox_C">
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_C1">Source of the Assistance/Sponsorship:</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_C1" 
                                                name='textareaInput_AssDeclare_sub_C1' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_C1}
                                                onChange={handleChange}
                                            />             
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_C2">Description of the Assistance/Sponsorship:</label> 
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_C2" 
                                                name='textareaInput_AssDeclare_sub_C2' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_C2}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_C3">Value of Assistance/Sponsorship:</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_C3" 
                                                name='textareaInput_AssDeclare_sub_C3' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_C3}
                                                onChange={handleChange}
                                            />
                                        </div>


                                        <div id="comment">
                                            <p>5. Associates are required to disclose the following information with regards to <strong>sponsorships:</strong></p>
                                            <div>
                                                <p>(a) The source and description of financial sponsorship or assistance; and.</p>
                                                <p>(b) The value of sponsorship or assistance.</p>
                                            </div>

                                            <p><strong>Family member</strong> is defined as per the HR policy which includes Associate's;</p>
                                            <div>
                                                <p>(a) Child/adopted child</p>
                                                <p>(b) Spouse or life partner,</p>
                                                <p>(c) parents, adoptive parents, parents-in law</p>
                                                <p>(d) brothers, sisters,</p>
                                                <p>(e) grandparents or grandchildren.</p>

                                            </div>

                                            <p>6. Associates are required to disclose relationships that may have with potential or actual BMW Group SA vendors.</p>
                                            <p>7. Associates are required to disclose the relationships that they, their family members or their friends may have with competitors of BMW Group SA.</p>
                                            <p>8. Associates are required to disclose personal workplace relationships such as being in a supervisory, subordinate or control relationships (e.g. having influence over conditions
                                                    employment) with a family member ( as defined in footnote) or an Associate or being involved in any hiring decision regarding a family member or Associate, inc. internal/external hiring and internal transfers.
                                            </p>
                                            
                                        </div>
                                    </div>

                                </div>

                                <div id="sub-DisclosureD">
                                    <b>D. Related Parties:</b> 
                                    <br />
                                    <b>  Relationships with BMW Group SA Vendor, Competitor and/or Associate</b>


                                    {/* fg */}
                                    <div id="SubDC_input-textbox_D">
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_D1">Name of BMW Group SA Vendor, Competitor and/or Associate:</label>
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_D1" 
                                                name='textareaInput_AssDeclare_sub_D1' 
                                                rows={3} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_D1}
                                                onChange={handleChange}
                                            /> 
                                        </div>
                                        <div>
                                            <label htmlFor="textareaInput_AssDeclare_sub_D2">Please provide a brief description of the nature/extent of the relationship with a BMW Group SA Vendor, Competitor and/or Associate:</label> 
                                            <br />
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_D2" 
                                                name='textareaInput_AssDeclare_sub_D2' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_D2}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        
                                    </div>

                                </div>

                                <div id="sub-DisclosureE">
                                    <b>E. Other:</b> 
                                    <br />
                                    <b>  Please provide a brief explanation.</b>


                                    {/* fg */}
                                    <div id="SubDC_input-textbox_E">
                                        <div>
                                            <textarea 
                                                type="text" 
                                                id="textareaInput_AssDeclare_sub_E1" 
                                                name='textareaInput_AssDeclare_sub_E1' 
                                                rows={10} placeholder="enter.."
                                                value={formData.textareaInput_AssDeclare_sub_E1}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        
                                    </div>
                                    <br/>
                                    <span id='3'></span> {/* for navbar reference to Section 3 */}

                                </div>
                                
                            </div>
                        
                        </div>

                        {/* SECTION 3: DISCLOSURE DETAILS */}
                        <h3 id="sectionHead3">SECTION 3: APPLICANT/ASSOCIATE DECLARATION</h3>

                        <div id="sectionContent3">
                            <b><u>Time spent during office hours:</u></b>
                            <p>
                                I hereby declare that I will not spend any time during normal office hours to attend to the aforsesaid interests (if any) and understand that any contravention hereof my lead to disciplinary action
                                being taken against me. I hereby confirm that I will not use the resources or facilities of the BMW Group SA for conducting any private work  
                            </p>
                            <br />

                            <b><u>Interest in Contract with the BMW Group SA:</u></b>
                            <p>
                                I hereby confirm that where the aforsesaid Company/ Close Corporation/ Undertaking may have, or subsequently entered into a business relationship with the BMW Group SA, I shall have no personal involvement
                                in any negotiations between such Company/ Close Corporation/ Undertaking and the BMW Group SA and confirm furthermore that I shall disclose my interest in any such dealings to the Head of the Unit at the earliest opportunity.   
                            </p>
                            <p>
                                I also confirm tha where I may be in doubt as to whether I have/may have a personal interest or not, I shall consult with the Head of the Unit.
                            </p>
                            <p>
                                I hereby confirm that all the information supplied by me above is true and correct.
                            </p>
                            <br />
                            <div className="checkbox-item">
                                        <input 
                                            type="checkbox" 
                                            id="checkboxInput_AssSignature" 
                                            name="checkboxInput_AssSignature" 
                                            value={formData.checkboxInput_AssSignature}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="checkboxInput_AssSignature">I accept.</label>
                                    </div> <br />
                            <div>
                                <label htmlFor="dateInput_AssSignature_date">Declaration Date:
                                    <input 
                                        type="date" 
                                        id="dateInput_AssSignature_date" 
                                        name="dateInput_AssSignature_date"
                                        value={formData.dateInput_AssSignature_date}
                                        onChange={handleChange}
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


                {/* <Outlet/> */}
            </>
        // </layout>
 
    )
  };
  
  export default Associate;


