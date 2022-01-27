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

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});


// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});


const sidebarItems = [
  { key: 'mystorage', icon: <Inventory2Icon />, label: 'האחסון שלי' },
  { key: 'shared', icon: <Inventory2Icon />, label: 'קבצים ששותפו איתי' },
  { key: 'recent', icon: <Inventory2Icon />, label: 'לאחרונה' },
  { key: 'favorites', icon: <Inventory2Icon />, label: 'מועדפים' },
  { key: 'trash', icon: <Inventory2Icon />, label: 'אשפה' }
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
    <div dir="rtl">
      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
        open
      >
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
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
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>


                    </ListItem>
                  ))}
                </List>
              </div>
            </ThemeProvider>
          </ThemeProvider>
        </CacheProvider>
      </Drawer>
    </div>

  );
}