import React from "react";
import {
  Box,
  FormControl,
  Select,
  IconComponent,
  style,
  InputLabel,
  MenuItem,
  ListItemIcon,
  colors,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import BorderColor from "@mui/icons-material/BorderColor";

const CustomSelector = ({
  value,
  onChange,
  label,
  selectedValue,
  sx = {},
  icon,
  options
}) => {


  return (
    <Box>
      <FormControl >
        <Select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          label={label}
          sx={{}}
          startAdornment={<TranslateIcon />}

        >
          <InputLabel>{label}</InputLabel>

          {options.map((option) => (
            <MenuItem sx={{
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "grey", // Grey color on hover
                },
              }} 
              key={option.value} value={option.value}>
              {option.label}
              <ListItemIcon>
                {selectedValue === option.value ? <label/> : null}
              </ListItemIcon>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelector;
