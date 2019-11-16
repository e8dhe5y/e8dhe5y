/////  js for www, store  //////////////////
// 
// 
// 
////
// 

// 
// ====== vars ============
if (typeof zdsite == 'undefined') {
	zdsite = "zdhome";
}
thsBlg_amz = {
	// no empties!
	'com': 'zdn-20',
	'ca': 'dzng-20',
	'co.uk': 'dzng-21',
	'de': 'dnzg-21',
	'fr': 'dnzgfr04-21',
	'it': 'dnzgit-21',
	'es': 'dnzges-21'
};
thsBlg_amz_defKW = "art";
thsBlg_epn = "5337819815";
thsBlg_zzl = "238115903514203736";
thsBlg_dyn_catcher = "c.zedign.com/c/";
thsBlg_img_cdn = "c.zedign.com/s/";
thsBlg_gasJsnPrx = "AKfycbwu10Uml2V4z_UuV8RhWb2I6JVc0QAylXsh7VsojIHCmvO6Pwc";
thsBlg_ipsapi = '8c10c14fdd50fcaef4043f0982c95fb1'; // ipstack
// 
if (typeof bnndQry === 'undefined') {
	bnndQry = 'no';
}
//
// 
//// ----------<pagelevelIfNotHardcoded>---------- //
//// v2
function pagelevelIfNotHardcoded() {
	try {
		var plTag = document.getElementsByTagName("head")[0].getElementsByTagName("script") || 0;
		for (var i = 0; i < plTag.length; i++) {
			if (plTag[i].textContent.match(/enable_page_level_ads/im)) {
				return;
			}
		}
		(adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: thsBlg_as,
			enable_page_level_ads: true
		});
	} catch (e) {}
}
if (bnndQry != "yes") { //////////// if bnndQry  ///////////
	// pagelevelIfNotHardcoded();
}
////
//// ----------</pagelevelIfNotHardcoded>---------- //
////
// 
// ldng_16_3x for asad style
document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", '<style> .ldng_16_3x {display:block;background-image:url(//' + thsBlg_img_cdn + 'ldng_16_3x.gif);background-repeat:no-repeat;background-position:center center;vertical-align: middle;} </style>');
// 
// 
// 
// ========== FUNCTIONS ==========
function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function ga_evCatVal(evCat, evVal) {
	// v2
	// console.log(evCat + ' ' + evVal); // KEEP!
	try {
		ga('send', 'event', evCat, evVal, {
			'nonInteraction': 1
		});
	} catch (a) {
		//
	}
}

function tablify(html_array, rows, cols, bord) {
	// v2 -
	// html_array e.g. ['<a><h3></h3><img/></a>', ''<a><h3></h3><img/></a>'']
	// rows,cols,bord='yes'
	var d = (bord == "yes") ? 'border:solid 1px #ccc!important;padding:0.5%!important;' : '';
	var a = '',
		b = '',
		c = '',
		counter = 0;
	a = '' +
		'<style type="text/css">' +
		'.axaffdtbl,.axaffdtbl a,.axaffdtbl img' +
		'{margin:0!important;background:#fff!important;box-shadow:none!important;border:none!important;}' +
		'.axaffdtbl {display:table;width:95%!important;border-collapse:collapse!important;}' +
		'.axaffdtbl_tr {display:table-row} ' +
		'.axaffdtbl_td {display:table-cell;vertical-align:top!important;' + d + '} ' +
		'.axaffdtbl a {text-decoration:none;display:block!important;width:100%!important;height:auto!important;}' +
		'.axaffdtbl img {width:100%!important;}' +
		'</style>' +
		'<span class="axaffdtbl">';
	for (i = 0; i < rows; i++) {
		b += '<span class="axaffdtbl_tr">';
		for (j = 0; j < cols; j++) {
			var item = html_array[counter] || ''; //TODO placeholder for empties
			b += '<span class="axaffdtbl_td">' + item + '</span>';
			counter++;
		}
		b += '</span>';
	}
	c = '</span>';
	return a + b + c;
}

function epnSmPl(divId, adID, kw = "", categ = "", divWidth = 300, divHeight = divWidth * 1.3) {
	// v1
	// categ : "1234 | 4567" or "" for default set at epn pg
	// kw or "" - do -
	//
	// prevent too tall
	divHeight = ($(window).width() >= $(window).height()) ? 300 : divHeight;
	if (document.getElementById(divId)) {
		try {
			$.getScript("https://epnt.ebay.com/static/epn-smart-tools.js").done(function() {
				// make width always container's or ATLEAST 300!
				var desiredWidth = $('#' + divId).width() - 12;
				var usableWidth = (desiredWidth < 300 || divWidth < 300) ? 300 : desiredWidth;
				// console.log ( usableWidth + ' ' + divHeight)
				$('#' + divId).html(
					'<div style="outline:solid 1px #aaa;max-width:99%;overflow:scroll;">' + // epn won't show if less than 300px! only way to crop for smaller widths
					'<div id="epncont_' + divId + '" style="width:' + usableWidth + 'px;height:' + divHeight + 'px;">' +
					'<ins data-keyword="' + kw + '" data-category-id="' + categ + '" class="epn-placement" data-config-id="' + adID + '"></ins>' +
					'</div> </div>' +
					'');
			});
		} catch (e) {
			console.log('no epnSmPl');
		}
	}
}

function epnFromLbls(keywords, div) {
	// v6 -  gasJsnPrx
	// insrts b4 lbls 4 epn rss itms using lbls txt
	// REQ jq,epnRs,tablify
	// 
	// 
	////////// --------- OPT 1  USING ebRS -------------
	function ebRS(tld) {
		epnRs(
			thsBlg_gasJsnPrx,
			tld,
			keywords,
			div,
			thsBlg_epn,
			'',
			4, // numItems
			2, // rows
			2, // cols
			'<a rel="nofollow" target="_blank" href="___LINK___"><b style="font-size:' + ((window.innerWidth > 360) ? '14' : '11') + 'px;line-height:1em;display:block;">___TITLE___</b><img src="___THUMBNAIL___"/></a>' // itemTemplate
		);
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		///// geoip chunk 1/4
		url: "https://freegeoip.app/json/" // new 11/18
		/////
		// url: "https://api.myip.com/" // new 7/19 NO CORS!
	}).done(function(json) {
		try {
			///// geoip chunk 2/4
			var strTLD = json.country_code || ''; // for freegeoip.app
			/////
			// var strTLD = json.cc || ''; // for myip.com
		} catch (e) {}
		ebRS(strTLD);
	}).fail(function(error) {
		ebRS('');
	});
	// 
	/////////// --------- OPT 2  USING epnSmpl (no geo req'd) -------------
	// 	epnSmPl(
	// 		div, // divId
	// 		"5cea98c1acd3bc52fe30de5b"  // SmPl adId
	// 	);
	////////////
}

function epnRs(gasID, country, kw, divId, cmpId, rand, numItems, rows, cols, itemTemplate) {
	// epn rss (GAS)
	// v8 
	// gasID = our GAS prx ID
	// country = 'CA' etc or '';
	// rand = "rand" to randomize, intNumItems = numOfitmes 
	// req tablify(), jquery 
	if (document.getElementById(divId)) {
		console.log(country);
		var div = document.getElementById(divId);
		var geo = (country == "") ? '' : '&availableTo=' + country;
		try {
			var prxJsn = '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F' + gasID + '/exec';
			//////////// json prx jp plugin by mcpher /////////////
			if (!jQuery().ajaxOrig) {
				jQuery.ajaxOrig = jQuery.ajax;
				jQuery.ajax = function(a, b) {
					function d(a) {
						a = encodeURI(a).replace(/&/g, "%26");
						return prxJsn + "?url=" + a + "&callback=?"
					}
					var c = "object" === typeof a ? a : b || {};
					c.url = c.url || ("string" === typeof a ? a : "");
					var c = jQuery.ajaxSetup({}, c),
						e = function(a, c) {
							var b = document.createElement("a");
							b.href = a;
							return c.crossOrigin && "http" == a.substr(0, 4).toLowerCase() && "localhost" != b.hostname && "127.0.0.1" != b.hostname && b.hostname != window.location.hostname
						}(c.url, c);
					c.proxy && 0 < c.proxy.length && (prxJsn = c.proxy, "object" === typeof a ?
						a.crossDomain = !0 : "object" === typeof b && (b.crossDomain = !0));
					e && ("object" === typeof a ? a.url && (a.url = d(a.url), a.charset && (a.url += "&charset=" + a.charset), a.dataType = "json") : "string" === typeof a && "object" === typeof b && (a = d(a), b.charset && (a += "&charset=" + b.charset), b.dataType = "json"));
					return jQuery.ajaxOrig.apply(this, arguments)
				};
				jQuery.ajax.prototype = new jQuery.ajaxOrig;
				jQuery.ajax.prototype.constructor = jQuery.ajax;
				//////////// json prx jp plugin by mcpher /////////////
			}
			//////////// /json prx jp plugin by mcpher /////////////
			$.ajax({
				crossOrigin: true,
				url: 'https://rest.ebay.com/epn/v1/find/item.rss?keyword=' + kw.replace(/\s+/igm, "%20") + '&sortOrder=BestMatch&programid=1&campaignid=' + cmpId + '&toolid=10039&listingType1=AuctionWithBIN&listingType2=FixedPrice&lgeo=1&condition1=New' + geo + '&feedType=rss',
				success: function(data) {
					var xml = $.parseXML(data.result.trim());
					// console.log(xml);
					var html = '  ';
					var items = [];
					var counter;
					$(xml).find("item").each(function(index) {
						// console.log(index);
						counter = index + 1;
						var el = $(this);
						// 
						var title = el.find("title").text();
						// console.log(title);
						var desc = el.find("description").text();
						var link = el.find("link").text().replace(/http\:/, 'https\:') || '';
						// 
						var thumbnail = desc.match(/src\=['"](htt[^"]*\.jpg)['"]/)[1].replace(/http\:/, 'https\:') || '';
						//// prevent items with no images:
						if (thumbnail.match(/04040_0\.jpg/)) {
							return true; // no continue for jq .each()!!
						}
						// 
						var item = itemTemplate.replace("___LINK___", link).replace("___TITLE___", title).replace("___THUMBNAIL___", thumbnail);
						// 
						items.push([item]);
					});
					if (rand == "rand") {
						shuffle(items);
					}
					html = tablify(items, rows, cols, 'yes');
					div.innerHTML = html;
				}
			});
		} catch (e) {
			console.log('no feed');
		}
	}
	///// helper func ////
	function shuffle(sourceArray) {
		for (var i = 0; i < sourceArray.length - 1; i++) {
			var j = i + Math.floor(Math.random() * (sourceArray.length - i));
			var temp = sourceArray[j];
			sourceArray[j] = sourceArray[i];
			sourceArray[i] = temp;
		}
		return sourceArray;
	}
	//////
}

function amzNtv_sync(ad_mode, design, search_phrase, tracking_id, linkid, title, default_category) {
	// v2
	// ad_mode: "search"||"";
	// design: "text_links"||"grid";
	// 
	var adMode = (ad_mode === '') ? 'search' : ad_mode;
	var adDesign = (design == 'text_links') ? 'amzn_assoc_rows = "4"; amzn_assoc_design = "text_links";' : 'amzn_assoc_enable_interest_ads = "true";';
	var adCategory = (default_category === '') ? 'All' : default_category;
	// 
	document.write(
		'<script>' +
		'amzn_assoc_ad_type = "smart";' + // *
		'amzn_assoc_marketplace = "amazon";' + // *
		'amzn_assoc_region = "US";' + // *
		'amzn_assoc_placement = "adunit0";' + // *
		'amzn_assoc_search_bar = "false";' + // *
		'amzn_assoc_tracking_id = "' + tracking_id + '";' + // *
		'amzn_assoc_linkid = "' + linkid + '";' + // *
		'amzn_assoc_title = "' + title + '";' + // *
		'amzn_assoc_ad_mode = "' + adMode + '";' +
		'amzn_assoc_default_category = "' + adCategory + '";' + // *
		'amzn_assoc_default_search_phrase = "' + search_phrase + '";' +
		// for text_links only
		adDesign +
		// for text_links only
		'</script>' +
		'<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' +
		'');
}

function amzFromLbls(keywords, div) {
	// v2
	// req iframeResizer.min.js
	$('#' + div).html(
		'<iframe class="iframeresize_class" style="display:block;width:99%" src="https://' + thsBlg_dyn_catcher + '?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		// '<iframe style="height:450px;width:' + (!detectmob() ? '400' : '200') + 'px;overflow:hidden;display:block" src="https://'+thsBlg_dyn_catcher+'?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		''
	);
	// 
}

function affLocalize(objAmAffIds, strEPNId, strZzlId) {
	// v5
	// req: jq
	function zzlLocalize(strTLD, url) {
		if (strTLD) {
			switch (strTLD) {
				case 'UK':
				case 'JP':
				case 'NZ':
					strTLD = 'co.' + strTLD;
					break;
				case 'AU':
				case 'BR':
					strTLD = 'com.' + strTLD;
					break;
				case 'CA':
				case 'DE':
				case 'ES':
				case 'FR':
				case 'PT':
				case 'SE':
				case 'NL':
				case 'AT':
				case 'CH':
				case 'BE':
					strTLD = strTLD;
					break;
				default:
					strTLD = 'com';
			}
		}
		var affUrl, zProd, zAffTag;
		zProd = parseURL(url.replace(/[\?\&]rf\=[0-9]+/, ""));
		affUrl = 'https://www.zazzle.' + strTLD + zProd.path + zProd.querystring;
		zAffTag = (affUrl.match(/\?/) ? '&rf=' : '?rf=') + strZzlId;
		affUrl = affUrl + zAffTag;
		return affUrl;
	}

	function ebLocalize(strTLD, url) {
		if (strTLD) {
			switch (strTLD) {
				case 'AT':
					cntry = "5221-53469-19255-0";
					icep = "229473";
					break;
				case 'AU':
					cntry = "705-53470-19255-0";
					icep = "229515";
					break;
				case 'BE':
					cntry = "1553-53471-19255-0";
					icep = "229522";
					break;
				case 'CA':
					cntry = "706-53473-19255-0";
					icep = "229529";
					break;
				case 'CH':
					cntry = "5222-53480-19255-0";
					icep = "229536";
					break;
				case 'DE':
					cntry = "707-53477-19255-0";
					icep = "229487";
					break;
				case 'ES':
					cntry = "1185-53479-19255-0";
					icep = "229501";
					break;
				case 'FR':
					cntry = "709-53476-19255-0";
					icep = "229480";
					break;
				case 'IE':
					cntry = "5282-53468-19255-0";
					icep = "229543";
					break;
				case 'IN':
					cntry = "4686-53472-19255-0";
					icep = "229550";
					break;
				case 'IT':
					cntry = "724-53478-19255-0";
					icep = "229494";
					break;
				case 'NL':
					cntry = "1346-53482-19255-0";
					icep = "229557";
					break;
				case 'UK':
					cntry = "710-53481-19255-0";
					icep = "229508";
					break;
				default:
					cntry = "711-53200-19255-0";
					icep = "229466";
			}
		}
		var affUrl = url;
		affUrl = affUrl.replace(/\/[0-9]+\-[0-9]+\-19255\-0\//, '/' + cntry + '/');
		affUrl = affUrl.replace(/vectorid\=[0-9]+/, 'icep_vectorid=' + icep);
		// console.log(affUrl)
		return affUrl;
	}
	// 
	function amLocalize(itmId, strTLD) {
		if (strTLD) {
			switch (strTLD) {
				case 'JP':
					strTLD = 'co.jp';
					break;
				case 'GB':
				case 'JE':
				case 'GG':
				case 'IM':
				case 'IE':
				case 'UK':
					strTLD = 'co.uk';
					break;
				case 'CH':
				case 'AT':
					strTLD = 'de';
					break;
				case 'PT':
					strTLD = 'es';
					break;
				default:
					strTLD = (objAmAffIds[strTLD.toLowerCase()] != null ? strTLD.toLowerCase() : 'com');
					break;
			}
			affId = objAmAffIds[strTLD.toLowerCase()];
		}
		// OneLink Mod  DEL IF NOT USING OneLink <script> in html
		strTLD = (strTLD == 'ca' || strTLD == 'co.uk') ? "com" : strTLD;
		affId = thsBlg_amz.com; ///// default US tag for this site
		// /OneLink Mod
		return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + itmId + "/" + affId;
	}
	// 
	function parseURL(href) {
		// v1 returns url parths as given. works with relative ones too.
		var match = href.match(/^(?:(https?\:)\/\/)?(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
		return match && {
			href: href,
			protocol: match[1],
			host: match[2],
			hostname: match[3],
			port: match[4],
			path: match[5],
			querystring: match[6],
			hash: match[7]
		}
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		///// geoip chunk 3/4
		url: "https://freegeoip.app/json/" // new 11/18
		//////
		// url: "https://api.myip.com/" // new 7/19 NO CORS!
	}).done(function(json) {
		try {
			///// geoip chunk 4/4
			var strTLD = json.country_code || ''; // for freegeoip.app
			// var strTLD = json.cc || ''; // for myip.com
			////
			var zzlUrlReg = /zazzle\./;
			var epnUrlReg = /vectorid/;
			var amzUrlReg = RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
			// var amzUrlReg = RegExp("/(?!/e|st)../([A-Z0-9]{10})");
			// "/(?!/e|st)../([A-Z0-9]{10})"
			$('a').each(function(index) {
				var url = unescape($(this).attr('href'));
				// AMZ
				if (url.match(amzUrlReg)) {
					var itmId = url.match(amzUrlReg)[1];
					// console.log(itmId)
					// amLocalize is OFF (USING ONELINK) (uncommnt to enable)
					// $(this).attr('href', amLocalize(itmId, strTLD));
				}
				// EPN
				if (url.match(epnUrlReg)) {
					$(this).attr('href', ebLocalize(strTLD, url));
				}
				// ZZL
				if (url.match(zzlUrlReg)) {
					$(this).attr('href', zzlLocalize(strTLD, url));
				}
			});
			// 
		} catch (e) {}
	}).fail(function(error) {
		// console.log(error);
	});
}

function aead(divId, aid, akey, asize) {
	// v3
	// aid,akey,asize from ae code
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = '<span style="display:table;margin:0 auto"><a style="display:none!important" id="' + aid + '"></a></span>';
		if (window.AED_SHOW) {
			window.AED_SHOW({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
		} else {
			window.AED_ONLOAD = window.AED_ONLOAD || [];
			window.AED_ONLOAD.push({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
			if (!document.getElementById("ae-ad-script-$")) {
				var s = document.createElement("script"),
					h = document.getElementsByTagName("head")[0];
				s.id = 'ae-ad-script-$';
				s.charset = "utf-8";
				s.async = !0;
				s.src = "https://i.alicdn.com/ae-game/thirdparty/show-window/index.js";
				h.insertBefore(s, h.firstChild)
			}
		}
	}
}

///// MODDED FOR AS_CD
function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	if (bnndQry == "yes") {
		return;
	}
	// v10 - bugfix
	if (!document.getElementById(divId)) {
		// 
	} else {
		var a = "";
		if (orient == "link") {
			a = "link"
		};
		if (orient == "matched") {
			a = "autorelaxed"
		};
		if (orient == "a") {
			a = "auto"
		};
		if (orient == "h") {
			a = "horizontal"
		};
		if (orient == "v") {
			a = "vertical"
		};
		if (orient == "r") {
			a = "rectangle"
		};
		if (orient == "rh") {
			a = "rectangle, horizontal"
		};
		if (orient == "rv") {
			a = "rectangle, vertical"
		};
		var divWidth = typeof divWidth !== 'undefined' ? divWidth : '100%';
		var divHeight = typeof divHeight !== 'undefined' ? divHeight : '100%';
		try {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { width: ' + divWidth + '; height:' + divHeight + '; }' +
				'</style>' +
				prefix +
				'<span class="ldng_16_3x" style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' style="display:block" ' +
				' data-ad-client="' + '\x63' + 'a' + '-\x70\x75b-' + (2794188479492834 + 316041927154285 + 2579972706712602) + '" ' +
				' data-ad-slot="' + slot + '" ' +
				' data-ad-format="' + a + '"></ins> ' +
				'</span>' +
				postfix +
				'';
			(adsbygoogle = window.adsbygoogle || []).push({
					params: {
						google_ad_channel: channel
					}
				});
		} catch (e) {
			return true;
		}
	}
}

function prependHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		//
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		//
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforeend", html);
	}
}

function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterend", html);
	}
}

function insertBeforeHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
	}
}

function prependHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforeend", html);
	}
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		//
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}

function viewport(percentage, property) {
	// v1 - returns viewport % in pixels
	// property='vw','vh', usage: viewport(40, "vh")+'px';
	if (property == "vw") {
		a = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	}
	if (property == "vh") {
		a = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	}
	return a;
}

function addthis_async_append(divId, customUrlTitle, url, title) {
	// v1 ,  
	// VARS TO SET
	var addthis_id = 'ra-4f85722b54841026';
	//
	var html = '<div class="addthis_toolbox addthis_32x32_style" style=" "> ' +
		'<table><tr>' +
		'<td> <a rel="nofollow" class="addthis_button_facebook"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_twitter"></a></td>' +
		// '<td> <a rel="nofollow" class="addthis_button_reddit"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_email"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_favorites"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_expanded"></a></td>' +
		'</tr></table>' +
		'</div>';
	var addthis_config = addthis_config || {};
	addthis_config.pubid = addthis_id;
	// optional url, title, comment out to use page's
	if (customUrlTitle == "custom") {
		addthis_share = {
			url: url,
			title: title
		}
	}
	var addthisScript = document.createElement('script');
	addthisScript.setAttribute('src', 'https://s7.addthis.com/js/300/addthis_widget.js#domready=1');
	document.body.appendChild(addthisScript);
	document.getElementById(divId).insertAdjacentHTML("beforeend", html);
}

function htmlAmzItm(title, price, url, img) {
	return '' +
		'<a class="grid-item" target="_blank" href="' + url + '"> ' +
		' <img alt="" src="' + img + '"/> ' +
		// '<span>'+title+'</span>'+
		// '<span>'+price+'</span>'+
		' </a>';
}

function masonrify(html, divId) {
	// console.log(html)
	$('#' + divId).html(
		'<div id="grid-loading">Loading...</div>' +
		'<div class="grid">' +
		'<div class="grid-sizer"></div>' +
		html +
		'</div>'
	);
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress(function() {
		// console.log('yeah');
		$('#grid-loading').remove();
		$grid.masonry();
		$('.grid').css({
			'visibility': 'visible'
		});
	});
}

function amzSrchURL(affId, srchQry, categ) {
	// v1
	// optional categ: amz index
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	var b = (typeof categ === 'undefined') ? '' : categ;
	return 'https://www.amazon.com/gp/search?ie=UTF8&tag=' + affId + '&index=' + b + '&keywords=' + srchQry;
}

function epnSrchURL(campId, srchQry) {
	// v1
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	return 'https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=9&pub=\x35\x35\x37\x35\x31\x35\x30\x38\x30\x38&toolid=10001&campid=' + campId + '&customid=&icep_uq=' + a + '&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg';
}
// ========== /FUNCTIONS ==========
// ========== EXEC ============
// 
/////////////////    ZDHOME   ///////////////////
// 
if (zdsite == "zdhome") {
	if (ThsBlg_pg == "homepage") {
		// --- FUNCS
		function appendHTMLByTag(firstTag, html) {
			if (!document.getElementsByTagName(firstTag)[0]) {
				//
			} else {
				document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforeend", html);
			}
		}

		function removejscssfile(filename, filetype) {
			// e.g. removejscssfile("/z/style.css", "css"); //part of url
			var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
			var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
			var allsuspects = document.getElementsByTagName(targetelement)
			for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
				if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
					allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
			}
		}
		// --- FUNCS
		// === EXEC before
		// remove blggr css
		removejscssfile('3334278262-classic.css', 'css');
		// bootstrap main css
		appendHTMLByTag('head', '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" type="text/css">');
		//
		// DOWNGRADE IF CSS3 CALC NOT SUPPORTED...
		/*! modernizr 3.3.1 (Custom Build) | MIT *
		 * https://modernizr.com/download/?-csscalc-setclasses !*/
		! function(e, n, s) {
			function t(e, n) {
				return typeof e === n
			}

			function o() {
				var e, n, s, o, a, i, c;
				for (var f in r)
					if (r.hasOwnProperty(f)) {
						if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
							for (s = 0; s < n.options.aliases.length; s++) e.push(n.options.aliases[s].toLowerCase());
						for (o = t(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) i = e[a], c = i.split("."), 1 === c.length ? Modernizr[c[0]] = o : (!Modernizr[c[0]] || Modernizr[c[0]] instanceof Boolean || (Modernizr[c[0]] = new Boolean(Modernizr[c[0]])), Modernizr[c[0]][c[1]] = o), l.push((o ? "" : "no-") + c.join("-"))
					}
			}

			function a(e) {
				var n = f.className,
					s = Modernizr._config.classPrefix || "";
				if (u && (n = n.baseVal), Modernizr._config.enableJSClass) {
					var t = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
					n = n.replace(t, "$1" + s + "js$2")
				}
				Modernizr._config.enableClasses && (n += " " + s + e.join(" " + s), u ? f.className.baseVal = n : f.className = n)
			}

			function i() {
				return "function" != typeof n.createElement ? n.createElement(arguments[0]) : u ? n.createElementNS.call(n, "https://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
			}
			var l = [],
				r = [],
				c = {
					_version: "3.3.1",
					_config: {
						classPrefix: "",
						enableClasses: !0,
						enableJSClass: !0,
						usePrefixes: !0
					},
					_q: [],
					on: function(e, n) {
						var s = this;
						setTimeout(function() {
							n(s[e])
						}, 0)
					},
					addTest: function(e, n, s) {
						r.push({
							name: e,
							fn: n,
							options: s
						})
					},
					addAsyncTest: function(e) {
						r.push({
							name: null,
							fn: e
						})
					}
				},
				Modernizr = function() {};
			Modernizr.prototype = c, Modernizr = new Modernizr;
			var f = n.documentElement,
				u = "svg" === f.nodeName.toLowerCase(),
				p = c._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
			c._prefixes = p, Modernizr.addTest("csscalc", function() {
				var e = "width:",
					n = "calc(10px);",
					s = i("a");
				return s.style.cssText = e + p.join(n + e), !!s.style.length
			}), o(), a(l), delete c.addTest, delete c.addAsyncTest;
			for (var m = 0; m < Modernizr._q.length; m++) Modernizr._q[m]();
			e.Modernizr = Modernizr
		}(window, document);
		// if css3 calc not supported...
		if (Modernizr.csscalc) {
			// console.log('calc supported');
		} else {
			// DOWNGRADE
			$('h1').after('<div id="downgrade"></div>');
			$('#zdheader, #footer, #flares').removeClass('textliner');
			$('#zdheader, #footer, #flares').addClass('downgraded_textliner');
			$('#zdheader, #footer, #flares').removeAttr('id');
			$('#downgrade').append($('.downgraded_textliner'));
			$('.downgraded_textliner:eq(0)').attr("id", "downgraded_zdheader");
			$('.downgraded_textliner:eq(1)').attr("id", "downgraded_footer");
			$('.downgraded_textliner:eq(2)').attr("id", "downgraded_flares");
			$('.textliner').remove();
			$('#mainwrap').css({
				'background': 'none',
				'dummy': 'dummy'
			});
		}
	}
	// 
	// 
	if (ThsBlg_pg == "itempage") {
		// ZDHOME DTP+MOB AD 1/1
		// insertAfterHTMLByClass('addthis_B', '<div style="width:336px;height:280px;margin:10px auto 40px;"><div id="as_btm"></div></div>');
		// asadRespId(
		// 	'',
		// 	'',
		// 	"as_btm",
		// 	"xyz_as_btm",
		// 	'3045034240',
		// 	'8736346943',
		// 	"a"
		// );
	}
	// ZDHOME DTP+MOB LU 1/1
	// insertAfterHTML('prevlink', '<div style="width:200px;height:150px;margin:20px auto 40px;"><div id="as_lu_btm"></div></div>');
	// asadRespId(
	// 	'<div style="text-align:center">',
	// 	'</div>',
	// 	"as_lu_btm",
	// 	"xyz_as_lu_btm",
	// 	'4521767440',
	// 	'0372900008',
	// 	"link"
	// );
	// 
	// 
}
/////////////////    STORE   ///////////////////
// 
if (zdsite == "store") {
	// zd resp a 3045034240, linku 4521767440
	var ad_Id_resp = '3045034240';
	var lu_Id_resp = '4521767440';
	//// STORE CHANNELS
	var ad_Channel = (ThsBlg_pg == 'mainpage') ? '8388720648' : '8388720648';
	var lu_Channel = (ThsBlg_pg == 'mainpage') ? '2342187047' : '2342187047';
	//// STORE BOTH MAINPAGE+ITEMPAGE BOTH DTP+MOB AD 1/1
	//// STORE BOTH MAINPAGE+ITEMPAGE BOTH DTP+MOB AD 1/1
	// prependHTML('leftbar', '<div style="max-width: ' + (detectmob() ? '90%' : '300px') + ' ; max-height:' + (detectmob() ? '150px' : '600px') + '; min-height:100px; margin-bottom:10px"><div id="as_sb1"></div></div>');
	// asadRespId(
	// 	'',
	// 	'',
	// 	"as_sb1",
	// 	"xyz_as_sb1",
	// 	ad_Id_resp,
	// 	ad_Channel,
	// 	"a"
	// );
	// 
	//  both dtp & mob itempage and mainpage
	var sideBysideLU = '<hr/><div style="margin:10px auto 20px"> <div class="row"><div class="col-sm-9"> <div id="as_lb1"></div> </div> <div class="col-sm-3"> <div id="as_lb2"></div> </div> </div> </div><hr/>';
	if (ThsBlg_pg == 'mainpage') {
		insertAfterHTMLByClass('postbody', sideBysideLU);
	}
	if (ThsBlg_pg == 'itempage') {
		insertBeforeHTMLByClass('blogger-labels', sideBysideLU);
	}
	// lu 1/2
	asadRespId(
		'<div style="text-align:center;width:90%;">',
		'</div>',
		"as_lb1",
		"xyz_as_lb1",
		lu_Id_resp,
		lu_Channel,
		"link"
	);
	// 
	////  STORE JQ /// 
	$(function() {
		// ========= ALL =========
		// 
		// 
		// 
		$('.postbody h3 a').each(function(index) {
			$(this).html(' More Details &amp; Prices ');
			$(this).addClass('btn btn-info');
		});
		$('.postbody a:nth-child(6)').each(function(index) {
			$(this).html(' Buy Now ');
			$(this).addClass('btn btn-success');
		});
		// 
		if (!detectmob()) {}
		// 
		// 
	});
}
// 
/////////////////    /STORE   ///////////////////
// 
// 
/////////////////    DYN_CATCHER   ///////////////////
// 
if (zdsite == "dyn_catcher") {
	var keywords = (qs.contains("a")) ? qs.get("a") : 'design art';
	keywords = decodeURIComponent(keywords);
	if (qs.get("s") == "amz") {
		amzNtv_sync(
			'search', // ad_mode, 
			'grid', // design,  "text_links"||"grid"
			keywords, // search_phrase, 
			thsBlg_amz.com, // tracking_id, 
			'06483062a172ded549d69e1886790a34', // linkid, 
			'', // title, 
			'' // default_category
		);
		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js")
			.done(function() {});
	}
}
// 
/////////////////    /DYN_CATCHER   ///////////////////
// 
// ============== ALL LAST --- WINDOW ON LOAD ===================
// LAST --- WINDOW ON LOAD 
$(window).on("load", function() {
	/////// ZDHOME /////////
	if (zdsite == "zdhome") {
		// 
		if (ThsBlg_pg == "itempage") {
			// ** ebay ebLocalize IS >>ON<< in affLocalize() **
			// ** amazon amLocalize IS >>OFF<< in affLocalize() **
			affLocalize(thsBlg_amz, thsBlg_epn, thsBlg_zzl);
		}
	}
	// 
	/////// STORE //////
	if (zdsite == "store") {
		// 
		if (ThsBlg_pg == 'itempage') {
			// --- AFF IN SIDEBAR
			// DTP STR AFF SB
			if (!detectmob()) {
				$('#rightbar').prepend('<div  class="ldng_16_3x" id="amzSB_T"></div>');
				amzFromLbls(thsBlg_amz_defKW, "amzSB_T");
			}
			// ---AFF FROM LABLES
			$('.blogger-labels').before('<hr/><h4>If you liked it, ALSO TRY:</h4><hr/><div  class="ldng_16_3x"  id="ebRSBtm_1"></div><hr/><div class="ldng_16_3x"  id="ebRSBtm_2"></div><hr/>');
			var kw = $('.blogger-labels').text().replace(/\s+/igm, " ").trim().replace(/(labels\:)/igm, "").trim();
			if ($('.postbody h3 a').attr('href').match(/amazon\./)) {
				kw = encodeURIComponent(kw.replace(/, /g, " ").trim());
				epnFromLbls(kw, "ebRSBtm_1");
				amzFromLbls(kw, "ebRSBtm_2");
			} else {
				amzFromLbls(kw, "ebRSBtm_1");
				epnFromLbls(kw, "ebRSBtm_2");
			}
			// ---/AFF FROM LABLES
			$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
				$('.iframeresize_class').iFrameResize();
			});
		}
		// 
		///// HNDLE BRKN IMGS - v2
		// req: epnSrchURL()
		$('.postbody a img').each(function(index) {
			if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth < 100) { // < 100 (ebay fallbck is 80px w) (default is 0 )
				var imgSrc = $(this).attr('src') || '';
				var redirURL = '';
				var redirQuery = $('h1').text().replace(/\s+/igm, " ").replace(/^[^\:]*\:(.*)/igm, "$1").replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "+").trim();
				ga_evCatVal('store', 'err_NoAffImg:U: ' + imgSrc);
				if (imgSrc.match(/amazon/)) {
					redirURL = amzSrchURL(thsBlg_amz.com, redirQuery);
				} else {
					redirURL = epnSrchURL(thsBlg_epn, redirQuery);
				}
				// 
				$(this).parent().replaceWith('<div style="margin:20px auto"><div class="panel panel-warning">   <div class="panel-heading"> <span class="glyphicon glyphicon-info-sign"></span> Oops! It seems this item got moved or re-categorized... <br/><a id="mssngImgRedir_' + index + '" class="btn btn-warning" href="' + redirURL + '" role="button"><b style="font-size:120%">Locate Item Now</b> &#x25B6; </a> </div>     </div></div> ');
				// 
				$("#mssngImgRedir_" + index).click(function() {
					ga_evCatVal('store', 'inf_btnLocItmNw:U: ' + redirURL);
				});
			}
		});
		/// HNDLE BRKN IMGS
		// 
		// 
		affLocalize(thsBlg_amz, thsBlg_epn, thsBlg_zzl);
		// 
		if (ThsBlg_pg == 'itempage') {
			insertAfterHTMLByClass('postbody', '<div style="display:table;margin:10px auto;" id="addths_rec"></div>');
			addthis_async_append('addths_rec', '', '', '');
		}
	}
	// 
}); /// window onload
//
// 
// ============== /ALL LAST --- WINDOW ON LOAD ===================
// 
// 
//