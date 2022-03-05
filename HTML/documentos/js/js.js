
const tema = (id, tema) => {
    let element = document.querySelector(`#${id}`);
    element.className = tema;

}

const ocultar = (id) => {
    if (document.getElementById(id).style.display === ''){
        document.getElementById(id).style.display = 'none'
    }else
    {document.getElementById(id).style.display=''}

}