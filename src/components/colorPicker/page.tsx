"use client";

import React from "react";
import { Checkmark, Container } from "./style";

export default function ColorPicker({ checkedColor, onColorChange }: any) {
  const handleInputChange = (e: any) => {
    const newColor = e.target.value;
    onColorChange(newColor);
  };

  return (
    <Container>
      <input
        type="radio"
        name="radio"
        value={checkedColor}
        onChange={handleInputChange}
      />
      <Checkmark color={checkedColor} />
    </Container>
  );
}
