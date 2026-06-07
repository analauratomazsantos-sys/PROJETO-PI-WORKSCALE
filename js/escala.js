let funcionarios = [];

const btnAdicionar = document.getElementById("btnAdicionar");
const tabela = document.getElementById("listaFuncionarios");

btnAdicionar.addEventListener("click", adicionarFuncionario);

function adicionarFuncionario() {

    const nome = document.getElementById("nome-funcionario").value;
    const cargo = document.getElementById("cargo").value;
    const turno = document.getElementById("turno").value;
    const entrada = document.getElementById("entrada").value;
    const saida = document.getElementById("saida").value;
    const folga = document.getElementById("folga").value;

    if(nome === "") {
        alert("Digite o nome do funcionário.");
        return;
    }

    funcionarios.push({
        nome,
        cargo,
        turno,
        entrada,
        saida,
        folga
    });

    tabela.innerHTML += `
        <tr>
            <td>${nome}</td>
            <td>${cargo}</td>
            <td>${turno}</td>
            <td>${entrada}</td>
            <td>${saida}</td>
            <td>${folga}</td>
        </tr>
    `;
}

const btnGerarEscala = document.getElementById("btnGerarEscala");

btnGerarEscala.addEventListener("click", gerarEscala);

function gerarEscala() {

    let html = `
        <div class="tabela-escala">
            <h2>Escala Semanal</h2>

            <div class="tabela-responsiva">
                <table>
                    <thead>
                        <tr>
                            <th>Funcionário</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sáb</th>
                            <th>Dom</th>
                        </tr>
                    </thead>

                    <tbody>
    `;

    funcionarios.forEach(funcionario => {

        html += `
            <tr>
                <td>${funcionario.nome}</td>
        `;

        const dias = [
            "segunda",
            "terca",
            "quarta",
            "quinta",
            "sexta",
            "sabado",
            "domingo"
        ];

        dias.forEach(dia => {

            if (dia === funcionario.folga) {
                html += `<td>Folga</td>`;
            } else {
                html += `<td>✔</td>`;
            }

        });

        html += `</tr>`;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;

    document.getElementById("escalaGerada").innerHTML = html;
}

document.getElementById("nome-funcionario").value = "";
document.getElementById("cpf").value = "";
document.getElementById("telefone").value = "";
document.getElementById("cargo").value = "";
document.getElementById("turno").value = "";
document.getElementById("entrada").value = "";
document.getElementById("saida").value = "";
document.getElementById("folga").value = "";
document.getElementById("observacoes").value = "";