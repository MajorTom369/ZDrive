import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Toolbar } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Drawer } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import RTL from '../Utilities/RTL'



const sidebarItems = [
  { key: 'mystorage', icon: <Inventory2Icon />, label: 'האחסון שלי' },
  { key: 'shared', icon: <PeopleAltIcon />, label: 'קבצים ששותפו איתי' },
  { key: 'recent', icon: <AccessTimeIcon />, label: 'לאחרונה' },
  { key: 'favorites', icon: <StarBorderIcon />, label: 'מועדפים' },
  { key: 'trash', icon: <DeleteIcon />, label: 'אשפה' }
]





export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  return (
    <div dir="">
      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
        open
      >
        <RTL>
              <div>
                <Toolbar />
                <List sx={{ direction: 'rtl' }}>
                  {sidebarItems.map((item, index) => (
                    <ListItem
                      button
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                      key={item.key}
                      sx={{
                        '&:hover': {
                          bgcolor: 'primary'
                        }
                      }}>
                      <ListItemText
                        primary={item.label}
                      />
                      <ListItemIcon sx={{pr:2}}>
                        {item.icon}
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </List>
              </div>
              </RTL>
      </Drawer>
    </div>

  );
}