const input = document.querySelector('#favchap'); 
const button = document.querySelector('button');  
const list = document.querySelector('#list');


function createListItem(chapter) {
    
    const listItem = document.createElement('li');
    
 
    const chapterSpan = document.createElement('span');
    chapterSpan.textContent = chapter;
    
    
    listItem.appendChild(chapterSpan);
    listItem.appendChild(deleteButton);
  
    list.appendChild(listItem);
  }
  
 
button.addEventListener('click', () => {
   
    const chapter = input.value;
    
   
    if (chapter.trim() !== '') {
      // Creating a new list item
      const listItem = document.createElement('li');
    
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => {
        listItem.remove(); 
      });
      
    
      listItem.textContent = chapter;
      
    
      listItem.appendChild(deleteButton);
      
      list.appendChild(listItem);
      
     
      input.value = '';
      input.focus();
    }
  });