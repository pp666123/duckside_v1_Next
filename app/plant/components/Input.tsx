"use client";
import React from "react";
import Select from "react-select";
import { colourOptions } from "../../../public/data/stock";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: "rgb(107, 114, 128)",
    borderWidth: "2px",
    borderRadius: "0.25rem",
    "&:hover": {
      borderColor: "rgb(107, 114, 128)",
    },
    cursor: "pointer",
  }),
};

const Input = ({ field }: any) => {
  return (
    <>
      <Select
        {...(field as any)}
        instanceId={"plant-code-input"}
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
        styles={{
          ...customStyles,
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "LightGrey",
            primary: "Black",
          },
        })}
      />
    </>
  );
};

export default Input;
