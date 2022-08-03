import React from 'react'
import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'

export default function Navbars(props) {
    return (
        <Navbar className='mb-3 px-4 py-3 justify-content-between'>
            <div className='icon-nav'>
                <FaBars onClick={props.toggle} size={20} />
            </div>
            <DropdownButton title={"Halo " + props.handleProfile} align="end">
                <Dropdown.Item as="button">Profile</Dropdown.Item>
                <Dropdown.Item as="button" onClick={props.handleSignOut}>Sign out</Dropdown.Item>
            </DropdownButton>
        </Navbar>
    )
}
