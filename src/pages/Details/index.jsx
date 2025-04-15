import { Container, Links, Content } from './styles';
import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}

/*
Quando essas importações chegaram aqui, isso tudo era mato ainda:
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
*/

//* "useState()" => ?
//* "npm run lint" => ?
//* '"<Fragment>" x "</Fragment>"' ou '"<>" x "</>"' => Ambos são um tipo de "fragment"...
//* Você pode usar, simplesmente, uma '"<div>" x "</div>"' também no lugar deles!

//* Interfaces
//* Componentes

//* Associação interessante que fiz:
//* 1) Chamar/invocar uma função em JavaScript puro => containerDeExemplo()...
//* 2) Usar um '"<ContainerDeExemplo>" x "</ContainerDeExemplo>"' dentro da função que você está criando numa determinada interface/página em uma biblioteca JavaScript (no caso, o próprio React)...
//* 3) O mesmo também serve para os próprios componentes em si, depois de prontos e importados, usando-os, de fato, por exemplo <Button /> nessa mesma função anterior...