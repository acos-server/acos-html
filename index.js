var ACOSHTML = function() {};

ACOSHTML.addToHead = function(params) {
  return '<script src="/static/html/jquery.min.js" type="text/javascript"></script>\n' +
    '<script src="/static/html/events.js" type="text/javascript"></script>\n';
};

ACOSHTML.addToBody = function(params) {
  return '';
};

ACOSHTML.initialize = function(req, params, handlers, cb) {

  // Initialize the protocol
  params.headContent += ACOSHTML.addToHead(params);
  params.bodyContent += ACOSHTML.addToBody(params);

  // Initialize the content type (and content package)
  handlers.contentTypes[req.params.contentType].initialize(req, params, handlers, function() {
    cb();
  });

};

ACOSHTML.handleEvent = function(event, payload, req, res, protocolData, responseObj, cb) {
  res.json({ 'status': 'OK', 'protocol': responseObj.protocol, 'content': responseObj.content });
  cb(event, payload, req, res, protocolData, responseObj);
};

ACOSHTML.register = function(handlers) {
  handlers.protocols.html = ACOSHTML;
};

ACOSHTML.namespace = 'html';
ACOSHTML.packageType = 'protocol';

ACOSHTML.meta = {
  'name': 'html',
  'shortDescription': 'Simple protocol for loading content without any communication with the server.',
  'description': '',
  'author': 'Aalto University',
  'license': 'MIT',
  'version': '0.2.0',
  'url': ''
};

module.exports = ACOSHTML;
