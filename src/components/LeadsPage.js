import React, { useState, useMemo } from "react";
import { Plus, Search, Edit, Trash } from "lucide-react"; // Assuming you are using lucide-react library
import { StatusBadge } from "../Dashboard"; // Assuming StatusBadge is defined in Dashboard.js

// Import the missing variables
import { leadsData } from "./data";

// ...
// Leads Page Component
const LeadsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredLeads = useMemo(() => {
    return leadsData
      .filter(
        (lead) =>
          (statusFilter === "All" || lead.status === statusFilter) &&
          (lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortConfig.direction === "asc") {
          return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
        }
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      });
  }, [searchTerm, statusFilter, sortConfig]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Leads Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus size={20} />
          Add Lead
        </button>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search leads..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="border rounded-lg px-4 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Value
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Source
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Date
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{lead.name}</td>
                <td className="px-6 py-4">{lead.email}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={lead.status} />
                </td>
                <td className="px-6 py-4">${lead.value.toLocaleString()}</td>
                <td className="px-6 py-4">{lead.source}</td>
                <td className="px-6 py-4">{lead.date}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsPage;
