import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";
import "./App.css";

const API = "https://araliassignment-1-5tv7.onrender.com";

function App() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const res = await axios.get(`${API}/customers`);
    setCustomers(res.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/customers/${id}`);
    fetchCustomers();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <CustomerForm onCustomerAdded={fetchCustomers} api={API} />
        <CustomerTable customers={customers} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
