import { Option } from './option.model';

export interface Question {
    id?: number;
    prompt: string;
    options: Option[];
    responses?: {};
}