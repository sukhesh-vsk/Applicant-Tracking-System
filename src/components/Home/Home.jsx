import React from "react";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import Main from "../Main/Main";

export default function Home() {
    return (
        <div>
            {/* <Test/> */}
            <StyledEngineProvider injectFirst>
                <CssVarsProvider>
                    <Header />
                    <section style={{display: 'flex'}}>
                        <div>
                            <Navbar/>
                        </div>
                        <div>
                            <Main />
                        </div>
                    </section>
                </CssVarsProvider>
            </StyledEngineProvider>
        </div>
    );
}
