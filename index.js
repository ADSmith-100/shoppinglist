$(function() {
    $('#js-shopping-list-form').submit(event => {
        // this stops the default form submission behavior
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();
        //creates const newItem that pulls the text from the submit form with .val from the input with id shopping list entry
        $('#shopping-list-entry').val('');
        //replaces previous entry in the shopping list add item form with an empty string, this
        //clears out or 'resets' the entry box.  
        
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>`);
        //targeting the ul with the class .shopping-list to append or add to it with copy paste of the other <li>s using string literal
        //it should be insterting the new item?  Why undefined? - I was using the wrong id when initializing the newItem const. 
    
    });

    $('.shopping-list').on('click', '.shopping-item-toggle',  function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        //listen for clicks on parent class of .shopping list and class of shopping item toggle (wont' work on new list items otherwise!, event delegation)
        //when click on check button occurs find the closest li with class shopping item and target it for toggleClass - change class to shopping-item__checked.
        //this adds the striketrough styling from the css.  
    });
    
    
    $('.shopping-list').on('click', '.shopping-item-delete',  function() {
        $(this).closest('li').remove();
        //listen for clicks on parent class of .shopping list and class shopping item delete (otherwise it will not recognize when there are new items added)
        //this is event delegation.  when your hear the click, run the function on the closest li of parent .shopping-list and remove it.  At first I had it
        //removing just the shopping item delete button!  
      });
    

    
})