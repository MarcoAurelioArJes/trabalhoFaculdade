VerRelatorioAnteriorEPosterior();

function VerRelatorioAnteriorEPosterior() {
    let mesesRelatorio = [
        [1, "janeiro", 2023],
        [2, "fevereiro", 2023],
        [3, "marco", 2023],
        [11, "novembro", 2022],
        [12, "dezembro", 2022],
    ]

    let existeRelatorio = false;

    EscondeRelatorios(mesesRelatorio);

    let data = prompt("Informe um período do relatório. (Ex: 01/02/2022).\n" +
                      "Para ver o período anterior e o posterior ao informado.");

    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);
    let dataInstanciada = new Date(`${Number(ano)}-${Number(mes)}-${Number(dia)}`);
    if (!isNaN(dataInstanciada.getDate())) {
        mesesRelatorio.forEach((elemento, indice) => {
            if ((dataInstanciada.getMonth() + 1) == elemento[0] 
                && dataInstanciada.getFullYear() == elemento[2]) {
                existeRelatorio = true;
                if (indice == 0) {
                    document.getElementById(mesesRelatorio[mesesRelatorio.length - 1][1]).style.display = 'table';
                    document.getElementById(mesesRelatorio[indice + 1][1]).style.display = 'table';
                    return;
                }
                if (indice == (mesesRelatorio.length - 1)) {
                    document.getElementById(mesesRelatorio[mesesRelatorio.length - 1][1]).style.display = 'table';
                    document.getElementById(mesesRelatorio[0][1]).style.display = 'table';
                    return;
                }

                document.getElementById(mesesRelatorio[indice - 1][1]).style.display = 'table';
                document.getElementById(mesesRelatorio[indice + 1][1]).style.display = 'table';
            }
        });

        if (!existeRelatorio) {
            alert("Não há relatório para esse período!!!");
            VerRelatorioAnteriorEPosterior();
        }
    } else {
        alert("Data inválida!!!");
        VerRelatorioAnteriorEPosterior();
    }
}

function EscondeRelatorios(periodosDosRelatorios) {
    periodosDosRelatorios.forEach(elemento => {
        document.getElementById(elemento[1]).style.display = 'none';
    });
}