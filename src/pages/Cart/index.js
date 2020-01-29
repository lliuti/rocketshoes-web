import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src='https://images.lojanike.com.br/1024x1024/produto/180354_1721574_20191008180345.png' alt=''/>
            </td>
            <td>
              <strong>Tênis top</strong>
              <span>R$129,99</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color='#7159c1'/>
                </button>
                <input type='number' readOnly value={1}/>
                <button type='button'>
                  <MdAddCircleOutline size={20} color='#7159c1'/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size={20} color='#7159c1'/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,12</strong>
        </Total>
      </footer>
    </Container>
  );
}
