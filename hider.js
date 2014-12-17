(function () {

    var findCommentRows = function () {
        return document.getElementsByClassName('cbox_desc_comment');
    };

    var hideComment = function (row) {
        var comment = row.getElementsByClassName('cbox_desc')[0],
            showLink = document.createElement('a');

        comment.style.color = '#fff';
            
        showLink.text = '보기';
        showLink.style.color = '#000';
        showLink.style.cursor = 'pointer';
        showLink.addEventListener('click', function (e) {
            comment.style.color = null;
            this.hidden = true;
        });

        comment.appendChild(showLink);
    };

    var hideAllComments = function () {
        console.log('Shading comments..'); 
        var rows = findCommentRows(),
            len = rows.length,
            row, i, showLink;

        for (i = 0; i < len; i++) {
            hideComment(rows[i]);
        }
    }

    var init = function () {
        console.log('Initializing');
        hideAllComments();
    };

    init();
})();
