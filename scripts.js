$(document).ready(function() {
  $("input:text:visible:first").focus()
  $("form").submit(function(e){

    if ($("input").first().val() !== ""){
      let newListItem = $("input").first().val();
    

      $("#list").append(`            
        <li class="list-item">
        <label class="valign-wrapper">
          <input type="checkbox" class="checkbox"/>
          <span>${newListItem}</span>
          <button class="delete"><i class="right fas fa-trash-alt delete-icon"></i></button>
        </label>
        <hr>
        </li>
      `)

      $(".alert").addClass("hide")

    } else {
      $(".alert").removeClass("hide")
    }

    $("input").first().val("");

      $(".delete").bind("click", function(e){
        $(this).parent().parent().remove();
      })

      $(".checkbox").bind("click", function(e){
        if ($(this).parent().find("input").prop("checked")) {
          $(this).parent().find("span").addClass("checked")
          $("#completed-list").append($(this).parent().parent())
        }
        else {
          $(this).parent().find("span").removeClass("checked")
          $("#list").append($(this).parent().parent())
        }
      })
    $("ul").sortable()
    //prevent page from reloading on submit
    e.preventDefault()
  })
})