import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6376d2e823b22f7f76f6ffef',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668524611051-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6376d2e823b22f7f76f6fff0'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668524367665-coca-cola.png',
          'price': 7,
        },
        'quantity': 4,
        '_id': '6376d2e823b22f7f76f6fff1'
      }
    ],
  },
  {
    '_id': '6376d2e823b22f7f76f6ffef',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668524611051-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '6376d2e823b22f7f76f6fff0'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668524367665-coca-cola.png',
          'price': 7,
        },
        'quantity': 4,
        '_id': '6376d2e823b22f7f76f6fff1'
      }
    ],
  }
];


export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
