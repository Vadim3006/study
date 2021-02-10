 function WriteCookie (cookieName, cookieValue, expiry) {

            var expDate = new Date();
            if (expiry) {
                expDate.setTime (expDate.getTime() + expiry);
                document.cookie = cookieName + "=" + escape (cookieValue) + "; expires=" + expDate.toGMTString()+"; path=/";
            } else {
                document.cookie = cookieName + "=" + escape (cookieValue)+"; path=/";
            }
        }

        function wReadCookie (CookieName) {
            var CookieString = document.cookie;
            var CookieSet = CookieString.split (';');
            var SetSize = CookieSet.length;
            var CookiePieces
            var ReturnValue = "";
            var x = 0;
            for (x = 0; ((x < SetSize) && (ReturnValue == "")); x++) {
                CookiePieces = CookieSet[x].split ('=');
                if (CookiePieces[0].substring (0,1) == ' ') {
                    CookiePieces[0] = CookiePieces[0].substring (1, CookiePieces[0].length);
                }
                if (CookiePieces[0] == CookieName) {
                    ReturnValue = CookiePieces[1];
                }
            }
            return unescape( ReturnValue );
        }

        function ReadCookie (cookieName) {
            var cookieValue = document.cookie;
            var cookieStartsAt = cookieValue.indexOf(" "+cookieName+"=");
	    if (cookieStartsAt == -1)
		{ cookieStartsAt = cookieValue.indexOf(cookieName+"=")}
	    if (cookieStartsAt == -1)
		{ cookieValue = "" }
	      else
                { cookieStartsAt = cookieValue.indexOf("=",cookieStartsAt)+1;
                  var cookieEndsAt = cookieValue.indexOf(";",cookieStartsAt);  
		  if (cookieEndsAt == -1) {cookieEndsAt = cookieValue.length}
		  cookieValue = unescape(cookieValue.substring(cookieStartsAt,cookieEndsAt));
		}	
          return cookieValue;

        }
function setCookie( key, value )
  {
  WriteCookie( key, value, 1000 * 60 * 60 * 24 * 31 );
  }

function getCookie( key, dflt )
  {
  var reslt = ReadCookie( key );
  if (reslt != "undefined" && reslt != "" )
    return reslt;
  else
    return dflt;
  }

function doStart(sa)
  {var w = (screen.width*0.8);
  z = getCookie( "tabw", w );
  sa.style.width = z;
  }



function inc(sa)
	{
	x = sa.style.width;
	y = parseInt( x.substring( 0, x.length-2 ) );
	y += 50;
	sa.style.width = y;
  setCookie( "tabw", y );
	}

function dec(sa)
	{
	x = sa.style.width;
	y = parseInt( x.substring( 0, x.length-2 ) );
	y -= 50;
	sa.style.width = y;
  setCookie( "tabw", y );
	}





 function chkurl(chp)
  {
   var s=top.location.href;
   var i;
  i=s.lastIndexOf('/')+1;
  if (i>0)
  {
    if (s.substring(i,i+10)!='index.html') 
      {if (chp) {par=chp} else{par=s.substring(i)};
       s=s.substring(0,i)+'index.html?'+par;
      top.location.replace(s);
      }
  }
 } 
