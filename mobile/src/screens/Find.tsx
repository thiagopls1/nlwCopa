import { useState } from 'react';
import { Heading, useToast, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../components/Input';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

import { api } from '../services/api';

export function Find(){
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');
  const toast = useToast();
  const { navigate } = useNavigation();

  async function handlePoolJoin(){

    try{
      setIsLoading(true);
      if(!code.trim()){
        setIsLoading(false);
        return toast.show({
          title: 'Informe o código',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

      await api.post('/pools/join', { code });
      navigate('pools');

      toast.show({
        title: 'Você entrou no bolão com sucesso',
        placement: 'top',
        bgColor: 'green.500'
      });

    }catch(err){
      console.log(err);
      setIsLoading(false);

      if(err.response?.data?.message === 'Pool not found.'){
        return toast.show({
          title: 'Bolão não encontrado',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

      if(err.response?.data?.message === 'You already joined this pool.'){
        return toast.show({
          title: 'Você já está nesse bolão',
          placement: 'top',
          bgColor: 'yellow.500'
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return(
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton/>
      <VStack mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
          Encontre um bolão através de {'\n'} seu código único
        </Heading>
        <Input 
          mb={2}
          placeholder="Qual o código do bolão?"
          autoCapitalize="characters"
          onChangeText={setCode}
        />

        <Button
          title="BUSCAR BOLÃO"
          isLoading={isLoading}
          onPress={handlePoolJoin}
        />
      </VStack>
    </VStack>
  );
}