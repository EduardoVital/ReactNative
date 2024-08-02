import React, { useEffect, useState } from 'react';
import { Text, FlexWrapper, IsOnDietBox, IsNotOnDietBox, BulletPoint } from "./styles";

interface Props {
  setIsOnDiet: (isOnDiet: string) => void;
  isOnDiet?: 'YES' | 'NO';
}

export function Checkbox({ setIsOnDiet, isOnDiet }: Props) {
  const [ onDietActive,  setOnDietActive] = useState<boolean>(false);
  const [ notOnDietActive,  setNotOnDietActive] = useState<boolean>(false);

  useEffect(() => {
    if (isOnDiet === 'YES') return handleOnDietActive();
    if (isOnDiet === 'NO') return handleNotOnDietActive();
  },[isOnDiet])

  const handleOnDietActive = () => {
    setOnDietActive(true)
    setNotOnDietActive(false)
    setIsOnDiet('YES')
  }

  const handleNotOnDietActive = () => {
    setNotOnDietActive(true)
    setOnDietActive(false)
    setIsOnDiet('NO')
  }

  return (
    <>
      <Text>Está dentro da dieta?</Text>
        <FlexWrapper>
          <IsOnDietBox active={onDietActive} activeOpacity={1} onPress={handleOnDietActive}>
            <BulletPoint isOnDiet={true}/>
            <Text>
              Sim
            </Text>
          </IsOnDietBox>

          <IsNotOnDietBox active={notOnDietActive} activeOpacity={1} onPress={handleNotOnDietActive}>
          <BulletPoint isOnDiet={false}/>
            <Text>
              Não
            </Text>
          </IsNotOnDietBox>
        </FlexWrapper>
    </>
  )
}      