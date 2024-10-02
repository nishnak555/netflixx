import React from "react";

import {
  Box,
  FormControl,
  Select,
  IconComponent,
  styled,
  InputLabel,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import BorderColor from "@mui/icons-material/BorderColor";
import { useTheme } from "@emotion/react";

const CustomSelector = (props) => {
  const selectorTheme = useTheme();

  const {
    value,
    onChange,
    label,
    selectedValue,
    sx = {},
    icon,
    options,
  } = props;

  console.log(options, "hhhhhh")

  return (
    <Box sx={{
          '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', // Default border color
          },
          '&:hover fieldset': {
            borderColor: 'white', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white', // Border color when focused (clicked)
          },
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: 'white', // Label color when focused
        },
        
        }}>
      <FormControl>
        <Select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          label={label}
          sx={{}}
          startAdornment={<TranslateIcon />}
        >
          <InputLabel>{label}</InputLabel>

          {options.map((option) => (
            <MenuItem
              sx={{
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "grey", // Grey color on hover
                },
              }}
              key={option.value}
              value={option.value}
            >
              {option.label}
              <ListItemIcon>
                {selectedValue === option.value ? <label /> : null}
              </ListItemIcon>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelector;
