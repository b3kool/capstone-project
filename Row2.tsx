import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@mui/material";
import {
  AreaChart,
  ResponsiveContainer,
} from "recharts";


const Row2 = () => {
  useTheme();

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Market Overview"
          sideText=""
        />
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
            width={500}
            height={400}
          >
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="h">
        <BoxHeader title="Financials" sideText="" />
        <AreaChart
            width={500}
            height={400}
          >
          </AreaChart>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="" />
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
            width={500}
            height={400}
          >
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader
          title="52 Week High and Low"
          sideText=""
        />
      </DashboardBox>
    </>
  );
};

export default Row2;
