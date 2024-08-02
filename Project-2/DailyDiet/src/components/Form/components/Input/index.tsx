import React, { useState } from 'react';
import { Text, InputField } from './styles';

interface Props {
  name: string;
  height: number;
  multiline?: boolean;
  value: string;
  onChange: (text: string) => void;
}

export function Input({ name, height, multiline, value, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocused = () => {
    setIsFocused(true);
  }

  const handleOnBlur = () => {
    setIsFocused(false);
  }

  const handleInputChange = (text: string) => {
    onChange(text);
  }

  return (
    <>
      <Text>{name}</Text>
      {multiline ? (
        <InputField
          value={value}
          onChangeText={handleInputChange}
          height={height}
          multiline={true}
          onFocus={handleOnFocused}
          onBlur={handleOnBlur}
          isFocused={isFocused}
        />
      ) : (
        <InputField
          value={value}
          onChangeText={handleInputChange}
          height={height}
          onFocus={handleOnFocused}
          onBlur={handleOnBlur}
          isFocused={isFocused}
        />
      )}
    </>
  )
}
