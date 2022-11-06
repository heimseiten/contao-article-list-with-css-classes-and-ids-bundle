document.addEventListener( 'DOMContentLoaded', function () {
    if (document.querySelector('.tree_view .article_id_classes')) {
        document.querySelectorAll('.tree_view .article_id_classes').forEach(e => {

            const ids =e.innerHTML.substring( 0,e.innerHTML.indexOf(',') )
            const classes =e.innerHTML.substring( e.innerHTML.indexOf(',') + 2, e.innerHTML.length )
            
            const arrayOfIds = ids.split(' ')
            const arrayOfClasses = classes.split(' ')

            let idsInnerHtml = ['']
            let classesInnerHtml = ['']
            
            arrayOfClasses.sort().forEach(arrayElement => {
                if ( arrayElement.length > 0 ) {
                    arrayElement = '<span>' + arrayElement + '</span>'
                    classesInnerHtml.push(arrayElement)
                }
            })
            
            arrayOfIds.sort().forEach(arrayElement => {
                if ( arrayElement.length > 0 ) {
                    arrayElement = '<span>' + arrayElement + '</span>'
                    idsInnerHtml.push(arrayElement)
                }
            })
            
            e.innerHTML = '<div class="ids">' + idsInnerHtml.join('') + '</div><div class="classes">' + classesInnerHtml.join('') + '</div>'

        })
    }    
})
