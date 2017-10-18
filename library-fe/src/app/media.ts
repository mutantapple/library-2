export class Media {
  public id: number;
  public title: string;
  public type: number;
  public checkouted: boolean;
  public director: string;
}

export interface Media {
  id: number;
  title: string;
  type: number;
  checkouted: boolean;
  director: string;
}
