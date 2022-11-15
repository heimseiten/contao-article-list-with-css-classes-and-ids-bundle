document.addEventListener( 'DOMContentLoaded', function () {
    const contao_classes = [
        'media',
        'media--above',
        'media--right',
        'media--left',
        'media--below',
        'content-code',
        'content-headline',
        'content-list',
        'content-markdown',
        'content-table',
        'download-element',
        'ext-jpg',
        'content-download',
        'content-downloads',
        'block',
        'content-image',
        'content-gallery--cols-4',
        'content-gallery',
        'content-player',
        'tl_gray',
        'ce_accordionSingle',
        'ce_accordion',
        'ce_text',
        'ce_image',
        'content-text',
        'widget',
        'widget-radio',
        'mandatory',
        'widget-text',
        'widget-select',
        'widget-checkbox',
        'widget-range',
        'widget-captcha',
        'widget-submit',
        'ivp',
        'explanation',
        'widget-explanation'
    ]
    if (document.querySelector('.limit_height')) {
        document.querySelectorAll('.limit_height > *').forEach(e => {
            const arrayOfClasses = e.className.split(' ')
            const arrayOfIds = e.id.split(' ')
            for (i = 0; i < arrayOfClasses.length; i++) {
                if ( contao_classes.includes(arrayOfClasses[i]) ) { 
                    arrayOfClasses.splice(i, 1);
                    i--;
                }
            }
            for (i = 0; i < arrayOfIds.length; i++) {
                if ( contao_classes.includes(arrayOfIds[i]) ) { 
                    arrayOfIds.splice(i, 1);
                    i--;
                }
            }
            
            let idsInnerHtml = ['']
            if ( arrayOfIds.length > 0) {
                arrayOfIds.sort().forEach(arrayElement => {
                    if ( arrayElement.length > 0 ) {
                        arrayElement = '<span>' + arrayElement + '</span>'
                        idsInnerHtml.push(arrayElement)
                    }
                })
            }
            let classesInnerHtml = ['']
            if ( arrayOfClasses.length > 0) {
                arrayOfClasses.sort().forEach(arrayElement => {
                    if ( arrayElement.length > 0 ) {
                        arrayElement = '<span>' + arrayElement + '</span>'
                        classesInnerHtml.push(arrayElement)
                    }
                })
            }
        
            var frag = document.createDocumentFragment();
            var elem = document.createElement('div');
            
            elem.innerHTML = '<div class="ids">' + idsInnerHtml.join('') + '</div><div class="classes">' + classesInnerHtml.join('') + '</div>'
            elem.classList.add('content_id_classes');
            frag.appendChild(elem);
            
            const toolbar = e.parentElement.parentElement.querySelector('.cte_type')
            toolbar.appendChild(frag)
        
        })
    }
})
