import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    const angle = progress * 360;

    return (
        <Box
            sx={{
                background: `radial-gradient(${colours.primary[400]}55%, transparent 56%),
                    conic-gradient(transparent 0deg ${angle}deg, ${colours.blueAccent[500]} ${angle}deg 360deg),
                    ${colours.greenAccent}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            ProgressCircle
        </Box>
    );
};

export default ProgressCircle;
