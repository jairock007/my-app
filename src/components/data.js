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
    value: "$5000",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    status: "In Progress",
    value: "$3000",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@example.com",
    status: "Converted",
    value: "$2000",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Lost",
    value: "$1000",
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
