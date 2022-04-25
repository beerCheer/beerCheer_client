import { format } from 'date-fns';

const dateFormat = (date: string) => format(new Date(date), 'yyyy.MM.dd');

export { dateFormat };
