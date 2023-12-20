import React from "react";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import Main from "../Main/Main";
import SideContent from "../SideContent/SideContent";

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
                        <div style={{flex: 1}}>
                            <Main />
                        </div>
                        <div>
                            <SideContent />
                        </div>
                    </section>
                </CssVarsProvider>
            </StyledEngineProvider>
        </div>
    );
}
