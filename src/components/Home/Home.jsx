import React from "react";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import Main from "../Main/Main";
import SideContent from "../SideContent/SideContent";
import './Home.css'

export default function Home() {
    return (
        <div>
            {/* <Test/> */}
            <StyledEngineProvider injectFirst>
                <CssVarsProvider>
                    <Header />
                    <section style={{ display: 'flex', position: 'relative', minHeight: '100vh' }} className="flex-container">
                        <div style={{ width: '300px' }} className="flex-item">
                            <Navbar />
                        </div>
                        <div style={{ flex: 1, position: 'relative', right: '40px' }} className="flex-item">
                            <Main />
                        </div>
                        <div style={{ width: '200px', position: 'relative', right: '50px'}} className="flex-item">
                            <SideContent />
                        </div>
                    </section>
                </CssVarsProvider>
            </StyledEngineProvider>
        </div>
    );
}
