
    $(document).ready(() => {
        $('.run').click(() => {
            try {
                var x = $('#ri2').val();
                $('#ri2').val(x);
            } catch (error) {
                $('#ri2').val('Error: ' + error.message);
            }

            // Display the output in the textarea and handle the UI changes
            $('.thatdisappear').css({
                "display": "block",
                "height": "100%",
                "position": "fixed",
                "top": "0",
                "width": "100%",
                "left": "0",
                "background-color": "#f7f7f7"
            });
            $('.closebtn').fadeIn();
        });

        $('.clear').click(() => {
            $('.ru, #ri2').html('');
            $('#ri2').val('');
        });

        $('div.closebtn').click(400, () => {
            $('.thatdisappear').slideUp();
            $('.closebtn').fadeOut();
        });

        $('.copy').click(() => {
            navigator.clipboard.writeText($('#ri2').val());
        });
    });
