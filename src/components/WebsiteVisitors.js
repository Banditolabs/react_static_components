import Graph from './VisitorsGraph'

export default function WebsiteVisitors (props) {
    return (
        <div className="dashboard-item">
            <div>
                <p>
                   Website Visitors: 821
                </p>
                <div>
                    <Graph />
                </div>
            </div>
        </div>
    )
}