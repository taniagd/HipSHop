$(document).ready(function(){

  /*
    Removes a table
  */
  $(".remove-table").click(function(){
    $(this).parent().parent().remove();
  });
  /*
    Adds a table to be able to add more sizes and colors
  */
  $(".add-table").click(function(){
    let addRow = $('<span class="add-row">+</span>');
    addRow.on('click', function(){
      let spanRemove = $('<span class="remove-row">-</span>');
      spanRemove.on('click',function() {
        $(this).parent().parent().remove();
      });
      $(this).siblings(".table.products").find("tbody").append('<tr><td> <input type="color" value="#000000"></td><td>  <input type="text" value="0"></td><td class="remove"> </td></tr>');
      $(this).siblings(".table.products").find("tbody > tr > td").last().append(spanRemove)
    });
    let removeTable = $("<span class='remove-table'>-</span>");
    removeTable.on('click', function(){
      $(this).parent().parent().remove();
    });
    $(".list-size").append('<li>'+
              '<div class="form-floating">'+
                '<input type="text" class="form-control" placeholder="Nombre del producto">'+
                '<label for="floatingPassword">Talla</label>'+
            ' </div>'+
              '<table class="table products">'+
                '<thead>'+
                  '<tr>'+
                    '<th>Color:</th>'+
                    '<th>Piezas disponibles:</th>'+
                  '</tr>'+
                '</thead>'+
                '<tbody>'+
                  '<tr>'+
                  '</tr>'+
                '</tbody>'+
              '</table>'+
            '</li>');
    $(this).siblings(".list-size").find("li").last().append(addRow);
    $(this).siblings(".list-size").find("li").last().find(".form-floating").prepend(removeTable);
  });
  /*
    Adds elements to the list where we select the colors available of a size
  */
  $(".add-row").click(function(){
    let spanRemove = $('<span class="remove-row">-</span>');
    spanRemove.on('click',function() {
      $(this).parent().parent().remove();
    });
    $(this).siblings(".table.products").find("tbody").append('<tr><td> <input type="color" value="#000000"></td><td>  <input type="text" value="0"></td><td class="remove"> </td></tr>');
    $(this).siblings(".table.products").find("tbody > tr > td").last().append(spanRemove)
  });
  /*
    Remove elements from list where we select the colors available of a size
  */
  $(".remove-row").click(function(){
    $(this).parent().parent().remove();
  })
});