(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
  var List1 = this;
  List1.items = ShoppingListCheckOffService.getItems();
  List1.addItem = function(itemName, itemQuantity){
    ShoppingListCheckOffService.addItem(itemName, itemQuantity);
  };

    List1.removeItem = function(itemIndex){
      try{
        ShoppingListCheckOffService.removeItem(itemIndex);
      }catch(error){
        List1.errorMessage = error.message;
      }
  };

}
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var List2 = this;
    List2.items = ShoppingListCheckOffService.getItems1();
    List2.Error1 = function(){
      try{
        ShoppingListCheckOffService.Error1();
      }catch(error){
        List2.errorMessage = error.message;
      }
  }
}
  function ShoppingListCheckOffService(){
    var service = this;
    var items = [
    {name: 'cookies', quantity: '2 bags'},
    {name: 'chips', quantity: '3 bags'},
    {name: 'milk', quantity: '2 bottles'},
    {name: 'Sweets', quantity: '3 boxes'},
    {name:'Coca-Cola', quantity: '2 bottles'}
  ];
    var items1 = [];

    service.addItem = function(iName, iQuantity){
      var item = {
        name: iName,
        quantity : iQuantity
      };
      items1.push(item);
    };
    service.removeItem = function (itemIdex) {
      items.splice(itemIdex, 1);
      if((items.length)== 0)
      {
        throw new Error("Everything is bought!");
      }
    };
    service.Error1 = function()
    {
      if((items1.length)==0)
      {
        throw new Error("Nothing bought yet!");
      }
      else{
        throw new Error("")
      }
      return Error;
    };
    service.getItems1 = function(){
      return items1;
    };
    service.getItems = function(){
      return items;
    };
  }

})();
