const vagasAbertas = [
    { titulo: "Analista de QA Pleno", href: "./analista-qa-pleno.html" },
    { titulo: "Estagiário(a) de Desenvolvimento de Sistemas", href: "./estagio-desenvolvimento-sistemas.html" }
];

const vagasArquivadas = [
    { titulo: "Analista de Suporte e Infraestrutura em Cloud", href: "./archived/analista-infra-suporte.html" }
];

function renderVagas(targetId, vagas) {
    const container = document.getElementById(targetId);
    if (!container) return;
    if (vagas.length === 0) {
        container.innerHTML = '<li class="vagas-empty">Nenhuma vaga no momento.</li>';
        return;
    }
    container.innerHTML = vagas
        .map(v => `<li class="vaga-item"><a href="${v.href}">${v.titulo}</a></li>`)
        .join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderVagas('vagas-abertas', vagasAbertas);
    renderVagas('vagas-arquivadas', vagasArquivadas);
});
