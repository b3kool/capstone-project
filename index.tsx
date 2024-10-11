import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b c"
  "d b c"
  "d b c"
  "d h c"
  "e h f"
  "e h f"
  "e h f"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "d"
  "d"
  "e"
  "e"
  "b"
  "b"
  "b"
  "b"
  "h"
  "h"
  "h"
  "h"
  "c"
  "c'
  "c"
  "c"
  "f"
  "f"
  "f'
  "f"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
    </Box>
  );
};

export default Dashboard;
