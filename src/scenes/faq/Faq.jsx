import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

import React from "react";

const Faq = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header
                title="FAQs"
                subtitle="Some Frequently Asked Questions..."
            />
            <Accordion defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colours.greenAccent[500]} variant="h5">
                        Question 1
                    </Typography>
                    <AccordionDetails>
                        <Typography>
                            Dh akahfa ahfva ahhhd, hhhfa hd hdhdhhdhdh,9nerv9e
                            kan adfhb djka. ajndj djd jjdjjd dn nnnm ndn
                            jdndjjn.
                        </Typography>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>

            <Accordion defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colours.greenAccent[500]} variant="h5">
                        Question 2{" "}
                    </Typography>
                    <AccordionDetails>
                        <Typography>
                            Dh akahfa ahfva ahhhd, hhhfa hd hdhdhhdhdh,9nerv9e
                            kan adfhb djka. ajndj djd jjdjjd dn nnnm ndn
                            jdndjjn.
                        </Typography>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>

            <Accordion defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colours.greenAccent[500]} variant="h5">
                        Question 3
                    </Typography>
                    <AccordionDetails>
                        <Typography>
                            Dh akahfa ahfva ahhhd, hhhfa hd hdhdhhdhdh,9nerv9e
                            kan adfhb djka. ajndj djd jjdjjd dn nnnm ndn
                            jdndjjn.
                        </Typography>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>

            <Accordion defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colours.greenAccent[500]} variant="h5">
                        Question 4
                    </Typography>
                    <AccordionDetails>
                        <Typography>
                            Dh akahfa ahfva ahhhd, hhhfa hd hdhdhhdhdh,9nerv9e
                            kan adfhb djka. ajndj djd jjdjjd dn nnnm ndn
                            jdndjjn.
                        </Typography>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>

            <Accordion defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colours.greenAccent[500]} variant="h5">
                        Question 5
                    </Typography>
                    <AccordionDetails>
                        <Typography>
                            Dh akahfa ahfva ahhhd, hhhfa hd hdhdhhdhdh,9nerv9e
                            kan adfhb djka. ajndj djd jjdjjd dn nnnm ndn
                            jdndjjn.
                        </Typography>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>

            <Accordion defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colours.greenAccent[500]} variant="h5">
                        Question 6
                    </Typography>
                    <AccordionDetails>
                        <Typography>
                            Dh akahfa ahfva ahhhd, hhhfa hd hdhdhhdhdh,9nerv9e
                            kan adfhb djka. ajndj djd jjdjjd dn nnnm ndn
                            jdndjjn.
                        </Typography>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>

            <Accordion defaultExpanded="true">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colours.greenAccent[500]} variant="h5">
                        Question 7
                    </Typography>
                    <AccordionDetails>
                        <Typography>
                            Dh akahfa ahfva ahhhd, hhhfa hd hdhdhhdhdh,9nerv9e
                            kan adfhb djka. ajndj djd jjdjjd dn nnnm ndn
                            jdndjjn.
                        </Typography>
                    </AccordionDetails>
                </AccordionSummary>
            </Accordion>
        </Box>
    );
};

export default Faq;
