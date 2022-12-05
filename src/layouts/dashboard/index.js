/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";

// Data
import getDefaultChartData from "layouts/dashboard/data/chartData"
import useVisitorData from "hook/useVisitorData";

function Dashboard() {
  const { totalVisitor, targetMonthVisitor, lastMonthVisitor } = useVisitorData(2022, 11)
  const defaultChartData = getDefaultChartData(totalVisitor);
  const visitorPercent = Math.round(targetMonthVisitor / lastMonthVisitor * 100);
  const description = `Year ${2022}`


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={2}>
        <Grid container spacing={2}>
          <Grid item lg={5}>
            <MDBox>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Montly Visitor"
                count={targetMonthVisitor}
                percentage={{
                  color: "success",
                  amount: `${visitorPercent}%`,
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item lg={5}>
            <MDBox>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Montly Visitor"
                count={targetMonthVisitor}
                percentage={{
                  color: "success",
                  amount: `${visitorPercent}%`,
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container>
            <Grid item lg={10}>
              <MDBox>
                <DefaultLineChart
                  color="info"
                  title="Monthly Visitor"
                  description={description}
                  date="campaign sent 2 days ago"
                  chart={defaultChartData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
