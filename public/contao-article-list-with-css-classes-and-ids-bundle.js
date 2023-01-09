document.addEventListener( 'DOMContentLoaded', function () {

    viewClassAndId()    

    if (document.querySelector('.tl_left a')) {
        document.querySelectorAll('.tl_left a').forEach(e => {
            e.addEventListener('click', function (event) {
                setTimeout(function () {
                    viewClassAndId()

                    if (document.querySelector('.tl_left a')) {
                        document.querySelectorAll('.tl_left a').forEach(e => {
                            e.addEventListener('click', function (event) {
                                setTimeout(function () {
                                    viewClassAndId()
                                }, 1000)

                            })
                        })
                    }

                }, 1000)

            })
        })
    }

})


function viewClassAndId() {
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
                
                if ( e.parentElement.querySelector('.article_id_classes_view') ) {
                    e.parentElement.querySelector('.article_id_classes_view').remove()
                }

                var newDiv = document.createElement("div")
                newDiv.classList.add('article_id_classes_view')


                newDiv.innerHTML = '<div class="ids">' + idsInnerHtml.join('') + '</div><div class="classes">' + classesInnerHtml.join('') + '</div>'


                e.parentElement.insertBefore(newDiv, e)

            })
        }        
}

