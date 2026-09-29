const prompt = require("prompt-sync")()

class Aluno {
    constructor(nome, idade, matricula, endereco) {
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.endereco = endereco
    }
}

class TransporteEscolar {
    constructor() {
        this.alunos = []
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno)
    }

    listarAlunos() {
        if (this.alunos.length === 0) {
            console.log("\nNenhum aluno cadastrado")
            return
        }

        console.log("\n=== ALUNOS CADASTRADOS ===")

        this.alunos.forEach((aluno, index) => {
            console.log(`\n${index + 1} - ${aluno.nome}`)
            console.log(`Idade: ${aluno.idade}`)
            console.log(`Matrícula: ${aluno.matricula}`)
            console.log(`Endereço: ${aluno.endereco}`)
        })
    }
}

const transporte = new TransporteEscolar()

function adicionarAluno() {
    console.log("\n=== ADICIONAR ALUNO ===")

    const nome = prompt("Nome do aluno: ")
    const idade = prompt("Idade: ")
    const matricula = prompt("Matrícula: ")
    const endereco = prompt("Endereço: ")

    const aluno = new Aluno(
        nome,
        idade,
        matricula,
        endereco
    )

    transporte.adicionarAluno(aluno)

    console.log("\nAluno adicionado com sucesso!")
}

let opcao

do {
    console.log("\n=== TRANSPORTE ESCOLAR ===")
    console.log("1 - Adicionar aluno")
    console.log("2 - Listar alunos")
    console.log("3 - Sair")

    opcao = prompt("Escolha uma opção: ")

    if (opcao === "1") {
        adicionarAluno()
    } else if (opcao === "2") {
        transporte.listarAlunos()
    } else if (opcao === "3") {
        console.log("\nSistema encerado")
    } else {
        console.log("\nRESPOSTA INVALIDA")
    }

} while (opcao !== "3")
