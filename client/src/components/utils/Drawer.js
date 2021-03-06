import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
    CodeOutlined,
    CreateOutlined,
    SearchOutlined,
    SendOutlined,
    PersonOutlineOutlined,
    Person
} from '@material-ui/icons'
import {NavLink, Link} from 'react-router-dom';
import { Button } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        paddingRight: theme.spacing(3),
        paddingLeft: 'calc(100vw/5)',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawer: {
        flexShrink: 0,
    },
    navlink: {
        font: "PT Mono"
    },

}));

const MainDrawer = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem key="Coding">
                        <NavLink to='/coding' className={classes.navlink} component={Button}>
                            <ListItemIcon><CodeOutlined/></ListItemIcon>
                            <ListItemText className={classes.navlink} primary="Code"/>
                        </NavLink>
                    </ListItem>
                    <ListItem key="Writing">
                        <NavLink to='/writing' className={classes.navlink} component={Button}>
                            <ListItemIcon><CreateOutlined/></ListItemIcon>
                            <ListItemText className={classes.navlink} primary="Write" style={{textDecoration:'none'}}/>
                        </NavLink>
                    </ListItem>
                    <ListItem key="Learning">
                        <NavLink to='/learning' className={classes.navlink} component={Button}>
                            <ListItemIcon><SearchOutlined/></ListItemIcon>
                            <ListItemText className={classes.navlink} primary="Learn"/>
                        </NavLink>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button key="Home">
                        <NavLink to='/' className={classes.navlink} component={Button}>
                            <ListItemIcon><PersonOutlineOutlined/></ListItemIcon>
                            <ListItemText className={classes.navlink} primary="About"/>
                        </NavLink>
                    </ListItem>
                    <ListItem button key="Contact">
                        <NavLink to='/contact' className={classes.navlink} component={Button}>
                            <ListItemIcon><SendOutlined/></ListItemIcon>
                            <ListItemText className={classes.navlink} primary="Contact"/>
                        </NavLink>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default MainDrawer;
