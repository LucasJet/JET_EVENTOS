import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Receitas',
    path: '/receitas',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Despesas',
    path: '/despesas',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Criar Receita',
    path: '/criarReceita',
    icon: <HiIcons.HiOutlineDocumentAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Criar Despesa',
    path: '/criarDespesa',
    icon: <HiIcons.HiOutlineDocumentAdd/>,
    cName: 'nav-text'
  },
  {
    title: 'Criar Movimentação de Receita',
    path: '/criarMovimentoReceita',
    icon: <HiIcons.HiOutlineDocumentAdd/>,
    cName: 'nav-text'
  },
  {
    title: 'Criar Movimentação de Despesa',
    path: '/criarMovimentoDespesa',
    icon: <HiIcons.HiOutlineDocumentAdd/>,
    cName: 'nav-text'
  }
];
