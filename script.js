$(document).ready(function() {
    $(".service-item").hover(
        function() {
            $(this).find(".overlay").fadeIn();
        }, function() {
            $(this).find(".overlay").fadeOut();
        }
    );
});

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
