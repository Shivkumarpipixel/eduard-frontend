import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { NAVIGATION } from '../config/navigation';

const Sidebar = ({ open, onClose }) => {
  const renderNavItems = (items) => {
    return items.map((item, index) => {
      if (item.kind === 'header') {
        return (
          <Typography key={index} variant="h6" style={{ padding: '10px' }}>
            {item.title}
          </Typography>
        );
      }
      if (item.kind === 'divider') {
        return <Divider key={index} />;
      }
      return (
        <ListItem button component={Link} to={`/${item.segment}`} key={index}>
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText primary={item.title} />
        </ListItem>
      );
    });
  };

//   return (
    // <Drawer open={open} onClose={onClose}>
    //   <List>
    //     {renderNavItems(NAVIGATION)}
    //   </List>
    // </Drawer>
//   );
};

export default Sidebar;
