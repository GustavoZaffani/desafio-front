import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from './item.service';
import {Item} from './item';
import {ConfirmationService, MessageService} from 'primeng/api';

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
    this.itens = this.itemService.findAll();
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
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Registro removido com sucesso'});
            this.findAll();
          })
          .catch(() => {
            this.messageService.add({severity: 'error', summary: 'Atenção', detail: 'Ocorreu um erro ao buscar o registro'});
          });
      }
    });

  }
}
