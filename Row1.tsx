import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  AreaChart,
} from "recharts";

const Row1 = () => {
  useTheme();


  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue and Profits"
          subtitle="top line represents revenue, bottom line represents expenses"
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

      <DashboardBox gridArea="b">
        <BoxHeader
          title="Stock Price"
          subtitle="the stock price is shown in candle stick pattern"
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

      <DashboardBox gridArea="c">
        <BoxHeader
          title="Sentiment HeatMap"
          subtitle="experts'and investors' senitments"
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
    </>
  );
};

export default Row1;
