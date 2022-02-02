import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Box from '@mui/material/Box';
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

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});


// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});


type Props = {
    children: React.ReactNode;
}

export default function RTL(props: Props) {
  return (
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <Box sx={{ direction: 'rtl' }}>
                {props.children}
              </Box>
            </ThemeProvider>
          </ThemeProvider>
        </CacheProvider>
      
  );
}