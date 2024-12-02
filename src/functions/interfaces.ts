export interface Plano {
    id: number,
    servico: string,
    valor:  number,
    periodo: string,
    promo: boolean,
    beneficios: string[]
}

export interface QuestaoFreq {
    pergunta: string,
    resposta: string,
}

export interface Servico {
    icon: string,
    descr: string,
}