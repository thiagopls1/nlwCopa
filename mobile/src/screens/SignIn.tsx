import { Center, Text, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons';
import Logo from '../assets/logo.svg';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

export function SignIn(){
  const { signIn, isUserLoading } = useAuth();

  return(
    <Center flex={1} bgColor="gray.900" p={7}>
      <Text color="white" fontSize={24} fontFamily="heading">
        <Logo width={212} height={40}/>
      </Text>
      <Button 
        title="ENTRAR COM GOOGLE"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>}
        type="SECONDARY"
        mt={12}
        onPress={signIn}
        isLoading={isUserLoading}
        _loading={{_spinner: {color: 'white'}}}
      />
      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para a criação da sua conta.
      </Text>
    </Center>
  );
}