$(document).ready(function() {
    var max_fields      = 999; //maximum input boxes allowed
    var wrapper   		= $(".symptoms-container"); //Fields wrapper
    var add_button      = $("#add-symptom"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
    e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="input-group mb-3"><input placeholder="What am I feeling?" type="text" name="mytext[]" class="form-control" autocomplete="off"><button class="btn btn-outline-danger remove_field input-group-append" type="button">Remove</button></div>'); //add input box

// <div class="input-group mb-3">
//     <input placeholder="Select a Symptom" type="text" name="mytext[]" class="form-control" autocomplete="off">
//     <div class="input-group-append">
//         <button class="btn btn-outline-danger remove_field input-group-append" type="button">Delete</button>
//     </div>
// </div>
            
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
        })

});