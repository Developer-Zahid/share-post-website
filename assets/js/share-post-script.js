$(document).ready(function(){
    let currentLocation = window.document.location;
    let postUrl = encodeURI(currentLocation.href);
    let postTitle = encodeURI($('.post-card__title__link').text().replace(/^(.{60}[^\s]*).*/, "$1"));

    $('meta[property="og:url"]').attr('content', currentLocation.origin);
    $('meta[property="og:image"]').attr('content', $('.post-card__head__image').attr('src'));
    $('meta[name="twitter:image"]').attr('content', $('.post-card__head__image').attr('src'));
    $('meta[property="og:description"]').attr('content', $('.post-card__text').text().replace(/^(.{155}[^\s]*).*/, "$1"));
    $('meta[name="twitter:description"]').attr('content', $('.post-card__text').text().replace(/^(.{155}[^\s]*).*/, "$1"));
    $('meta[property="og:title"]').attr('content', $('.post-card__title__link').text().replace(/^(.{60}[^\s]*).*/, "$1"));
    $('meta[name="twitter:title"]').attr('content', $('.post-card__title__link').text().replace(/^(.{60}[^\s]*).*/, "$1"));
    $('meta[property="og:site_name"]').attr('content', $('.post-card__title__link').text().replace(/^(.{60}[^\s]*).*/, "$1"));

    $('[data-share="facebook"]').attr('href', 'https://www.facebook.com/sharer.php?u=' + postUrl);
    $('[data-share="twitter"]').attr('href', 'https://twitter.com/share?url='+ postUrl +'&text=' + postTitle);
    $('[data-share="linkedin"]').attr('href', 'https://www.linkedin.com/shareArticle?url='+ postUrl +'&title=' + postTitle);

    $('.social-share').on('click', function(e){
        e.preventDefault();
        window.open( $(this).attr('href'), '_blank', 'scrollbars=1,menubar=0,toolbar=0,resizable=yes,width=500,height=400');
    })
});