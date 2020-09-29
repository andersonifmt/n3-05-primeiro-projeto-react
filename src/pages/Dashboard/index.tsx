import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/9285534?s=400&u=1a67d34df24a39a3ee83451b4bfd077cb8d39a91&v=4"
            alt="Anderson Wesley"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/9285534?s=400&u=1a67d34df24a39a3ee83451b4bfd077cb8d39a91&v=4"
            alt="Anderson Wesley"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/9285534?s=400&u=1a67d34df24a39a3ee83451b4bfd077cb8d39a91&v=4"
            alt="Anderson Wesley"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
