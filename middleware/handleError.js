export function handleError(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).render('error', {
    error: err.message || 'Internal Server Error',
    title: 'Error Page'
  });
}
