import { Plano, QuestaoFreq } from "./interfaces"

export const servicos: Plano[] = [
    {
        id: 0, servico: "Mesa Individual", valor: 49, periodo: "dia", promo: false,
        beneficios: ["Rede Wi-fi", "Café, água e chá disponível"]
    },
    {
        id: 1, servico: "Mesa Individual", valor: 199, periodo: "mês", promo: true,
        beneficios: ["Rede Wi-fi", "Café, água e chá disponível", "1 almoço/dia no local"]
    },
    {
        id: 2, servico: "Sala de Reunião", valor: 149, periodo: "dia", promo: false,
        beneficios: ["Rede Wi-fi", "Café, água e chá disponível", "Guarda volumes com chave", "SmartTV 52 polegadas"]
    },
    {
        id: 3, servico: "Sala de Reunião", valor: 449, periodo: "semana", promo: false,
        beneficios: ["Rede Wi-fi", "Café, água e chá disponível", "4 almoços/dia no local", "Guarda volumes com chave", "SmartTV 52 polegadas"]
    },
    {
        id: 4, servico: "Sala 6 Lugares", valor: 1599, periodo: "mês", promo: false,
        beneficios: ["2 Rede Wi-fi", "Café, água e chá disponível", "6 almoços/dia no local", "Guarda volumes com chave", "Happy Hour", "Endereço fiscal", "Horário comercial extendido"]
    },
    {
        id: 5, servico: "Sala 12 Lugares", valor: 3199, periodo: "mês", promo: false,
        beneficios: ["2 Rede Wi-fi", "Café, água e chá disponível", "12 almoços/dia no local", "Guarda volumes com chave", "Happy Hour", "Endereço fiscal", "Horário comercial extendido"]
    }
]

export const perguntasFrequentes: QuestaoFreq[] = [
    {
        pergunta: "Qual é a capacidade das salas privadas, reuniões e áreas compartilhadas?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
    {
        pergunta: "É permitido personalizar as salas privativas?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
    {
        pergunta: "Como é a política de cancelamento ou mudanças no plano?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
    {
        pergunta: "O espaço é pet-friendly?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
    {
        pergunta: "O ambiente é adequado para chamadas ou trabalho silencioso?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
    {
        pergunta: "Que medidas de segurança são adotadas?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
    {
        pergunta: "Há estacionamento ou transporte público próximo?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
    {
        pergunta: "O espaço é acessível 24/7?",
        resposta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!"
    },
]