"use client"
import MenuIcon from '@mui/icons-material/Menu';
import { useState, Fragment } from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import { ListItemButton } from '@mui/joy';
import { navItems } from "@/lib/constant"
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button
        variant="plain"
        color="neutral"
        size='sm'
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </Button>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Menu items</DialogTitle>
          <ModalClose />
          <Box
          role="presentation"
            >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name}>
                <ListItemButton>{item.name}</ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>

        </Sheet>
      </Drawer>
    </Fragment>
  );
}
