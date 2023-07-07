import React from 'react';
import Typography from '@mui/material/Typography';

export function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: '24px 0px' }}>
      {props.children}
    </Typography>
  );
}