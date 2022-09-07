const trigger = function(event){
    event.preventDefault();
    const option = document.querySelector('.preference').value;
    if(option.trim().toLowerCase()==='tea'){
        document.querySelector('.container-title').textContent='tea';
        document.querySelector('.container-description').textContent='tea is a organic drink';
        document.querySelector('.preference').classList.remove('.performance--updated');
    }

    else if(option.trim().toLowerCase()==='coffee'){
        document.querySelector('.container-title').textContent='coffee';
        document.querySelector('.container-description').textContent='coffee is a brewed drink';
        document.querySelector('.preference').classList.remove('.performance--updated');
    }

    else{
        document.querySelector('.container-title').textContent='Title';
        document.querySelector('.container-description').textContent='Description';
        document.querySelector('.preference').classList.add('.performance--updated');
    }
}
document.querySelector('.preference-button').addEventListener('click', trigger);



