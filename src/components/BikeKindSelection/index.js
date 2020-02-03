import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function BikeSelection(props) {
  const [value, setValue] = React.useState('docked');

  const handleChange = event => {
    setValue(event.target.value);
    props.updateBikeKindSelection();
  };

  return (
    <div>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">What kind of bike?</FormLabel>
        <RadioGroup 
          name="bikekind" 
          value={value} 
          onChange={handleChange} 
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <FormControlLabel value="docked" control={<Radio />} label="Docked" />
          <FormControlLabel value="electric" control={<Radio />} label="Electric" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}