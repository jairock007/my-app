export const analyticsData = {
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

export const leadsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "New",
    value: 5000, // Changed value to integer for calculation
    date: "2023-10-01", // Added date field
    source: "Website", // Added source field
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "In Progress",
    value: 7500,
    date: "2023-10-02",
    source: "Referral",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    status: "Closed",
    value: 3200,
    date: "2023-10-03",
    source: "Social Media",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    status: "New",
    value: 4500,
    date: "2023-10-04",
    source: "Email",
  },
  {
    id: 5,
    name: "David Taylor",
    email: "david@example.com",
    status: "Closed",
    value: 1800,
    date: "2023-10-05",
    source: "Referral",
  },
];

export const reportsData = {
  leads: {
    last7: {
      totalLeads: 100,
      newLeads: 20,
      convertedLeads: 10,
      conversionRate: 0.5,
    },
    last30: {
      totalLeads: 500,
      newLeads: 100,
      convertedLeads: 50,
      conversionRate: 0.6,
    },
    last90: {
      totalLeads: 1500,
      newLeads: 300,
      convertedLeads: 150,
      conversionRate: 0.7,
    },
  },
  conversion: {
    last7: {
      totalConversions: 20,
      conversionRate: 0.5,
      averageConversionValue: 100,
    },
    last30: {
      totalConversions: 100,
      conversionRate: 0.6,
      averageConversionValue: 150,
    },
    last90: {
      totalConversions: 300,
      conversionRate: 0.7,
      averageConversionValue: 200,
    },
  },
  revenue: {
    last7: {
      totalRevenue: 2000,
      averageOrderValue: 100,
    },
    last30: {
      totalRevenue: 10000,
      averageOrderValue: 150,
    },
    last90: {
      totalRevenue: 30000,
      averageOrderValue: 200,
    },
  },
};
