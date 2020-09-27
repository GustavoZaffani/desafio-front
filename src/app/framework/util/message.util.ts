export class MessageUtil {

  public static messageSuccess(messageService, message) {
    messageService.add({severity: 'success', summary: 'Sucesso', detail: message});
  }

  public static messageError(messageService, message) {
    messageService.add({severity: 'error', summary: 'Atenção', detail: message});
  }

  public static messageInfo(messageService, message) {
    messageService.add({severity: 'info', summary: 'Atenção', detail: message});
  }
}
