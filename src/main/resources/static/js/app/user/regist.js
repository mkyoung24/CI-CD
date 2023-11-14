$(function () {
    $("#account").focus();

    var phoneRule = /^\d{3}\d{3,4}\d{4}$/;
    var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    $("#saveMember").click(function () {
        if ($("#account").val().length == 0) {
            $("#account").addClass("is-invalid");
            $("#accountMessage").html("<span class='text-danger'>이름를 입력하세요</span>");
            $("#account").focus();
            return;
        }

        if ($("#email").val().length == 0) {
            $("#email").addClass("is-invalid");
            $("#emailMessage").html("<span class='text-danger'>이메일을 입력하세요</span>");
            $("#email").focus();
            return;
        }

        if ($("#password").val().length == 0) {
            $("#password").addClass("is-invalid");
            $("#passwordMessage").html("<span class='text-danger'>비밀번호를 입력하세요</span>");
            $("#password").focus();
            return;
        }

        if ($("#repassword").val().length == 0) {
            $("#repassword").addClass("is-invalid");
            $("#repasswordMessage").html("<span class='text-danger'>비밀번호 확인을 입력하세요</span>");
            $("#repassword").focus();
            return;
        }

        if ($("#password").val() != $("#repassword").val()) {
            $("#repassword").addClass("is-invalid");
            $("#repasswordMessage").html(
                "<span class='text-danger'>비밀번호와 비밀번호 확인이 일치 하지 않습니다.</span>"
            );
            $("#password").val("");
            $("#repassword").focus();
            return;
        }

        if ($("#phone").val().length == 0) {
            $("#phone").addClass("is-invalid");
            $("#phoneMessage").html("<span class='text-danger'>휴대전화를 입력하세요</span>");
            $("#phone").focus();
            return;

        }

        if ($("#address").val().length == 0) {
            $("#address").addClass("is-invalid");
            $("#addressMessage").html("<span class='text-danger'>주소를 입력하세요</span>");
            $("#address").focus();
            return;

        }


        var data = {
            memName: $("#account").val(),
            memEmail: $("#email").val(),
            memPhone: $("#phone").val(),
            memPw: $("#password").val(),
            memAddress: $("#address").val(),
            memRole: $("input[name='authority']:checked").val()
        };

        $.ajax({
            type: 'POST',
            url: '/user',
            dataType: 'text',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function (data) {
                Swal.fire({
                    title: 'Registration Success!',
                    text: '성공적으로 회원가입이 되었습니다.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    onAfterClose: () => {
                        window.location.href = "/cagong/login";
                    }
                });
            },

            error: function(error) {
                Swal.fire({
                    title: 'Registration Process Error!',
                    text: '오류 발생' + error,
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
        })
    });

    $("#email").keyup(function () {
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

    $("#phone").keyup(function () {
        $("#phoneMessage").html('');

        var phoneNumber = $("#phone").val();

        if (!phoneRule.test(phoneNumber)) {
            $("#phone").addClass("is-invalid");
            $("#phoneMessage").html("<span class='text-danger'>번호 입력 규칙에 맞게 입력해주세요.</span>");
        } else {
            $("#phone").removeClass("is-invalid");
            $("#phoneMessage").html('');
        }

        if ($("#phone").val() == '') {
            $("#phone").removeClass("is-invalid");
            $("#phoneMessage").html('');
        }
    });

    $("#password").keyup(function () {
        $("#password").removeClass("is-invalid");
        $("#passwordMessage").html('');
    });

    $("#repassword").keyup(function () {
        $("#repassword").removeClass("is-invalid");
        $("#repasswordMessage").html('');
    });

});
