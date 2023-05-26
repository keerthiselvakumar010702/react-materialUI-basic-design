import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Grid, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Form = () => {
  return (
    <div>   
        <Box
      sx={{
        width:'670px',
        border:'1.5px solid white',
        padding:'10px',
        margin:'auto',
        marginBlockStart:'20px'
        
      }}>
        <Typography variant='h4'>Sign Up</Typography>
        <FormControl>
 <Grid container  sx={{marginBlockStart:'20px'}}>
        <Grid TextField xs={4}>
        <TextField label="First Name" placeholder='Enter your First Name' />
        </Grid>
        <Grid TextField xs={4}>
        <TextField label="Middle Name" placeholder='Enter your Middle Name' />
        </Grid> 
        <Grid TextField xs={4}>
        <TextField label="Last Name" placeholder='Enter your Last Name' fullWidth />
        </Grid>
 </Grid>
 <Grid container  sx={{marginBlockStart:'20px'}}>
 <Grid item xs={12} >
    <TextField type="email" placeholder="Enter email" label="Email" variant='outlined' fullWidth required />
</Grid>
     
 </Grid>
 <FormLabel >Gender</FormLabel>
      <RadioGroup>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
    
      </RadioGroup>
 </FormControl>
    </Box>
  
    </div>
  )
}

export  {Form};
