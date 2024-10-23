// ReportsPage.js
import React, { useState } from "react";
import { reportsData } from "./data";
import { Layout } from "lucide-react";
import { PageLayout } from "./Layout";
// import { StatusBadge } from "../Dashboard";

const ReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState("leads");
  const [dateRange, setDateRange] = useState("last30");

  const reportData = reportsData[selectedReport][dateRange];

  return (
    <PageLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Reports</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            className="border rounded-lg px-4 py-2"
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
          >
            <option value="leads">Leads Report</option>
            <option value="conversion">Conversion Report</option>
            <option value="revenue">Revenue Report</option>
          </select>

          <select
            className="border rounded-lg px-4 py-2"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="last7">Last 7 Days</option>
            <option value="last30">Last 30 Days</option>
            <option value="last90">Last 90 Days</option>
          </select>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {selectedReport.charAt(0).toUpperCase() + selectedReport.slice(1)}{" "}
              Report
            </h2>
            <div className="space-x-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Export PDF
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Export CSV
              </button>
            </div>
          </div>

          {selectedReport === "leads" && (
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center text-gray-500">
              <h3>
                Total Leads:{" "}
                <span className="font-bold">{reportData.totalLeads}</span>
              </h3>
              <h3>
                New Leads:{" "}
                <span className="font-bold">{reportData.newLeads}</span>
              </h3>
              <h3>
                Converted Leads:{" "}
                <span className="font-bold">{reportData.convertedLeads}</span>
              </h3>
              <h3>
                Conversion Rate:{" "}
                <span className="font-bold">{reportData.conversionRate}%</span>
              </h3>
            </div>
          )}

          {selectedReport === "conversion" && (
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center text-gray-500">
              <h3>
                Total Conversions:{" "}
                <span className="font-bold">{reportData.totalConversions}</span>
              </h3>
              <h3>
                Conversion Rate:{" "}
                <span className="font-bold">{reportData.conversionRate}%</span>
              </h3>
              <h3>
                Average Conversion Value:{" "}
                <span className="font-bold">
                  ${reportData.averageConversionValue}
                </span>
              </h3>
            </div>
          )}

          {selectedReport === "revenue" && (
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center text-gray-500">
              <h3>
                Total Revenue:{" "}
                <span className="font-bold">${reportData.totalRevenue}</span>
              </h3>
              <h3>
                Average Order Value:{" "}
                <span className="font-bold">
                  ${reportData.averageOrderValue}
                </span>
              </h3>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ReportsPage;
