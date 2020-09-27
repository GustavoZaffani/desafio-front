import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {pt} from '../framework/constants/calendarPt';
import {Item} from './item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UnidadeMedida} from './unidadeMedida';
import {ItemService} from './item.service';
import {DateUtil} from '../framework/util/date.util';
import {OnlyNumberDirective} from '../framework/directives/onlyNumber/onlyNumber.directive';
import {DecimalInputDirective} from '../framework/directives/decimalInput/decimalInput.directive';

@Component({
  selector: 'app-item-form',
  templateUrl: './item.form.component.html',
  styleUrls: ['./item.form.component.css']
})
export class ItemFormComponent implements OnInit {

  @ViewChild('inputQtde') inputQtde: ElementRef;
  form: FormGroup;
  item: Item;
  unidadeMedidaDropdown: SelectItem[];
  localePt = pt;
  qtdeAddon: string;
  maxDate: Date;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private itemService: ItemService,
              private messageService: MessageService) {
    this.item = new Item();
  }

  ngOnInit(): void {
    this.buildDropdown();
    this.createForm();

    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.findById(param.id);
      }
    });
  }

  createForm() {
    this.form = new FormBuilder().group({
      id: [null],
      nome: [null, Validators.required],
      unidadeMedida: [null, Validators.required],
      qtde: [null],
      preco: [null, Validators.required],
      isPerecivel: [null, Validators.required],
      dtFabricacao: [null, Validators.required],
      dtValidade: [null]
    });

  }


  findById(id: number) {
    this.itemService.findById(Number(id))
      .then(value => {
        this.item = value;
        this.form.patchValue(this.item);
        this.updateAddonInputQtde();
        this.setMaxDateFabricacao();
        this.setDtValidadeRequired();
      })
      .catch(reason => {
        this.messageService.add({severity: 'error', summary: 'Atenção', detail: 'Ocorreu um erro ao buscar o registro'});
      });
  }

  backToList() {
    this.router.navigate(['item']);
  }

  buildDropdown() {
    this.unidadeMedidaDropdown = [
      {label: 'Selecione', value: null},
      {label: 'Litro', value: UnidadeMedida.LITRO},
      {label: 'Quilograma', value: UnidadeMedida.QUILOGRAMA},
      {label: 'Unidade', value: UnidadeMedida.UNIDADE},
    ];
  }

  saveItem() {
    if (this.form.valid) {
      const rawValue = this.form.getRawValue();
      this.itemService.save(rawValue).then(value => {
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'O registro foi salvo com sucesso'});
        this.backToList();
      }).catch(() => {
        this.messageService.add({severity: 'error', summary: 'Atenção', detail: 'Ocorreu um erro ao salvar o registro'});
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  // ele só valida se tiver preenchido a validade, mesmo não sendo perecível, pois teoricamente
  // não faz sentido uma data de fabricação ser maior que a de validade
  setMaxDateFabricacao() {
    const dtValidade = this.form.get('dtValidade').value;

    if (dtValidade != null) {
      this.maxDate = DateUtil.parseStringToDate(dtValidade.toString());
      if (this.maxDate != null) {
        const dtFabricacao = DateUtil.parseStringToDate(this.form.get('dtFabricacao').value.toString());
        if (dtFabricacao > this.maxDate) {
          this.form.get('dtFabricacao').setValue(null);
        }
      }
    }

  }

  qtdeKeyDown(event: KeyboardEvent) {
    const unMedida = this.form.get('unidadeMedida').value;

    if (unMedida === UnidadeMedida.LITRO || unMedida === UnidadeMedida.QUILOGRAMA) {
      const directive = new DecimalInputDirective(this.inputQtde);
      directive.onKeyDown(event);
    } else if (unMedida === UnidadeMedida.UNIDADE) {
      const directive = new OnlyNumberDirective(this.inputQtde);
      directive.onKeyDown(event);
    }
  }

  updateAddonInputQtde() {
    const unMedida = this.form.get('unidadeMedida').value;
    this.qtdeAddon = unMedida;
  }

  itemVencido() {
    const dtValidade = this.form.get('dtValidade').value;
    if (dtValidade != null) {
      const unMedida = DateUtil.parseStringToDate(dtValidade.toString());
      return unMedida < new Date();
    }
    return null;
  }

  setDtValidadeRequired() {
    const isPerecivel = this.form.get('isPerecivel').value;
    console.log('teste');
    if (isPerecivel) {
      this.form.get('dtValidade').setValidators([Validators.required]);
      this.form.get('dtValidade').updateValueAndValidity();
    } else {
      this.form.get('dtValidade').setValidators(null);
      this.form.get('dtValidade').updateValueAndValidity();
    }
  }
}
