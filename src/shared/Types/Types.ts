

export const enum ETypeOfEvent {
    DISTANT = 'дистанционно',
    OFFICE = 'офис',
    SICK = 'больничный',
    VACATION = 'отпуск', 
    GROOMING = 'груминг',
}


export interface dayEvent{
    day: number,
    start: number,
    end: number,
    month: number,
    event: ETypeOfEvent
}