import React, { useState } from "react";
import SAAdminLayout from "../../layouts/Salonadmin";
import BranchSelector from "../../components/BranchSelector";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const SADashboard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [withTax, setWithTax] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredResult, setFilteredResult] = useState(null);

  const totalServices = {
    total: 849,
    male: 400,
    female: 449,
  };

  const ticketSize = {
    male: 0,
    female: 1061,
  };

  const stockWorth = {
    total: 45841414,
    retail: 1974289,
    consumable: 2609824,
  };

  const inHandCash = {
    total: 26342,
    retail: 81974289,
    consumable: 2609824,
  };

  const handleSearch = () => {
    const result = {
      message: `Search for "${search}" from ${startDate} to ${endDate} (with tax: ${withTax})`,
    };
    setFilteredResult(result);
  };

  const walkinAppointmentData = [
    { name: "Walk-in Male", value: 300 },
    { name: "Walk-in Female", value: 350 },
    { name: "Appointment Male", value: 100 },
    { name: "Appointment Female", value: 99 },
  ];

  const staffRevenueData = [
    { name: "Staff A", value: 5000 },
    { name: "Staff B", value: 8000 },
    { name: "Staff C", value: 3000 },
    { name: "Staff D", value: 7000 },
  ];

  const salesData = [
    { date: "Apr 01", sales: 10000 },
    { date: "Apr 02", sales: 12000 },
    { date: "Apr 03", sales: 8000 },
    { date: "Apr 04", sales: 15000 },
    { date: "Apr 05", sales: 9000 },
    { date: "Apr 06", sales: 16000 },
  ];

  const revenueData = [
    { date: "Apr 01", revenue: 12000 },
    { date: "Apr 02", revenue: 15000 },
    { date: "Apr 03", revenue: 10000 },
    { date: "Apr 04", revenue: 18000 },
    { date: "Apr 05", revenue: 14000 },
    { date: "Apr 06", revenue: 20000 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

  return (
    <SAAdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 items-end">
        <div>
          <label className="text-sm text-gray-600 block mb-1 text-start">Select Branch</label>
          <BranchSelector />
        </div>
        <div>
          <label className="text-sm text-gray-600">Start Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">End Date</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div>
          <div className="flex justify-between items-start mb-1">
            <label className="text-sm text-gray-600">w/Tax</label>
            <input
              type="checkbox"
              checked={withTax}
              onChange={() => setWithTax(!withTax)}
              className="ml-2"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Search
            </button>
           </div>
           </div> 

      {filteredResult && (
        <div className="bg-yellow-100 text-yellow-800 p-4 mt-4 rounded">
          {filteredResult.message}
        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-6">
        <div className="bg-gray-100 p-4 rounded shadow w-full sm:w-60">
          <h3 className="text-sm font-semibold mb-1">Total Service Guests (w/Tax)</h3>
          <div className="text-xl font-bold">Total: {totalServices.total}</div>
          <div className="text-blue-600 text-sm">Male: {totalServices.male}</div>
          <div className="text-pink-600 text-sm">Female: {totalServices.female}</div>
        </div>

        <div className="bg-blue-100 p-4 rounded shadow w-full sm:w-60">
          <h3 className="text-sm font-semibold mb-1">Avg Ticket Size (w/Tax)</h3>
          <div className="text-pink-600 text-sm">Female: ₹{ticketSize.female}</div>
          <div className="text-blue-600 text-sm">Male: ₹{ticketSize.male}</div>
        </div>

        <div className="bg-green-100 p-4 rounded shadow w-full sm:w-60">
          <h3 className="text-sm font-semibold mb-1">Stock Worth (as on date)</h3>
          <div className="font-bold text-lg">₹{stockWorth.total}</div>
          <div className="text-green-600 text-sm">Retail: ₹{stockWorth.retail}</div>
          <div className="text-purple-600 text-sm">Consumable: ₹{stockWorth.consumable}</div>
        </div>

        <div className="bg-rose-100 p-4 rounded shadow w-full sm:w-60">
          <h3 className="text-sm font-semibold mb-1">In-Hand Cash (as on date)</h3>
          <div className="font-bold text-lg">₹{inHandCash.total}</div>
          <div className="text-green-600 text-sm">Retail: ₹{inHandCash.retail}</div>
          <div className="text-purple-600 text-sm">Consumable: ₹{inHandCash.consumable}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Sales (w/Tax)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={salesData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(v) => `₹${v}`} />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#60a5fa" name="Sales (w/Tax)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Revenue (w/Tax)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={revenueData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={(v) => `₹${v}`} />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#34d399" name="Revenue (w/Tax)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Walk-ins & Appointments</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={walkinAppointmentData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {walkinAppointmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Staff Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={staffRevenueData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(v) => `₹${v}`} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#f87171" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
            {/* Staff-wise Service Revenue (w/Tax) */}
            <div className="bg-white p-4 rounded shadow mt-8">
        <h2 className="text-lg font-semibold mb-4">Staff-wise Service Revenue (w/Tax)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={staffRevenueData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(v) => `₹${v}`} interval={0} domain={[0, 'auto']} tickCount={6} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#38bdf8" name="Service Revenue (w/Tax)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Category-wise Service Revenue (w/Tax) */}
      <div className="bg-white p-4 rounded shadow mt-8">
        <h2 className="text-lg font-semibold mb-4">Category-wise Service Revenue (w/Tax)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { category: "Bleach", value: 4000 },
              { category: "Detan", value: 2500 },
              { category: "Hair Cut", value: 7000 },
              { category: "Nail", value: 1500 },
            ]}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis tickFormatter={(v) => `₹${v}`} interval={0} domain={[0, 'auto']} tickCount={6} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#a78bfa" name="Service Revenue (w/Tax)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Collection Breakdown */}
      <div className="bg-white p-4 rounded shadow mt-8">
        <h2 className="text-lg font-semibold mb-4">Collection Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { mode: "Cash", value: 6000 },
              { mode: "Credit Card", value: 9000 },
              { mode: "Google Pay", value: 7500 },
            ]}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mode" />
            <YAxis tickFormatter={(v) => `₹${v}`} interval={0} domain={[0, 'auto']} tickCount={6} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#34d399" name="Collection Amount" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Total Customers (Male vs Female) */}
      <div className="bg-white p-4 rounded shadow mt-8">
        <h2 className="text-lg font-semibold mb-4">Total Customers (w/Tax)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { gender: "Male", value: totalServices.male },
              { gender: "Female", value: totalServices.female },
            ]}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="gender" />
            <YAxis tickFormatter={(v) => `₹${v}`} interval={0} domain={[0, 'auto']} tickCount={6} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#f472b6" name="Total Customers" />
          </BarChart>
        </ResponsiveContainer>
      </div>


      
    </SAAdminLayout>
  );
};

export default SADashboard;
