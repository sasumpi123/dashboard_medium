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
import MDInput from "components/MDInput";
import { useEffect, useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";

// Data
import getDefaultChartData from "layouts/dashboard/data/chartData"
import { useVisitorData, useNewUserData, useYearVisitorData } from "hook/useVisitorData";

import { getMonthStr, addComma } from "../../util/formatter"

function Dashboard() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  const { targetMonthVisitor, lastMonthVisitor } = useVisitorData(year, month)
  const visitorPercent = Math.round(targetMonthVisitor / lastMonthVisitor * 100);
  const monthVisitorTitle = `"${getMonthStr(month)}" Visitors`

  const { targetMonthNewUser, lastMonthNewUser } = useNewUserData(year, month)
  const newUserAmount = targetMonthNewUser - lastMonthNewUser
  const monthNewUserTitle = `"${getMonthStr(month)}" New Users`

  const { yearVisitor } = useYearVisitorData(year)
  const description = `Year ${year}`
  const defaultChartData = getDefaultChartData(yearVisitor);

  const [dateValue, setDateValue] = useState(`${year}-${month + 1}`)

  const handleChange = (event) => {
    const { value } = event.target
    if (value !== "") setDateValue(value)

  }

  useEffect(() => {
    const [changeYear, changeMonth] = dateValue.split("-")
    setYear(Number(changeYear))
    setMonth(Number(changeMonth) - 1)
  }, [dateValue])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={2}>
          <Grid item lg={5}>
            <MDBox mb={4.5}>
              <MDInput type="month" label="Select" value={dateValue} onChange={handleChange} />
            </MDBox>
          </Grid >
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <MDBox>
              {targetMonthNewUser !== undefined && <ComplexStatisticsCard
                icon="person"
                title={monthVisitorTitle}
                count={addComma(targetMonthVisitor)}
                percentage={{
                  color: "success",
                  amount: `${Number.isNaN(visitorPercent) ? 0 : visitorPercent}%`,
                  label: `than last month(${addComma(lastMonthVisitor)})`,
                }}
              />}
            </MDBox>
          </Grid>
          <Grid item lg={6} xs={12}>
            <MDBox>
              {targetMonthNewUser !== undefined && <ComplexStatisticsCard
                icon="person_add"
                title={monthNewUserTitle}
                count={addComma(targetMonthNewUser)}
                percentage={{
                  color: "success",
                  amount: `${newUserAmount}`,
                  label: `more than last month(${addComma(lastMonthNewUser)})`,
                }}
              />}
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container>
            <Grid item lg={12} xs={12}>
              <MDBox>
                <DefaultLineChart
                  color="info"
                  title="Monthly Visitors"
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
