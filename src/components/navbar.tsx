import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { useAuth } from '../AuthContext';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);
    const { currentUser } = useAuth();

    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid id="contain">
                <MDBNavbarBrand style={{ fontFamily: 'Gill sans', textShadow: '-1px 1px 0 #cb4c4c',
                    fontWeight: '900'}} href='/'>Trip Planner</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/login'>Login/Signup</MDBNavbarLink>
                        </MDBNavbarItem>

                        {currentUser && (
                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        {currentUser.email ? `${currentUser.email}'s Account` : "My Account"}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link href='/trips'>Trips</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                        )}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}