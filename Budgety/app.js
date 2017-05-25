//BUDGET CONTROLLER
var budgetController = (function(){

   
})();

//UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return{
        getinput: function(){
            return{
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            }; 
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

    
})();


//GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e){
       
        if(e.key === 13 || event.which === 13){
            ctrlAddItem();
        }

    });
    }
   

    var ctrlAddItem = function(){
         //1. Get the field input data
         var input = UICtrl.getinput();
        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4.Calculate the budget

        //5.Display the budget on the UI
       
    };

    return{
        init: function(){
            console.log('App has started.');
            setupEventListeners();
        }
    };

   

})(budgetController, UIController);

controller.init();