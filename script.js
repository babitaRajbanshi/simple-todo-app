function addTask(){
    const newtask=document.createElement('li');
    const Tasklist=document.getElementById('list-container');
    Tasklist.appendChild(newtask);
    newtask.textContent=document.getElementById('input-task').value;
    document.getElementById('input-task').value="";
    deleteTask(newtask);
}
 function deleteTask(newtask){
    const deletebtn=document.createElement('button');
    deletebtn.textContent="Delete";
    newtask.appendChild(deletebtn);
    deletebtn.onclick=function(){
        newtask.remove();
    }
 } 

 
