import { TextField, TextFieldProps } from '@mui/material';
import { fieldWidthControll } from '@/formlibrary';
import {
  BaseTextFieldProps,
  StandardTextFieldProps,
} from '@mui/material/TextField/TextField';

interface TextInputFieldProps extends StandardTextFieldProps {
  initialValue?: string;
  width?: 'xs' | 's' | 'm' | 'l' | 'xl' | string;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  value,
  ...rest
}) => {
  return (
    <TextField
      id={rest.name}
      label={rest.label}
      name={rest.name}
      type={rest.type}
      fullWidth={rest.fullWidth}
      value={value || rest.initialValue || ''}
      variant={rest.variant || 'filled'}
      onChange={rest.onChange}
      size={rest.size}
      sx={{
        m: '10px 10px 0 0',
        padding: '10px 5px',
        width: fieldWidthControll(rest.width),
      }}
      className="form-fields"
      {...rest}
    />
  );
};
