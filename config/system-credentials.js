module.exports = function () {
  "use strict";
  var CrowdAuth = function() {
    var ret = {};
    ret.server = "https://crowd.contegix.com";
    ret.application = 'cloudy-kangaroo';
    ret.password = 'KrbKAYBr3r13';
    return ret;
  };

  var crmAuth = function() {
    var ret = {};
    ret.username = 'cloudy.kangaroo';
    ret.password = 'Y7Y6yZh7GrTkLrpVBbLCHxtFqFHyKTtd';
    ret.url = 'https://portal.contegix.com/api/2.0';
    ret.host = 'portal.contegix.com';
    return ret;
  };

  module.crmAuth = crmAuth;
  module.CrowdAuth = CrowdAuth;

  return module;
};