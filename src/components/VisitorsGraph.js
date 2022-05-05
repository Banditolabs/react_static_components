import graphImage from '../website-traffic-chart.png';


export default function VisitorsGraph (props) {
    return (
        <div className="dashboard-item">
            <div>
                <img alt="graph" src={graphImage}/>
            </div>
        </div>
    )
}