import TableData from "./TableData";

const Projects = () => {
    const tableData = [
        {
            clientId: 1,
            clientName: 'Hart Hagerty',
            price:'300$',
            category:'startup',
            packagename: 'Basic',
            progress: 60,
            time: 'April 15, 2024, 12:00 PM',
            action: ['View Details', 'Deal closed'],
           
        },
        {
            clientId: 2,
            clientName: 'Brice Swyre',
            price:'300$',
            category:'startup',
            packagename: 'Premium',
            progress: 30,
            time: 'April 16, 2024, 12:00 PM',
            action: ['View Details', 'Deal closed'],
            
        },
        {
            clientId: 3,
            clientName: 'Marjy Ferencz',
            price:'300$',
            category:'startup',
            packagename: 'Pro',
            progress: 90,
            time: 'April 19, 2024, 12:00 PM',
            action: ['View Details', 'Deal closed'],
           
        },
        {
            clientId: 4,
            clientName: 'Yancy Tear',
            price:'300$',
            category:'startup',
            packagename: 'Basic',
            progress: 75,
            time: 'April 21, 2024, 12:00 PM',
            action: ['View Details', 'Deal closed'],
            
        }
    ];

    return (
        <div className="overflow-x-auto p-5">
            <table className="table">
                <thead className="bg-blue-300 text-black">
                    <tr className="shadow-lg">
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Category</th>
                        <th>Package</th>
                        <th>Progress</th>
                        <th>Time remaining</th>
                        <th>Action</th>
                   
                    </tr>
                </thead>
                <tbody className="">
                    {tableData.map(data=>  <TableData key={data.clientId} data={data}></TableData> )}
                </tbody>
            </table>
            
        </div>
    );
};

export default Projects;