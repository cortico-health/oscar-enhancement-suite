// ==UserScript==
// @name     Cortico
// @version  2.1
// @grant    none
// ==/UserScript==


// Dayjs
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs=e()}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});

// PubSub
var pubsub = {};
 
(function(myObject) {
 
    // Storage for topics that can be broadcast
    // or listened to
    var topics = {};
 
    // A topic identifier
    var subUid = -1;
 
    // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along
    myObject.publish = function( topic, args ) {
 
        if ( !topics[topic] ) {
            return false;
        }
 
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
 
        while (len--) {
            subscribers[len].func( topic, args );
        }
 
        return this;
    };
 
    // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed
    myObject.subscribe = function( topic, func ) {
 
        if (!topics[topic]) {
            topics[topic] = [];
        }
 
        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
 
    // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription
    myObject.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));

// manually update this variable with the version in manifest.json
const version = 2.0
const init_cortico = function() {
  // create an element to indicate the library is loaded in the dom, and to contain fixed menus/elements.
  const anchor = document.createElement("div");
  anchor.id = "cortico_anchor";
  document.body.appendChild(anchor);

  const route = "" + window.location;
  const oscar_scripts = Array.from(
    document.getElementsByTagName("script")
  ).filter(function (s) {
    return (
      s.src.indexOf("/Oscar.js") > 0 ||
      s.src.indexOf("/oscar/js/") > 0 ||
      s.src.indexOf("/appointment.js") > 0
    );
  });

  // do not run unless we're on an Oscar page.

  if (oscar_scripts.length === 0) {
    console.log("Cortico could not find any oscar script");
    return;
  }

  console.log("cortico plug-in initializing, version:", version);
  if (
    route.indexOf("/appointment/addappointment.jsp") > -1 ||
    route.indexOf("/appointment/appointmentcontrol.jsp") > -1
  ) {
    init_appointment_page();

    const statusOption = document.querySelector("select[name='status']");
    var statusValue = statusOption.options[statusOption.selectedIndex].text;
    console.log("echo", statusValue)

    var last_button = document.querySelector("#cortico").parentNode;
    last_button.parentNode.innerHTML +=
      "<button class='cortico-btn' id='recall-btn' style='color:white; background-color:blue'>Recall email</button>";

    const cortico_recall_button = document.getElementById("recall-btn")

    function update_recall_button_visibility() {
      statusValue = statusOption.options[statusOption.selectedIndex].text;
      console.log("statusValue", statusValue.toLowerCase())

      cortico_recall_button.style.visibility =
      statusValue.toLowerCase() === "todo" ? "visible" : "hidden";
    }

    update_recall_button_visibility();

    statusOption.addEventListener("change", update_recall_button_visibility);

  } else if (route.indexOf("/provider/providercontrol.jsp") > -1) {
    init_schedule();
    dragAndDrop();
    addCorticoLogo();
    addMenu();
    addVideoCall();
    if (!isJuno()) {
      plusSignFromCache();
    }

    const isMarkham = window.location.href.includes('mmfcc')
    if (isMarkham) {
      plusSignFromCache();
    }

  }
  
  init_styles()
}

function isJuno() {
  const isJunoHost = window.location.hostname.indexOf(".junoemr.com") !== -1;
  const containsJunoLink =
    document.querySelectorAll("a#helpLink").length > 0 &&
    document
      .querySelectorAll("a#helpLink")[0]
      .outerHTML.indexOf("help.junoemr.com") !== -1;

  return isJunoHost || containsJunoLink;

}

const init_schedule = function () {
  // button for schedule page.
  /*const weekview_button = document.querySelector('[name="weekview"]');
  const cortico_button = document.createElement('button')
  cortico_button.innerText = "cortico"
  weekview_button.parentNode.insertBefore(cortico_button, weekview_button)*/



  // sticky headers for doctor schedule page
  const updateDoctorHeadings = debounce(function (e) {
    const ifv = document.querySelectorAll(
      "tbody>tr:first-child>td.infirmaryView"
    );
    if (window.scrollY > 50) {
      ifv.forEach(function (view) {
        view.style.position = "sticky";
        view.style.marginLeft = "unset";

        if (isJuno()) {
          // for juno, position the sticky doctor headers under the sticky top menu
          view.style.top = "18px";
        }
      });
    } else {
      ifv.forEach(function (view) {
        view.style.position = "static";
      });
    }
  }, 50);
  // disable sticky headers on WELL Oscar (KAI or Oscar Go), because they have
  // implemented their own sticky headers
  const isOscarGoHost = window.location.hostname.indexOf(".oscargo.com") !== -1;
  const isKaiOscarHost =
    window.location.hostname.indexOf(".kai-oscar.com") !== -1;
  // some clinics use a local network IP address to access oscar inside the clinic
  // in these cases, we can't rely on the hostname but have to look for specific elements instead
  // this may be less reliable, so we still prefer the hostname check
  const containsKaiBar = document.querySelectorAll("div.KaiBar").length !== 0;
  const containsOscarGoOceanScript =
    document.querySelectorAll('script[src="/oscar/js/custom/ocean/global.js"]')
      .length !== 0;
  if (
    !(
      isOscarGoHost ||
      isKaiOscarHost ||
      containsKaiBar ||
      containsOscarGoOceanScript
    )
  ) {
    updateDoctorHeadings();
    window.addEventListener("scroll", updateDoctorHeadings);
  } else {
    console.log(
      "Oscar Go or KAI Oscar detected; disabling sticky headers for doctor names"
    );
  }

  // cancel the <meta http-equiv="refresh" content="60;">
  // note: this is currently set to 30 seconds, which is enough time (the refresh occurs
  // at 60s). Calling window.stop() too early breaks the Oscar menus ("Inbox" "Msg" "Consultations"
  // "Tickler") that are loaded by ajax
  window.setTimeout(window.stop, 5000);

  // refresh when idle for 1 minute.
  let last_interaction = new Date();
  window.addEventListener('mousemove', e => {
    last_interaction = new Date()
  });
  const reloadHandler = setInterval(function(){
    const now = new Date();
    if (now.valueOf() - last_interaction.valueOf() > 60000) {
      console.log('before clearInterval')
      clearInterval(reloadHandler);
      if (window.checkAllEligibilityRunning !== true) {
        window.location.reload();
      }
    }
  }, 1000)
}

const init_appointment_page = function () {
  // resources dropdown
  var resources_field = document.querySelector(
    'input[type="text"][name="resources"]'
  );
  const cortico_media = ["phone", "clinic", "virtual", "", "quiet"];

  if (cortico_media.indexOf(resources_field.value) > -1) {
    const parent = resources_field.parentNode;

    let html = '<select name="resources">';
    cortico_media.forEach(function (value) {
      html +=
        "<option " +
        (value == resources_field.value ? "selected " : "") +
        'value="' +
        value +
        '">' +
        (value || "n/a") +
        "</option>";
    });
    html += "</select>";

    parent.innerHTML = html;
    resources_field = document.querySelector('[name="resources"]');
  }

  // telehealth button
  var last_button = document.querySelector("#printReceiptButton").parentNode;
  last_button.parentNode.innerHTML +=
    "<button class='cortico-btn' id='cortico' style='color:white; background-color:blue'>Cortico Video Call &phone;</button>";

  var cortico_button = document.getElementById("cortico");
  // open a windows to the cortico video page for this appointment.
  cortico_button.addEventListener("click", function (e) {
    e.preventDefault(); // don't submit the form.

    if (!localStorage["clinicname"]) {
      var clinicname = prompt("what is your Cortico website URL?");
      if (clinicname.indexOf(".cortico.ca") > -1) {
        clinicname = clinicname.substr(0, clinicname.indexOf(".cortico.ca"));
        clinicname = clinicname.replace(/https?:\/\//, "");
      }
      localStorage["clinicname"] = clinicname;
    }
    appt_no = getQueryStringValue("appointment_no");
    if (!appt_no) {
      return alert(
        "Please save your appointment first, before starting a video call."
      );
    }
    window.open(
      "https://" +
        localStorage["clinicname"] +
        ".cortico.ca/video-preview/" +
        appt_no
    );
    return false;
  });

  function update_video_button_visibility() {
    cortico_button.style.visibility =
      resources_field.value === "virtual" ? "visible" : "hidden";
  }
  update_video_button_visibility();
  resources_field.addEventListener("change", update_video_button_visibility);
};

const init_styles = function () {
  addGlobalStyle(
    `.cortico-btn {
   -webkit-appearance:none;
   -moz-appearance:none;
   appearance:none;
   background:#4a527d;
   border:.05rem solid #2e3769;
   border-radius:.2rem;
   color:#fff;
   cursor:pointer;
   display:inline-block;
   font-family:Montserrat,sans-serif;
   font-size:.8rem;
   font-weight:600;
   height:30px;
   line-height:1.2rem;
   outline:0;
   padding:0 1rem;
   text-align:center;
   text-decoration:none;
   transition:background .2s,border .2s,box-shadow .2s,color .2s;
   -webkit-user-select:none;
   -moz-user-select:none;
   -ms-user-select:none;
   user-select:none;
   vertical-align:middle;
   white-space:nowrap
  }
  .cortico-btn:focus {
   box-shadow:0 0 0 .1rem rgba(92,112,255,.2)
  }
  .cortico-btn:focus,
  .cortico-btn:hover {
   background:#2e3769;
   border-color:#2e3769;
   text-decoration:none
  }
  .cortico-btn.active,
  .cortico-btn:active {
   background:#4a527d;
   border-color:#262e57;
   color:#fff;
   text-decoration:none
  }
	.infirmaryView:first-child {
	 /*position:fixed;*/
   margin-left: 57px;
   padding: 1px 15px;
	 top: 0;
	}
	`
  );
};

if (!document.getElementById("cortico_anchor")) {
  // avoid duplicating the extension/script.
  init_cortico();
} else {
  console.warn("Cortico plug-in installed more than once. A");
}

// -- utilities

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName("head")[0];
  if (!head) {
    return;
  }
  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}

function addCorticoLogo() {
  var menu = document.querySelector("#firstMenu #navList");
  var listitem = document.createElement("li");
  listitem.innerHTML =
    '<a href="http://cortico.ca"><img src="https://cortico.ca/images/favicon/32x32.png" height="15" style="vertical-align: middle;" /></a>';
  menu.appendChild(listitem);
}

function styleSheetFactory(namespace) {
  if (!window[namespace]) {
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);
    window[namespace] = styleSheet;
    return styleSheet;
  }
  return window[namespace];
}

function createSideBar() {
  if (window.corticoSidebar) {
    return window.corticoSidebar;
  }

  var sidebar = document.createElement("div");
  window.corticoSidebar = sidebar;
  sidebar.classList.add("cortico-sidebar");

  sidebar.innerHTML =
    '<a href="https://cortico.ca"><img src="https://cortico.ca/_nuxt/img/footer-logo.5fde08e.svg"  alt="Cortico" style="margin-bottom: 25px;" /></a>';

  var sidebarClose = document.createElement("div");
  sidebarClose.classList.add("cortico-sidebar-close");
  sidebarClose.textContent = "Close";
  sidebarClose.style.cursor = "pointer";
  sidebarClose.addEventListener("click", function () {
    sidebar.classList.remove("cortico-sidebar-show");
  });
  sidebar.appendChild(sidebarClose);

  var newUiOption = getNewUIOption();
  sidebar.appendChild(newUiOption);

  sidebar.appendChild(getCorticoUrlOption());
  sidebar.appendChild(getEligStatus());
  sidebar.appendChild(getEligButton());
  sidebar.appendChild(getEligFailed());
  
  

  var styleSheet = styleSheetFactory("cortico_sidebar");
  var styles = "";
  styles +=
    ".cortico-sidebar { position: fixed; top: 0; right: 0; bottom: 0; width: 300px; background-color: white; height: 100%; z-index: 50; }";
  styles +=
    ".cortico-sidebar { transition: transform 0.25s ease-in; transform: translateX(300px); }";
  styles +=
    ".cortico-sidebar { display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 1px 5px 5px rgb(0, 0, 0); }";
  styles += ".cortico-sidebar-show { transform: translateX(0); }";
  styles +=
    ".cortico-sidebar-close { position: absolute; top: 10px; right: 10px; z-index: 500; }";
  styleSheet.innerText = styles;

  return sidebar;
}

function addMenu(container) {
  var navigation = document.querySelector("#firstMenu #navList");
  var menu = document.createElement("li");
  menu.textContent = "Cortico";
  menu.style.color = "rgb(75, 84, 246)";
  menu.style.cursor = "pointer";

  var sidebar = createSideBar();
  menu.addEventListener("click", function () {
    sidebar.classList.toggle("cortico-sidebar-show");
  });

  document.body.prepend(sidebar);
  navigation.appendChild(menu);
}

function getEligStatus() {
  var container = document.createElement("div");
  container.style.textAlign = 'center'
  pubsub.subscribe('check-eligibility', (topic, data) => {
    const progress = '(' + data.current + "/" + data.total + ')'
    
    if (data.complete === true) {
      container.innerHTML = 'Check Complete!'
     
    } else {
      const header = 'Currenty Processing' + progress + ':'
      const name = (data.info.split('\n'))[1]
      container.innerHTML = "<p>" + header + "<br/>" + name + "</p>"
    }

  })
  return container;
}

function getEligFailed() {
	var container = document.createElement("div");
  container.style.textAlign = 'center'
  pubsub.subscribe('check-eligibility-failed', (topic, data) => {
    container.innerHTML = '<p style="margin-top: 10px;">Failed to Verify:</p>';
    
    const list = getFailedList(data)
  	container.appendChild(list)
  })
  
  return container;
}

function getFailedList(data) {
    const failed = JSON.parse(data)
    let listItems = '';
    failed.map(f => {
    	listItems += `<li>Demographic No: ${f.demographic_no}</li>`
    })
    const list = document.createElement("ul");
    list.innerHTML = listItems
  	return list
}

function getNewUIOption() {
  var container = document.createElement("div");

  var input = document.createElement("input");
  input.setAttribute("id", "corticoui");
  input.setAttribute("type", "checkbox");
  input.style.verticalAlign = "middle";
  container.appendChild(input);

  input.addEventListener("change", function () {
    if (this.checked) {
      localStorage.setItem("newui", "true");
      addNewUI();
    } else {
      localStorage.setItem("newui", "false");
      removeNewUI();
    }
  });

  if (localStorage.getItem("newui") === "true") {
    input.checked = true;
    addNewUI();
  }

  var label = document.createElement("label");
  label.setAttribute("for", "corticoui");
  label.textContent = "Activate New UI";
  label.style.marginLeft = "5px";
  container.appendChild(label);

  return container;
}

function getCorticoUrlOption() {
  var container = document.createElement("div");
  container.style.width = '100%';
  container.style.padding = "0px 10px";
  container.style.boxSizing = 'border-box';
  var inputContainer = document.createElement("div");
  inputContainer.style.display = 'flex'
  inputContainer.style.alignItems = 'center'
  inputContainer.style.justifyContent = 'center';
  
  var prefix = document.createElement("span")
  prefix.textContent = 'https://'
  var suffix = document.createElement("span")
  suffix.textContent = '.cortico.ca'
  var input = document.createElement("input");
  input.setAttribute("id", "cortico-url");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Clinic Name");
  input.style.fontSize = "16px";
  input.style.padding = "5px 5px";
  input.style.margin = "0px 10px";
  input.style.width = "35%";
  input.style.backgroundColor = "transparent";
  input.style.border = "1px solid rgb(75, 84, 246)";
  
  inputContainer.appendChild(prefix);
  inputContainer.appendChild(input);
  inputContainer.appendChild(suffix);

  if (localStorage.getItem("clinicname")) {
    input.value = localStorage.getItem("clinicname");
  }

  var label = document.createElement("label");
  label.setAttribute("for", "cortico-url");
  label.textContent = "Your cortico clinic name";
  label.style.display = "block";
  label.style.marginTop = "30px";
  label.style.marginBottom = "10px";
  label.style.textAlign = 'center';

  var button = document.createElement("button");
  button.textContent = "Save";
  button.style.width = "100%";
  button.style.display = "inline-block";
  button.style.margin = "10px auto";

  container.appendChild(label);
  container.appendChild(inputContainer);
  container.appendChild(button);

  button.addEventListener("click", function () {
    
    if (input.value) {
      const corticoUrl = input.value + '.cortico.ca';
      localStorage.setItem("clinicname", input.value);
      alert("Your clinic name has changed");
    }
  });
  return container;
}

function getEligButton() {
	var button = document.createElement("button");
  button.textContent = "Check Eligiblity"
  button.addEventListener('click', checkAllEligibility)
  return button;
}

function addNewUI() {
  var styleSheet = styleSheetFactory("newUIStyleSheet");
  var styles = "#providerSchedule td { padding: 2px; }";
  styles +=
    ".adhour { text-shadow: 1px 1px 1px rgba(0,0,0,1); font-size: 14px; }";
  styles += ".appt { box-shadow: 1px 3px 3px rgba(0,0,0,0.1); }";
  styles += "#providerSchedule { border: 0; }";
  styles +=
    "#providerSchedule td { border: 0; border-bottom: 1px solid rgba(0,0,0,0.2); font-size: 14px; }";
  styles +=
    "#providerSchedule td.noGrid { border: 0; border-bottom: 1px solid rgba(0,0,0,0.2); font-size: 14px; }";
  styles +=
    "#firstTable { background-color: #efeef3; } #firstMenu a { font-weight: 400; color: #171458; font-size: 14px; }"
  styles +=
    "#ivoryBar td { background-color: white; padding: 5px; }"
  styles +=
    ".infirmaryView { background-color: #efeef3; }"
  styles +=
    "#ivoryBar input, #ivoryBar select, .infirmaryView input, .infirmaryView .ds-btn { background-color: #171458 !important; color: white !important; font-weight: bold !important; padding: 2px;  }"
  styles +=
    "#ivoryBar input:placeholder { font-weight: bold; color: white; }"
  styleSheet.innerText = styles;
}

function removeNewUI() {
  var styleSheet = styleSheetFactory("newUIStyleSheet");
  var styles = "";
  styleSheet.innerText = styles;
}

/* Drag and Drop Feature Begin */

function appointmentRowDragStart(ev) {
  if (ev.target.matches("td.appt")) {
    window.dragSelectedTarget = ev.target;
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
  }
}

function isValidDragItem() {
  return !!window.dragSelectedTarget;
}

function isSameDay(startDate, endDate) {
  return startDate.isSame(endDate, "day");
}

function dragAndDrop() {
  if (document.readyState !== 'loading') {
    var appointmentRows = document.querySelectorAll("td.appt");
    appointmentRows.forEach(function (node) {
      node.setAttribute("draggable", true);
      node.addEventListener("dragstart", appointmentRowDragStart);
    });
  } else {
    window.addEventListener("DOMContentLoaded", () => {
      var appointmentRows = document.querySelectorAll("td.appt");
      appointmentRows.forEach(function (node) {
        node.setAttribute("draggable", true);
        node.addEventListener("dragstart", appointmentRowDragStart);
      });
    });
  }


  function dragover_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }

    ev.preventDefault();
    ev.dataTransfer.dropEffect = "link";
    var target = ev.target;

    var isAppt = target.classList.contains("appt")
    var isEmpty = target.classList.contains("noGrid")
    if (isAppt || isEmpty) {
       target.style.backgroundColor = "yellow";
       window.dragTarget = target;
    }
   
  }

  function dragleave_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }
    if (!dragTarget) {
    	return
    }
    //Comment because unstable, this will undo highlight multiple rows in the table
    //target.setAttribute('rowspan', 1)
    handleColors(dragTarget);
  }
  
 	function handleColors(target) {
		//Appropriately reset colors on hover and dragend, dragover
    var isAppt = target.classList.contains("appt")
    var isEmpty = target.classList.contains("noGrid")
    if (isAppt) {
      target.style.backgroundColor = "#FDFEC7";
    }
    else if (isEmpty) {
      target.style.backgroundColor = "#486ebd";
    }
  
  }

  async function drop_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }
    
    handleColors(ev.target);
    
    // Sibling table cell has the start time
    const newStartTime = ev.target.parentElement.firstElementChild.firstElementChild.textContent.trim();

    // Get the appointment edit link, we're going to fetch this page in memory later
    const apptLink = getAppointmentLink(dragSelectedTarget);
    if (!apptLink) {
      alert("No Valid Appointment Link Found");
      return false;
    }

    apptLinkText = apptLink.attributes.onclick.textContent;

    //Get the URL and Take out the "../" in front
    const apptUrl = extractApptUrl(apptLinkText);

    //Get our base url with the provider
    const origin = getOrigin();
    const provider = getProvider();
    
    let result = await appointmentEditRequest(origin, provider, apptUrl);
    let text = await result.text();
    
    //Make an element in memory, and we're gonna place the contents of the fetched page here, so we can grab the formdata
    const temp = document.createElement("div");
    temp.style.display = "none";
    temp.innerHTML = text;
    
    const formData = new FormData(temp.querySelector("FORM"));
    const originalStartTime = formData.get("start_time");
    const apptDate = formData.get("appointment_date");
    const duration = formData.get("duration") - 1;
    
    const newEndTime = dayjs(apptDate + "T" + newStartTime).add(duration, "minute").format("HH:mm");
    
    // We check to see if the drag and drop overlaps to the next day, if it does we prevent.
    const _newStartTime = dayjs(apptDate + "T" + newStartTime);
    const _newEndTime = dayjs(apptDate + "T" + newStartTime).add(duration, "minute");
    
    if (!isSameDay(_newStartTime, _newEndTime)) {
      alert("Cannot overlap to the next day");
      return;
    }
    
    const apptDoctor = formData.get("provider_no");
    const targetDoctor = getProviderNoFromTd(ev.target);
    const isSameDoctor = apptDoctor === targetDoctor;
    const doctor = targetDoctor;
    
    formData.set("start_time", newStartTime);
    formData.set("end_time", newEndTime);
    
    if (isSameDoctor) {
      result = await updateAppointment(origin, provider, formData)
      text = await result.text();
      console.log(text)
      const parent = ev.target.parentElement
      parent.insertBefore(dragSelectedTarget, ev.target)
      
      updateAppointmentAnchorLinks(dragSelectedTarget, 
          { start_time: originalStartTime, provider_no: apptDoctor },
          { start_time: newStartTime, provider_no: targetDoctor })
      
    } else {
      result = await cutAppointment(origin, provider, formData)
      formData.set("provider_no", targetDoctor)
      
      handleAddData(formData)
      const data = new URLSearchParams(formData);
      result = await addAppointment(origin, provider, data);

      
      window.location.reload();
    }
  }

  // Maybe better to use event delegation in the future
  var emptyRows = document.querySelectorAll("td.noGrid");
  emptyRows.forEach(function (node) {
    node.addEventListener("dragover", dragover_handler);
    node.addEventListener("dragleave", dragleave_handler);
    node.addEventListener("drop", drop_handler);
  });
  
  var appointmentRows = document.querySelectorAll("td.appt");
  appointmentRows.forEach(function (node) {
    node.addEventListener("dragover", dragover_handler);
    node.addEventListener("dragleave", dragleave_handler);
    node.addEventListener("drop", drop_handler);
  });
}

/* Drag and Drop Feature end */

function addVideoCall() {
  /* To be completed
  
	var nodes = document.querySelectorAll('td.appt')
  nodes.forEach(function(node) {
      var anchor = document.createElement('a')
      anchor.textContent = 'V'
      anchor.setAttribute('href', '#')
   
      var divider = document.createElement('span')
      divider.textContent = ' | '
       
      node.appendChild(divider)
      node.appendChild(anchor)
  })
  */
}

function getOrigin() {
  return window.location.origin;
}

function getProvider() {
  return window.location.pathname.split("/")[1];
}

function addToFailures(metadata) {
	const _cache = getFailureCache()
  const cache = JSON.parse(_cache) || []
  cache.push(metadata)
  localStorage.setItem("failureCache", JSON.stringify(cache))
}

function clearFailureCache() {
	return localStorage.removeItem('failureCache')
}

function getFailureCache() {
	return localStorage.getItem('failureCache')
}


function addToCache(demographic_no, _verified) {
  const verified = _verified || false
  const _cache = localStorage.getItem("checkCache")
  const _today = dayjs().format("YYYY-MM-DD")
  const cache = JSON.parse(_cache) || {}
  cache[demographic_no] = {
    date: _today,
    verified: verified
  }

  localStorage.setItem("checkCache", JSON.stringify(cache))
}

function filterAppointments(appointments) {
  const _cache = localStorage.getItem("checkCache")
  const _today = dayjs().format("YYYY-MM-DD")
  
  if (!_cache) {
  	return appointments
  }
  
  const cache = JSON.parse(_cache)
  return appointments.filter(appt => {
 		const demographic_no = appt.demographic_no
    
    // Check appointment if it doesn't exist in cache
    
    if (!cache.hasOwnProperty(demographic_no)) {
    	return true
    }
    
    const cachedDate = cache[demographic_no].date
    // Check appointment if it exists in cache, but expired
    if (isDateExpired(dayjs(cachedDate), _today, 5)) {
    	return true
    }

    return false
  })
}

function isDateExpired(past, now, days) {
  const diff = past.diff(now, 'day')
  return Math.abs(diff) > days
}

async function checkAllEligibility() {

  //localStorage.removeItem("checkCache")
  
  if (window.checkAllEligibilityRunning === true) {
  	return alert("Check Already Running")
  }
  
  clearFailureCache();
  var nodes = document.querySelectorAll("td.appt");
  var appointmentInfo = getAppointmentInfo(nodes)
  appointmentInfo = filterAppointments(appointmentInfo)
  
  var length = appointmentInfo.length;
  if (appointmentInfo.length === 0) {
  	alert("No Appointments to Check")
  }
  var error = false;
  
  
  window.checkAllEligibilityRunning = true;
  try {
    for(let i = 0; i < length; i++) {
      
      const temp = Object.assign({}, appointmentInfo[i])
      temp.total = length;
      temp.current = i + 1;
      pubsub.publish('check-eligibility', temp)

      const demographic_no = appointmentInfo[i].demographic_no
      const result = await checkEligiblity(demographic_no, getOrigin(), getProvider());
      const text = await result.text();
      const lowerCaseText = text.toLowerCase();
      
      if (lowerCaseText.includes('error in teleplan connection')) {
        alert("Automatic Eligiblity Check Aborted. \n" + text)
        error = true
        break;
      }
      
      
      let verified = false;
      
      if (
        lowerCaseText.includes("success") ||
      	lowerCaseText.includes("health card passed validation")
      ) {
      	plusSignAppointments(demographic_no);
        verified = true;
      } else {
        appointmentInfo[i]['reason'] = text
        addToFailures(appointmentInfo[i])
        pubsub.publish('check-eligibility-failed', getFailureCache())
      }
      
      addToCache(demographic_no, verified);
      
      
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 5000)
      })

    }
  } catch(err) {
  	alert(err)
  } finally {
    window.checkAllEligibilityRunning = false;
    pubsub.publish('check-eligibility', {
    	complete: true,
      total: length,
      error
    })
    
  }
  
  
}

function checkEligiblity(demographicNo, origin, provider) {
  var url =
    origin +
    "/" +
    provider +
    "/" +
    "billing/CA/BC/ManageTeleplan.do?demographic=" +
    demographicNo +
    "&method=checkElig";
  
  
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "text/javascript, text/html, application/xml, text/xml, */*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
  	})
}

function getAppointmentLink(apptTdElement) {
  var apptLink = apptTdElement.querySelector("a.apptLink");

  if (apptLink) {
    return apptLink;
  }

  // If doctor isn't set, the anchor element has no class called apptLink, so we traverse through all anchor elements
  if (!apptLink) {
    var anchors = apptTdElement.querySelectorAll("a");
    anchors.forEach((anchor) => {
      var temp = anchor.attributes.onclick.nodeValue;
      if (
        temp.includes("popupPage") &&
        temp.includes("appointmentcontrol.jsp")
      ) {
        if (!apptLink) {
          apptLink = anchor;
        }
      }
    });
  }

  return apptLink;
}

function getDemographicNo(apptUrl) {
  var searchParams = new URLSearchParams(apptUrl);
  return searchParams.get("demographic_no");
}

function getAppointmentInfo(apptNodes) {
  var appointmentInfo = []
  apptNodes.forEach(function (node) {
    var temp = {};
    
    
    var apptLink = getAppointmentLink(node);
    // Already verified
    if (apptLink.textContent.includes("+")) {
    	return
    }
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);
    var demographicNo = getDemographicNo(apptUrl);
    
    temp.demographic_no = demographicNo;
    temp.info = apptLink.attributes.title.nodeValue;
    appointmentInfo.push(temp)
  })
  
  
  //Remove duplicates and return
  return appointmentInfo.filter((v,i,a)=>a.findIndex(t=>(t.demographic_no === v.demographic_no))===i)

}

function extractApptUrl(s) {
  return s.match(/'([^']+)'/)[1].substring(2);
}

function appointmentEditRequest(origin, provider, apptUrl) {
	return fetch(origin + "/" + provider + apptUrl);
}

function handleAddData(data) {
	if (!isJuno()) {
    return data
  }
  
  data.set('appointmentNo', data.get('appointment_no'))
  data.delete('appointment_no');
  data.set('dboperation', 'search_titlename')
  data.set('sendBookingNotification', "false")
  data.set('outofdomain', "true")
  data.set('operationType', 'CUT')
  data.set('fromAppt', '1')
}

function addAppointment(origin, provider, data) {
	data.set("displaymode", "Add Appointment");
  const _data = new URLSearchParams(data);
  return appointmentRequest(origin, provider, _data)
}
function cutAppointment(origin, provider, data) {
	data.set("displaymode", "Cut");
  const _data = new URLSearchParams(data);
  return appointmentRequest(origin, provider, _data)
}

function updateAppointment(origin, provider, data) {
	data.set("displaymode", "Update Appt");
  const _data = new URLSearchParams(data);
  return appointmentRequest(origin, provider, _data)
}

function appointmentRequest(origin, provider, data) {
	return fetch(
    origin + "/" + provider + "/appointment/appointmentcontrol.jsp",
    {
      method: "POST",
      body: data,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
}

// This TD Element needs to be an appointment or empty slot.
function getProviderNoFromTd(tdElement) {
  
  //oscar osp
  var dsButton = tdElement.closest("table").closest("tbody").querySelector(".ds-btn")
  if (dsButton) {
    return dsButton.dataset.provider_no
  }
  
  //juno
  var dsInput = tdElement.closest("table").closest("tbody").querySelector('input[name="searchview"]')
  if (dsInput) {
  	return dsInput.attributes.onclick.nodeValue.match(/'([^']+)'/)[1]
  }
  
  return null
  
}

function updateAppointmentAnchorLinks(apptTdElement, oldOptions, newOptions) {
	apptTdElement.querySelectorAll("a").forEach((node) => {
  	var linkAttribute = node.attributes.onclick || node.attributes.href
    var linkValue = linkAttribute.nodeValue	


    var { start_time: oldStartTime, provider_no: oldProviderNo } = oldOptions;
    var { start_time: newStartTime, provider_no: newProviderNo } = newOptions;
    
    linkValue = linkValue.replace("start_time=" + oldStartTime, "start_time=" + newStartTime);
    linkValue = linkValue.replace("startTime=" + oldStartTime, "startTime=" + newStartTime);
    
    /*
    linkValue = linkValue.replace("providerNo=" + oldProviderNo, "providerNo=" + newProviderNo);
    linkValue = linkValue.replace("apptProvider_no=" + oldProviderNo, "apptProvider_no=" + newProviderNo);
    linkValue = linkValue.replace("provider_no=" + oldProviderNo, "provider_no=" + newProviderNo);
    */
        
    linkAttribute.nodeValue = linkValue;
  })
}



function getAppointments(demographic_no) {
  var appointments = []
  
  const apptNodes = document.querySelectorAll("td.appt");
  
  apptNodes.forEach(function (node) {
    var apptLink = getAppointmentLink(node);
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);
    var _demographic_no = getDemographicNo(apptUrl);
    
    if ( demographic_no === _demographic_no ) {
    	appointments.push(node)
    }
  }) 
  return appointments
}

function addVerifiedMark(mark, node) {
  if (node && mark) {
    node.innerHTML = mark + node.innerHTML
    return node
  }
  
  return null
}

function plusSignAppointments(demographic_no) {
  const appointments = getAppointments(demographic_no)
  appointments.map((appt) => {
    var apptLink = getAppointmentLink(appt);
  	addVerifiedMark(" + &nbsp;", apptLink)
  })
}

function plusSignFromCache() {

	const _cache = localStorage.getItem("checkCache")
  if (!_cache) return
  const cache = JSON.parse(_cache)
  console.log("Cacheeee", cache)
  
  const _today = dayjs().format("YYYY-MM-DD")
  
  for (let key in cache) {

    if (cache[key].verified === true) {
      const cachedDate = cache[key].date
      // Check appointment if it exists in cache, but expired
      if (isDateExpired(dayjs(cachedDate), _today, 5)) {
        continue
      }
      plusSignAppointments(key)
    }
  }
}


