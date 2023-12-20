import React from "react";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";

export default function Home() {
    return (
        <div>
            {/* <Test/> */}
            <StyledEngineProvider injectFirst>
                <CssVarsProvider>
                    <Header />
                    <section>
                        <Navbar/>
                    </section>
                </CssVarsProvider>
            </StyledEngineProvider>
        </div>
    );
}
