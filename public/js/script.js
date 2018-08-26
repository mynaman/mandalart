document.getElementById('init').addEventListener('click', (e)=>{
    e.preventDefault();
    
    let list = document.getElementsByTagName('input');    
    [].forEach.call(list, (tag) => tag.value = '')
    
});