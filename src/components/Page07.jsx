import React from 'react';
import {NavLink} from "react-router-dom";
import InputRadioText from "./InputRadioText";


const Page07 = (props) => {

    return (
        <div>
            <div className='row justify-content-center mb-4 mt-4'>
                <p>
                    Шаг 7 из 9.
                </p>
            </div>
            <div className="progress w-75 mx-auto mb-4">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"
                     style={{width: '84%'}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='w-100'><h2 className='text-center mb-3'>В какой бюджет планируете уложиться?</h2></div>
            <div className="w-100 text-center">
                <div className="inputTextContainer ">
                    <InputRadioText changeInput={props.setBudget} text="До 50 000 руб." name="budget1" value="budget1"
                                    id="До 50 000 руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="От 50 000 - 70 000 руб." name="budget2"
                                    value="budget2" id="От 50 000 - 70 000  руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="От 70 000 - 90 000 руб." name="budget3"
                                    value="budget3" id="От 70 000 - 90 000 руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="От 100 000 руб." name="budget4"
                                    value="budget4" id="От 100 000 руб." checked={props.budget}/>
                    <InputRadioText changeInput={props.setBudget} text="От 200 000 руб." name="budget5"
                                    value="budget5" id="От 200 000 руб." checked={props.budget}/>
                </div>
            </div>
            <NavLink to="/page08" className="buttonGo"> Перейти к шагу 8</NavLink>
            <NavLink to="/page06" className="btn btn-link mx-auto"> {"<"} назад </NavLink>
        </div>
    );
};

export default Page07;