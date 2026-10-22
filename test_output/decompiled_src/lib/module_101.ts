{
  'use strict';
  var n = r(202);
  function a(e, t) {
    return true === e.isAdmin ? n.grantAccess(t) : undefined;
  }
  e.exports = a;
}