
export class Atendimento{
    AtendimentoId!: number;
    Pet !: Pet;
    DataEntrada!: Date;
    HoraEntrada!: Date;
    DataSaida!: Date;
    HoraSaida!: Date;
    Status!: string;
    Descricao!: string;

}

export class Pet{
    id!: number;
    nome!: string;
    tipo!: string;
    raca!: string;
    dataNascimento!: Date;
    sexo!: string;//M ou F
    idade!: number;
}