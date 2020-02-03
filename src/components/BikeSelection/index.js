import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function BikeSelection(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('traditional');

  const handleChange = event => {
    setValue(event.target.value);
    props.updateBikeKindSelection();
  };
  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl} fullWidth>
        <FormLabel component="legend">What kind of bike?</FormLabel>
        <RadioGroup 
          name="bikekind" 
          value={value} 
          onChange={handleChange} 
          style={{display: 'flex', flexDirection: 'row'}}
        >
          <FormControlLabel value="traditional" control={<Radio />} label="Traditional" />
          <FormControlLabel value="electric" control={<Radio />} label="Electric" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}