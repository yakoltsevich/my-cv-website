import * as React from 'react';
import Button from '@mui/material/Button';
import MUIMenu from '@mui/material/Menu';
import {MenuItem} from "./MenuItem";
import {ReactComponent as MenuIcon} from "../../shared/icons/menu-icon.svg";
import './Menu.scss'

export const Menu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="menu-button"
                aria-controls={open ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon/>
            </Button>
            <MUIMenu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem label='about me' anchor='#about-me'/>
                <MenuItem label='experience' anchor='#experience'/>
                <MenuItem label='contacts' anchor='#contacts'/>
            </MUIMenu>
        </div>
    );
}