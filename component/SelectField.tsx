'use client';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import React from 'react';
import { fieldWidthControll } from '@/formlibrary';

interface CustomSelectProps extends SelectProps {
  initialValue?: string;
  width?: 'xs' | 's' | 'm' | 'l' | 'xl' | string;
  selections?: {
    label: string;
    value: string | number | readonly string[] | undefined;
  }[];
}
const SelectField: React.FC<CustomSelectProps> = ({ value, ...rest }) => {
  return (
    <FormControl sx={{ m: '15px 10px 0 0', padding: '10px 5px' }}>
      <InputLabel id={'name'}>{rest.label}</InputLabel>
      <Select
        name={rest.name}
        type={rest.type}
        fullWidth={rest.fullWidth}
        defaultValue=""
        value={value ?? ''}
        variant={rest.variant || 'filled'}
        onChange={rest.onChange}
        sx={{ width: fieldWidthControll(rest.width) }}
        className="form-fields"
        {...rest}
      >
        {rest.selections?.map((item, i) => (
          <MenuItem key={item.label + i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
