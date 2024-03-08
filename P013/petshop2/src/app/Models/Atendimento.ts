import { Examen } from "./Exame";
import { Pet } from "./Pet";

export class Atendimento{
    AtendimentoId!: number;
    DataEntrada!: Date;
    HoraEntrada!: Date;
    DataSaida!: Date;
    HoraSaida!: Date;
    Status!: string;
    responsavel!: string;
    PetId!: number;
    Pet !: Pet;
    ExamenId!: number;
    Examen!: Examen;

}


export { Pet };

