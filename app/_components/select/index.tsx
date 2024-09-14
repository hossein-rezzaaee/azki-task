import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from '@mui/material';

type TSelectProps = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  options: { name: string; value: string | number }[];
  fullWidth?: boolean;
  disabled?: boolean;
};

export default function Select({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
  disabled = false,
}: TSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        defaultValue=""
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((item) => (
          <MenuItem value={item.value + '@_@' + item.name} key={item.value}>
            {item.name || item.value}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
