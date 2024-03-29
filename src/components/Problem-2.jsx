import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ModalA from './ModalA';
import ModalB from './ModalB';

const Problem2 = () => {
    const navigate = useNavigate();
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button onClick={() => navigate("/modal-a")} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                <button onClick={() => navigate("/modal-b")} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>
                
            </div>
        </div>
    );
};

export default Problem2;