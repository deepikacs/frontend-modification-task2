$(document).ready(function(){
     $("#buton").click(function () {
        debugger;

        var total=0;

        $(":checkbox:checked.checkbox").each(function () {
          debugger;
          total = total + parseInt(this.value);

        });

        document.write(total);

      });
    $('#select_all').on('click',function(){
        debugger;
        // if(this.checked){
            debugger;
             $('.checkbox').each(function(){
                this.checked = true;
            });
        // }else{
        //      $('.checkbox').each(function(){
        //         this.checked = false;
        //     });
        // }
    });
    
    $('.checkbox').on('click',function(){
        debugger
        if($('.checkbox:checked').length == $('.checkbox').length){
            debugger
            $('#select_all').prop('checked',true);
        }else{
            debugger
            $('#select_all').prop('checked',false);
        }
    });
});