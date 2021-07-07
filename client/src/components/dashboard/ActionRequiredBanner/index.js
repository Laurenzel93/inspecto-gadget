import React from "react";
import { useHistory } from "react-router-dom";

//This ONLY appears IF a inspection result is missing.

function ActionRequiredBanner() {
    const history = useHistory();
    return (
        <div>
            <div onClick={() => history.push('/past-inspections')}className="container-fluid col-12 p-3 ">
                <div className="row">
                <button onClick={() => history.push('/past-inspections')} className="alert alert-danger col-12 d-flex align-items-center mt-4" role="alert">

            {/* commented out the icon because React jsx doesn't like the "use link". Will troubleshoot this later */}

                    {/* <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                        <use xlink:href="#exclamation-triangle-fill" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                        <path
                            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg> */}
                    <h3>
                        Action Required! Inspection Results Missing
                    </h3>
                </button>
                </div>
            </div>
        </div>
    )
}

export default ActionRequiredBanner;