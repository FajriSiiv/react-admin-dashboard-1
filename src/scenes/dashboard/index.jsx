import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PointOfSale from "@mui/icons-material/PointOfSale";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Traffic from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import Progress from "../../components/Progress";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID COMPONENTS & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,365"
            subtitle="Email Send"
            progress="0.75"
            increase="+16%"
            icon={
              <EmailOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="14,123"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+20%"
            icon={
              <PointOfSale
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,323"
            subtitle="New Clients"
            progress="1.2"
            increase="+59%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,444,234"
            subtitle="Traffic Inbound"
            progress="0.55"
            increase="+106%"
            icon={
              <Traffic
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $69,516,235
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transaction */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight="600"
              p="15px"
            >
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((e, i) => (
            <Box
              key={`${e.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[400]}
                  variant="h5"
                  fontWeight="500"
                >
                  {e.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{e.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{e.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${e.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <Progress size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[400]}
              sx={{
                marginTop: "15px",
              }}
            >
              $49,713
            </Typography>
            <Typography>Includes extra misc and costs</Typography>
          </Box>
        </Box>

        {/*  */}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
