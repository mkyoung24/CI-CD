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
                    var result = Number(data);
                    switch (result) {
                        case 0:
                            Swal.fire({
                                title: 'Login Success!',
                                text: '성공적으로 로그인이 되었습니다.',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                onAfterClose: () => {
                                    window.location.href = '/cagong';
                                }
                            });
                            break;
                        case 1:
                            Swal.fire({
                                title: 'Wrong Member Info.',
                                text: '로그인 정보가 일치하지 않습니다.',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                            break;
                        default:
                            Swal.fire({
                                title: 'Process Error!',
                                text: '로그인에 오류가 발생했습니다. 잠시 후 다시 진행해주세요.',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                            break;
                    }
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