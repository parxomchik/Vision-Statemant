<script type="text/javascript">

    $('#but').click(function (event) {
        var Auth = {
            login: $('#login').val(),
            password: $('#password').val()
        };
        addData(Auth)
    })

    function addData(data){// pass your data in method
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/rest/user/login",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            statusCode :{
                200: function () {
                    alert("success...");
                },
                401: function() {
                    alert("Error");
                 }
            }
        });
    }
</script>