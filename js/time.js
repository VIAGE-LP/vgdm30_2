window.addEventListener("load", function() { AddMemo(); });
window.addEventListener('load', function() { if (window.location.pathname == '/lpcny19_dtu/' || window.location.pathname == '/lp18U/' || window.location.pathname == '/lp18Ug/' || window.location.pathname == '/lp07g/' || window.location.pathname == '/lp10g/') { addPolicy(); } });
var policyText = "\
 對於購買所需填寫的個人資料，本公司將遵守個人資料保護相關法令規定，完成購買即表示同意本公司依個人資料保護相關法令處理、利用你的個人資料。\n\
 為了完成交易，包括且不限於完成付款及交付等，你必須擔保在訂購過程中所留存的所有資料均為完整、正確、與當時情況相符的資料，如果事後有變更，你應該即時通知本公司客服人員。\n\
 對於你所留存的資料，本公司除了採用安全交易模式外，並承諾負擔保密義務，除了為完成交易、提供顧客服務或在符合相關法令之規範下而提供給相關商品或服務之配合廠商以外，不會任意洩漏或提供給第三人。\n\
 為了完成交易與提供服務(包含商品、發票或贈品之運送以及服務滿意度調查)，本公司需將你的個人資訊提供給運送服務廠商及服務滿意度調查廠商，並由廠商與你聯繫安排商品之運送與服務滿意度調查；你的個人資訊包含姓名\
、地址、電話等，也可能因運送之需求而需要揭露於商品之外包裝上。";

function addPolicy() {
    if (document.getElementById("policy") == null) { setTimeout(addPolicy, 1000); return; }
    policyTitle = document.getElementById("policyTitle");
    policyTitle.innerText = "※個人資料暨隱私權保護政策聲明※";
    policyContact = document.getElementById("policyText");
    policyContact.innerHTML = policyText;
    policyContact.style.display = "";
}

function AddMemo() {
    jQuery(function($) {
        if (document.getElementsByClassName("titlefontdk5") == null) { setTimeout(AddMemo, 1000); return; }
        jQuery(".titlefontdk5").html("1)「農曆新年前两周至農曆新年期間」、「端午節、中秋節前一周」及「雙11購物節後一至两周」為物流高峯期, 故無法指定配送時段敬請見諒。" + "<br>2)另如遇颱風地震等天災、公共工程、節慶活動管制路段, 出貨時間將順延。 實際送達時間, 以物流公司嘅出貨日, 送貨路線及貨量為主。<br>3) 宅配件至發貨日至 2/1号 (五) 止。<br>" + "(為避免宅配件派送時效受節日影響, 建議訂單都於 1/31 (四) 號先發貨完畢)<br>" + "外務員最後配送日為 2/2 (六), 若因不可抗因素無法派件完成則將於 2/11 (一) 再進行派件 <br>" + "承上, 貨件若滯留營業站所可接受自取, 請 1. 入線0800同客服確認貨件係咪滯留企所.約定自取時間自行取貨 P.S 除夕下午唔接受自取");
    });
}

function addMomo1() { if (document.getElementById("tr_Memo1") == null) { setTimeout(addMomo1, 1000); return; } }

function callGTM() { document.write('<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MMGGLB" \n\
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> \n\
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":\n\
		new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],\n\
		j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= \n\
		"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\n\
		})(window,document,"script","dataLayer","GTM-MMGGLB");</script>'); }

function linebreakIfSmallScreen() { if ($(window).width() < 640) { document.write("<br/>"); } }