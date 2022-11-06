import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps{
  title: string;
  type?: 'primary' | 'secondary';
}

export default function Button({title, type = 'primary', ...rest}: Props){
  return(
    <ButtonNativeBase 
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === 'secondary' ? 'red.500' : 'yellow.500'}
      _pressed={{
        bg: type === 'secondary' ? 'red.600' : 'yellow.600'
      }}
      _loading={{
        _spinner: {color: 'black'}
      }}
      {...rest}
    >
      <Text 
        color={ type === "secondary" ? "white" : "black"}
        fontSize="sm"
        fontFamily="heading"

      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}