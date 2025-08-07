export function notFound(req, res){
    /* res.status(404).json({error:'not Found'})*/
    res.status(404).render('404', {
        title: '404 Page',
        message1: 'Page Not Found',
        message2: "Sorry, we couldn’t find the page you’re looking for."
    })
}