$(document).ready(function () {
    let url = window.location.href;
    let screen_name = url.replace('https://twitter.com/', '');
    if (screen_name.indexOf('/') > -1) return;

    let data = { name: '', screen_name: '', locatin: '', url: '', description: '', avatar: 'images/fake-profile-detect.png' };

    let UserName = $('div[data-testid="UserName"]').text().replace('Follows you', '');
    let temp = UserName.split('@');

    data.screen_name = temp[temp.length - 1].trim();
    data.name = temp[0].trim();
    data.description = $('div[data-testid="UserDescription"]').text().trim();
    data.locatin = $('span[data-testid="UserLocation"]').text().trim();
    data.url = $('a[data-testid="UserUrl"]').text().trim();
    data.avatar = $('div[aria-label="Opens profile photo"] img').attr('src').trim();

    chrome.runtime.sendMessage({ id: "twitter-checker", data: data }, function (response) {
        console.log('twitter-checker-response', response.status);
    });
    return;
});