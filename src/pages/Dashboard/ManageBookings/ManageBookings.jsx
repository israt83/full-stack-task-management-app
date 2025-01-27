
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const ManageBookings = () => {
    return (
        <div>
            <SectionTitle heading="MANAGE ALL BOOKINGS" subHeading="At a Glance!" />
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>USER NAME</th>
                            <th>USER EMAIL</th>
                            <th>BOOKING DATE</th>
                            <th>BOOKING TIME</th>
                            <th>ACTIVITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBookings;
