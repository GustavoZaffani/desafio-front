import {Injectable} from '@angular/core';
import {Item} from './item';

@Injectable()
export class ItemService {

  save(item: Item): Promise<void> {
    return new Promise<void>(resolve => {
      if (item.id == null) {
        item.id = this.getNewID();
      }

      let itens = JSON.parse(localStorage.getItem('itens'));
      if (itens == null) {
        itens = new Array();
      }

      let indexToEdit = null;
      itens.forEach((itemFor, index) => {
        if (itemFor.id === item.id) {
          indexToEdit = index;
        }
      });

      if (indexToEdit !== null) {
        itens[indexToEdit] = item;
      } else {
        itens.push(item);
      }

      localStorage.setItem('itens', JSON.stringify(itens));
      resolve();
    });
  }

  delete(id: number): Promise<void> {
    return new Promise<void>(resolve => {
      const itens = this.findAll();

      let indexToEdit = null;
      itens.forEach((itemFor, index) => {
        if (itemFor.id === id) {
          indexToEdit = index;
        }
      });

      itens.splice(indexToEdit, 1);
      localStorage.setItem('itens', JSON.stringify(itens));
      resolve();
    });
  }

  findAll() {
    return JSON.parse(localStorage.getItem('itens'));
  }

  findById(id: number): Promise<Item> {
    return new Promise<Item>(resolve => {
      const itens = JSON.parse(localStorage.getItem('itens'));
      if (itens != null) {
        const itemReturn = itens.filter(item => {
          return item.id === id;
        });
        resolve(itemReturn != null && itemReturn.length === 1 ? itemReturn[0] : null);
      }
    });
  }

  getNewID() {
    return Math.floor(Math.random() * (10000000 - 0 + 1)) + 0;
  }
}
