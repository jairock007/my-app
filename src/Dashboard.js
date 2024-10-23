import React, { useState } from "react";
import {
  BarChart3,
  Users,
  FileText,
  Layout,
  Menu,
  X,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

// Sample data
const performanceData = [
  { name: "Jan", value: 4000, revenue: 2400, leads: 2400 },
  { name: "Feb", value: 3000, revenue: 1398, leads: 2210 },
  { name: "Mar", value: 2000, revenue: 9800, leads: 2290 },
  { name: "Apr", value: 2780, revenue: 3908, leads: 2000 },
  { name: "May", value: 1890, revenue: 4800, leads: 2181 },
  { name: "Jun", value: 2390, revenue: 3800, leads: 2500 },
];

const pieData = [
  { name: "New Leads", value: 400, color: "#4F46E5" },
  { name: "In Progress", value: 300, color: "#10B981" },
  { name: "Converted", value: 200, color: "#F59E0B" },
  { name: "Lost", value: 100, color: "#EF4444" },
];

const leadsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "New",
    value: "$5000",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "In Progress",
    value: "$7500",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    status: "Closed",
    value: "$3200",
  },
];

const analyticsData = {
  leads: [
    { month: "Jan", website: 65, referral: 28, linkedin: 45 },
    { month: "Feb", website: 59, referral: 48, linkedin: 38 },
    { month: "Mar", website: 80, referral: 40, linkedin: 37 },
    { month: "Apr", website: 81, referral: 47, linkedin: 53 },
    { month: "May", website: 56, referral: 65, linkedin: 43 },
    { month: "Jun", website: 55, referral: 58, linkedin: 46 },
  ],
  conversion: [
    { month: "Jan", rate: 35 },
    { month: "Feb", rate: 28 },
    { month: "Mar", rate: 42 },
    { month: "Apr", rate: 37 },
    { month: "May", rate: 44 },
    { month: "Jun", rate: 40 },
  ],
};

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={`fixed h-full bg-slate-800 text-white transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-20"
        } md:w-64 lg:w-64 xl:w-64 2xl:w-64 ${
          isSidebarOpen ? "md:w-64" : "md:w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h1
            className={`font-bold text-xl transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            EzyMetrics
          </h1>
          <button
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
              const sidebarElement = document.querySelector(
                ".fixed.h-full.bg-slate-800.text-white.transition-all.duration-300.ease-in-out"
              );
              sidebarElement.classList.toggle("open");
            }}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-8 space-y-2">
          <NavItem
            icon={<Layout />}
            text="Dashboard"
            isOpen={isSidebarOpen}
            active
          />
          <NavItem
            icon={<Users />}
            text="Leads"
            isOpen={isSidebarOpen}
            href="/leads"
            active={window.location.pathname === "/leads"}
          />
          <NavItem
            icon={<BarChart3 />}
            text="Analytics"
            isOpen={isSidebarOpen}
            href="/analytics"
            active={window.location.pathname === "/analytics"}
          />
          <NavItem
            icon={<FileText />}
            text="Reports"
            isOpen={isSidebarOpen}
            href="/reports"
            active={window.location.pathname === "/reports"}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-8 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } md:ml-64 lg:ml-64 xl:ml-64 2xl:ml-64 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <StatCard title="Total Leads" value="1,234" trend="+12%" />
          <StatCard title="Conversion Rate" value="23.5%" trend="+5%" />
          <StatCard title="Revenue" value="$45,678" trend="+8%" />

          {/* Line Chart */}
          <div className="col-span-full bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4F46E5"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="col-span-2 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Monthly Leads</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="leads" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="col-span-1 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4">Lead Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Leads Table */}
          <div className="col-span-full bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Leads</h2>
              <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                <Download size={16} />
                Export
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left p-3 text-slate-600">Name</th>
                    <th className="text-left p-3 text-slate-600">Email</th>
                    <th className="text-left p-3 text-slate-600">Status</th>
                    <th className="text-left p-3 text-slate-600">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {leadsData.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                      onClick={() => {
                        setSelectedLead(lead);
                        setIsLeadModalOpen(true);
                      }}
                    >
                      <td className="p-3">{lead.name}</td>
                      <td className="p-3">{lead.email}</td>
                      <td className="p-3">
                        <StatusBadge status={lead.status} />
                      </td>
                      <td className="p-3">{lead.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Details Modal */}
      {isLeadModalOpen && selectedLead && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"
          onClick={() => setIsLeadModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-lg transform transition-all duration-300 scale-100 opacity-100 md:max-w-md lg:max-w-lg xl:max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Lead Details</h2>
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <DetailField label="Name" value={selectedLead.name} />
              <DetailField label="Email" value={selectedLead.email} />
              <DetailField label="Status" value={selectedLead.status} />
              <DetailField label="Value" value={selectedLead.value} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper Components
const NavItem = ({ icon, text, isOpen, active, href = "/" }) => (
  <a
    href={href}
    className={`flex items-center p-4 rounded-lg transition-all duration-200 ${
      active ? "bg-indigo-700" : "hover:bg-slate-700"
    }`}
  >
    <span className="mr-4">{icon}</span>
    <span
      className={`transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      {text}
    </span>
  </a>
);
export { NavItem };

const StatCard = ({ title, value, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-slate-500 text-sm">{title}</h3>
    <div className="flex items-center mt-2">
      <span className="text-2xl font-semibold">{value}</span>
      <span className="ml-2 text-sm text-green-500">{trend}</span>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const colors = {
    New: "bg-green-100 text-green-800",
    "In Progress": "bg-blue-100 text-blue-800",
    Closed: "bg-slate-100 text-slate-800",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
};
export { StatusBadge };

const DetailField = ({ label, value }) => (
  <div className="bg-slate-50 p-3 rounded-lg">
    <label className="text-sm font-medium text-slate-500">{label}</label>
    <p className="mt-1 text-slate-900">{value}</p>
  </div>
);

export default Dashboard;
