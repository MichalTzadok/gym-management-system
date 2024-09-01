import { Link } from "react-router-dom";

const AdminDashboard: React.FC = () => {    return (
        <div>
            <Link to={'BusinessDetails'}>Business Details</Link>
            <br />
            <Link to={'Meetings'}>All meeting</Link>
            <br />
            <Link to={'Services'}>All services</Link>
            <br />
            <Link to={'Customers'}>All users</Link>
        </div>
    );
};

export default AdminDashboard;