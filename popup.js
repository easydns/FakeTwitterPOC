$('#start').click(function () {
    chrome.tabs.executeScript({
        file: 'twitter.js'
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if("twitter-checker" === request.id){
        let data = request.data;
        console.log(data);
        checkDomain(data);
        sendResponse({status: 'success'});
    }
});

function checkDomain(data) {
    console.log('Main checker running...');
    
    $('#name').val(data.name);
    $('#screen_name').val(data.screen_name);
    $('#locatin').val(data.locatin);
    $('#description').val(data.description);
    $('#url').val(data.url);
    $('#avatar').attr('src', data.avatar);
    $('i.fa').css('display', 'none');

    let domain = data.url.replace('https://', '').replace('http://', '').replace('www.', '').split(/[/?#]/)[0];
    // let url = 'https://dns.google/resolve?name=stuntp0pe._twitter.bombthrower.com&type=TXT';
    if(domain.length > 0){
        let ajax_url = 'https://dns.google/resolve?name=' + data.screen_name + '._twitter.' + domain +'&type=TXT';
        $.ajax({
            url: ajax_url,
            success: function (result) {
                if (result.Status == 0) {
                    let answer = result.Answer[0].data;
                    if(answer.toLowerCase() == data.screen_name.toLowerCase()){
                        $('i.fa-check').css('display', 'block');
                    }
                    else{
                        $('i.fa-close').css('display', 'block');
                    }
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                $('i.fa-question').css('display', 'block');
            }
        });
    }
    
}