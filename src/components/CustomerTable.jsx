export default function CustomerTable({ customers, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer, index) => (
          <tr key={customer.id} className={index % 2 === 0 ? "even" : "odd"}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => onDelete(customer.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}