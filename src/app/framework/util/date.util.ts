export class DateUtil {

  public static parseStringToDate(dtToParse: string): Date {
    const aux = dtToParse.split('/');
    return new Date(Number(aux[2]), Number(aux[1]) - 1, Number(aux[0]));
  }
}

