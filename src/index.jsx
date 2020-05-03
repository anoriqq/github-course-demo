import ReactDom from 'react-dom';
import React from 'react';
import styled from 'styled-components';

const items = [
  {
    title: 'おすすめのアイテム',
    items: [
      {
        title: 'aaa',
      },
      {
        title: 'bbb',
      },
      {
        title: 'ccc',
      },
      {
        title: 'ddd',
      },
    ],
  },
  {
    title: 'セール中のアイテム',
    items: [
      {
        title: 'eee',
      },
      {
        title: 'fff',
      },
      {
        title: 'ggg',
      },
      {
        title: 'hhh',
      },
    ],
  },
  {
    title: 'ゲームのほしい物ランキング',
    items: [
      {
        title: 'iii',
      },
      {
        title: 'jjj',
      },
      {
        title: 'kkk',
      },
      {
        title: 'lll',
      },
    ],
  },
];

const ItemBox = styled.div`
  margin: 5px;
  padding: 2px;
  background: lightgreen;
  height: 120px;
  width: 120px;
`;

const Item = (props) => (
  <ItemBox>
    <span>{props.title}</span>
  </ItemBox>
);

const ItemList = styled.div`
  display: flex;
`;

const Items = (props) => (
  <div>
    <div>{props.title}</div>
    <ItemList>
      {props.items.map(Item)}
    </ItemList>
  </div>
);

const App = () => (
  <div>
    {items.map(Items)}
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));
