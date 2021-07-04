import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getUser } from '../utils/Session';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import { InspectionInfo, NoteDetails } from "../components/details/InspectionInfo";
import InspectionResults from "../components/details/InspectionResults";
import { PermitInfo, InvoiceInfo } from "../components/details/PermitInfo";
import ResultsHistory from "../components/details/ResultsHistory";
import API from "../utils/API"
import Moment from 'moment';



function Details() {
    const { id } = useParams()

    // console.log(id)

    const [inspection, setInspection] = useState([]);
    const [permit, setPermit] = useState([]);
    const [notes, setNotes] = useState([]);
    const [results, setResults] = useState([]);
    const [invoices, setInvoices] = useState([]);


    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (getUser() != null) {
            loadInspections()
        } else {
            history.push('/login');
        }
    }, [])

    async function loadInspections() {
        await API.getInspection(id)
            .then(res => {
                setInspection(res.data)
                setPermit(res.data.Permit)
                setResults(res.data.results)
                setNotes(res.data.notes)

                API.getPermit(res.data.Permit.id)
                    .then(res => {
                        console.log(res.data)
                        setInvoices(res.data.invoices)
                    })
            }).catch(err => console.log(err));

        //    console.log(inspection)
        //    console.log(permit)


    }
    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Nav />
            <InspectionInfo
                key={inspection.id}
                date={Moment(inspection.date).format("dddd, MMMM Do YYYY")}
                address={inspection.address}
                type={inspection.type}
                permit_id={inspection.permit_id}
                admin={inspection.admin}
                date_scheduled={Moment(inspection.date_scheduled).format("MM- D-YY")}
            />

            {notes.length ? (
                <div>
                    {notes.map(note => (
                        <NoteDetails
                            note={note.note}
                        />
                    ))}
                </div>
            ) : (
                    <div className="container mt-0 col-11 mb-2">
                        <div className="row">
                            <div className="col- col-md-10  border border-top-0"></div>
                        </div>
                    </div>
                )}
            <div className="container-fluid ml-auto m-3 p-3 border rounded border-primary bg-light" id="previousNotesContainer">
                <h3 className="d-flex justify-content-center">Results History</h3>
                {results.length ? (
                    <table className="table table-bordered">
                        <tbody>
                            {results.map(result => (
                                <ResultsHistory
                                    time={Moment(result.createdAt).format("lll")}
                                    result={result.result}
                                    notes={result.notes} />
                            ))}
                        </tbody>
                    </table>
                ) : (
                        <h6 className="text-center">No Results Submitted</h6>
                    )}

            </div>
            <InspectionResults />
            <PermitInfo
                address={permit.address}
                parcel={permit.parcel_number}
                owner={permit.owner}
                owner_phone={permit.owner_phone}
                owner_mobile={permit.owner_mobile}
                contractor={permit.contractor}
                contractor_phone={permit.contractor_phone}
                contractor_email={permit.contractor_email}
                id={permit.id}
                issued={Moment(permit.issued).format("l")}
                expired={Moment(permit.expired).format("l")}
                work_description={permit.description} />
            {invoices.length ? (
                <div>
                    <div>
                        {invoices.map(invoice => (
                            <InvoiceInfo
                                item={invoice.item}
                                quantity={invoice.quantity}
                                amount_total={invoice.total}
                            />
                        ))}
                    </div>

                </div>



            ) : (
                    <h6>There are no Invoiced Items for this Inspection</h6>
                )}


        </div>
    )
};

export default Details;