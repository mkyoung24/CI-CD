$(function () {
    $("#logout").click(
        function () {
            $.ajax({
                type: 'POST',
                url: '/logout',
                success: function () {
                    Swal.fire({
                        title: 'Logout Success!',
                        text: '성공적으로 로그아웃 되었습니다.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        onAfterClose: () => {
                            window.location.href = '/cagong';
                        }
                    });
                }
            })
        }
    );
});