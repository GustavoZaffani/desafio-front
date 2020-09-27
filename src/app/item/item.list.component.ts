import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from './item.service';
import {Item} from './item';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MessageUtil} from '../framework/util/message.util';

@Component({
  selector: 'app-item-list',
  templateUrl: './item.list.component.html',
  styleUrls: ['./item.list.component.css']
})
export class ItemListComponent implements OnInit {

  itens: Item[];

  constructor(private router: Router,
              private itemService: ItemService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.itemService.findAll()
      .then(value => {
        this.itens = value;
      });
  }

  openFormItem() {
    this.router.navigate(['item/form']);
  }

  edit(id: number) {
    this.router.navigate(['item/form', id]);
  }

  delete(id: number) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja remover o registro?',
      accept: () => {
        this.itemService.delete(id)
          .then(() => {
            MessageUtil.messageSuccess(this.messageService, 'Registro removido com sucesso');
            this.findAll();
          })
          .catch(() => {
            MessageUtil.messageError(this.messageService, 'Ocorreu um erro ao buscar o registro');
          });
      }
    });
  }
}
