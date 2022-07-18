import { TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { useFormContext, Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface ITextInput {
  name: string;
  label: string;
}

export const BDate: React.FC<ITextInput> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label={label}
            inputFormat="dd/MM/yyyy"
            value={field.value}
            onChange={(e) => {
              field.onChange(e);
            }}
            renderInput={(params) => (
              <TextField
                {...field}
                {...params}
                label={label}
                type="text"
                error={!!errors[name]}
                helperText={errors[name]?.message}
                fullWidth
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
};
