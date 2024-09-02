import ClientData from "./ClientData";

const ClientList = () => {
    // const tableHeaderData = [
    //     { id: 1, name: 'Id', classType: 'text-lg' },
    //     { id: 2, name: 'Name', classType: 'text-lg' },
    //     { id: 3, name: 'Email', classType: 'text-lg' },
    //     { id: 4, name: 'Country', classType: 'text-lg' },
    //     { id: 5, name: 'City', classType: 'text-lg' },
    //     { id: 6, name: 'Phone', classType: 'text-lg' },
    //     { id: 7, name: 'Package Bought', classType: 'text-lg' },
    //     { id: 8, name: 'Actions', classType: 'text-lg' },
    //   ];
      const tableData = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          country: 'United States',
          city: 'New York',
          phone: '+1 123-456-7890',
          packageBought: 'Basic',
          actions: 'Active',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          country: 'United Kingdom',
          city: 'London',
          phone: '+44 1234 567890',
          packageBought: 'Standard',
          actions: 'Paused',
        },
        {
          id: 3,
          name: 'Michael Johnson',
          email: 'michael@example.com',
          country: 'Canada',
          city: 'Toronto',
          phone: '+1 987-654-3210',
          packageBought: 'Premium',
          actions: 'Paused',
        },
        {
          id: 4,
          name: 'Emily Brown',
          email: 'emily@example.com',
          country: 'Australia',
          city: 'Sydney',
          phone: '+61 2 1234 5678',
          packageBought: 'Basic',
          actions: 'Paused',
        },
        {
          id: 5,
          name: 'David Wilson',
          email: 'david@example.com',
          country: 'Germany',
          city: 'Berlin',
          phone: '+49 30 1234567',
          packageBought: 'Standard',
          actions: 'Paused',
        },
        {
          id: 6,
          name: 'Sophia Martinez',
          email: 'sophia@example.com',
          country: 'France',
          city: 'Paris',
          phone: '+33 1 23 45 67 89',
          packageBought: 'Basic',
          actions: 'Paused',
        },
        {
          id: 7,
          name: 'James Taylor',
          email: 'james@example.com',
          country: 'Italy',
          city: 'Rome',
          phone: '+39 06 1234567',
          packageBought: 'Premium',
          actions: 'Paused',
        },
        {
          id: 8,
          name: 'Olivia Thomas',
          email: 'olivia@example.com',
          country: 'Spain',
          city: 'Madrid',
          phone: '+34 91 123 45 67',
          packageBought: 'Standard',
          actions: 'Paused',
        },
        {
          id: 9,
          name: 'William Garcia',
          email: 'william@example.com',
          country: 'Brazil',
          city: 'Rio de Janeiro',
          phone: '+55 21 1234-5678',
          packageBought: 'Basic',
          actions: 'Paused',
        },
        {
          id: 10,
          name: 'Mia Rodriguez',
          email: 'mia@example.com',
          country: 'Mexico',
          city: 'Mexico City',
          phone: '+52 55 1234 5678',
          packageBought: 'Premium',
          actions: 'Paused',
        },
      ];
      
    return (
        <table className="table">
            <thead>
                {/* <tr>
                    {
                        tableHeaderData.map(data => <HeadData key={tableHeaderData.id} data={data}></HeadData>)
                    }
                </tr> */}
            </thead>
            {
                tableData.map(data => <ClientData key={tableData.id} data={data}></ClientData>)
            }
            <tbody>

            </tbody>
        </table>
    );
};

export default ClientList;