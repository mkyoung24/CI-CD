$(function () {
    $("#email").focus();

    var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    $("#email").keyup(function () {

        $("#email").removeClass("is-invalid");
        $("#emailMessage").html('');

        var email = $("#email").val();

        if (!emailRule.test(email)) {
            $("#email").addClass("is-invalid");
            $("#emailMessage").html("<span class='text-danger'>이메일 주소 규칙에 맞게 입력해주세요.</span>");
        } else {
            $("#email").removeClass("is-invalid");
            $("#emailMessage").html('');
        }

        if ($("#email").val() == '') {
            $("#email").removeClass("is-invalid");
            $("#emailMessage").html('');
        }
    });

    $("#password").keyup(function () {
        $("#password").removeClass("is-invalid");
        $("#passwordMessage").html('');
    });

    $("#loginMember").click(
        function () {
            if ($("#email").val().length == 0) {
                $("#email").addClass("is-invalid");
                $("#emailMessage")
                    .html(
                        "<span class='text-danger'>이메일을 입력하세요</span>");
                $("#email").focus();
                return;
            }
            if ($("#password").val().length == 0) {
                $("#password").addClass("is-invalid");
                $("#passwordMessage")
                    .html(
                        "<span class='text-danger'>비밀번호를 입력하세요</span>");
                $("#password").focus();
                return;
            }

            var data = {
                memEmail: $("#email").val(),
                memPw: $("#password").val()
            };

            $.ajax({
                type: 'POST',
                url: '/login',
                dataType: 'text',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                success: function (data) {
                    Swal.fire({
                        title: 'Login Success!',
                        text: '성공적으로 로그인이 되었습니다.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        onAfterClose: () => {
                            window.location.href = '/cagong';
                        }
                    });
                },

                error: function (error) {
                    Swal.fire({
                        title: 'Server Error!',
                        text: '오류 발생' + error,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
        }
    );
});