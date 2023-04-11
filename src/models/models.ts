export interface TypedNumbers {
  inputNumbers: string[];
}

export interface TicketBody {
  ticketDto: TicketDto;
  message: string;
}

export interface TicketDto {
  hash: string;
  drawDate: string;
  numbers: number[];
  status: string;
}

export interface LotteryResultsBody {
  responseDto: ResponseDto;
  message: string;
}

export interface ResponseDto {
  drawDate: string;
  hash: string;
  hitNumbers: number[];
  isWinner: boolean;
  numbers: number[];
  wonNumbers: number[];
}

export interface ThemeType {
  background: string;
  textPrimary: string;
  textSecondary: string;
  textHighlited: string;
  buttonHover: string;
}
