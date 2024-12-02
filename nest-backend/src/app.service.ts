import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts() {
    return [
      {
        name: 'kleine Seifenschale',
        id: 1,
        category: 'Seifenschale',
        color: 'blau',
        price: 8,
        image:
          'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTlpZDFlbWF1czQ5eGh5aXdhdm95ZHh2Y2p1azMwbnJmN202aXQ0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vj8muG9sIBayobsTcU/giphy.gif',
      },
      {
        name: 'große Seifenschale',
        id: 5,
        category: 'Seifenschale',
        color: 'grün',
        price: 12,
        image:
          'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTlpZDFlbWF1czQ5eGh5aXdhdm95ZHh2Y2p1azMwbnJmN202aXQ0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vj8muG9sIBayobsTcU/giphy.gif',
      },
    ];
  }
}
