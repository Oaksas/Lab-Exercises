    
const taskInput = document.querySelector('#task');            
const form = document.querySelector('#task-form');   
const filter = document.querySelector('#filter');                 
const taskList = document.querySelector('.collection');         
const clearBtn = document.querySelector('.clear-tasks'); 
const asc = document.querySelector('#asc');         
const dsc = document.querySelector('#dsc'); 



var ta =[];

form.addEventListener('submit',addNewTask);
clearBtn.addEventListener('click',clearAllTasks)
filter.addEventListener('keyup',filterTask)
taskList.addEventListener('click', removeTask);
asc.addEventListener('click',ascSort);
dsc.addEventListener('click',dscSort);

const reloadIcon = document.querySelector('.fa');   
reloadIcon.addEventListener('click', reloadPage);
function reloadPage() {
    location.reload();
}



function addNewTask(e){
e.preventDefault();
    if(taskInput.value === ""){
        
        taskInput.style.borderColor="red"
        return;
    }
   
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        ta.push(taskInput.value)
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);



    
  

}
function clearAllTasks(){
    taskList.innerHTML=''
    if(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

}


function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item'))
    {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();

        }

    }

}


    function ascSort(){
       taskList.removeChild(taskList.firstChild)
       taskList.innerHTML=""

       var arrTemp = ta.reverse()

       arrTemp = [... arrTemp]
     


      

       arrTemp.forEach(function(element){
        const link = document.createElement('a');
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(element))
       link.className = 'delete-item secondary-content'
       link.innerHTML = '<i class="fa fa-remove"></i>'
       li.appendChild(link)
       taskList.appendChild(li)}
       );
       



       
    }
    function dscSort(){
        taskList.removeChild(taskList.firstChild)
        taskList.innerHTML=""
 
        var arrTemp = ta
 
        arrTemp = [... arrTemp]
      
 
 
       
 
        arrTemp.forEach(function(element){
         const link = document.createElement('a');
         const li = document.createElement('li');
         li.className = 'collection-item';
         li.appendChild(document.createTextNode(element))
        link.className = 'delete-item secondary-content'
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link)
        taskList.appendChild(li)}
        );
        
 
 
 
        
     }
 



     function filterTask(){
         searchValue = filter.value;
         var arrTemp= []
         if(taskList.innerHTML){
            taskList.removeChild(taskList.firstChild)
            taskList.innerHTML=""
     
        }
         ta.forEach(element => {
             if(searchValue === element){
                 arrTemp.push(element)
             }
         });

               
    arrTemp.forEach(function(element){
        const link = document.createElement('a');
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(element))
       link.className = 'delete-item secondary-content'
       link.innerHTML = '<i class="fa fa-remove"></i>'
       li.appendChild(link)
       taskList.appendChild(li)}
       );


     
        
  


  }
         
  
    
         

     
 
    
 
 
 
        
     
 