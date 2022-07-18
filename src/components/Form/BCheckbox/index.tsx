import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
interface ICheckbox {
  name: string;
  label: string;
}

export const BCheckbox: React.FC<ICheckbox> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <FormControlLabel
              control={
                <Checkbox {...field} name={name} checked={field.value} />
              }
              label={label}
            />
            {errors[name]?.message && (
              <FormHelperText sx={{ color: "red" }}>
                {errors[name]?.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </>
  );
};
