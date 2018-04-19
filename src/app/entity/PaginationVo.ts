export class PaginationVo {
  pageSize: number;
  _loading: boolean;
  _total: number;
  _current: number;
  _footer: boolean;
  startRow: number;
  endRow: number;
  _dataSet: any;

  constructor() {
    this.pageSize = 10;
    this._loading = false;
    this._total = 0;
    this._current = 1;
    this._footer = false;
    this._dataSet = [];
  }


  // 初始化分页对象
  initPaginationVo(pageSize) {
    this.pageSize = pageSize;
    this._loading = false;
    this._total = 0;
    this._current = 1;
    this._footer = false;
    this._dataSet = [];
  }

  /**
   *  设置足部方法
   */
  setFooter(offset: number, limit: number) {
    this._footer = true;
    this.startRow = offset + 1;
    this.endRow = offset + limit;
    if (this._total < this.endRow) {
      this.endRow = this._total;
    }
  }
}
