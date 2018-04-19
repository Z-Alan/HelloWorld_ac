export class Pagination{
  limit:number;
  offset:number;
  order:string;
  search:string;
  sort:string;
  total:number;
  constructor(){
    this.limit = 10;
    this.offset = 0;
    this.order = 'asc';
  }
}
