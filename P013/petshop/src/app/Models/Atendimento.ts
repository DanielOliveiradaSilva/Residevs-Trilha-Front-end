export class Atendimento {
    public id: number = 0;
    public idPet: number;
    public idVet: number;
    public data: Date;
    public horario: string;

    constructor(id: number, idPet: number, idVet: number, data: Date, horario: string) {
        this.id = id;
        this.idPet = idPet;
        this.idVet = idVet;
        this.data = data;
        this.horario = horario;
    }
}