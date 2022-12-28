import { Routes, Route } from "react-router-dom";
import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Invoices from "./scenes/invoices/Invoices";
import Contacts from "./scenes/contacts/Contacts";
import Form from "./scenes/form/Form";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Dash from "./scenes/dash";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/Calendar";

function App() {
    const [theme, colourMode] = useMode();
    return (
        <ColourModeContext.Provider value={colourMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/form" element={<Form />} />
                            {/* <Route path="/bar" element={<Bar />} /> */}
                            {/* <Route path="/line" element={<Line />} /> */}
                            {/* <Route path="/pie" element={<Pie />} /> */}
                            {/* <Route path="/faq" element={<FAQ />} /> */}
                            {/* <Route path="/geography" element={<Geography />} /> */}
                            <Route path="/calendar" element={<Calendar />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColourModeContext.Provider>
    );
}

export default App;
