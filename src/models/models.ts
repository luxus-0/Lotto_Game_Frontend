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

export interface lotteryResultsBody {
  isWinner: boolean;
  winningNumbers: number[];
  typedNumbers: number[];
  matchedNumbers: number[];
}

export interface ThemeType {
  background: string;
  textPrimary: string;
  textSecondary: string;
  textHighlited: string;
  buttonHover: string;
}
