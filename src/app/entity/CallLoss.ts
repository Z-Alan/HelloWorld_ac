import {Pagination} from './Pagination';
import {CallLossDetail} from './CallLossDetail';

export class CallLoss {

  endCallTime: string;
  phone: string;
  startCallTime: string;
  callLossDetail: CallLossDetail;
  pagination: Pagination;

  constructor() {
    this.pagination = new Pagination();
    this.callLossDetail = new CallLossDetail();
  }
}
