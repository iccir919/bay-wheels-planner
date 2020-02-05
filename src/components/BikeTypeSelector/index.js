import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function BikeTypeSelector(props) {
  const [value, setValue] = React.useState(props.bikeType);

  const handleChange = event => {
    setValue(event.target.value);
    props.updateBikeType();
  };

  return (
    <div>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">What type of bike?</FormLabel>
        <RadioGroup 
          name="biketype" 
          value={value} 
          onChange={handleChange} 
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}
        >
          <FormControlLabel value="docked" control={<Radio />} label="Docked" />
          <FormControlLabel value="freebike" control={<Radio />} label="Free Bike" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}