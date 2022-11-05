import Image from 'next/image';

import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'
import { api } from '../lib/axios';
import { FormEvent, useState } from 'react';

interface HomeProps{
  poolCount: number,
  guessCount: number,
  userCount: number
}

export default function Home(props: HomeProps) {
  // Pega em tempo real o input do campo aonde o usuário digita o nome do bolão, por causa do 'onChange={setPoolTitle}' no input
  const [ poolTitle, setPoolTitle ] = useState('');

  async function createPool(event: FormEvent){
    event.preventDefault();

    try{
      const response = await api.post('/pools', {
        title: poolTitle,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      alert('O bolão foi criado com sucesso! O código do seu bolão foi copiado para a área de transferência!');
      setPoolTitle('');
    } catch (err) {
      console.log(err);
      alert('Falha ao criar o bolão, tente novamente!');
    }
  }

  return (
    <div className="max-w-[85%] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Image src={logoImg} alt="NLW Copa"/>
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExampleImg} alt="" quality={100}/>
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{props.userCount}</span> pessoas já estão usando!
          </strong>
        </div>
        <form onSubmit={createPool}  className="mt-10 flex gap-2">
          <input 
            type="text" 
            required
            placeholder="Qual o nome do seu bolão?" 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            value={poolTitle}
            onChange={event => setPoolTitle(event.target.value)}
          />
          <button
            className="bg-yellow-500 rounded border px-6 py-4 border-gray-600 font-bold text-sm uppercase text-gray-900 hover:bg-yellow-700"
            type="submit" 
          >
            Criar o meu bolão
          </button>
        </form>
        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas! 🚀
        </p>
        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" quality={100}/>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Bolões Criados</span>
            </div>
          </div>
          <div className="w-px h-14 bg-gray-600"/>
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" quality={100}/>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.guessCount}</span>
              <span>Palpites Enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image 
        src={appPreviewImg} alt="Dois celulares exibindo uma prévia da aplicação móvel do nlwCopa"
        quality={100}
        priority
      />
    </div>
  );
}

export const getStaticProps = async () => {
  // const poolCountResponse = await api.get('pools/count');
  // const guessCountResponse = await api.get('guesses/count');

  // TODO: evitar que os 'counts' sejam chamados toda hora com o getStaticProps do Nextjs

  // Obs.: é mais performático usar o Promise.all, pois não espera o fetch do poolCountResponse para fazer o do guessCountResponse
  const [
    poolCountResponse, 
    guessCountResponse, 
    userCountResponse
  ] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count'),
  ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    }
  };
}