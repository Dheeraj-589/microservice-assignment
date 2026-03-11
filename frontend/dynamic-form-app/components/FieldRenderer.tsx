import { TextField, Select, MenuItem, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function FieldRenderer({ field, register }: any) {

  if (field.fieldType === "TEXT") {
    return (
      <TextField
        label={field.name}
        defaultValue={field.defaultValue}
        {...register(field.name, { required: field.required })}
        fullWidth
        margin="normal"
      />
    );
  }

  if (field.fieldType === "LIST") {
    return (
      <Select
        defaultValue={field.defaultValue}
        fullWidth
        {...register(field.name)}
      >
        {field.listOfValues1.map((item: string, i: number) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    );
  }

  if (field.fieldType === "RADIO") {
    return (
      <RadioGroup defaultValue={field.defaultValue}>
        {field.listOfValues1.map((item: string, i: number) => (
          <FormControlLabel
            key={i}
            value={item}
            control={<Radio />}
            label={item}
            {...register(field.name)}
          />
        ))}
      </RadioGroup>
    );
  }

  return null;
}