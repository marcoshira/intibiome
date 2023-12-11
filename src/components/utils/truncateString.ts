/* 
Function that formats the strDescription of a category. It checks if the string is longer
than the maxLength, and if it is it cuts it to the last period before the maxLength.
It also removes anything in between square brackets and the also the brackets.
*/
/* 
Função que formata a descrição de uma categoria. Ela checa se a string é mais longa que o
comprimento máximo, e se for, corta ela até o último ponto final. 
Ela também remove tudo que estiver entre colchetes e também os próprios colchetes.
*/
export function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        // Find the last period before the maxLength.
        // Encontra o último ponto antes do comprimento máximo.
        const truncated = str.substr(0, maxLength);
        const lastPeriodIndex = truncated.lastIndexOf('.');

        if (lastPeriodIndex !== -1) {
            // Cut the string at the last period.
            // Corta a string no último ponto.
            str = truncated.substr(0, lastPeriodIndex + 1);
        } else {
            // If there's no period, simply cut the string at the maxLength and adds a period.
            // Se não tiver ponto, corta a string no comprimento máximo e adiciona um ponto.
            str = truncated + '.';
        }
    }
    // Regular expression to match content inside square brackets.
    // Regex para encontrar o que estiver dentro de colchetes.
    const regex = /\[.*?\]/g;

    // Replace content inside square brackets with an empty string.
    // Troca o conteúdo dentro de colchetes com uma string vazia.
    const result = str.replace(regex, '');

    // Remove any square brackets.
    // Remove os colchetes.
    return result.replace(/\[|\]/g, '');
}
