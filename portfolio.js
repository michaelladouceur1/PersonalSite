// function portfolioItemAnimate() {
    
// }

let ASSETS = '/assets/'

let portfolio = [
    {
        'title': 'Retro Draw',
        'description': 'A varying-resolution drawing tool with functionality to speed up the drawing time',
        'image': 'pixel-draw.png',
        'url': 'https://musing-lichterman-df9769.netlify.app/'
    }, {
        'title': 'Calculator',
        'description': 'A simple calculator utilizing object function creation',
        'image': 'calculator.png',
        'url': 'https://distracted-kowalevski-8a2e53.netlify.app/'
    }, {
        'title': 'Arcade',
        'description': 'A retro-themed arcade app',
        'image': 'arcade.png',
        'url': 'https://angry-wozniak-f00827.netlify.app/'
    }, {
        'title': 'User Hub',
        'description': 'A user hub app utilizing JQuery and async functions for fetching data',
        'image': 'user-hub.png',
        'url': 'https://stupefied-golick-d91c6f.netlify.app/'
    }, {
        'title': 'Art Collector',
        'description': 'A art search app utilizing JQuery and async functions for fetching data from Harvard Art API',
        'image': 'art-collector.png',
        'url': 'https://silly-easley-3392c1.netlify.app/'
    }, {
        'title': 'User Hub (React)',
        'description': 'A blog and todo app utilizing react framework',
        'image': 'user-hub-react.png',
        'url': 'https://festive-fermi-6afda0.netlify.app/'
    }
]

function createPortfolio(item,index) {
    let id = index + 1;
    let header = `<h3>${item.title}</h3>`
    let description = `<p>${item.description}</p>`
    let url = `<a href="${item.url}" target="_blank" class="portfolio-preview-button" id="ppb-${id}"><i class="fa fa-external-link"></i></a>`
    let image = `<img src="${ASSETS}${item.image}" id="ppi-${id}" alt="">`
    let html = $(`
        <div class="portfolio-item" id="pi-${id}">
            ${image}
            <div class="portfolio-item-info" id="pii-${id}">
                <div class="portfolio-item-info-menu">
                    ${url}
                </div>
                ${header}
                ${description}
            </div>
        </div>
    `);
    html = portfolioCSS(html, id);
    $('.portfolio').append(html);
}

function portfolioCSS(html, id) {
    html.hover(function() {
        $(`#pii-${id}`).css({
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'flex-direction': 'column'
        })
        $(`#ppi-${id}`).css({
            'filter': 'blur(2px)'
        })
        $(`#pii-${id}`).show();
    }, function() {
        $(`#pii-${id}`).hide();
        $(`#ppi-${id}`).css({
            'filter': 'none'
        })
    });

    // html.click(function() {
    //     console.log('Button Clicked');
    //     $(`#pp-${id}`).css({
    //         'display': 'flex',
    //         'justify-content': 'center',
    //         'align-items': 'center',
    //         'flex-direction': 'column',
    //         'width': '100%',
    //         'height': '80%'
    //     })
    //     $(`#pp-${id}`).show();
    // });
    return html
}

/* <div class="portfolio-preview" id="pp-${id}">
${iframe}
</div> */

// let iframe = `<iframe src="" name="main_iframe" frameborder="0"></iframe>`
// let expand = `<a href="${item.url}" target="main_iframe" class="portfolio-preview-button" id="ppb-${id}"><i class="fa fa-expand"></i></a>`

$(document).ready(function() {
    portfolio.forEach((e,i) => {
        createPortfolio(e,i);
    })
});