$(document).ready(function() {
    $("#random").change(function() {
        var $option = $(this).children('option:selected').val();    /*this is used to select optional indexs*/
        // alert($option);          /*to test value*/
        if($option == 'yes') {
            $('#winning_number').attr("disabled","true");
        } else {
            $('#winning_number').removeAttr("disabled");
        }
    });
});