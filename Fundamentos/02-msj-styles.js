//MENSAJES CON ESTILOS CSS
const styles = `
                background:linear-gradient(#884ced, #ec1cce);
                color:#fff;
                padding: 5px 10px;
            `;

console.log("%cHola AdhemiR", styles);

//AGRUPAR MENSAJES
console.group("Informacion a mostrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.groupEnd();