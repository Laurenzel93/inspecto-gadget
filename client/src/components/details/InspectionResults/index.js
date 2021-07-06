import { useState } from "react";
import axios from 'axios';
import './style.css';
import { useHistory, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

function InspectionResults() {
    const [inputNotes, setInputNotes] = useState('')
    const [mainResult, setMainResult] = useState('')
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()

        Swal.fire({
            title: '<span>Are you sure you want to save these results?</span>',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonColor: '#f00022',
            background: '#343a40'
        }).then(res => {
            if (res.isConfirmed) {
                // console.log(window.location.href);
                let magic = window.location.href.split('/');
                // console.log(magic[magic.length - 1]);

                const allResults = {
                    result: mainResult,
                    notes: inputNotes,
                    inspection_id: magic[magic.length - 1]
                }

                axios.post('/api/results', {
                    allResults
                }).then(() => {
                    console.log('results saved!')
                    console.log(allResults)
                })

                let dashboardPath = '/dashboard';
                history.push(dashboardPath);
                Swal.fire({
                    icon: 'success',
                    iconColor: '#b8daff',
                    title: '<span>Results Saved</span>',
                    showConfirmButton: false,
                    background: '#343a40',
                    timer: 2000

                })

            } else if (res.isDenied) {
                return
            }
        })
    }


    return (

            <div className="container-fluid p-4 border rounded border-dark bg-secondary">
                <form onSubmit={handleSubmit} className="row ml-auto m-3 p-3 border rounded border-primary bg-light">

                    <h2>Inspection Results</h2>

                    {/* <!-- Drop Down Button--> */}
                    <div className="container-fluid form-group input-group form-check">
                        <select value={mainResult} onChange={(e) => setMainResult(e.target.value)}
                            className="custom-select  col-7" required>
                            <option selected>No result</option>
                            <option value="Approved">Approved</option>
                            <option value="Disapproved">Disapproved</option>
                            <option value="Partially Approved">Partially Approved</option>
                            <option value="Locked Out">Locked Out</option>
                            <option value="Not Ready">Not Ready</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>

                    {/* <!-- Input Notes Field --> */}
                    <textarea className="form-control m-3"
                        value={inputNotes}
                        onChange={(e) => setInputNotes(e.target.value)}
                        placeholder="Type notes here..."
                        rows="10" required>
                    </textarea>

                    {/* <!-- Save Icon Button --> */}
                    <div className="ml-auto align-self-end">
                        <button className="btn btn-outline-success"
                            style={{ fontSize: "25px" }}> Save <i style={{ fontSize: "25px" }}
                                className="fa fa-save"></i>
                        </button>
                    </div>

                </form>
            </div>

        )
    }

    export default InspectionResults;