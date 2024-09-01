import { useEffect, useState } from 'react';
import { User } from '../../interfaces/User';
import { getCustomers } from '../../api/customers';

const Customers = () => {
  const [customers, setCustomers] = useState<User[]>([]);

  const fetchCustomers = async () => {
    try {
      const customersData = await getCustomers();
      console.log(customersData);

      if (customersData && Array.isArray(customersData.users)) {
        setCustomers(customersData.users);
      } else {
        console.error('Unexpected data format:', customersData);
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <strong>name:</strong> {customer.username} <strong>- email:</strong> {customer.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers found.</p>
      )}
    </div>
  );
};

export default Customers;
