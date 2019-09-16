///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
function d7(){if(!document.getElementById)return ;var d8;var JD;var d9=new Array();var d_=document.getElementsByTagName('img');for(var al=0;al<d_.length;al++){if(d_[al].getAttribute('hsrc')){d9[al]=new Image();d9[al].src=d_[al].getAttribute('hsrc');d_[al].onmouseover=function (){d8=this.getAttribute('src');JD=this.getAttribute('hsrc');this.setAttribute('src',this.getAttribute('hsrc'));}
;d_[al].onmouseout=function (){if(JD==this.getAttribute('hsrc')){this.setAttribute('src',d8);}
}
;}
}
}
function ea(){d7();dX();jc();i9();wV();nz('small');kZ();x5();document.onkeydown=dW;Jp();setInterval(iW,1000*60*xl.s1,0);}

///*****************************************************************************
/// Do not remove this notice.
///
/// Copyright 2000-2004 by Mike Hall.
/// See http://www.brainjar.com for terms of use.
///*****************************************************************************
var jh={ji:null,J2:null}
;var tP={tQ:null,tR:null,tS:null,tT:null,tU:null,tV:null,u7:null,u8:null,u9:null,v2:null,tW:null,wt:null}
;var jj={jk:true,jl:true,jm:true,jn:'Normal',jo:'Normal',jp:false,jq:false,jr:true,js:true,jt:true,GA:true,ju:true,jv:true,jw:'Small',jx:'Inline',jy:'Inline',jz:true,jA:true,LO:true,jB:false,K8:[],K9:[],jC:true,tu:false,K_:"450px",jE:false,wK:'defaultx',xO:'defaultx',w2:null}
;function jF(){var jG,fj,al;this.jH=false;this.jI=false;this.jJ=false;this.jK=null;jG=navigator.userAgent;fj="Opera";if((al=jG.indexOf(fj))>=0){this.jI=true;this.jK=parseFloat(jG.substring(al+fj.length));return ;}
fj="Netscape6/";if((al=jG.indexOf(fj))>=0){this.jJ=true;this.jK=parseFloat(jG.substring(al+fj.length));return ;}
fj="Gecko";if((al=jG.indexOf(fj))>=0){this.jJ=true;this.jK=6.1;return ;}
fj="MSIE";if((al=jG.indexOf(fj))){this.jH=true;this.jK=parseFloat(jG.substring(al+fj.length));return ;}
}
var jL=new jF();var jM=null;if(jL.jH)document.onmousedown=jN;else document.addEventListener("mousedown",jN,true);function jN(event){var gj;if(jM==null)return ;if(jL.jH)gj=window.event.srcElement;else gj=(event.target.tagName?event.target:event.target.parentNode);if(gj==jM)return ;if(kb(gj,"DIV","menu")==null){jU(jM);jM=null;}
}
function jO(button,event,jQ){button.blur();if(button.jZ==null){button.jZ=rY(jQ);if(button.jZ.isInitialized==null)j3(button.jZ);}
if(jM!=null)jU(jM);clearTimeout(jh.J2);jh.J2=setTimeout(jT,xl.Kh*1000);if(button!=jM){jS(button);jM=button;}
else jM=null;return false;}
function jR(button,event,jQ){if(jM!=null&&jM!=button)jO(button,event,jQ);return false;}
function jS(button){var x,y;button.className+=" menuButtonActive";x=kk(button);y=kl(button)+button.offsetHeight;if(jL.jH){x+=button.offsetParent.clientLeft;y+=button.offsetParent.clientTop;}
button.jZ.style.left=x+"px";button.jZ.style.top=y+"px";button.jZ.style.visibility="visible";if(button.jZ.iframeEl!=null){button.jZ.iframeEl.style.left=button.jZ.style.left;button.jZ.iframeEl.style.top=button.jZ.style.top;button.jZ.iframeEl.style.width=button.jZ.offsetWidth+"px";button.jZ.iframeEl.style.height=button.jZ.offsetHeight+"px";button.jZ.iframeEl.style.display="";}
}
function jT(){if(jM!=null){jU(jM);jM=null;clearTimeout(jh.J2);jh.J2=null;}
return false;}
function jU(button){kh(button,"menuButtonActive");if(button.jZ!=null){j2(button.jZ);button.jZ.style.visibility="hidden";if(button.jZ.iframeEl!=null)button.jZ.iframeEl.style.display="none";}
}
function jV(event){var jW;if(jL.jH)jW=kb(window.event.srcElement,"DIV","menu");else jW=event.currentTarget;if(jW&&jW.activeItem!=null)j2(jW);}
function jX(event,jQ){var jY,jZ,x,y;if(jL.jH)jY=kb(window.event.srcElement,"A","menuItem");else jY=event.currentTarget;jZ=kb(jY,"DIV","menu");if(jZ.activeItem!=null)j2(jZ);jZ.activeItem=jY;jY.className+=" menuItemHighlight";if(jQ==null){if(jL.jH)window.event.cancelBubble=true;else event.stopPropagation();return ;}
if(jY.subMenu==null){jY.subMenu=rY(jQ);if(jY.subMenu.isInitialized==null)j3(jY.subMenu);}
x=kk(jY)+jY.offsetWidth;y=kl(jY);var j0,j1;if(jL.jH){j0=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)+(document.documentElement.clientWidth!=0?document.documentElement.clientWidth:document.body.clientWidth);j1=Math.max(document.documentElement.scrollTop,document.body.scrollTop)+(document.documentElement.clientHeight!=0?document.documentElement.clientHeight:document.body.clientHeight);}
else if(jL.jI){j0=document.documentElement.scrollLeft+window.innerWidth;j1=document.documentElement.scrollTop+window.innerHeight;}
else if(jL.jJ){j0=window.scrollX+window.innerWidth;j1=window.scrollY+window.innerHeight;}
j0-=jY.subMenu.offsetWidth;j1-=jY.subMenu.offsetHeight;if(x>j0)x=Math.max(0,x-jY.offsetWidth-jY.subMenu.offsetWidth+(jZ.offsetWidth-jY.offsetWidth));y=Math.max(0,Math.min(y,j1));jY.subMenu.style.left=x+"px";jY.subMenu.style.top=y+"px";jY.subMenu.style.visibility="visible";if(jY.subMenu.iframeEl!=null){jY.subMenu.iframeEl.style.left=jY.subMenu.style.left;jY.subMenu.iframeEl.style.top=jY.subMenu.style.top;jY.subMenu.iframeEl.style.width=jY.subMenu.offsetWidth+"px";jY.subMenu.iframeEl.style.height=jY.subMenu.offsetHeight+"px";jY.subMenu.iframeEl.style.display="";}
if(jL.jH)window.event.cancelBubble=true;else event.stopPropagation();}
function j2(jZ){if(jZ==null||jZ.activeItem==null)return ;if(jZ.activeItem.subMenu!=null){j2(jZ.activeItem.subMenu);jZ.activeItem.subMenu.style.visibility="hidden";if(jZ.activeItem.subMenu.iframeEl!=null)jZ.activeItem.subMenu.iframeEl.style.display="none";jZ.activeItem.subMenu=null;}
kh(jZ.activeItem,"menuItemHighlight");jZ.activeItem=null;}
function j3(jZ){var j4,j5;var j6,j7,j8,j9;var j_;var c5,ka;var al,ct;jh.ji=mN("img",eb.et,"ico-check","src","images/icon_menu_checkmark.gif","border","0");j4=jZ.getElementsByTagName("A");if(j4.length>0)j_=j4[0].offsetWidth;else return ;for(al=0;al<j4.length;al++){j5=j4[al].getElementsByTagName("span");j6=null;j7=null;j9=null;for(ct=0;ct<j5.length;ct++){if(kf(j5[ct],"menuItemText"))j6=j5[ct];if(kf(j5[ct],"menuItemArrow")){j7=j5[ct];}
if(kf(j5[ct],"menuItemShortCut")){j9=j5[ct];}
}
if(j6!=null&&j7!=null){j6.style.paddingRight=(j_-(j6.offsetWidth+j7.offsetWidth))+"px";if(jL.jI)j7.style.marginRight="0px";}
if(j6!=null&&j9!=null){j6.style.paddingRight=(j_-(j6.offsetWidth+j9.offsetWidth))+"px";if(jL.jI)j9.style.marginRight="0px";}
}
if(jL.jH){c5=j4[0].offsetWidth;j4[0].style.width=c5+"px";ka=j4[0].offsetWidth-c5;c5-=ka;j4[0].style.width=c5+"px";}
if(jL.jH){jZ.iframeEl=jZ.parentNode.insertBefore(document.createElement("iframe"),jZ);jZ.iframeEl.style.display="none";jZ.iframeEl.style.position="absolute";}
jZ.isInitialized=true;}
function kb(kc,kd,ke){while(kc!=null){if(kc.tagName!=null&&kc.tagName==kd&&kf(kc,ke))return kc;kc=kc.parentNode;}
return kc;}
function kf(gj,aj){var al,kg;kg=gj.className.split(" ");for(al=0;al<kg.length;al++)if(kg[al]==aj)return true;return false;}
function kh(gj,aj){var al,ki,kj;if(gj.className==null)return ;kj=new Array();ki=gj.className.split(" ");for(al=0;al<ki.length;al++)if(ki[al]!=aj)kj.push(ki[al]);gj.className=kj.join(" ");}
function kk(gj){var x;x=gj.offsetLeft;if(gj.offsetParent!=null)x+=kk(gj.offsetParent);return x;}
function kl(gj){var y;y=gj.offsetTop;if(gj.offsetParent!=null)y+=kl(gj.offsetParent);return y;}
function km(kn,jb,wZ){if(!wZ)wZ=eb.eo;var cJ=ek()+'?cmd=PrefManage&sid='+wZ+'&xmlack=yes';cJ+="&pf_fieldname="+kn;cJ+="&pf_value="+jb;cJ+="&pf_save_single=true";s5('setpref',cJ);f_();}
function kq(){var kr=rY('toolBarMenu');if(!jj.jk){kr.style.display="block";jj.jk=true;kF("toolBarCheck");kr=rY("searchBarMenu");kr.style.right="20%";}
else {kr.style.display="none";jj.jk=false;kG("toolBarCheck");kr=rY("searchBarMenu");kr.style.right="35%";}
return false;}
function ks(){var kr=rY('searchBarMenu');if(!jj.jm){kr.style.display="block";jj.jm=true;kF("searchBarCheck");}
else {kr.style.display="none";jj.jm=false;kG("searchBarCheck");}
return false;}
function kt(ku){var kr=ao("debugDiv");kG("leftDebugPaneCheck");kG("centerDebugPaneCheck");kG("rightDebugPaneCheck");if(ku=="left")kr.left="0px";else if(ku=="center")kr.left="300px";else kr.left="750px";if((kr.display=="none")||(kr.display=="")){kr.display="block";kr.zIndex=105;jj.jC=true;kF(ku+"DebugPaneCheck");}
else {kr.display="none";kr.zIndex=0;jj.jC=false;}
return false;}
function kv(which){kG("classicSkinCheck");kG("patrioticSkinCheck");kF(which+"SkinCheck");return false;}
function kx(which,ky){kG("textSizeCheck1");kG("textSizeCheck2");kG("textSizeCheck3");kF("textSizeCheck"+which);if(ky){var jb=(which==3)?"8":(which==2)?"5":"2";km("pf_fs",jb);}
return false;}
function kz(kA){kG("menuMaxMessages1000");kG("menuMaxMessages2000");kG("menuMaxMessages3000");kF("menuMaxMessages"+kA);eb.K2=kA;eb.eD=kA;eb.K1=eb.uC.match(/pop/i);if(eb.K1)eb.eD/=10;}
function kB(kA){kz(kA);var cJ=ek()+'?cmd=PrefManage&sid='+eb.eo+'&xmlack=yes';cJ+="&pf_fieldname="+"pf_prefetch";cJ+="&pf_value="+kA/1000;cJ+="&pf_save_single=true";s5('setpref',cJ);s5('fetch',eb.en,eb.eo);f_();return false;}
function kC(kD,az){if(jj.jB)np("menu","setSettingsBall("+kD+","+az+")");var kr=rY(kD);var kE=(az=='green')?"On.":"Off.";if(kr!=null){kr.innerhtml=x0(az,kE);}
}
function kF(kD){if(jj.jB)np("menu","setCheckmark("+kD+")");var kr=rY(kD);if(kr!=null){while(kr.childNodes[0]!=null)kr.removeChild(kr.childNodes[0]);kr.appendChild(mN("img",eb.et,"ico-check","src","images/icon_menu_checkmark.gif","border","0"));}
}
function kG(kD){if(jj.jB)np("menu","unsetCheckmark("+kD+")");var kr=rY(kD);if(kr!=null)while(kr.childNodes[0]!=null)kr.removeChild(kr.childNodes[0]);}
function kH(kI,kD){if(kI==false){kF(kD);return true;}
else {kG(kD);return false;}
}
function tM(){jj.jB=kH(jj.jB,"debugCheck");}
function La(which,options,Lb){if((which=="on")||(which=="yes")){which="dhtml,calendar,column,drag,menu,scroll,ndom,pane,xcore,mailbox,effects,folder,message";}
if(which){var Lc=which.split(',');for(var al=0;al<Lc.length;al++){jj.K8[Lc[al]]=1;}
}
if(options){var Ld=options.split(',');for(var al=0;al<Ld.length;al++){jj.K9[Ld[al]]=1;}
}
if(Lb)jj.K_=Lb;if(jj.K9['left'])kt('left');else if(jj.K9['center'])kt('center');else if(jj.K9['right'])kt('right');if(jj.K9['wide'])k1();}
function kJ(cV){cV=cV?cV:window.event;if(jj.jB)np("menu","toggleDebug()");tM();cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();return false;}
function kK(jb,u_){jj.jE=kH(jb,"countsCheck");ij();if(u_){var vM=(jj.jE)?"y":"n";km("pf_foldercount",vM);}
}
function kL(cV){cV=cV?cV:window.event;if(jj.jB)np("menu","toggleCounts()");cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();kK(jj.jE,true);return false;}
function toggleReadPane(kA,ky){if(jj.jB)np("menu","toggleReadPane("+kA+","+ky+")");jj.jo=jj.jn;jj.jn=kA;kG("readPaneMinimize");kG("readPaneNormal");kG("readPaneWide");kF("readPane"+kA);nb();var jb='m';if(kA=='Normal')jb='n';else if(kA=="Wide")jb='w';if(ky)km("pf_readpane",jb);return false;}
function kN(kO){var jb=eb.eN;if(jb){kC("spamBlocker",'green');}
else {kC("spamBlocker",'white');}
jb=eb.eO;if(jb){kC("virusProtection",'green');}
else {kC("virusProtection",'white');}
return false;}
function kP(kO){var jb=jj.jq;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleCopyInbox("+jb+")");jj.jq=jb;if(jb){kF("menuComposeInbox");}
else {kG("menuComposeInbox");}
if(kO){jb=(jj.jq)?"y":"n";km("pf_bcc",jb);}
return false;}
function kQ(kO){var jb=jj.jp;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleCopySent("+jb+")");jj.jp=jb;if(jb){kF("menuComposeSent");}
else {kG("menuComposeSent");}
if(kO){jb=(jj.jp)?"y":"n";km("pf_sent",jb);}
return false;}
function kR(kO){var jb=jj.jr;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleConfirmSend("+jb+")");jj.jr=jb;if(jb){kF("menuConfirmationsSend");}
else {kG("menuConfirmationsSend");}
if(kO){jb=(jj.jr)?"y":"n";km("pf_conf_sent",jb);}
return false;}
function kS(kO){var jb=jj.js;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleConfirmDraft("+jb+")");jj.js=jb;if(jb){kF("menuConfirmationsDraft");}
else {kG("menuConfirmationsDraft");}
if(kO){jb=(jj.js)?"y":"n";km("pf_conf_draft",jb);}
return false;}
function kT(kO){var jb=jj.jt;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleConfirmSpam("+jb+")");jj.jt=jb;if(jb){kF("menuConfirmationsSpam");}
else {kG("menuConfirmationsSpam");}
if(kO){jb=(jj.jt)?"y":"n";km("pf_conf_missedspam",jb);}
return false;}
function GB(kO){var jb=jj.GA;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleConfirmMultiple("+jb+")");jj.GA=jb;if(jb){kF("menuConfirmationsMultiple");}
else {kG("menuConfirmationsMultiple");}
if(kO){jb=(jj.GA)?"y":"n";km("pf_conf_multi_del",jb);}
return false;}
function kU(kA,ky){if(jj.jB)np("menu","toggleMenuForwardStyle("+kA+")");jj.jx=kA;kG("menuForwardStyleInline");kG("menuForwardStyleAttachment");kF("menuForwardStyle"+kA);if(ky){jb=(jj.jx=='Inline')?"n":"y";km("pf_fwd_as_attach",jb);}
return false;}
function kV(kA,ky){if(jj.jB)np("menu","toggleMenuReplyStyle("+kA+")");jj.jy=kA;kG("menuReplyStyleInline");kG("menuReplyStyleAttachment");kG("menuReplyStyleNone");kF("menuReplyStyle"+kA);if(ky){jb=(jj.jy=='Attachment')?"a":(jj.jy=='None')?"n":"y";km("pf_reply_style",jb);}
return false;}
function LP(kO){var jb=jj.LO;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleTextSuggest("+jb+")");jj.LO=jb;if(jb){kF("menuTextSuggest");}
else {kG("menuTextSuggest");}
if(kO){jb=(jj.LO)?"y":"n";km("pf_textsuggest",jb);}
return false;}
function kW(kO){var jb=jj.jA;if(kO)jb=(jb)?false:true;if(jj.jB)np("menu","toggleShowLanding("+jb+")");jj.jA=jb;if(jb){kF("menuShowLanding");}
else {kG("menuShowLanding");}
if(kO){jb=(jj.jA)?"y":"n";km("pf_landing_page",jb);}
return false;}
function wG(){kX();f_('setpref');}
function kX(){var cq=mL('setpref');if(cq){g3("Option not saved.\n\n"+cq,'Setting Preferences',false);}
f_('setpref');}
function kY(){var cq=mL('getpref');if(cq){g3("Can't get options. Using defaults.\n\n"+cq,'Getting Preferences',false);f_('getpref');return ;}
tX('getpref');f_('getpref');}
function kZ(){kF('viewAllCheck');kQ(false);kP(false);kR(false);kS(false);kT(false);GB(false);if(jj.jw=='Medium'){kx(2,false);nE();}
else if(jj.jw=='Large'){kx(3,false);nF();}
else if(jj.jw=='Small'){kx(1,false);nC();}
kU(jj.jx,false);kV(jj.jy,false);kW(false);LP(false);k4(false);kN(false);kz(eb.K2);}
function tX(fI){var cr=mt.mx?mt.mw[fI].responseXML:mt.mw[fI];var x=cr.getElementsByTagName('preferences');if(x.length>=1){var ii=x[0].getElementsByTagName('readpane');var jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";var kA=(jb=='w')?'Wide':(jb=='m')?'Minimize':'Normal';if(kA!=jj.jn){toggleReadPane(kA,false);}
ii=x[0].getElementsByTagName('ccsentmail');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.jp){jj.jp=jb;kQ(false);}
ii=x[0].getElementsByTagName('ccinbox');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.jq){jj.jq=jb;kP(false);}
ii=x[0].getElementsByTagName('confsent');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.jr){jj.jr=jb;kR(false);}
ii=x[0].getElementsByTagName('confdraft');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.js){jj.js=jb;kS(false);}
ii=x[0].getElementsByTagName('confspam');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.jt){jj.jt=jb;kT(false);}
ii=x[0].getElementsByTagName('confmultidel');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.GA){jj.GA=jb;GB(false);}
ii=x[0].getElementsByTagName('showhtml');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jj.ju=(jb=='y')?true:false;ii=x[0].getElementsByTagName('showimg');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jj.jv=(jb=='y')?true:false;ii=x[0].getElementsByTagName('fontsize');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";if(jb=='5'){if(jj.jw!='Medium'){kx(2,false);nE();jj.jw='Medium';}
}
else if(jb=='8'){if(jj.jw!='Large'){kx(3,false);nF();jj.jw='Large';}
}
else {if(jj.jw!='Small'){kx(1,false);nC();jj.jw='Small';}
}
ii=x[0].getElementsByTagName('fwdattach');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?'Attachment':'Inline';if(jb!=jj.jx){kU(jb,false);}
ii=x[0].getElementsByTagName('replystyle');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='n')?'None':(jb=='a')?'Attachment':'Inline';if(jb!=jj.jy){kV(jb,false);}
ii=x[0].getElementsByTagName('editor');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jj.jz=(jb=='y')?true:false;ii=x[0].getElementsByTagName('landing_page');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.jA){jj.jA=jb;kW(false);}
ii=x[0].getElementsByTagName('textsuggest');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.LO){jj.LO=jb;LP(false);}
ii=x[0].getElementsByTagName('foldercount');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.jE){kK(jj.jE,false);}
ii=x[0].getElementsByTagName('showtime');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";jb=(jb=='y')?true:false;if(jb!=jj.eM){k4(jb);}
ii=x[0].getElementsByTagName('prefetch');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"1";eb.K2="0123456789abcdefghijklmnopqrstuvwxyz".indexOf(jb.toLowerCase())*1000;if(eb.eD<=0)eb.eD=1000;}
x=cr.getElementsByTagName('msws');if(x.length>=1){var ii=x[0].getElementsByTagName('spamblocker');var jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";eb.eN=(jb=='1')?true:false;ii=x[0].getElementsByTagName('virusprotection');jb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";eb.eO=(jb=='1')?true:false;}
kN(false);var kA=eb.K2;kz(kA);}
function tY(){var kA;var cJ=ek()+'?cmd=Pref&sid='+eb.eo+'&templ=preferences.xml';if(jj.jB)np("menu","loading url="+cJ);s5('getpref',cJ);f_();}
function k1(cV){cV=cV?cV:window.event;if(jj.jB)np("menu","toggleDebugWidth()");jj.tu=kH(jj.tu,"debugWidthCheck");var k2=ao('debugDiv');if(jj.tu)k2.width=jj.K_;else k2.width='250px';if(cV){cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();}
return false;}
function k3(kD){var kr=rY(kD);if(kr==null){return false;}
else if((kr.style.display=="none")||(kr.style.display=="")){kr.style.display="block";return true;}
else {kr.style.display="none";return false;}
}
function k4(jb){eb.eM=kH(!jb,"timeStampCheck");if(jj.jB)np("menu","toggleTimeStamp(): showTS="+eb.eM);hS();}
function k5(cV){cV=cV?cV:window.event;eb.eM=kH(eb.eM,"timeStampCheck");if(jj.jB)np("menu","toggleTimeStamp(): showTS="+eb.eM);hS();if(jj.jB)np("menu","toggleTimeStamp() done redrawing");var jb=(eb.eM)?"y":"n";km("pf_time",jb);cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();return false;}
function k6(k7,k8){if(jj.jB)np("menu","setFilterCriteria("+k7+","+k8+")");kG('viewAllCheck');kG('viewUnreadCheck');kG('viewTodayCheck');kG('viewTwodaysCheck');kG('viewWeekCheck');kG('viewMonthCheck');kG('viewAttachmentsCheck');xg();if(k8=='backToAll'){rY('filterstr').value='Search mail...';jj.w2=null;k8='viewAllCheck';}
kF(k8);if(k7==null){k7="all";}
eb.eu=k7;if(k7!="all"){l8('filtertext',k7);}
ge("nochange",false);if(jM!=null)jU(jM);jM=null;return false;}
function k9(){var hz=rY('filterstr').value.toLowerCase();if((hz=="search mail...")||(hz==""))hz=null;else jj.w2=hz;vH("[Searching]");xg();ge("nochange",false);if(jM!=null)jU(jM);jM=null;vI();return false;}
function k_(){alert("newMessage");return false;}
function la(){g2();GR("Are you sure you want to exit Advanced Webmail?",null,"Yes","No",function (){self.close();}
,null);}
function lb(){var cJ="cmd=Compose&popup=yes&js=yes";if(ld()){cJ+="&templ="+eb.eP;}
cJ+="&sid="+eb.eo;return lr(cJ);}
function wh(dE){var ct=dH(dE);if(ct<0){return -1;}
var hQ;var dt;var du;var wi=0;for(var al=0;al<lw.lx.length;al++){if(ct==lw.lx[al]){break;}
hQ=lw.lx[al];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){wi++;}
}
if(al==lw.lx.length){return -2;}
return wi;}
function wj(wk,dE,e5,ig){var jb=wu(wk,dE,e5,ig);if(typeof (jb)=='string')return jb;fL="cmd=Show";fL+="&sid="+eb.eo+"&folder="+wY(eb.en);fL+="&advnum="+jb[1]+"&advtot="+jb[2];return fL+"&uid="+jb[0]+"&popup=yes&js=yes";}
function wu(wk,dE,e5,ig,wl){if(ig!=eb.eo){return "Error: wrong mailbox";}
if(ws(e5)!=eb.en){return "Error: wrong folder";}
var uZ=lw.lA;if(wl)uZ--;if(uZ==0){return "Error: no messages displayed";}
var ct=dH(dE);if(ct<0){return "Error: uid missing";}
var hQ;var dt;var du;var wi=0;for(var al=0;al<lw.lx.length;al++){if(ct==lw.lx[al]){break;}
hQ=lw.lx[al];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){wi++;}
}
if(al==lw.lx.length){return "Error: uid not displayed";}
var wm=(wk=="next")?1:-1;for(var wn=al+wm;wn>=0&&wn<lw.lx.length;wn+=wm){hQ=lw.lx[wn];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){break;}
}
wi=(wk=="next")?wi+1:wi-1;if(wn<0){wi=0;for(wn=0;wn<lw.lx.length;wn++){hQ=lw.lx[wn];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){break;}
}
}
if(wn>=lw.lx.length){wi=uZ;for(wn=lw.lx.length-1;wn>=0;wn--){hQ=lw.lx[wn];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){break;}
}
}
if(wn==al&&wl){for(wn=al-1;wn>=0;wn--){hQ=lw.lx[wn];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){break;}
}
}
if(!wl&&wi!=uZ)wi++;hQ=lw.lx[wn];var Le=Lj(hQ);var iZ=Le.fA;var uT=new Array();uT[0]=iZ;uT[1]=wi;uT[2]=uZ;return uT;}
function lc(){if(eb.en=='Draft'||eb.en=='SentMail'){return le();}
else {return lu('Show');}
}
function ld(){return (document.execCommand&&a6&&!bI)}
function le(){if(dk.uJ){return false;}
var lf=null;if(ld()){lf=eb.eP;}
return lu('ReCompose',lf);}
function lg(){var lf=null;if(ld()){lf=eb.eQ;}
return lu('Reply',lf);}
function lh(){var lf=null;if(ld()){lf=eb.eQ;}
return lu('ReplyAll',lf);}
function li(){var lf=null;if(ld()){lf=eb.eR;}
return lu('Forward',lf);}
function yb(){return yd(1);}
function yc(){return yd(0);}
function lj(){return lu('ShowSrc',null);}
function lk(){return lu('Print',null);}
function ll(lm){var e5=lm.e_folders.value;if(e5==null||e5==''){alert("Please select a folder...");return false;}
if(e5==eb.en){alert("Error:  you cannot move or copy messages within the same folder.");return false;}
else {vH("[Moving]");lp('Move',e5,function (){vI();}
);}
return false;}
function ln(dE,e5,ig){lp('Delete','Trash',null,dE,e5,ig);}
function lo(){h6();}
function lp(action,vb,GW,dE,e5,ig){if((action=='Delete')&&(e5==null)&&(eb.en=="Trash")){GR("Are you sure",null,"Yes","No",function (){GX(action,vb,dE,e5,ig);if(GW)GW();}
,function (){if(GW)GW();}
);}
else {GX(action,vb,dE,e5,ig);if(GW)GW();}
}
function GX(action,vb,dE,e5,ig){var xm=xl.xm;if(xm==-1)xm=eb.ev+1;if(jj.GA&&(dk.uy>=xm)){GR("You are about to move "+dk.uy+" messages. Select OK to continue.","<input type='checkbox' id='removeMoveConfirmationCheckbox'/> Don't show this message again.","OK","Cancel",function (){if($('removeMoveConfirmationCheckbox').checked){GB(true);}
GY(action,vb,dE,e5,ig);}
,function (){if($('removeMoveConfirmationCheckbox').checked){GB(true);}
}
);}
else {GY(action,vb,dE,e5,ig);}
}
function GY(action,vb,dE,e5,ig){var xj=null;var xk=0;var wo=eb.en;var cJ=ek()+"?cmd=ListManage&xmlack=y";if(dE){d4(dE,false);xj=dk.dm;xk=dk.uy;dk.dm=null;dk.uy=0;d4(dE,true);}
if((e5&&ws(e5)!=eb.en)||(ig&&ig!=eb.eo)){wo=ws(e5);tN="&msg0="+dE;if(!ig||ig==eb.eo){u1(wo,vb,1,0,false);}
}
else {tN=dv();ds(eb.en,vb,(action=="ReportSpam"));}
if(!dE){lo();}
else if(dH(dE)==eb.eL){lo();}
if(tN==null||tN==""){if(dE){dk.dm=xj;dk.uy=xk;}
else {alert("Please select a message first.");}
return false;}
if(action=='Move'){actionStr="&e_move_marked=true&e_folders="+wY(vb);}
else if(action=='Delete'){actionStr="&e_del_marked=true";}
else if(action=='ReportSpam'){actionStr="&e_spam_marked=true";}
else if(action=='ReportNotSpam'){actionStr="&e_notspam_marked=true";}
cJ+=actionStr;if(ig)cJ+="&sid="+ig;else cJ+="&sid="+eb.eo;cJ+="&folder="+wY(wo);if(cJ.length+tN.length>1023){var tZ=1023-cJ.length;var t0;var t1;while(tN.length>tZ){t0=tN.substr(0,tZ);t1=t0.lastIndexOf('&');t0=t0.substr(0,t1);s5('move',cJ+t0);tN=tN.substr(t1);}
s5('move',cJ+tN);f_();}
else {cJ+=tN;if(wo!=eb.en){dk.dn=new Array;dk.dn[0]=dE;}
s5('move',cJ,dk.dn);f_();dk.dn=null;}
if(dE){dk.dm=xj;dk.uy=xk;}
}
function yd(uX,dE,e5,ig){var xm=xl.xm;if(xm==-1)xm=eb.ev+1;if(jj.GA&&(dk.uy>=xm)){GR("You are about to mark "+dk.uy+" messages. Select OK to continue.","<input type='checkbox' id='removeMoveConfirmationCheckbox'/> Don't show this message again.","OK","Cancel",function (){if($('removeMoveConfirmationCheckbox').checked){GB(true);}
GZ(uX,dE,e5,ig);}
,function (){if($('removeMoveConfirmationCheckbox').checked){GB(true);}
}
);}
else {GZ(uX,dE,e5,ig);}
}
function GZ(uX,dE,e5,ig){var xj=null;var xk=0;var wo=eb.en;var cJ=ek()+"?cmd=ListManage&xmlack=y";if(dE){xj=dk.dm;xk=dk.uy;dk.dm=null;dk.uy=0;d4(dE,true);}
if((e5&&ws(e5)!=eb.en)||(ig&&ig!=eb.eo)){wo=ws(e5);tN="&msg0="+dE;}
else {tN=dv();}
if(tN==null||tN==""){if(dE){dk.dm=xj;dk.uy=xk;}
else {alert("Please select a message first.");}
return false;}
if(e5&&eb.en!=e5){return ;}
for(var ye=0;ye<eb.ec.length;ye++){if(eb.ec[ye].e5==eb.en){break;}
}
totfound=0;for(var al=0;al<dk.dm.length;al++){if(dk.dm[al]==null)continue;hQ=dH(dk.dm[al]);if(hQ==-1)continue;var Le=Lj(hQ);fo=(Le.fB&eU.eZ)?1:0;if(uX&&!fo){Le.fB|=eU.eZ;eb.eI--;eb.ec[ye].e6--;}
else if(!uX&&fo){Le.fB&=~eU.eZ;eb.eI++;eb.ec[ye].e6++}
}
up();if((eb.en=="INBOX")||jj.jE||(eb.en=="Screened Mail"))ij();if(uX){actionStr="&e_read_marked=true";}
else {actionStr="&e_unread_marked=true";}
cJ+=actionStr;if(ig)cJ+="&sid="+ig;else cJ+="&sid="+eb.eo;cJ+="&folder="+wY(wo);if(cJ.length+tN.length>1023){var tZ=1023-cJ.length;var t0;var t1;while(tN.length>tZ){t0=tN.substr(0,tZ);t1=t0.lastIndexOf('&');t0=t0.substr(0,t1);s5('move',cJ+t0);tN=tN.substr(t1);}
s5('move',cJ+tN);f_();}
else {cJ+=tN;if(wo!=eb.en){dk.dn=new Array;dk.dn[0]=dE;}
s5('move',cJ,dk.dn);f_();dk.dn=null;}
if(dE){dk.dm=xj;dk.uy=xk;}
}
function fY(dE,e5){if(jj.jt){GR("If messages from a sender are reported as spam by many different people,<br/>and those messages meet other criteria, corrective action will be taken.<br/><br/>When you report a message as spam, it is deleted from your Inbox and moved to your Trash folder,<br/> where you can retrieve it, should you want to, or delete it permanently.",null,"OK","Cancel",function (){lp("ReportSpam",'Trash');}
,null);}
else {lp("ReportSpam",'Trash');}
return ;}
function fZ(dE,e5,ig){GR("Checked messages will be moved to your Inbox folder. A copy of each message will be sent to the e-mail support team that manages our spam filter.",null,"OK","Cancel",function (){GX("ReportNotSpam",'INBOX',dE,e5,ig);}
,null);}
function lr(cJ){var hJ;if(screen.height<=884){hJ=eval(parseInt(screen.height*0.88));}
else {hJ=750;}
var hK=eval((screen.width-714)/2);var hL=eval((screen.height-hJ)/4);var hB=new Date();var ls=hB.getMilliseconds();var lt="";var hM=window.open(ek()+"?"+cJ,ls,'width=766,height='+hJ+',top='+hL+',left='+hK+',scrollbars=yes,resizable=yes,menubar=no,toolbar=no,status=no,location=no,address=no');hM.focus();hM.opener=self;return false;}
function lu(wp,lv){var dE;var fL="cmd="+wp;dE=d6();if(dE==""){alert("Please select a message first.");return ;}
if(jM){jU(jM);jM=null;}
if(lv)fL+="&templ="+lv;fL+="&sid="+eb.eo+"&folder="+wY(eb.en);if(wp=="Show"){var wi=wh(dE);wi++;fL+="&advnum="+wi+"&advtot="+lw.lA;}
return lr(fL+"&uid="+dE+"&popup=yes&js=yes");}
function wv(dE,e5,vb,action){var wo=eb.en;if(e5&&ws(e5)!=wo){wo=ws(e5);u1(wo,vb,1,0,false);}
else {var dx=dk.dm;dk.dm=null;d4(dE,true);ds(eb.en,vb,(action=="ReportSpam"));dk.dm=dx;if(dH(dE)==eb.eL){lo();}
}
}
function vc(){if(tP.u7!=null){if(tP.u7=="delete"){wv(tP.u8,tP.u9,'Trash');}
else if(tP.u7=='reportspam'){wv(tP.u8,tP.u9,'Trash','ReportSpam');}
else if(tP.u7=='notspam'){wv(tP.u8,tP.u9,'INBOX');}
else if(tP.u7=='move'){wv(tP.u8,tP.u9,tP.v2);}
}
tP.u7=null;tP.u8=null;tP.u9=null;tP.v2=null;}
function t2(){if(tP.tQ!=null&&tP.folderArg3==eb.eo){if(tP.tQ=="empty"){if(tP.tS==eb.en){eb.ez=null;eb.ew=0;eb.eE=0;lw.lx=new Array();yg();lw.lA=0;var h0=rY('messagelistdiv');h0.innerHTML="";l_();}
for(var al=0;al<eb.ec.length;al++){if(tP.tS==eb.ec[al].e5){eb.ec[al].e6=0;eb.ec[al].e9=0;break;}
}
ij();}
else if(tP.tQ=="rename"){if(tP.tS==eb.en){fT(tP.tR);}
else {for(var al=0;al<eb.ec.length;al++){if(tP.tS==eb.ec[al].e5){eb.ec[al].e5=tP.tR;break;}
}
ij();}
}
else if(tP.tQ=="add"){var dx=tP.tS.toLowerCase();if(!(eb.ec)){eb.ec=new Array();}
for(var al=eb.ec.length;al>0;al--){if(dx>=eb.ec[al-1].e5.toLowerCase()){eb.ec[al]=new e4(tP.tS,0,1,"/",0);break;}
else {eb.ec[al]=eb.ec[al-1];}
}
if(al==0)eb.ec[0]=new e4(tP.tS,0,1,"/",0);ij();}
else if(tP.tQ=="delete"){if(tP.tS==eb.en){fT("INBOX");}
else {for(var al=0;al<eb.ec.length;al++){if(tP.tS==eb.ec[al].e5){eb.ec.splice(al,1);break;}
}
ij();}
}
}
tP.tQ=null;tP.tS=null;tP.tR=null;}
function t3(){if(tP.tT!=null){if(tP.tT=="add"){var dx=tP.tV.toLowerCase();if(!(eb.ei)){eb.ei=new Array();}
for(var al=eb.ei.length;al>0;al--){if(dx>=eb.ei[al-1].fe.toLowerCase()){eb.ei[al]=new e_(1,"",tP.tU,"",tP.tV);break;}
else {eb.ei[al]=eb.ei[al-1];}
}
if(al==0)eb.ei[0]=new e_(1,"dummy",tP.tU,"dummy",tP.tV);ij();}
else if(tP.tT=="delete"){if(tP.tU==eb.eo){ie("INBOX",'c0');}
else {for(var al=0;al<eb.ei.length;al++){if(tP.tU==eb.ei[al].fe){eb.ei.splice(al,1);break;}
}
ij();}
}
}
tP.tT=null;tP.tU=null;tP.tV=null;}
function t4(){if(tP.tW!=null&&tP.wt==eb.eo){if(tP.tW=="save"){tY();}
}
tP.tW=null;tP.wt=null;}
function t7(){tP.tQ=null;tP.tS=null;tP.tR=null;tP.tT=null;tP.tU=null;tP.tV=null;tP.u7=null;tP.u8=null;tP.u9=null;tP.v2=null;tP.tW=null;tP.wt=null;}
function updates(which,t9,t_,ua,v3,ww){var dx;if(which=='option'){if(!t9){t4();}
else if(t9=='clear'){tP.tW=null;tP.wt=null;}
else if(t9=='confsend'){if(t_&&t_!=eb.eo){var jb=(ua)?false:true;km("pf_conf_sent",jb,t_);}
else {if(ua){jj.jr=ua;}
kR(true);}
}
else if(t9=='confdraft'){if(t_&&t_!=eb.eo){var jb=(ua)?false:true;km("pf_conf_draft",jb,t_);}
else {if(ua){jj.js=ua;}
kS(true);}
}
else if(t9=='image'){if(t_&&t_!=eb.eo){alert("Mailbox doesn't match.");}
else {hH('Option2','htmlimg');}
}
else {tP.tW=t9;tP.wt=t_;}
}
else if(which=='folder'){if(!t9){t2();}
else if(t9=='msgcenter'){LV("INBOX",t_,ua);JF('Z__'+eb.en);}
else if(t9=='add'){tP.tQ='add';tP.tS=t_;tP.tR=null;tP.folderArg3=ua;}
else if(t9=='empty'){tP.tQ='empty';tP.tS=t_;tP.tR=null;tP.folderArg3=ua;}
else if(t9=='rename'){tP.tQ='rename';tP.tS=t_;tP.tR=ua;tP.folderArg3=v3;}
else if(t9=='delete'){tP.tQ='delete';tP.tS=t_;tP.folderArg3=ua;}
else if(t9=='reload'){if(eb.en==t_){ie(t_,eb.eo);}
}
else if(t9=='switchto'){ie(t_,ua);}
}
else if(which=='mailbox'){if(!t9){t3();}
else if(t9=='current'){return eb.eo;}
else if(t9=='clear'){tP.tT=null;tP.tU=null;tP.tV=null;}
else if(t9=='add'){tP.tT='add';tP.tU=t_;tP.tV=null;}
else if(t9=='add2'){tP.tT='add2';tP.tU=t_;tP.tV=null;}
else if(t9=='delete'){tP.tT='delete';tP.tU=t_;}
else if(t9=='addsid'){tP.tT='add';tP.tV=t_;}
else if(t9=='switchto'){ie("INBOX",t_);}
}
else if(which=='message'){if(!t9){vc();}
else if(t9=='read'){if(eb.en==ua&&eb.eo==v3){var hQ=dH(unescape(t_));if(hQ!=-1){u0(hQ,ua);}
}
}
else if(t9=='savedraft'){if(eb.en=='Draft'){setTimeout(vW,3000);}
if(t_!='1'){u1("","Draft",1,1,false);}
}
else if(t9=='reply'){if(eb.en==ua){vO(unescape(t_),ua,eU.eV);}
}
else if(t9=='forward'){if(eb.en==ua){vO(unescape(t_),ua,eU.eW);}
}
else if(t9=='send'){if(t_=="1"){u1("","SentMail",1,1,false);}
}
else if(t9=='previous'){return wj('previous',t_,ua,v3);}
else if(t9=='next'){return wj('next',t_,ua,v3);}
else if(t9=='move'){var dx=wu('next',t_,ua,v3,true);if(typeof (dx)=='string'){GX('Move',ww,t_,ua,v3);}
else {tP.u7=t9;tP.u8=t_;tP.u9=ua;tP.v2=ww;}
return dx;}
else if(t9=='delete'){if(ua==null){ua=iT(eb.en);ln(t_,ua,v3);return ;}
var dx=wu('next',t_,ua,v3,true);if(typeof (dx)=='string'){ln(t_,ua,v3);}
else {tP.u7=t9;tP.u8=t_;tP.u9=ua;tP.v2=v3;}
return dx;}
else if(t9=='reportspam'){var dx=wu('next',t_,ua,v3,true);if(typeof (dx)=='string'){GX('ReportSpam','Trash',t_,ua,v3);}
else {tP.u7=t9;tP.u8=t_;tP.u9=ua;tP.v2=v3;}
return dx;}
else if(t9=='notspam'){var dx=wu('next',t_,ua,v3,true);if(typeof (dx)=='string'){GX("ReportNotSpam",'INBOX',t_,ua,v3);}
else {tP.u7=t9;tP.u8=t_;tP.u9=ua;tP.v2=v3;}
return dx;}
else if(t9=='error'){if(t_&&(t_.indexOf("Message UIDs are changed")>=0)){alert("Message Identifiers have changed on the server.  Reloading all messages.");ie(escape(eb.en),eb.eo);}
}
else if(t9=='contextmenu'){var h7=rY('readmessage');if(t_){nw(t_,'messageMenu',h7,true);}
}
}
else if(which=='clear'){t7();}
}
function getMailboxRequest(uc){if(uc)return tP.tU;else return tP.tT;}
function vW(){if(eb.en=='Draft')ie('Draft',eb.eo);}
function yf(){window.location=xl.sY+"/"+Math.random();return false;}

///<!--
/// Ultimate client-side JavaScript client sniff. Version 3.03
/// (C) Netscape Communications 1999-2001.  Permission granted to reuse and distribute.
/// Revised 17 May 99 to add is_nav5up and is_ie5up (see below).
/// Revised 20 Dec 00 to add is_gecko and change is_nav5up to is_nav6up
///                      also added support for IE5.5 Opera4&5 HotJava3 AOLTV
/// Revised 22 Feb 01 to correct Javascript Detection for IE 5.x, Opera 4,
///                      correct Opera 5 detection
///                      add support for winME and win2k
///                      synch with browser-type-oo.js
/// Revised 26 Mar 01 to correct Opera detection
/// Revised 02 Oct 01 to add IE6 detection
var aL=navigator.userAgent.toLowerCase();var aM=parseInt(navigator.appVersion);var aN=parseFloat(navigator.appVersion);var aO=((aL.indexOf('mozilla')!=-1)&&(aL.indexOf('spoofer')==-1)&&(aL.indexOf('compatible')==-1)&&(aL.indexOf('opera')==-1)&&(aL.indexOf('webtv')==-1)&&(aL.indexOf('hotjava')==-1));var aP=(aO&&(aM==2));var aQ=(aO&&(aM==3));var aR=(aO&&(aM==4));var aS=(aO&&(aM>=4));var aT=(aO&&((aL.indexOf(";nav")!=-1)||(aL.indexOf("; nav")!=-1)));var aU=(aO&&(aM==5));var aV=(aO&&(aM>=5));var aW=(aO&&(aL.indexOf('netscape/7')!=-1));var aX=(aL.indexOf('gecko')!=-1);var aY=(aO&&(aL.indexOf('rv:1.')!=-1));var aZ=((aL.indexOf("msie")!=-1)&&(aL.indexOf("opera")==-1));var a0=(aZ&&(aM<4));var a1=(aZ&&(aM==4)&&(aL.indexOf("msie 4")!=-1));var a2=(aZ&&(aM>=4));var a3=(aZ&&(aM==4)&&(aL.indexOf("msie 5.0")!=-1));var a4=(aZ&&(aM==4)&&(aL.indexOf("msie 5.5")!=-1));var a5=(aZ&&!a0&&!a1);var a6=(aZ&&!a0&&!a1&&!a3);var a7=(aZ&&(aM==4)&&(aL.indexOf("msie 6.")!=-1));var a8=(aZ&&!a0&&!a1&&!a3&&!a4);var a9=(aL.indexOf("aol")!=-1);var a_=(a9&&a0);var ba=(a9&&a1);var bb=(aL.indexOf("aol 5")!=-1);var bc=(aL.indexOf("aol 6")!=-1);var bd=(aL.indexOf("opera")!=-1);var be=(aL.indexOf("opera 2")!=-1||aL.indexOf("opera/2")!=-1);var bf=(aL.indexOf("opera 3")!=-1||aL.indexOf("opera/3")!=-1);var bg=(aL.indexOf("opera 4")!=-1||aL.indexOf("opera/4")!=-1);var bh=(aL.indexOf("opera 5")!=-1||aL.indexOf("opera/5")!=-1);var bi=(aL.indexOf("opera 6")!=-1||aL.indexOf("opera/6")!=-1);var bj=(aL.indexOf("opera 7")!=-1||aL.indexOf("opera/7")!=-1);var bk=(aL.indexOf("opera 8")!=-1||aL.indexOf("opera/8")!=-1);var bl=(bd&&!be&&!bf&&!bg);var bm=(bd&&!bh&&!bi&&!bj);var bn=(aL.indexOf("webtv")!=-1);var bo=(navigator.appVersion.indexOf("Safari")>-1);var bp=navigator.userAgent.lastIndexOf("/")+1;var bq=parseInt(navigator.userAgent.substring(bp));var br=(bq>=125);var bs=((aL.indexOf("navio")!=-1)||(aL.indexOf("navio_aoltv")!=-1));var bt=bs;var bu=(aL.indexOf("hotjava")!=-1);var bv=(bu&&(aM==3));var bw=(bu&&(aM>=3));var bx;if(aP||a0)bx=1.0;else if(aQ)bx=1.1;else if(bl)bx=1.3;else if(bd)bx=1.1;else if((aR&&(aN<=4.05))||a1)bx=1.2;else if((aR&&(aN>4.05))||a3)bx=1.3;else if(bw)bx=1.4;else if(aU||aX)bx=1.5;else if(aV)bx=1.5;else if(a5)bx=1.3;else bx=0.0;var by=((aL.indexOf("win")!=-1)||(aL.indexOf("16bit")!=-1));var bz=((aL.indexOf("win95")!=-1)||(aL.indexOf("windows 95")!=-1));var bA=((aL.indexOf("win16")!=-1)||(aL.indexOf("16bit")!=-1)||(aL.indexOf("windows 3.1")!=-1)||(aL.indexOf("windows 16-bit")!=-1));var bB=((aL.indexOf("windows 3.1")!=-1)||(aL.indexOf("win16")!=-1)||(aL.indexOf("windows 16-bit")!=-1));var bC=((aL.indexOf("win 9x 4.90")!=-1));var bD=((aL.indexOf("windows nt 5.0")!=-1));var bE=((aL.indexOf("win98")!=-1)||(aL.indexOf("windows 98")!=-1));var bF=((aL.indexOf("winnt")!=-1)||(aL.indexOf("windows nt")!=-1));var bG=(bz||bF||bE||((aM>=4)&&(navigator.platform=="Win32"))||(aL.indexOf("win32")!=-1)||(aL.indexOf("32bit")!=-1));var bH=((aL.indexOf("os/2")!=-1)||(navigator.appVersion.indexOf("OS/2")!=-1)||(aL.indexOf("ibm-webexplorer")!=-1));var bI=(aL.indexOf("mac")!=-1);if(bI&&a5)bx=1.4;var bJ=(bI&&((aL.indexOf("68k")!=-1)||(aL.indexOf("68000")!=-1)));var bK=(bI&&((aL.indexOf("ppc")!=-1)||(aL.indexOf("powerpc")!=-1)));var bL=(aL.indexOf("sunos")!=-1);var bM=(aL.indexOf("sunos 4")!=-1);var bN=(aL.indexOf("sunos 5")!=-1);var bO=(bL&&(aL.indexOf("i86")!=-1));var bP=(aL.indexOf("irix")!=-1);var bQ=(aL.indexOf("irix 5")!=-1);var bR=((aL.indexOf("irix 6")!=-1)||(aL.indexOf("irix6")!=-1));var bS=(aL.indexOf("hp-ux")!=-1);var bT=(bS&&(aL.indexOf("09.")!=-1));var bU=(bS&&(aL.indexOf("10.")!=-1));var bV=(aL.indexOf("aix")!=-1);var bW=(aL.indexOf("aix 1")!=-1);var bX=(aL.indexOf("aix 2")!=-1);var bY=(aL.indexOf("aix 3")!=-1);var bZ=(aL.indexOf("aix 4")!=-1);var b0=(aL.indexOf("inux")!=-1);var b1=(aL.indexOf("sco")!=-1)||(aL.indexOf("unix_sv")!=-1);var b2=(aL.indexOf("unix_system_v")!=-1);var b3=(aL.indexOf("ncr")!=-1);var b4=(aL.indexOf("reliantunix")!=-1);var b5=((aL.indexOf("dec")!=-1)||(aL.indexOf("osf1")!=-1)||(aL.indexOf("dec_alpha")!=-1)||(aL.indexOf("alphaserver")!=-1)||(aL.indexOf("ultrix")!=-1)||(aL.indexOf("alphastation")!=-1));var b6=(aL.indexOf("sinix")!=-1);var b7=(aL.indexOf("freebsd")!=-1);var b8=(aL.indexOf("bsd")!=-1);var b9=((aL.indexOf("x11")!=-1)||bL||bP||bS||b1||b2||b3||b4||b5||b6||bV||b0||b8||b7);var b_=((aL.indexOf("vax")!=-1)||(aL.indexOf("openvms")!=-1));
///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
function wx(source,c5,nm){var fi=screen.height/2-nm/2;var rb=screen.width/2-c5/2;var wz='height='+nm+',width='+c5+',top='+fi+',left='+rb+',scrollbars=0,resizable=0';var wA=window.open(xl.sR+source,"eFaxWin",wz);wA.focus();}
function vH(fj){var an=rY("feedBack");if(an&&an.style){an.innerHTML="[ Working ]";an.style.display="block";}
}
function vI(){var vJ=setTimeout(vK,1000*xl.vL);}
function vK(){var an=rY("feedBack");if(an&&an.style){an.style.display="none";}
}

///* ***********************************************************
///Example 4-3 (DHTMLapi.js)
///"Dynamic HTML:The Definitive Reference"
///2nd Edition
///by Danny Goodman
///Published by O'Reilly & Associates  ISBN 1-56592-494-0
///http://www.oreilly.com
///Copyright 2002 Danny Goodman.  All Rights Reserved.
///************************************************************ */
/// DHTMLapi.js custom API for cross-platform
/// object positioning by Danny Goodman (http://www.dannyg.com).
/// Release 2.0. Supports NN4, IE, and W3C DOMs.
var aa={ab:null,ac:null,ad:null,ae:null,af:null}
;function ag(){if(document.images){aa.ab=(document.body&&document.body.style)?true:false;aa.ac=(aa.ab&&document.getElementById)?true:false;aa.ad=(aa.ab&&document.all)?true:false;aa.ae=(document.layers)?true:false;aa.af=(document.compatMode&&document.compatMode.indexOf("CSS1")>=0)?true:false;}
}
window.onload=ag;function ah(ai,aj){var ak;for(var al=0;al<ai.layers.length;al++){if(ai.layers[al].name==aj){ak=ai.layers[al];break;}
if(ai.layers[al].document.layers.length>0){ak=ah(document.layers[al].document,aj);}
}
return ak;}
function am(an){var ak;if(typeof an=="string"){if(aa.ac){ak=document.getElementById(an);}
else if(aa.ad){ak=document.all(an);}
else if(aa.ae){ak=ah(document,an);}
if(ak==null){if(jj.jB)np("dhtml","getRawObject:obj "+an+" is null");}
}
else {ak=an;}
return ak;}
function ao(an){var ak=am(an);if(ak&&aa.ab){ak=ak.style;}
return ak;}
function ap(an,x,y){var ak=ao(an);if(ak){if(aa.ab){var as=(typeof ak.left=="string")?"px":0;ak.left=x+as;ak.top=y+as;}
else if(aa.ae){ak.moveTo(x,y);}
}
}
function at(an,au,av){var ak=ao(an);if(ak){if(aa.ab){var as=(typeof ak.left=="string")?"px":0;var rb=aC(an);ak.left=(isNaN(rb)?0:rb)+au+as;var fi=aG(an);ak.top=(isNaN(fi)?0:fi)+av+as;}
else if(aa.ae){ak.moveBy(au,av);}
}
}
function aw(an,ax){var ak=ao(an);if(ak){ak.zIndex=ax;}
}
function ay(an,az){var ak=ao(an);if(ak){if(aa.ae){ak.bgColor=az;}
else if(aa.ab){ak.backgroundColor=az;}
}
}
function aA(an){var ak=ao(an);if(ak){ak.visibility="visible";}
}
function aB(an){var ak=ao(an);if(ak){ak.visibility="hidden";}
}
function aC(an){var aD=am(an);if(aD==null){return 0;}
var aE=0;if(document.defaultView){var style=document.defaultView;var aF=style.getComputedStyle(aD,"");aE=aF.getPropertyValue("left");}
else if(aD.currentStyle){aE=aD.currentStyle.left;if(aE=="auto"){if(aD.style){aE=aD.style.pixelLeft;}
else {aE=aD.offsetLeft;}
}
}
else if(aD.style){aE=aD.style.left;}
else if(aa.ae){aE=aD.left;}
return parseInt(aE);}
function aG(an){var aD=am(an);if(aD==null){return 0;}
var aE=0;if(document.defaultView){var style=document.defaultView;var aF=style.getComputedStyle(aD,"");aE=aF.getPropertyValue("top");}
else if(aD.currentStyle){aE=aD.currentStyle.top;if(aE=="auto"){if(aD.style){aE=aD.style.top;}
else {aE=aD.offsetTop;}
}
}
else if(aD.style){aE=aD.style.top;}
else if(aa.ae){aE=aD.top;}
return parseInt(aE);}
function aH(an){var aD=am(an);var aE=0;if(aD.offsetWidth){aE=aD.offsetWidth;}
else if(aD.clip&&aD.clip.width){aE=aD.clip.width;}
else if(aD.style&&aD.style.pixelWidth){aE=aD.style.pixelWidth;}
return parseInt(aE);}
function aI(an){var aD=am(an);var aE=0;if(aD.offsetHeight){aE=aD.offsetHeight;if(jj.jB)np("dhtml","getObjectHeight:obj="+an+",offsetHeight="+aE);}
else if(aD.clip&&aD.clip.height){aE=aD.clip.height;if(jj.jB)np("dhtml","getObjectHeight:obj="+an+",clip.height="+aE);}
else if(aD.style&&aD.style.pixelHeight){aE=aD.style.pixelHeight;if(jj.jB)np("dhtml","getObjectHeight:obj="+an+",style.pixelHeight="+aE);}
return parseInt(aE);}
function aJ(){if(window.innerWidth){return window.innerWidth;}
else if(aa.af){return document.body.parentElement.clientWidth}
else if(document.body&&document.body.clientWidth){return document.body.clientWidth;}
return 0;}
function aK(){if(window.innerHeight){return window.innerHeight;}
else if(aa.af){return document.body.parentElement.clientHeight}
else if(document.body&&document.body.clientHeight){return document.body.clientHeight;}
return 0;}

/// x_core.js, X v3.15.2, Cross-Browser.com DHTML Library
/// Copyright (c) 2004 Michael Foster, Licensed LGPL (gnu.org)
var rX='3.15.2',xNN4,xOp7,xOp5or6,xIE4Up,xIE4,xIE5,xMac,xUA=navigator.userAgent.toLowerCase();if(window.opera){xOp7=(xUA.indexOf('opera 7')!=-1||xUA.indexOf('opera/7')!=-1);if(!xOp7)xOp5or6=(xUA.indexOf('opera 5')!=-1||xUA.indexOf('opera/5')!=-1||xUA.indexOf('opera 6')!=-1||xUA.indexOf('opera/6')!=-1);}
else if(document.all&&xUA.indexOf('msie')!=-1){xIE4Up=parseInt(navigator.appVersion)>=4;xIE4=xUA.indexOf('msie 4')!=-1;xIE5=xUA.indexOf('msie 5')!=-1;}
else if(document.layers){xNN4=true;}
xMac=xUA.indexOf('mac')!=-1;function rY(rk){if(typeof (rk)!='string')return rk;if(document.getElementById)rk=document.getElementById(rk);else if(document.all)rk=document.all[rk];else if(document.layers)rk=document.layers[rk];else rk=null;return rk;}
function rZ(rk,r0){if(!(rk=rY(rk)))return null;var io=null;if(!r0&&r1(rk.offsetParent))io=rk.offsetParent;else if(r1(rk.parentNode))io=rk.parentNode;else if(r1(rk.parentElement))io=rk.parentElement;return io;}
function r1(){for(var al=0;al<arguments.length;++al){if(typeof (arguments[al])=='undefined')return false;}
return true;}
function r2(fj){for(var al=0;al<arguments.length;++al){if(typeof (arguments[al])!='string')return false;}
return true;}
function r3(r4){for(var al=0;al<arguments.length;++al){if(typeof (arguments[al])!='number')return false;}
return true;}
function r5(rk){if(!(rk=rY(rk)))return ;if(rk.style&&r1(rk.style.visibility))rk.style.visibility='visible';}
function r6(rk){if(!(rk=rY(rk)))return ;if(rk.style&&r1(rk.style.visibility))rk.style.visibility='hidden';}
function r7(rk,r8){if(!(rk=rY(rk)))return 0;if(rk.style&&r1(rk.style.zIndex)){if(r3(r8))rk.style.zIndex=r8;r8=parseInt(rk.style.zIndex);}
return r8;}
function r9(rk,r_){if(!(rk=rY(rk)))return '';var sa='';if(rk.style&&r1(rk.style.az)){if(r2(r_))rk.style.az=r_;sa=rk.style.az;}
return sa;}
function sb(rk,r_,sc){if(!(rk=rY(rk)))return '';var sd='';if(rk.style){if(r2(r_)){if(!xOp5or6)rk.style.backgroundColor=r_;else rk.style.background=r_;}
if(r2(sc))rk.style.backgroundImage=(sc!='')?'url('+sc+')':null;if(!xOp5or6)sd=rk.style.backgroundColor;else sd=rk.style.background;}
return sd;}
function se(rk,iX,iY){sf(rk,iX);sh(rk,iY);}
function sf(rk,iX){if(!(rk=rY(rk)))return 0;var sg=r1(rk.style);if(sg&&r2(rk.style.left)){if(r3(iX))rk.style.left=iX+'px';else {iX=parseInt(rk.style.left);if(isNaN(iX))iX=0;}
}
else if(sg&&r1(rk.style.pixelLeft)){if(r3(iX))rk.style.pixelLeft=iX;else iX=rk.style.pixelLeft;}
return iX;}
function sh(rk,iY){if(!(rk=rY(rk)))return 0;var sg=r1(rk.style);if(sg&&r2(rk.style.top)){if(r3(iY))rk.style.top=iY+'px';else {iY=parseInt(rk.style.top);if(isNaN(iY))iY=0;}
}
else if(sg&&r1(rk.style.pixelTop)){if(r3(iY))rk.style.pixelTop=iY;else iY=rk.style.pixelTop;}
return iY;}
function si(rk){if(!(rk=rY(rk)))return 0;var x=0;while(rk){if(r1(rk.offsetLeft))x+=rk.offsetLeft;rk=r1(rk.offsetParent)?rk.offsetParent:null;}
return x;}
function sj(rk){if(!(rk=rY(rk)))return 0;var y=0;while(rk){if(r1(rk.offsetTop))y+=rk.offsetTop;rk=r1(rk.offsetParent)?rk.offsetParent:null;}
return y;}
function sk(rk){if(!(rk=rY(rk)))return 0;if(r1(rk.offsetLeft))return rk.offsetLeft;else return 0;}
function sl(rk){if(!(rk=rY(rk)))return 0;if(r1(rk.offsetTop))return rk.offsetTop;else return 0;}
function sm(rk){var ol=0;if(!(rk=rY(rk))){if(document.documentElement&&document.documentElement.scrollLeft)ol=document.documentElement.scrollLeft;else if(document.body&&r1(document.body.scrollLeft))ol=document.body.scrollLeft;}
else {if(r3(rk.scrollLeft))ol=rk.scrollLeft;}
return ol;}
function sn(rk){var ol=0;if(!(rk=rY(rk))){if(document.documentElement&&document.documentElement.scrollTop)ol=document.documentElement.scrollTop;else if(document.body&&r1(document.body.scrollTop))ol=document.body.scrollTop;}
else {if(r3(rk.scrollTop))ol=rk.scrollTop;}
return ol;}
function so(sp,sq,sr,ss,st,su,sv){if(!r3(ss)){ss=st=su=sv=0;}
else if(!r3(st)){st=su=sv=ss;}
else if(!r3(su)){sv=st;su=ss;}
var sw=si(sp),thisY=sj(sp);return (sq>=sw+sv)&&(sq<=sw+sA(sp)-st)&&(sr>=thisY+ss)&&(sr<=thisY+sB(sp)-su);}
function sx(rk,sy,sz){sA(rk,sy);sB(rk,sz);}
function sA(rk,sy){var id=rk;if(!(rk=rY(rk)))return 0;if(r3(sy)){if(sy<0)sy=0;else sy=Math.round(sy);}
else sy=-1;var sg=r1(rk.style);if(sg&&r1(rk.offsetWidth)&&r2(rk.style.width)){if(sy>=0)sE(rk,sy);sy=rk.offsetWidth;}
else if(sg&&r1(rk.style.pixelWidth)){if(sy>=0)rk.style.pixelWidth=sy;sy=rk.style.pixelWidth;}
return sy;}
function sB(rk,sz){if(!(rk=rY(rk)))return 0;if(r3(sz)){if(sz<0)sz=0;else sz=Math.round(sz);}
else sz=-1;var sg=r1(rk.style);if(sg&&r1(rk.offsetHeight)&&r2(rk.style.height)){if(sz>=0)sH(rk,sz);sz=rk.offsetHeight;}
else if(sg&&r1(rk.style.pixelHeight)){if(sz>=0)rk.style.pixelHeight=sz;sz=rk.style.pixelHeight;}
return sz;}
function sC(sp,sD){return parseInt(document.defaultView.getComputedStyle(sp,'').getPropertyValue(sD));}
function sE(sp,sy){var sF=0,pr=0,bl=0,br=0;if(r1(document.defaultView)&&r1(document.defaultView.getComputedStyle)){sF=sC(sp,'padding-left');pr=sC(sp,'padding-right');bl=sC(sp,'border-left-width');br=sC(sp,'border-right-width');}
else if(r1(sp.currentStyle,document.compatMode)){if(document.compatMode=='CSS1Compat'){sF=parseInt(sp.currentStyle.paddingLeft);pr=parseInt(sp.currentStyle.paddingRight);bl=parseInt(sp.currentStyle.borderLeftWidth);br=parseInt(sp.currentStyle.borderRightWidth);}
}
else if(r1(sp.offsetWidth,sp.style.width)){sp.style.width=sy+'px';sF=sp.offsetWidth-sy;}
if(isNaN(sF))sF=0;if(isNaN(pr))pr=0;if(isNaN(bl))bl=0;if(isNaN(br))br=0;var sG=sy-(sF+pr+bl+br);if(isNaN(sG)||sG<0)return ;else sp.style.width=sG+'px';}
function sH(sp,sz){var sI=0,DD=0,bt=0,bb=0;if(r1(document.defaultView)&&r1(document.defaultView.getComputedStyle)){sI=sC(sp,'padding-top');DD=sC(sp,'padding-bottom');bt=sC(sp,'border-top-width');bb=sC(sp,'border-bottom-width');}
else if(r1(sp.currentStyle,document.compatMode)){if(document.compatMode=='CSS1Compat'){sI=parseInt(sp.currentStyle.paddingTop);DD=parseInt(sp.currentStyle.paddingBottom);bt=parseInt(sp.currentStyle.borderTopWidth);bb=parseInt(sp.currentStyle.borderBottomWidth);}
}
else if(r1(sp.offsetHeight,sp.style.height)){sp.style.height=sz+'px';sI=sp.offsetHeight-sz;}
if(isNaN(sI))sI=0;if(isNaN(DD))DD=0;if(isNaN(bt))bt=0;if(isNaN(bb))bb=0;var sJ=sz-(sI+DD+bt+bb);if(isNaN(sJ)||sJ<0)return ;else sp.style.height=sJ+'px';}
function sK(rk,sr,sL,sM,sq){if(!(rk=rY(rk)))return ;if(rk.style){if(r3(sq))rk.style.clip='rect('+sr+'px '+sL+'px '+sM+'px '+sq+'px)';else rk.style.clip='rect(0 '+parseInt(rk.style.width)+'px '+parseInt(rk.style.height)+'px 0)';}
}
function sN(){var c5=0;if(xOp5or6)c5=window.innerWidth;else if(document.body&&document.body.clientWidth)c5=document.body.clientWidth;else if(!window.opera&&document.documentElement&&document.documentElement.clientWidth)c5=document.documentElement.clientWidth;else if(r1(window.innerWidth,window.innerHeight,document.height)){c5=window.innerWidth;if(document.height>window.innerHeight)c5-=16;}
return c5;}
function sO(){var nm=0;if(xOp5or6)nm=window.innerHeight;else if(r1(window.innerWidth,window.innerHeight,document.width)){nm=window.innerHeight;if(document.width>window.innerWidth)nm-=16;}
else if(!window.opera&&document.documentElement&&document.documentElement.clientHeight)nm=document.documentElement.clientHeight;else if(document.body&&document.body.clientHeight)nm=document.body.clientHeight;return nm;}
function sP(rk,sQ){if(!(rk=rY(rk)))return '';if(r2(rk.innerHTML)){if(r2(sQ))rk.innerHTML=sQ;else return rk.innerHTML;}
}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
function Jt(Ju,ol){var om=Ju.indexOf("&",ol);if(om==-1){om=Ju.length;}
return unescape(Ju.substring(ol,om));}
function Jv(Ju,name){var oh=name+"=";var oi=oh.length;var oj=Ju.length;var al=0;while(al<oj){var ct=al+oi;if(Ju.substring(al,ct)==oh){return Jt(Ju,ct);}
al=Ju.indexOf("&",al)+1;if(al==0){break;}
}
return '';}
function ok(ol){var om=document.cookie.indexOf(";",ol);if(om==-1)om=document.cookie.length;return unescape(document.cookie.substring(ol,om));}
function Jw(name){var oh=name+"=";var oi=oh.length;var oj=document.cookie.length;var al=0;while(al<oj){var ct=al+oi;if(document.cookie.substring(al,ct)==oh){return ok(ct);}
al=document.cookie.indexOf(" ",al)+1;if(al==0)break;}
return null;}
function Jx(oq,name){var ox=Jw(oq);if(ox&&ox!=""){return Jv(ox,name);}
return Jw(name);}
function Jy(oq,name,value){var or=Jy.arguments;var os=Jy.arguments.length;var Jz=(os>3)?or[3]:null;var ou=(os>4)?or[4]:null;var domain=(os>5)?or[5]:null;var ow=(os>6)?or[6]:false;var ox=Jw(oq);if(!ox){JA(oq,name+'='+value,Jz,ou,domain,ow);return ;}
var oy=Jv(ox,name);if(!oy){if(ox&&ox!=""){ox+="&";}
ox+=name+"="+value;}
else {var oz=new RegExp(name+"="+oy);ox=ox.replace(oz,name+"="+value);}
JA(oq,ox,Jz,ou,domain,ow);}
function JA(name,value){var or=JA.arguments;var os=JA.arguments.length;var Jz=(os>2)?or[2]:null;var ou=(os>3)?or[3]:null;var domain=(os>4)?or[4]:null;var ow=(os>5)?or[5]:false;document.cookie=name+"="+escape(value)+((Jz==null)?"":("; expires="+Jz.toGMTString()))+((ou==null)?"":("; path="+ou))+((domain==null)?"":("; domain="+domain))+((ow==true)?"; secure":"");}
function JB(name){var exp=new Date();exp.setTime(exp.getTime()-1);var JC=Jw(name);document.cookie=name+"="+JC+"; expires="+exp.toGMTString();}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var mQ={mR:null,mS:null,cZ:null,mT:null,cT:null,mU:null,mV:null,mW:null,wM:144,mX:226,mZ:null,Kj:74,m0:.48,m1:.17,GC:'emailPane',GD:'Normal'}
;var m2={m3:75,m4:145,m5:200,m6:440}
;var m7={m3:153,m4:135,m5:658,m6:400}
;function m8(){mQ.mX=sB("messageheaderdivWrap")+mQ.wM;if(jj.jB)np("pane","queryPane: globals cHtop="+mQ.mX);}
function m9(GE){var mV=sN()-6;var mW=sO()-17;var id=null;var m_=null;var na=null;if(mQ.mV&&mQ.mV==mV&&mQ.mW&&mQ.mW==mW&&!GE){return ;}
mQ.mV=mV;mQ.mW=mW;if(jj.jB)np("pane","paneResize: client="+mV+"Wx"+mW+"H,wnavr="+mQ.m1+",hmlr="+mQ.m0);id="navigationWrap";m_=Math.floor(mV*mQ.m1);sA(id,m_);na=mW-mQ.wM+5;var mX=mQ.mX;var mZ=Math.floor((mW-mX)*mQ.m0);sh(id,143);sf(id,0);mQ.mZ=mZ;if(jj.jn=='Wide'){if(mQ.GC=="emailPane"){na=mZ+sB("messageheaderdivWrap")+2;}
else if(mQ.GC=="rssPane"){na=mZ+mQ.Kj+2;}
}
sB(id,na);var GF=mV-m_+5;var GG=m_;var GH=na;if(mQ.GC=="emailPane"){id='messageheaderdivWrap';}
else if(mQ.GC=="rssPane"){id='rssPane';}
else {id=mQ.GC;}
sA(id,GF);sf(id,m_);if(mQ.GC=="rssPane"){if(jj.jB)np("pane","paneResize: "+id+"="+sA(id)+"Wx"+sB(id)+"H,cHML="+mZ+",pane="+mQ.GC);sB(id,(mZ+mQ.Kj-3));}
else if((mQ.GC!="emailPane")){sB(id,na);}
if(jj.jB)np("pane","paneResize: "+id+"="+sA(id)+"Wx"+sB(id)+"H"+sf(id)+"Left");if(mQ.GC=="emailPane"){id="messagelistdivWrap";sA(id,mV-m_-8);sB(id,mZ+4);sh(id,mX-7);sf(id,m_);if(jj.jB)np("pane","paneResize: "+id+"="+sA(id)+"Wx"+sB(id)+"H,"+sf(id)+"Left,"+sh(id)+"Top");var c5=sA(id)-4;db(c5);}
if((mQ.GC=="emailPane")||(mQ.GC=="rssPane")){if(mQ.GC=="emailPane")id="readmessage";else id="readrss";sB(id,mW-mX-mZ-3+8);sh(id,mX+mZ-1);if(jj.jn=='Wide'){sf(id,0);sA(id,mV+6);}
else {sf(id,m_);sA(id,mV-m_+6);}
if(mQ.GC=="emailPane")id="readmessageWrap";else id="readrssWrap";sB(id,mW-mX-mZ-3+8);sh(id,mX+mZ-1);if(jj.jn=='Wide'){sf(id,0);sA(id,mV+6);}
else {sf(id,m_);sA(id,mV-m_+6);}
}
if(mQ.GC=="emailPane"){mo();}
id="fmLRMaskWrap";sf(id,m_-4);sf("fmLRMask",m_-4);if(jj.jn=='Wide'){sB(id,(na-4));sB("fmLRMask",(na-4));}
else {sB(id,(mW-145-4+2));sB("fmLRMask",(mW-145-4+2));}
if((mQ.GC=="emailPane")||(mQ.GC=="rssPane")){sh("tblFromResize",mX-20);sB("tblFromResize",mZ+10);sh("tblFromMask",mX-20);sB("tblFromMask",mZ+10);sh("tblSubjectResize",mX-20);sB("tblSubjectResize",mZ+10);sh("tblSubjectMask",mX-20);sB("tblSubjectMask",mZ+10);sh("tblDateResize",mX-20);sB("tblDateResize",mZ+10);sh("tblDateMask",mX-20);sB("tblDateMask",mZ+10);}
if((mQ.GC=="emailPane")||(mQ.GC=="rssPane")){id="mpUDMaskWrap";sA(id,mV-m_-6);sh(id,mX+mZ-4);sf(id,m_+6);if(jj.jn=='Wide'){sA(id,mV-2);sf(id,0);}
else {sA(id,mV-m_-6);sf(id,m_+4);}
}
m2.m3=75;m2.m4=145;m2.m5=mV*.40;m2.m6=mW-145-4+2;if(jj.jn=='Wide'){m7.m3=0;}
else {m7.m3=m_+2;}
m7.m4=Math.floor(mX+(mZ*.5));m7.m5=mV;m7.m6=Math.floor(mW*.85);id="copyright";sA(id,mV-2);sh(id,mW+3);sf(id,5);}
function nb(){var m_=null;var na=null;var id=null;var mV=mQ.mV;var mW=mQ.mW;var mZ=mQ.mZ;var mX=mQ.mX;if(jj.jn=='Wide'){if(jj.jo=='Wide'){return ;}
else if(jj.jo=='Minimize'){mQ.m0=.48;mZ=Math.floor((mW-mX)*mQ.m0);mQ.mZ=mZ;if(mQ.GC=="emailPane")cX="readmessageWrap";else cX="readrssWrap";var c0=(mW-mX-mZ-3+8)-sB(cX);cX="mpUDMaskWrap";at(cX,0,(-1*c0));if(mQ.GC=="emailPane")cX="readmessage";else cX="readrss";nl(cX,0,c0);at(cX,0,(-1*c0));if(mQ.GC=="emailPane")cX="readmessageWrap";else cX="readrssWrap";nl(cX,0,c0);at(cX,0,(-1*c0));mQ.m0=mQ.mZ/(mQ.mW-mQ.mX);if(mQ.GC=="emailPane"){cX="messagelistdivWrap";nl(cX,0,(-1*c0));sB("tblFromResize",mZ+10);sB("tblFromMask",mZ+10);sB("tblSubjectResize",mZ+10);sB("tblSubjectMask",mZ+10);sB("tblDateResize",mZ+10);sB("tblDateMask",mZ+10);mo();h6();}
else if(mQ.GC=="rssPane"){cX="rsslistWrap";nl(cX,0,(-1*c0));cX="rssPane";nl(cX,0,(-1*c0));GN();}
}
id="mpUDMaskWrap";var an=rY(id);if(an&&an.style){an.style.display="block";}
id="navigationWrap";m_=sA(id);if(mQ.GC=="emailPane"){na=mZ+sB("messageheaderdivWrap")+2;}
else if(mQ.GC=="rssPane"){na=mZ+mQ.Kj+2;}
sB(id,na);id="fmLRMaskWrap";sB(id,(na-4));sB("fmLRMask",(na-4));m2.m6=na-4;id="mpUDMaskWrap";sA(id,mV-2);sf(id,0);m7.m3=0;sh(id,mX+mZ-4);if(mQ.GC=="emailPane")id="readmessage";else id="readrss";sf(id,0);sA(id,mV+6);sh(id,mX+mZ-1);if(mQ.GC=="emailPane")id="readmessageWrap";else id="readrssWrap";sf(id,0);sA(id,mV+6);sh(id,mX+mZ-1);}
else if(jj.jn=='Normal'){id="mpUDMaskWrap";var an=rY(id);if(an&&an.style){an.style.display="block";}
if(jj.jo=='Wide'){id="navigationWrap";m_=sA(id);na=mQ.mW-145-4+10;sB(id,na);id="fmLRMaskWrap";sB(id,(na-4));sB("fmLRMask",(na-4));m2.m6=na-4;id="mpUDMaskWrap";sA(id,mV-m_-6);sf(id,m_+6);m7.m3=m_+4;if(mQ.GC=="emailPane")id="readmessage";else id="readrss";sf(id,m_);sA(id,mV-m_+6);if(mQ.GC=="emailPane")id="readmessageWrap";else id="readrssWrap";sf(id,m_);sA(id,mV-m_+6);}
else {mQ.m0=.48;mZ=Math.floor((mW-mX)*mQ.m0);mQ.mZ=mZ;if(mQ.GC=="emailPane")cX="readmessageWrap";else cX="readrssWrap";var c0=(mW-mX-mZ-3+8)-sB(cX);cX="mpUDMaskWrap";at(cX,0,(-1*c0));if(mQ.GC=="emailPane"){sB("tblFromResize",mZ+10);sB("tblFromMask",mZ+10);sB("tblSubjectResize",mZ+10);sB("tblSubjectMask",mZ+10);sB("tblDateResize",mZ+10);sB("tblDateMask",mZ+10);}
if(mQ.GC=="emailPane")cX="readmessage";else cX="readrss";nl(cX,0,c0);at(cX,0,(-1*c0));if(mQ.GC=="emailPane")cX="readmessageWrap";else cX="readrssWrap";nl(cX,0,c0);at(cX,0,(-1*c0));mQ.m0=mQ.mZ/(mQ.mW-mQ.mX);if(mQ.GC=="emailPane"){cX="messagelistdivWrap";nl(cX,0,(-1*c0));mo();h6();}
else if(mQ.GC=="rssPane"){cX="rsslistWrap";nl(cX,0,(-1*c0));cX="rssPane";nl(cX,0,(-1*c0));GN();}
}
}
else {if(jj.jo=='Wide'){id="navigationWrap";m_=sA(id);na=mQ.mW-145-4+10;sB(id,na);id="fmLRMaskWrap";sB(id,(na-4));sB("fmLRMask",(na-4));m2.m6=na-4;id="mpUDMaskWrap";sA(id,mV-m_-6);sf(id,m_+6);m7.m3=m_+4;if(mQ.GC=="emailPane")id="readmessage";else id="readrss";sf(id,m_);sA(id,mV-m_+6);if(mQ.GC=="emailPane")id="readmessageWrap";else id="readrssWrap";sf(id,m_);sA(id,mV-m_+6);}
if(mQ.GC=="emailPane")cX="readmessage";else cX="readrss";var c0=25-sB(cX);nl(cX,0,c0);at(cX,0,(-1*c0));if(mQ.GC=="emailPane")cX="readmessageWrap";else cX="readrssWrap";var c0=25-sB(cX);nl(cX,0,c0);at(cX,0,(-1*c0));if(mQ.GC=="emailPane"){h6();}
else if(mQ.GC=="rssPane"){GN();}
if(mQ.GC=="emailPane"){cX="messagelistdivWrap";nl(cX,0,(-1*c0));mQ.mZ=sB(cX)-4;mQ.m0=mQ.mZ/(mQ.mW-mQ.mX);nl("tblFromResize",0,(-1*c0));nl("tblFromMask",0,(-1*c0));nl("tblSubjectResize",0,(-1*c0));nl("tblSubjectMask",0,(-1*c0));nl("tblDateResize",0,(-1*c0));nl("tblDateMask",0,(-1*c0));mo();}
else if(mQ.GC=="rssPane"){cX="rsslistWrap";nl(cX,0,(-1*c0));cX="rssPane";nl(cX,0,(-1*c0));}
id="navigationWrap";m_=sA(id);na=mQ.mW-145-4+10;sB(id,na);id="mpUDMaskWrap";sA(id,mV-m_-6);sf(id,m_+6);m7.m3=m_+4;at(id,0,(-1*c0));var an=rY(id);if(an&&an.style){an.style.display="none";}
}
}
function nc(){if(jj.jB)np("pane","myResizeScrollBar: paneGlobals.cHML="+mQ.mZ);id="messageScrollBar";sB(id,mQ.mZ);id="messageScrollBarSlider";sB(id,mQ.mZ-17-17-8-8);id="messageScrollBarDownOne";sh(id,mQ.mZ-17-8);id="messageScrollBarDownAll";sh(id,mQ.mZ-8);}
function nd(cV){var cW=(cV.target)?cV.target:cV.srcElement;var cX=(cW.name&&cW.src)?cW.name+"Wrap":"";if(cX){dh.dj=rY(cX);if(dh.dj){if(dh.dj.getAttribute("id")=="fmLRMaskWrap"){if(jj.jB)np("pane","selected fmLRMaskWrap");dh.dj.style.cursor="e-resize";}
else if(dh.dj.getAttribute("id")=="mpUDMaskWrap"){if(jj.jB)np("pane","selected mpUDMaskWrap");dh.dj.style.cursor="s-resize";}
aw(dh.dj,100);return ;}
else {}
}
dh.dj=null;return ;}
function ne(cV){cV=(cV)?cV:event;var x,y,width,height;var nf;if(dh.dj){if(cV.pageX){x=cV.pageX-mQ.mR;y=cV.pageY-mQ.mS;}
else if(cV.clientX||cV.clientY){x=cV.clientX-mQ.mR;y=cV.clientY-mQ.mS;}
if(dh.dj.getAttribute("id")=="fmLRMaskWrap"){nf=m2;width=4;x=(x<nf.m3)?nf.m3:(x+width>nf.m5)?nf.m5-width:x;y=nf.m4;}
else if(dh.dj.getAttribute("id")=="mpUDMaskWrap"){nf=m7;height=4;x=nf.m3;y=(y<nf.m4)?nf.m4:(y+height>nf.m6)?nf.m6-height:y;}
ap(dh.dj,x,y);cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();return false;}
}
function ng(cV){cV=(cV)?cV:event;jT();nd(cV);if(dh.dj){dh.dj.style.borderStyle="dotted";mQ.cT=aC(dh.dj);mQ.mU=aG(dh.dj);if(cV.pageX){mQ.mR=cV.pageX-((dh.dj.offsetLeft)?dh.dj.offsetLeft:dh.dj.left);mQ.mS=cV.pageY-((dh.dj.offsetTop)?dh.dj.offsetTop:dh.dj.top);}
else if(cV.clientX){mQ.mR=cV.clientX-((dh.dj.offsetLeft)?dh.dj.offsetLeft:0);mQ.mS=cV.clientY-((dh.dj.offsetTop)?dh.dj.offsetTop:0);}
else if(cV.mR||cV.mS){mQ.mR=cV.mR-((cV.mR<-2)?0:document.body.scrollLeft);mQ.mS=cV.mS-((cV.mS<-2)?0:document.body.scrollTop);}
return false;}
}
function nh(cV){var id,c0,cX;cV=(cV)?cV:event;if(dh.dj){dh.dj.style.borderStyle="none";id=dh.dj.getAttribute("id");mQ.cZ=aC(id);mQ.mT=aG(id);if(id=="fmLRMaskWrap"){c0=mQ.cT-mQ.cZ;m7.m3-=c0;cX="mpUDMaskWrap";nl(cX,c0,0);at(cX,(-1*c0),0);cX="navigationWrap";nl(cX,(-1*c0),0);var m_=sA(cX);mQ.m1=m_/mQ.mV;if(jj.jB)np("pane","releasePane: before msghdrdvWrap="+sA('messageheaderdivWrap')+", tbl="+sA('message-header-table')+", frm="+sA('mlFrom')+", sbj="+sA('mlSubject')+", dt="+sA('mlDate')+", sz="+sA('mlSize'));if(mQ.GC=="emailPane"){cX='messageheaderdivWrap';at(cX,(-1*c0),0);nl(cX,c0,0);cX='emailPane';at(cX,(-1*c0),0);nl(cX,c0,0);}
else if(mQ.GC=="rssPane"){cX='rsslist';at(cX,(-1*c0),0);nl(cX,c0,0);cX='rsslistWrap';at(cX,(-1*c0),0);nl(cX,c0,0);cX='rssPane';at(cX,(-1*c0),0);nl(cX,c0,0);}
else {cX=mQ.GC;at(cX,(-1*c0),0);nl(cX,c0,0);}
if(mQ.GC=="emailPane"){cX="messagelistdivWrap";at(cX,(-1*c0),0);nl(cX,c0,0);db(sA("message-header-table")+c0);if(jj.jB)np("pane","releasePane: after sync msglstdvWrap="+sA('messagelistdivWrap')+", tbl="+sA('message-table')+", frm2="+sA('mlFrom2')+", sbj2="+sA('mlSubject2')+", dt2="+sA('mlDate2')+", sz2="+sA('mlSize2'));}
if(jj.jn!='Wide'){if(mQ.GC=="emailPane"){cX="readmessage";nl(cX,c0,0);at(cX,(-1*c0),0);cX="readmessageWrap";nl(cX,c0,0);at(cX,(-1*c0),0);}
else if(mQ.GC=="rssPane"){cX="readrss";nl(cX,c0,0);at(cX,(-1*c0),0);cX="readrssWrap";nl(cX,c0,0);at(cX,(-1*c0),0);}
}
}
else if(id=="mpUDMaskWrap"){c0=mQ.mU-mQ.mT;if(jj.jn=='Wide'){cX="navigationWrap";nl(cX,0,(-1*c0));cX="fmLRMaskWrap";nl(cX,0,(-1*c0));nl("fmLRMask",0,(-1*c0));m2.m6-=c0;}
if(mQ.GC=="emailPane"){nl("tblFromResize",0,(-1*c0));nl("tblFromMask",0,(-1*c0));nl("tblSubjectResize",0,(-1*c0));nl("tblSubjectMask",0,(-1*c0));nl("tblDateResize",0,(-1*c0));nl("tblDateMask",0,(-1*c0));}
if(mQ.GC=="emailPane"){cX="readmessage";nl(cX,0,c0);at(cX,0,(-1*c0));cX="readmessageWrap";nl(cX,0,c0);at(cX,0,(-1*c0));}
else if(mQ.GC=="rssPane"){cX="readrss";nl(cX,0,c0);at(cX,0,(-1*c0));cX="readrssWrap";nl(cX,0,c0);at(cX,0,(-1*c0));}
if(mQ.GC=="emailPane"){cX="emailPane";nl(cX,0,(-1*c0));cX="messagelistdivWrap";nl(cX,0,(-1*c0));mQ.mZ=sB(cX)-4;mQ.m0=mQ.mZ/(mQ.mW-mQ.mX);mo();}
else if(mQ.GC=="rssPane"){cX="rsslistWrap";nl(cX,0,(-1*c0));cX="rssPane";nl(cX,0,(-1*c0));mQ.mZ=(sB(cX)-mQ.Kj)+2;mQ.m0=mQ.mZ/(mQ.mW-mQ.mX);}
}
if(document.body&&document.body.releaseCapture){document.body.releaseCapture();}
dh.dj=null;}
if(document.layers){uL();}
document.onmousedown=jN;document.onmousemove=null;document.onmouseup=null;}
function ni(an){var aE="";for(var al in an){aE+=al+"="+an[al]+"\t";}
if(jj.jB)np("pane",aE);}
function nj(){document.captureEvents(Event.MOUSEDOWN|Event.MOUSEMOVE|Event.MOUSEUP);}
function uL(){document.releaseEvents(Event.MOUSEDOWN|Event.MOUSEMOVE|Event.MOUSEUP);}
function nk(){if(document.layers){nj();}
document.onmousedown=ng;document.onmousemove=ne;document.onmouseup=nh;}
function nl(an,au,av){var c5=sA(an)+au;var nm=sB(an)+av;if(jj.jB){np("pane","adjustBy: client="+sN()+"Wx"+nn()+"H");np("pane","adjustBy: before "+an+"="+sA(an)+"Wx"+sB(an)+"H,delta="+au+"Wx"+av+"H,control="+sA('control')+"Wx"+sB('control')+"H");}
if(au!=0){if(sA(an,c5)!=c5){if(jj.jB)np("pane","adjustBy: retry width "+an+"="+sA(an)+"Wx"+sB(an)+"H,delta="+au+"Wx"+av+"H,w="+c5);sA(an,c5);}
}
if(av!=0){if(sB('control')==21&&an=="messagelistdivWrap"){}
sB(an,nm);}
if(jj.jB)np("pane","adjustBy: after "+an+"="+sA(an)+"Wx"+sB(an)+"H,delta="+au+"Wx"+av+"H,control="+sA('control')+"Wx"+sB('control')+"H");}
function nn(){var nm=0;if(xOp5or6){nm=window.innerHeight;}
else if(r1(window.innerWidth,window.innerHeight,document.width)){nm=window.innerHeight;if(jj.jB)np("pane","yClientHeight: window.innerHeight:"+nm+"H");if(document.width>window.innerWidth)nm-=16;}
else if(!window.opera&&document.documentElement&&document.documentElement.clientHeight){nm=document.documentElement.clientHeight;if(jj.jB)np("pane","yClientHeight: document.documentElement.clientHeight:"+nm+"H");}
else if(document.body&&document.body.parentElement&&document.body.parentElement.clientHeight){nm=document.body.parentElement.clientHeight;if(jj.jB)np("pane","yClientHeight: document.body.parentElement.clientHeight:"+nm+"H");}
return nm;}
function no(an,au,av){var ak=ao(an);var id=am(an).getAttribute("id");var width=aH(an);var height=aI(an);if(ak){if(jj.jB)np("pane","width="+width+",theObj.width="+ak.width);var as=(typeof ak.width=="string")?"px":0;if(au!=0){ak.width=aH(an)+au+as;if(jj.jB)np("pane","before width="+width+",delta="+au+",after "+ak.width);}
if(av!=0){ak.height=aI(an)+av+as;if(jj.jB)np("pane","before height="+height+",delta="+av+",after "+ak.height);}
}
}
var Lf;function np(which,f2){var im=rY('debugDiv');if(im==null){alert("logDebug: null msgtbl (for debugDiv)");}
if(jj.jB&&jj.K8[which]){var nq=document.createTextNode(f2);var nr=mN("br");im.appendChild(nq);im.appendChild(nr);if(Lf&&jj.K9["firebug"])Lf.log(f2);}
}
function ns(){var im=rY('debugDiv');while(im.childNodes[0]!=null)im.removeChild(im.childNodes[0]);return false;}
function nt(){if(!jj.jB)return ;np("pane","adjustScreenBoundaries() >>>>");var nu=["control","date_anchor","date_col","fmLR","fmLRMask","fmLRMaskWrap","folderTitle","from_anchor","from_col","message-header-table","message-table","messageheader","messageheaderdiv","messageheaderdivWrap","messagelist","messagelistdiv","messagelistdivWrap","messageScrollBar","messageScrollBarDownAll","messageScrollBarDownAllImg","messageScrollBarDownOne","messageScrollBarDownOneImg","messageScrollBarKnob","messageScrollBarSlider","messageScrollBarUpAll","messageScrollBarUpAllImg","messageScrollBarUpOne","messageScrollBarUpOneImg","mlDate","mlFrom","mlSize","mlSubject","mpUD","mpUDMask","mpUDMaskWrap","readmessage","readmessageWrap","rssPane","rsslistWrap","rssmessageWrap","readrss","readrssWrap","size_anchor","size_col","subject_anchor","subject_col","tblDateResize","tblFromResize","tblSubjectResize","textResize",];for(var al=0;al<nu.length;al++){np("pane",nu[al]+": t: "+aG(nu[al])+", l: "+aC(nu[al])+", w: "+aH(nu[al])+", h: "+aI(nu[al]));}
np("pane","<<<< adjustScreenBoundaries()");}
var Jh={Ji:GI,Jj:xD,Jk:xE,Jl:GJ,KI:KJ,Jm:xF,Jn:xG,Jo:GK}
;function Jp(){var hash=window.location.hash.replace(/#/,"");var Jq=Jh[hash];if(typeof (Jq)=="function"){Jq();}
}
function Kg(){xI('loginPane',xl.s0+"&url="+window.location.href);xM('loginPane');}
function GI(){xM('emailPane');}
function xD(){var dx;dx=ek()+"?cmd=Folders&"+hG();xI('folderManagerPane',dx+"&url="+escape(dx));xM('folderManagerPane');}
function xE(ig){var KY;if(ig==null)KY=hG();else KY="sid="+ig;xI('mailboxManagerPane',ek()+"?cmd=Mblist&"+KY);xM('mailboxManagerPane');}
function GJ(){xI('messageCenterPane',ek()+"?templ=message_center.html&cmd=List&"+hG());xM('messageCenterPane');}
function KJ(){xI('rssEditPane',xl.KP);xM('rssEditPane');}
function xF(){xI('optionManagerPane',ek()+"?cmd=Feat&"+hG());xM('optionManagerPane');}
function xG(){xI('addressBookPane',ek()+"?templ=addrbookpane.html&cmd=QueryForm");xM('addressBookPane');}
function xH(){xI('calendarPane',xl.sS);xM('calendarPane');}
function GK(refresh){GN();xM('rssPane');if(refresh!=null&&!document.all){var rk=rY('rsslist');if(rk){rk.innerHTML='<div id="rssRefreshPane"><br/><br/><br/><br/>Click <a href="javascript:'+"GK()"+';"><img src="images/reload-15x15.gif" border="0" title="Refresh"/></a> to refresh RSS Feeds.</div>';}
}
G7('rsslist');}
function xI(fI,cJ){var xJ=rY(fI+"IFrame");if(xJ){xJ.src=cJ;}
else {var rk=rY(fI);if(rk){rk.innerHTML="<iframe id='"+fI+"Iframe' src='"+cJ+"' width='100%' height='100%'></iframe>";}
}
}
function xL(fI){BP.BV(fI,"notseen");BP.kh(fI,"visible");}
function G0(fI){BP.kh(fI,"notseen");BP.BV(fI,"visible");}
function JF(fI){BP.kh(fI,"selectednavitem");}
function JG(fI){BP.BV(fI,"selectednavitem");}
function xM(GL){var GM=mQ.GC;if(GM!=GL){window.location.hash=GL;if((GL=="emailPane")||(GL=="rssPane")){}
else {if((GM=="emailPane")||(GM=="rssPane")){mQ.GD=jj.jn;toggleReadPane('Normal',false);}
else {}
}
mQ.GC=GL;var xN=['addressBookPane','calendarPane','rssEditPane','emailPane','folderManagerPane','folderPane','loginPane','mailboxManagerPane','messageCenterPane','optionManagerPane','readmessagePane','readrssPane','rssPane'];var K6=['mpUDMaskWrap','tblFromResize','tblSubjectResize','tblDateResize'];K0();if(GL!="emailPane"){for(var al=0;al<K6.length;al++){xL(K6[al]);}
xL("moveToFolder");xL("searchFolder");}
for(var al=0;al<xN.length;al++){xL(xN[al]);}
G0(GL);if(GL=='emailPane'){for(var al=0;al<K6.length;al++){G0(K6[al]);}
G0('readmessagePane');G0("moveToFolder");G0("searchFolder");}
else if(GL=='rssPane'){if(jj.jB)np("pane","switchToPane: rssPane top="+sh(GL)+",left="+sf(GL)+" readrssPane top="+sh('readrssPane')+",left="+sf('readrssPane'));G0('readrssPane');G0('mpUDMaskWrap');}
if((GL=="emailPane")||(GL=="rssPane")){if((GM!="emailPane")&&(GM!="rssPane")){toggleReadPane(mQ.GD,false);}
else {}
}
m9(true);uq("Open,Print,Reply,ReplyAll,Forward,Source,Delete,MarkRead,MarkUnread,Spam");}
}
function K0(){var GC=mQ.GC;var JH=['showmessagecenter','showaddressbook','showcalendar','showrss'];for(var al=0;al<JH.length;al++){JF(JH[al]);}
JF('Z__'+eb.en);xL('spamlogo');if(GC=='emailPane'){JG('Z__'+eb.en);if(eb.en=='Screened Mail'){G0('spamlogo');}
}
else if(GC=='messageCenterPane'){JG('showmessagecenter');}
else if(GC=='addressBookPane'){JG('showaddressbook');}
else if(GC=='rssPane'){JG('showrss');}
else if(GC=='rssEditPane'){JG('showrss');}
}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var cK={cL:null,cM:null,cN:null,cO:null,cP:null,v0:null,v1:null,cQ:0.2618,cR:0.3871,cS:0.1811,cT:0}
;function cU(cV){var cW=(cV.target)?cV.target:cV.srcElement;var cX=cK.cL;if(cX){dh.dj=rY(cX);if(dh.dj){dh.dj.style.cursor="e-resize";aw(dh.dj,100);return ;}
}
dh.dj=null;return ;}
function cY(cV){cV=(cV)?cV:event;var cZ;if(dh.dj){if(cV.pageX){cZ=cV.pageX;}
else if(cV.clientX||cV.clientY){cZ=cV.clientX;}
var c0=cK.cT-cZ;if(jj.jB)np("column","dragColumn: before check: "+dh.dj.getAttribute("id")+" newX="+cZ+" delta="+c0);if(c0>=0){if(cZ<cK.v0){cZ=cK.v0;}
}
else {if(cZ>cK.v1){cZ=cK.v1;}
}
sf(cK.cL,cZ);cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();return false;}
}
function c1(cV){if(jj.jB)np("column","engageColumn: rszId="+cK.cL+",colId1="+cK.cM+",colId2="+cK.cN);cV=(cV)?cV:event;jT();cU(cV);if(dh.dj){var an=am(cK.cL);an.style.borderStyle="dotted";if(cV.pageX){cK.cT=cV.pageX;}
else if(cV.clientX){cK.cT=cV.clientX;}
else if(cV.mR){cK.cT=cV.mR;}
cK.cO=sA(cK.cM);cK.cP=sA(cK.cN);cK.v0=si(cK.cM)+50;cK.v1=si(cK.cN)+cK.cP-50;if(jj.jB)np("column","engageColumn: "+dh.dj.getAttribute("id")+" oldX="+cK.cT+",colWidth1="+cK.cO+",colWidth2="+cK.cP+",maxLeft="+cK.v0+",maxRight="+cK.v1);return false;}
}
function c2(cV){var id;var cZ;cV=(cV)?cV:event;if(dh.dj){var an=am(cK.cL);an.style.borderStyle="none";cZ=aC(cK.cL);var c0=cK.cT-cZ;if(jj.jB)np("column","releaseColumn:"+dh.dj.getAttribute("id")+",newX="+cZ+",delta="+c0+", f="+sA('mlFrom')+","+sA('mlFrom2')+",s="+sA('mlSubject')+","+sA('mlSubject2')+",d="+sA('mlDate')+","+sA('mlDate2')+",sz="+sA('mlSize')+","+sA('mlSize2'));var c3=cK.cO-c0;var c4=cK.cP+c0;var c5=sA("message-header-table");if(cK.cM=="mlFrom"){cK.cQ=c3/c5;cK.cR=c4/c5;}
else if(cK.cM=="mlSubject"){cK.cR=c3/c5;cK.cS=c4/c5;}
else if(cK.cM=="mlDate"){cK.cS=c3/c5;}
db(sA("message-header-table"));if(jj.jB)np("column","releaseColumn: "+dh.dj.getAttribute("id")+",px="+c3+" f="+sA('mlFrom')+","+sA('mlFrom2')+",s="+sA('mlSubject')+","+sA('mlSubject2')+",d="+sA('mlDate')+","+sA('mlDate2')+",sz="+sA('mlSize')+","+sA('mlSize2'));aw(dh.dj,0);}
dh.dj=null;if(document.body&&document.body.releaseCapture){document.body.releaseCapture();}
cK.cL=null;cK.cM=null;cK.cN=null;dX();}
function c6(c7,c8,c9){if(document.layers){nj();}
cK.cL=null;cK.cM=null;cK.cN=null;if(c7&&c8&&c9){cK.cL=c7;cK.cM=c8;cK.cN=c9;}
document.onmousedown=c1;document.onmousemove=cY;document.onmouseup=c2;}
function c_(an){var da=0;if(an.offsetParent){while(an.offsetParent){da+=an.offsetLeftan=an.offsetParent;}
}
else if(an.x)da+=an.x;return da;}
function db(c5){var dc=Math.round(cK.cQ*c5);var dd=Math.round(cK.cR*c5);var de=Math.round(cK.cS*c5);var df=c5-dc-dd-de-60;var id="message-header-table";var left=sf(id)+sA("navigationWrap");left+=dc+60;sf("tblFromResize",left);left+=dd;sf("tblSubjectResize",left);left+=de;sf("tblDateResize",left);var dg="";for(var al=0;al<2;al++){if(al==1){id="message-table";dg="2";}
sA(id,c5);sA("mlCheck"+dg,20);sA("mlStatus"+dg,20);sA("mlAttach"+dg,20);sA("mlFrom"+dg,dc);sA("mlSubject"+dg,dd);sA("mlDate"+dg,de);sA("mlSize"+dg,df);}
}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
function nv(cV,ix,w3){var x,y;cV=(cV)?cV:event;ix.className+=" divActive";if(cV.pageX){x=cV.pageX;y=cV.pageY;}
else if(cV.clientX||cV.clientY){x=cV.clientX;y=cV.clientY;}
if(w3){x+=aC(ix);y+=aG(ix);}
iww=aJ();iwh=aK();objw=aH(ix.jZ);objh=aI(ix.jZ);if(x+objw>iww){x=(x-objw);}
if(y+objh>iwh){y=(y-objh);}
ix.jZ.style.left=x+"px";ix.jZ.style.top=y+"px";ix.jZ.style.visibility="visible";if(ix.jZ.iframeEl!=null){ix.jZ.iframeEl.style.left=ix.jZ.style.left;ix.jZ.iframeEl.style.top=ix.jZ.style.top;ix.jZ.iframeEl.style.width=ix.jZ.offsetWidth+"px";ix.jZ.iframeEl.style.height=ix.jZ.offsetHeight+"px";ix.jZ.iframeEl.style.display="";}
}
function nw(cV,jQ,ix,w4){if(ix.jZ==null){ix.jZ=rY(jQ);if(ix.jZ.isInitialized==null)j3(ix.jZ);}
if(jM!=null)jU(jM);clearTimeout(jh.J2);jh.J2=setTimeout(jT,xl.Kh*1000);if(ix!=jM){nv(cV,ix,w4);jM=ix;}
else jM=null;return false;}
function nx(an,cV,hQ){nw(cV,"messageMenu",an);if(hQ>0){hP(hQ);}
return false;}
function ny(cV){return nw(cV,"folderMenu",this);}

///<!-- ***********************************************************
///Example 6-2
///"Dynamic HTML:The Definitive Reference"
///2nd Edition
///by Danny Goodman
///Published by O'Reilly & Associates  ISBN 0-596-00316-1
///http://www.oreilly.com
///Copyright 2002 Danny Goodman.  All Rights Reserved.
///************************************************************ -->
var dh={di:false,dj:null}
;var dk={current:null,previous:null,x:-1,y:-1,w6:null,uJ:false,K7:false,uy:0,w_:false,dm:null,dn:null}
;var Event={xo:8,xp:9,xq:13,xr:27,xs:33,xt:34,xu:35,xv:36,xw:37,xx:38,xy:39,xz:40,xA:46}
;function dr(){dh.dj=null;dh.di=false;dk.current=null;dk.previous=null;dk.w6=null;dk.dm=null;dk.dn=null;}
function ds(uV,uW,uX){var uZ=0;var uY=0;if(dk.dm==null){return ;}
dk.dn=dk.dm;dk.dm=null;for(var ct=0;ct<dk.dn.length;ct++){if(dk.dn[ct]!=null){var al=dH(dk.dn[ct]);if(al==-1)continue;var Le=Lj(al);if(Le.fB&eU.e0){dk.uy--;}
Le.fB&=~eU.e0;Le.fB|=eU.eY;uZ+=1;if(!(Le.fB&eU.eZ))uY+=1;}
}
u1(uV,uW,uZ,uY,uX);dT(1);}
function dv(){var dw="";if(dk.dm!=null){for(var al=0;al<dk.dm.length;al++){if(dk.dm[al]!=null){var dx=dH(dk.dm[al]);if(dx==-1){continue;}
var Le=Lj(dx);if(Le.fB&eU.eY){dk.dm[al]=null;}
else {dw+="&msg"+al+"="+dk.dm[al];}
}
}
}
return dw;}
function dy(an,cV){cV=cV?cV:event;an.style.textDecoration='none';return true;}
function dz(an,cV){cV=cV?cV:event;an.style.textDecoration='underline';return true;}
function x3(event){if(!event)event=window.event;var c0=0;var x4=120;if(event.wheelDelta){c0=event.wheelDelta;}
else if(event.detail){c0=-event.detail;x4=1;}
jb=c0/x4;if(c0>0){upOne(jb);lY();}
else {downOne(-jb);lY();}
if(event.preventDefault)event.preventDefault();event.returnValue=false;}
function x5(){var x6=rY("messagelistdivWrap");var x7=rY("messageScrollBar");if(x6.addEventListener){x6.addEventListener('DOMMouseScroll',x3,false);if(x7.addEventListener){x7.addEventListener('DOMMouseScroll',x3,false);}
}
x6.onmousewheel=x3;x7.onmousewheel=x3;}
function dA(an,cV){if(jj.jB)np("drag","chooseRow entry: obj="+(an?an.id:"null"));cV=(cV)?cV:event;dk.x=cV.clientX?cV.clientX:cV.pageX;dk.y=cV.clientY?cV.clientY:cV.pageY;if(jj.jB)np("drag","chooseRow: x="+dk.x+",y="+dk.y);jT();dX();document.onkeydown=dW;dh.dj=an;aw(dh.dj,100);if(document.body&&document.body.setCapture){document.body.setCapture();}
dk.current=dh.dj.id.substring(4);dk.uJ=false;dk.K7=false;if(e2&&e2.type=="checkbox"){if(jj.jB)np("drag","chooseRow: checkbox click");e2=null;dk.uJ=true;}
if(uo(cV)&&dk.w6){var al=dH(dk.w6);var dR=uK(al);al=dH(dk.current);var dS=uK(al);if(dR==-1||dS==-1){alert("Too many messages selected.");return false;}
if(dR>dS){var dx=dR;dR=dS;dS=dx;}
xg();for(al=dR;al<=dS;al++){var hQ=lw.lx[al];if(hQ!=null){var ui=Lj(hQ);d4(ui.fA,true);}
}
}
else if(un(cV)){dI(dh.dj,"checkbox");if(!dk.uJ){if(an.className=="listreadOn"||an.className=="listunreadOn"){var al=dH(dk.current);if(al!=-1){hP(al);}
}
}
dk.w6=dk.current;}
else {if(dk.uJ){dI(dh.dj,"checkbox");h6();}
else if(an.className=="listreadOn"||an.className=="listunreadOn"){dk.K7=true;}
else {var al=dH(dk.current);xg();dh.dj=an;dD(dh.dj,true);if(al!=-1){hP(al);}
}
dk.w6=dk.current;}
up();dk.previous=dk.current;cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();document.onkeydown=dW;return false;}
function xa(){if(dk.w_){xg();}
else if(eb.ew>0){xd()}
up();}
function xd(){xe();LX(function (gu){d4(gu.fA,true);}
);}
function xe(){dk.w_=true;rY('mlCheckAllIcon').src="images/icon_menu_checkmark.gif";}
function xf(){dk.w_=false;rY('mlCheckAllIcon').src="images/icon_menu_checkbox.gif";}
function uj(an){if(jj.jB)np("drag","messageAction: entry: obj="+(an?an.id:"null")+",alreadyselected="+(dk.K7?"yes":"no"));if(dk.K7){var al=dH(dk.current);xg();dh.dj=an;dD(dh.dj,true);if(al!=-1){hP(al);}
up();}
dV();return false;}
function dB(an,dC){if(jj.jB)np("drag","highlight entry: obj id="+an.id+",doit="+(dC?'true':'false'));if(dC){if(an.className=="listread"){an.className="listreadOn";}
else if(an.className=="listunread"){an.className="listunreadOn";}
else if(an.className=="listreadOn"||an.className=="listunreadOn"){}
else {an.style.backgroundColor="#ffffcc";}
}
else {if(an.className=="listreadOn"){an.className="listread";}
else if(an.className=="listunreadOn"){an.className="listunread";}
else if(an.className=="listread"||an.className=="listunread"){}
else {an.style.backgroundColor="#F4F5FA";}
}
}
function uz(){dk.uy=0;if(dk.dm){for(var ct=0;ct<dk.dm.length;ct++){if(dk.dm[ct]!=null){var al=dH(dk.dm[ct]);if(al==-1)continue;var ui=Lj(al);if(ui.fB&eU.e0){dk.uy++;}
}
}
}
}
function dD(an,dC){var dE=an.id.substring(4);d4(dE,dC);dB(an,dC);}
function xg(){xf();if(dk.dm){for(var ct=0;ct<dk.dm.length;ct++){if(dk.dm[ct]!=null){var al=dH(dk.dm[ct]);if(al==-1)continue;var ui=Lj(al);if(ui.fB&eU.e0){ui.fB&=~eU.e0;dk.uy--;dk.dm[ct]=null;}
}
}
}
}
function dH(dE){if(eb.eA&&typeof (eb.eA[dE])!="undefined")return eb.eA[dE];return -1;}
function uK(rJ){if(lw.lx){for(var al=0;al<lw.lx.length;al++){if(lw.lx[al]==rJ){return al;}
}
}
return -1;}
function dI(an,which){var um=(an.className=="listreadOn"||an.className=="listunreadOn");if(um){dD(an,false);}
else {dD(an,true);}
}
function dJ(cV){if(dh.dj){var dK=(cV)?cV:event;if(dK.target){cW=dK.target;}
else {cW=dK.srcElement;}
dB(cW,true);dK.cancelBubble=true;if(dK.stopPropagation)dK.stopPropagation();if(dK.dataTransfer){dK.dataTransfer.dropEffect="move";dK.returnValue=false;}
}
}
function dL(cV){if(dh.dj){if(cV){cW=cV.target;}
else {cW=event.srcElement}
dB(cW,false);}
}
function vF(){if(jj.jB)np("drag","handleIEDragStart: entry: num selected="+dk.uy);vH("[Dragging "+dk.uy+" Msg"+(dk.uy==1?"":"s")+"]");if(!dh.dj){event.returnValue=false;}
else {event.dataTransfer.effectAllowed="move";}
}
function dN(cV){var cV=(cV)?cV:event;var x=cV.clientX?cV.clientX:cV.pageX;var y=cV.clientY?cV.clientY:cV.pageY;if(jj.jB)np("drag","dragOn: entry: x="+x+",y="+y);if(dh.dj!=null&&(dk.x!=x||dk.y!=y)){if(document.all&&!dh.di){dh.di=true;dh.dj.ondragstart=vF;dh.dj.ondragend=dV;dh.dj.dragDrop();}
vH("[Dragging "+dk.uy+" Msg"+(dk.uy==1?"":"s")+"]");}
}
function un(cV){if(document.all){return event.ctrlKey;}
else if(document.getElementById){return cV.ctrlKey;}
else if(document.layers){return (cV.modifiers&Event.CONTROL_MASK);}
return false;}
function uo(cV){if(document.all){return event.shiftKey;}
else if(document.getElementById){return cV.shiftKey;}
else if(document.layers){return (cV.modifiers&Event.SHIFT_MASK);}
return false;}
function dT(s_){switch(s_){case 1:ty();break;case 2:wc();break;}
hS();l_();}
function dU(cV){cV=(cV)?cV:event;if(jj.jB){var x=cV.clientX?cV.clientX:cV.pageX;var y=cV.clientY?cV.clientY:cV.pageY;np("drag","engage: entry: x="+x+",y="+y);}
if(jM){jN(cV);}
return false;}
function dV(cV){if(jj.jB)np("drag","release: entry: ");if(dh.dj){var cW;if(document.body&&document.body.releaseCapture){document.body.releaseCapture();}
dh.dj=null;vI();if(document.layers){uL();}
dh.di=false;document.onmousedown=jN;document.onmousemove=null;document.onmouseup=null;}
}
function dW(cV){cV=(cV)?cV:event;var jb=cV.keyCode;if(jb==Event.xz){downOne();lY();return false;}
else if(jb==Event.xx){upOne();lY();return false;}
else if(jb==Event.xs){upPage();lY();return false;}
else if(jb==Event.xt){downPage();lY();return false;}
else if(jb==Event.xv){vl();return false;}
else if(jb==Event.xu){vh();return false;}
else if(jb==Event.xA){ln();return false;}
return true;}
function dX(){ag();if(document.layers){nj();}
dh.di=false;document.onmousedown=dU;document.onmousemove=dN;document.onmouseup=dV;}
function dY(){var aD=event.srcElement;if(dh.dj){event.returnValue=false;event.dataTransfer.dropEffect="move";}
d1();}
function dZ(){event.dataTransfer.dropEffect="move";event.returnValue=false;}
function d0(){var cq=mL('move');if(cq){g3("Action failed.\n\n"+cq,"Moving Message",false);if(cq.indexOf("Message UIDs are changed")>=0){return ;}
var ct=mt.tI['move'].indexOf("folder=");var tN=mt.tI['move'].substr(ct+7);var dx=tN.indexOf("&");e5=tN.substr(0,dx);if(e5!=escape(eb.en)){f_('move');return ;}
if(mt.tJ['move']!=null){for(ct=0;ct<mt.tJ['move'].length;ct++){dE=mt.tJ['move'][ct];var al=dH(dE);var Le=Lj(al);if(Le.fA==dE){Le.fB&=~eU.eY;eb.lA++;}
}
}
else {var tN=tN.substr(dx);while(tN.length>0){ct=tN.lastIndexOf('=');dE=tN.substr(ct+1);var al=dH(dE);var Le=Lj(al);if(Le.fA==dE){Le.fB&=~eU.eY;eb.lA++;}
ct=tN.lastIndexOf('&');tN=tN.substr(0,ct);}
}
dT(2);u5();}
mt.tJ['move']=null;f_('move');}
function d1(cV){if(jj.jB)np("drag","dropToMove: entry: ");if(dh.dj){cV=(cV)?cV:event;cW=(cV.target)?cV.target:cV.srcElement;dB(cW,false);lp('Move',unescape(cW.name),function (){dV(cV);cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();}
);return false;}
return true;}
function d2(d3){if(d3.dragDrop){d3.ondrop=dY;d3.ondragenter=dJ;d3.ondragover=dZ;d3.ondragleave=dL;}
else {d3.onmouseup=d1;d3.onmouseover=dJ;d3.onmouseout=dL;}
}
function d4(dE,dC){var ui=null;var al=dH(dE);if(al!=-1){ui=Lj(al);}
if(!dC){xf();if(ui&&(ui.fB&eU.e0))dk.uy--;ui.fB&=~eU.e0;}
else {if(ui&&!(ui.fB&eU.e0)){dk.uy++;}
ui.fB|=eU.e0;}
var d5=-1;if(!dk.dm){if(dC){dk.dm=new Array();dk.dm[0]=dE;}
}
else {for(var al=0;al<dk.dm.length;al++){if(dk.dm[al]==null){d5=al;}
else if(dk.dm[al]==dE){if(!dC){dk.dm[al]=null;}
return ;}
}
if(al==dk.dm.length&&dC){if(d5!=-1)dk.dm[d5]=dE;else dk.dm[al]=dE;}
}
if(jj.jB)np("dragdiv","numSelected="+dk.uy+", loadedMessages="+eb.eE+", virtualMailboxSize="+lw.lA);if(dk.uy==lw.lA)xe();}
function d6(){if(dk.uy==1){for(var ct=0;dk.dm&&ct<dk.dm.length;ct++){var al=dk.dm[ct];if(al!=null){dk.previous=dk.current=al;}
}
}
if(dk.previous!=null){return dk.previous;}
return "";}
function uq(ur){var an;if(jj.jB)np("drag","disableAction entry: idList="+ur);var us=ur.split(',');for(var al=0;al<us.length;al++){var ut=us[al];var uu=rY("icon"+ut);if(uu&&ut!='Spam'){var fj=uu.getAttribute("src");if(fj&&fj.indexOf("_g.gif")!=-1){continue;}
}
if(ut=='Spam'){var fV=rY("iconReportSpam");var fW=rY("link1Spam");var fX=rY("link2Spam");var fY=rY("editReportAsSpam");var fZ=rY("editReportNotSpam");var f0=rY("actionReportAsSpam");var f1=rY("actionReportNotSpam");var ud=rY("contextReportAsSpam");var ue=rY("contextReportNotSpam");if(fV&&fW&&fX&&fY&&fZ&&f0&&f1&&ud&&ue){fW.onclick="return false;";fX.onclick="return false;";fW.className="iconiconGray";fX.className="icontitleGray";if(eb.en=='Screened Mail'){f2="Report not spam";mP(fV,'src','images/icon_notspam_g.gif','hsrc','images/icon_notspam_g.gif','title',f2+'.','alt',f2+'.');fY.className="menuHide";fZ.className="menuGray";fZ.onclick="return false;";f0.className="menuHide";f1.className="menuGray";f1.onclick="return false";ud.className="menuHide";ue.className="menuGray";ue.onclick="return false;";}
else {f2="Report as spam";mP(fV,'src','images/icon_spam_g.gif','hsrc','images/icon_spam_g.gif','title',f2+'.','alt',f2+'.');fY.className="menuGray";fY.onclick="return false;";fZ.className="menuHide";f0.className="menuGray";f0.onclick="return false";f1.className="menuHide";ud.className="menuGray";ud.onclick="return false;";ue.className="menuHide";}
l8('linkReportSpam',f2);}
}
else {var uv=rY("link1"+ut);var uw=rY("link2"+ut);if(uv&&uw&&uu){uv.onclick="return false;";uw.onclick="return false;";uv.className="iconiconGray";uw.className="icontitleGray";mP(uu,"src",'images/icon_'+ut.toLowerCase()+'_g.gif',"hsrc",'images/icon_'+ut.toLowerCase()+'_g.gif');}
an=rY("file"+ut);if(an){an.className="menuGray";an.onclick="return false;";}
an=rY("action"+ut);if(an){an.className="menuGray";an.onclick="return false;";}
an=rY("edit"+ut);if(an){an.className="menuGray";an.onclick="return false;";}
an=rY("context"+ut);if(an){an.className="menuGray";an.onclick="return false;";if(ut=='MarkUnread'||ut=='MarkRead'){an.className="menuHide";}
}
}
}
}
function ux(ur){var an;if(jj.jB)np("drag","enableAction entry: idList="+ur);var us=ur.split(',');for(var al=0;al<us.length;al++){var ut=us[al];var uu=rY("icon"+ut);if(uu&&ut!='Spam'){var fj=uu.getAttribute("src");if(fj&&fj.indexOf("_n.gif")!=-1){continue;}
}
if(ut=='Spam'){var fV=rY("iconReportSpam");var fW=rY("link1Spam");var fX=rY("link2Spam");var fY=rY("editReportAsSpam");var fZ=rY("editReportNotSpam");var f0=rY("actionReportAsSpam");var f1=rY("actionReportNotSpam");var ud=rY("contextReportAsSpam");var ue=rY("contextReportNotSpam");var f2="";if(fV&&fW&&fX&&fY&&fZ&&f0&&f1&&ud&&ue){if(eb.en=='Screened Mail'){f2="Report not spam";fW.onclick=function (){uA('editReportNotSpam');return false;}
;fX.onclick=function (){uA('editReportNotSpam');return false;}
;fW.className="iconicon";fX.className="icontitle";mP(fV,'src','images/icon_notspam_n.gif','hsrc','images/icon_notspam_h.gif','title',f2+'.','alt',f2+'.');fY.className="menuHide";fZ.className="menuItem";fZ.onclick=function (){uA(this.getAttribute('id'));return jT();}
;f0.className="menuHide";f1.className="menuItem";f1.onclick=function (){uA(this.getAttribute('id'));return jT();}
;ud.className="menuHide";ue.className="menuItem";ue.onclick=function (){uA(this.getAttribute('id'));return jT();}
;}
else {f2="Report as spam";fW.onclick=function (){uA('editReportAsSpam');return false;}
;fX.onclick=function (){uA('editReportAsSpam');return false;}
;fW.className="iconicon";fX.className="icontitle";mP(fV,'src','images/icon_spam_n.gif','hsrc','images/icon_spam_h.gif','title',f2+'.','alt',f2+'.');fY.className="menuItem";fY.onclick=function (){uA(this.getAttribute('id'));return jT();}
;fZ.className="menuHide";f0.className="menuItem";f0.onclick=function (){uA(this.getAttribute('id'));return jT();}
;f1.className="menuHide";ud.className="menuItem";ud.onclick=function (){uA(this.getAttribute('id'));return jT();}
;ue.className="menuHide";}
l8('linkReportSpam',f2);}
}
else {var uv=rY("link1"+ut);var uw=rY("link2"+ut);if(uv&&uw&&uu){uv.onclick=function (){uA(this.getAttribute('id'));}
;uw.onclick=function (){uA(this.getAttribute('id'));}
;uv.className="iconicon";uw.className="icontitle";mP(uu,"src",'images/icon_'+ut.toLowerCase()+'_n.gif',"hsrc",'images/icon_'+ut.toLowerCase()+'_h.gif');}
an=rY("file"+ut);if(an){an.className="menuItem";an.onclick=function (){uA(this.getAttribute('id'));return jT();}
;}
an=rY("action"+ut);if(an){an.className="menuItem";an.onclick=function (){uA(this.getAttribute('id'));return jT();}
;}
an=rY("edit"+ut);if(an){an.className="menuItem";an.onclick=function (){uA(this.getAttribute('id'));return jT();}
;}
an=rY("context"+ut);if(an){an.className="menuItem";an.onclick=function (){uA(this.getAttribute('id'));return jT();}
;}
}
}
}
function wO(kE){var id="";if(kE=='o'){id="actionOpen";}
else if(kE=='r'){id="actionReply";}
else if(kE=='a'){id="actionReplyAll";}
else if(kE=='f'){id="actionForward";}
else if(kE=='s'){id="actionReportAsSpam";}
if(id!=""){var an=rY(id);if(an){if(an.className=="menuItem"){return false;}
}
}
return true;}
function uA(id){if(jj.jB)np("drag","actionOnClick entry: id="+id);if(id.indexOf('Delete')!=-1){ln();}
else if(id.indexOf('ReportAsSpam')!=-1){fY();}
else if(id.indexOf('ReportNotSpam')!=-1){fZ();}
else if(id.indexOf("ReplyAll")!=-1){lh();}
else if(id.indexOf("Reply")!=-1){lg();}
else if(id.indexOf("Forward")!=-1){li();}
else if(id.indexOf('Open')!=-1){lc();}
else if(id.indexOf('Print')!=-1){lk();}
else if(id.indexOf('Source')!=-1){lj();}
else if(id.indexOf('MarkRead')!=-1){yb();}
else if(id.indexOf('MarkUnread')!=-1){yc();}
}
function uB(jb){var fV=rY("iconSpam");var fY=rY("editSpam");var f0=rY("actionSpam");var ud=rY("contextSpam");if(fV&&fY&&f0&&ud){if(jb){fV.style.display="";fY.style.display="";f0.style.display="";ud.style.display="";}
else {fV.style.display="none";fY.style.display="none";f0.style.display="none";ud.style.display="none";}
}
}
function yg(){xf();dk.uy=0;dk.dm=null;}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var lw={lx:new Array(),ly:new Array(),hW:0,hX:0,lA:0,lB:100,lC:null,lD:null,lE:null,lF:null,lG:null,lH:null,lI:null,lJ:null,lK:5,lL:null,lM:null,lN:null,lO:null}
;function lP(cV){return "UNKNOWN";}
function lQ(al,lR){var lS=al-lR.fS;var lT=lR.bottom-lS;if(eb.ex){var lU=Math.floor(eb.eC/2);var lV=lT+lU;if(lV>lw.lA)lV=lw.lA;var f5=lV-eb.eC+1;if(f5<1)f5=1;s5("getmore",lV,f5,0.9);s5("del",lV-f5+1);}
else {s5("reorder",lT,lT);}
}
function lW(){var hW=mr();var hX=ms();for(var al=hW;al<hX;al++){if(lw.lx[al]==null){var ct=0;for(;ct<lw.ly.length;ct++){if((ct>0)&&(al>lw.ly[ct-1].fS)&&(al>lw.ly[ct].fR)){lQ(al,lw.ly[ct-1]);break;}
else if(al>=lw.ly[ct].fR&&al<=lw.ly[ct].fS){alert(al+" in MsgDisplaySpan["+ct+"]");}
}
if(ct>=lw.ly.length){lQ(al,lw.ly[ct-1]);}
break;}
}
f_();}
function lX(cV){if(lw.lO!=null){clearTimeout(lw.lO);lw.lO=null;}
if(jj.jB)np("scroll","stopMoving(UP)");lW();return false;}
function lY(cV){if(lw.lO!=null){clearTimeout(lw.lO);lw.lO=null;}
if(jj.jB)np("scroll","stopMoving(OUT)");lW();return false;}
function downPage(){if(lw.hW<lw.lA-1){lw.hW+=eb.ev;tv(lw.hW+eb.ev);if(lw.hW>=lw.lA)lw.hW=lw.lA-1;if(lw.lO!=null){clearTimeout(lw.lO);lw.lO=null;}
hS();me();lw.lN="down";lw.lO=setTimeout(downPage,lw.lB);}
return false;}
function vh(){if(jj.jB)np("scroll","downAll");lw.hX=lw.lA;lw.hW=lw.hX-eb.ev;if(lw.hW<0)lw.hW=0;hS();me();lw.lN="down";lW();return false;}
function downOne(r4){if(lw.hW<lw.lA-1){if(r4==null)r4=1;if(r4>1){if(r4>lw.lA-1-lw.hW)r4=lw.lA-1-lw.hW;}
lw.hW+=r4;tv(lw.hX+r4);if(lw.lO!=null){clearTimeout(lw.lO);lw.lO=null;}
hS();me();lw.lN="down";lw.lO=setTimeout(downOne,lw.lB);}
return false;}
function vj(f6){if(jj.jB)np("scroll","setPercent("+f6+")");lw.hW=Math.floor(f6*lw.lA/100);tv(lw.hW+eb.ev);if(lw.hW>=lw.lA)lw.hW=lw.lA-1;hS();me();return false;}
function upPage(){if(lw.hW>eb.ev){lw.hW-=eb.ev;tv(lw.hW+eb.ev);if(lw.lO!=null){clearTimeout(lw.lO);lw.lO=null;}
hS();me();lw.lN="up";lw.lO=setTimeout(upPage,lw.lB);}
else if(lw.hW>0){mq();lw.lN="up";hS();me();}
return false;}
function vl(){if(jj.jB)np("scroll","upAll()");lw.hW=0;tv(eb.ev);hS();me();lw.lN="up";lW();return false;}
function upOne(r4){if(lw.hW>0){if(r4==null)r4=1;else {if(r4>lw.hW)r4=lw.hW;}
lw.hW-=r4;lw.hX-=r4;if(lw.hX-lw.hW<eb.ev)tv(lw.hX+r4);l_();if(lw.lO!=null){clearTimeout(lw.lO);lw.lO=null;}
hS();me();lw.lN="up";lw.lO=setTimeout(upOne,lw.lB);}
return false;}
function l6(l7){var hm=rY('whereAreWe');if(hm)hm.innerHTML=l7;}
function l8(l9,g4){var gk=rY(l9);gk.innerHTML=xS(g4);}
function l_(){if(jj.jB)np("scroll","fixScrollBar()");var l7=lw.lA+(lw.lA==1?" Msg":" Msgs");l6(l7);me();}
function vn(cV){if(jj.jB)np("scroll","thumbDown()");if(cV.pageY){lw.lM=cV.pageY;}
else if(cV.clientY){lw.lM=cV.clientY;}
cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();document.onmousemove=vo;document.onmouseup=vq;return false;}
function vo(cV){if(jj.jB)np("scroll","thumbMove()");cV=cV?cV:event;var mc;if(cV.pageY){newthumbmousedown=cV.pageY;}
else if(cV.clientY){newthumbmousedown=cV.clientY;}
if(newthumbmousedown<lw.lF)newthumbmousedown=lw.lF;else if(newthumbmousedown>lw.lH-lw.lI)newthumbmousedown=lw.lH-lw.lI;var md=newthumbmousedown-lw.lM;lw.lD=newthumbmousedown;lw.lC=newthumbmousedown-lw.lL;if(jj.jB){np("scroll","--- newthumbmousedown="+newthumbmousedown);np("scroll","--- deltay="+md);np("scroll","--- messageListState.thumbtop_rel="+lw.lC);np("scroll","--- messageListState.thumbtop_win="+lw.lD);}
at('messageScrollBarKnob',0,md);lw.lN=md>0?"down":"up";var f6=(lw.lD-lw.lF)*100/(lw.lG-lw.lE);if(jj.jB)np("scroll",'thumbMove, deltay='+md+', pct='+f6);vj(f6);return false;}
function me(){lw.lL=aG('messageScrollBar');lw.lE=aG('messageScrollBarSlider');lw.lF=lw.lE+lw.lL;lw.lJ=aI('messageScrollBarSlider');lw.lG=lw.lE+lw.lJ;lw.lH=lw.lG+lw.lL;var mf=(lw.lA==0)?1:(eb.ev>=lw.lA)?1:(eb.ev/lw.lA);var mg=(lw.lG-lw.lE);mg=Math.floor(mf*mg);if(mf==1)mg-=4;if(mg<lw.lK)mg=lw.lK;var mh=ao('messageScrollBarKnobImg');mh.height=mg+"px";var f6=lw.hW/(lw.lA>0?lw.lA:1);var mi=Math.floor(f6*(lw.lJ-mg));var mj=mi+lw.lE;var mk=ao('messageScrollBarKnob');mk.top=mj+"px";lw.lC=aG('messageScrollBarKnob');lw.lD=lw.lD+lw.lL;if(jj.jB){np("scroll",'setThumbPosition()');np("scroll",'messageListState.thumbtop_rel='+lw.lC);np("scroll",'messageListState.thumbtop_win='+lw.lD);}
}
function vp(cV){if(jj.jB)np("scroll","thumbBySlider()");cV=cV?cV:event;var mm;if(cV.pageY){mm=cV.pageY-lw.lL;}
else if(cV.clientY){mm=cV.clientY-lw.lL;}
cV.cancelBubble=true;if(cV.stopPropagation)cV.stopPropagation();if(jj.jB){np("scroll","thumbBySlider(): cursorTop_rel="+mm);np("scroll","--- messageListState.thumbtop_rel="+lw.lC);np("scroll","--- messageListState.thumbtop_win="+lw.lD);}
if(mm<lw.lC)upPage();else downPage();}
function vq(cV){if(jj.jB)np("scroll","thumbUp()");cV=cV?cV:event;if(jj.jB)np("scroll",'>>> thumbUp');dX();}
function mo(){var id;if(jj.jB)np("scroll","resizeScrollBar: paneGlobals.cHML="+mQ.mZ);id="messageScrollBar";sh(id,mQ.mX);sf(id,mQ.mV-11);sB(id,mQ.mZ-3);id="messageScrollBarSlider";sB(id,mQ.mZ-17-17-8-8);id="messageScrollBarDownOne";sh(id,mQ.mZ-17-8-3);id="messageScrollBarDownAll";sh(id,mQ.mZ-8-3);var mp=aI('messagelistdivWrap');eb.ev=Math.floor(mp/eb.eH);if(jj.jB){np("scroll","mailboxState.pagesize="+eb.ev);np("scroll","messagelistdivWrapHeight="+mp);np("scroll","msgheight="+eb.eH);}
if(jL.jJ||jL.jI)eb.ev++;else if(jL.jH)eb.ev+=1;if(jj.jB){np("scroll","msgheight="+eb.eH);np("scroll",">>>>>>>>>>>>>>>> pagesize is now "+eb.ev);}
tv(lw.hW+eb.ev);hS();me();}
function mq(){lw.hW=0;lw.hX=lw.lA;if(lw.hX>eb.ev)lw.hX=eb.ev;mo();}
function mr(){return lw.hW;}
function ms(){return lw.hX;}
function tv(tw){lw.hX=tw;if(lw.hX>lw.lA)lw.hX=lw.lA;}
function tx(){var dG=null;for(var al=lw.hW;al<lw.lx.length;al++){var hQ=lw.lx[al];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){dG=al;break;}
}
if(dG==null){for(var al=lw.hW-1;al>=0;al--){var hQ=lw.lx[al];var Le=Lj(hQ);if(!(Le.fB&eU.eY)){dG=al;break;}
}
}
return dG;}
function ty(){var tz=tx();var tA=new Array();var tB=0;var t5=0;lw.hW=0;for(var al=0;al<lw.ly.length;al++){var tD=tB;var fR=lw.ly[al].fR;var fS=lw.ly[al].fS;var t6=0;var wg=(tz>=fR)&&(tz<=fS);for(var tG=fR,i3=fR-t5;tG<=fS;tG++){if(wg&&tG>=tz){lw.hW=tz-t5-t6;wg=0;}
var hQ=lw.lx[tG];var Le=Lj(hQ);if(Le.fB&eU.eY){t6++;}
else {tA[i3++]=hQ;}
}
var tH=fS-fR+1;if(fR>0)lw.ly[al].fR-=t5;t5+=t6;lw.ly[al].fS-=t5;}
lw.lA-=t5;lw.lx=tA;tv(lw.hW+eb.ev);}
function wc(){var uT=wd();var vY=uT[0];var wb=uT[1];var wa=lw.hW;tm("resort");hy(1);we(vY,wb,wa);}
function wd(){var vu=mr();var vv=ms();var uT=new Array();var vY=null;var wb=null;for(var al=vu;(al<vv)&&(vY==null)&&(wb==null);al++){if(lw.lx[al]!=null){if(vY==null){var hQ=lw.lx[al];var Le=Lj(hQ);vY=Le.fA;}
if((wb==null)&&((lw.lx[al].fB&eU.e0)!=0)){var hQ=lw.lx[al];var Le=Lj(hQ);wb=Le.fA;}
}
}
uT[0]=vY;uT[1]=wb;return uT;}
function we(vY,wb,vu){var i6=null;var i7=null;for(var al=0;al<lw.lA;al++){if(lw.lx[al]!=null){var hQ=lw.lx[al];var gu=Lj(hQ);if(gu!=null){var vz=gu.fA;if(vz==vY)i6=al;if(vz==wb)i7=al;if(i6!=null&&((i7!=null)||(wb==null)))break;}
}
}
if(i7!=null){if(i6==null){lw.hW=i7;}
else {var i8=i7-i6;if(i8<0)i8=-i8;if(i8<eb.ev){if(i6<i7){lw.hW=i6;}
else {lw.hW=i7;}
}
else {lw.hW=i7;}
}
}
else if(i6==null){lw.hW=0;}
else if((vu==0)&&(uf()==null)&&(eb.eu=="all")){lw.hW=0;}
else {lw.hW=i6;}
tv(lw.hW+eb.ev);}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var eb={ec:null,ed:null,ee:null,ef:null,eg:null,eh:false,ei:null,ej:false,ek:'',el:null,uM:0,uN:1,uO:2,em:0,uP:"",en:"INBOX",eo:"c0",vd:null,ve:null,vZ:null,ep:"",uC:"imap4",K1:false,wH:"",uD:false,uE:true,eq:"",er:0,es:0,et:null,onclick:null,eu:"all",ev:8,ew:0,ex:null,ta:null,tb:null,ey:null,ez:null,eA:null,eB:50,eC:100,K2:1000,eD:1000,eE:0,Lg:1,eG:new Array(),wP:new Array(),wQ:0,eH:26,eI:0,eJ:'',eK:'',eL:-1,eM:false,eN:false,eO:false,eP:"compose2.html",eQ:"reply2.html",eR:"forward2.html",x8:false}
;var eS={td:10,te:30}
;var eU={eV:1,eW:2,eX:4,eY:8,eZ:16,e0:32}
;var e2=null;eb.ek=xl.sZ;if(document.all){eb.et="className";eb.onclick="onClick";}
else {eb.et="class";eb.onclick="onclick";}
function e4(e5,e6,e7,e8,e9){this.e5=e5;this.e6=0;this.e6+=e6;this.e7=e7;this.e8=e8;this.e9=0;this.e9+=e9;}
function e_(fa,fb,fc,fd,fe){this.fa=fa;this.fb=fb;this.fc=fc;this.fd=fd;this.fe=fe;}
function ff(fg,fh,fi,fj,fk,fl,dE,fm,fn,d3,fo,xh,fp,fq,fr){if(jj.jB)np("mailbox","new Message_Header("+fr+"',"+fh+"',"+dE+","+fk);this.fs=fg;this.ft=fh;this.fu=fi;this.fv=fj;this.fw=-1;this.fx=fk;this.fy=fp;this.fq=fq;this.fz=fl;this.fA=dE;this.fr=fr;this.fB=0|(fm?eU.eV:0)|(fn?eU.eW:0)|(d3?eU.eX:0)|(fo?0:eU.eZ)|(xh?eU.e0:0);if(xh)d4(dE,true);}
function Lh(al){var Li=eb.eC;var dt=parseInt(al/Li);var du=al%Li;return {dt:dt,du:du}
;}
function Lj(al,Lk){var Li=eb.eC;var dt=parseInt(al/Li);var du=al%Li;if(eb.ez[dt]==null)eb.ez[dt]=new Array();if(Lk){if(jj.jB)np("mailbox","getMsgHeader("+al+", timestamp="+eb.Lg+")");eb.ez[dt].Lg=eb.Lg++;}
return eb.ez[dt][du];}
function Ll(dt,Lm){return dt*eb.eC+Lm;}
function fC(){var e3=location.search.substring(1);var fD=e3.split('&');for(var al=0;al<fD.length;al++){var fE=fD[al].split('=');var fF=unescape(fE[0]).split('+');var aj=fF.join(' ');var fG='';if(typeof fE[1]=='string'){fF=unescape(fE[1]).split('+');fG=fF.join(' ');}
this[aj]=fG;}
this.fH=function (fI,fJ){var fG=this[fI];if(fG==null)return fJ;else return fG;}
;}
function fK(fL,fM,fN,fO){this.fL=fL;this.fM=fM;this.fN=fN;this.fO=fO;this.status="active";}
function fQ(top,bottom){this.top=top;this.bottom=bottom;}
function Ln(top,bottom,fR,fS){if(jj.jB)np("mailbox","MsgDisplaySpan("+top+", "+bottom+", "+fR+", "+fS+")");this.top=top;this.bottom=bottom;this.fR=fR;this.fS=fS;}
function fT(e5,fe,fU){if(jj.jB)np("mailbox","fT: folder="+e5+",mbsid="+(fe?fe:"null")+",sortorder="+(fU?fU:"null"));vH("[Loading]");if(fU!=null){tm(fU,1);if(eb.el==null){eb.uP="";}
else {if((eb.el=="from")&&((e5=='Draft')||(e5=='SentMail')))eb.uP='&sort=to';else eb.uP='&sort='+eb.el;if(eb.em!=eb.uM){eb.uP+="r";eb.em=eb.uO;}
}
}
dr();tL('msg');th('getfirst',0);th('getmore',0);th('get',0);th('getnewemail',0);eb.en=e5;eb.wQ=0;s5("getfirst",0,eb.eB,fe);f_();var w7=rY('spamlogo');if(w7){if(e5=='Screened Mail'){G0('spamlogo');}
else {xL('spamlogo');}
}
var f2="From";var f3=rY('from_anchor');f3.title="Sort message list by Sender";if(e5=='Draft'||e5=='SentMail'){f2="To";f3.title="Sort message list by Recipient";}
l8('fromto',f2);}
function f7(){var cq=mL('msg');if(cq){g3("Action failed.\n\n"+cq,'Getting Mail',false);f_('getfirst');return ;}
if(jj.jB)np("mailbox","createTables(): createMessageList()");lw.hW=0;ge("nochange",true);up();h6();if(jj.jB)np("mailbox","createTables(): createNavigation()");g1();if(jj.jB)np("mailbox","createTables(): loadMore...()");tX('msg');var tO=eb.eB;if(jj.jB)np("mailbox","prev bottom="+eb.ew+", sofar="+tO);var f9=eb.eD-eb.eB;for(var al=eb.ey[0].bottom-1;al>0&&f9>0;al-=eb.eC,f9-=eb.eC){var f5=al-eb.eC+1;if(f5<1)f5=1;s5("pause",1);s5("get",al,f5,tO/eb.ew);tO+=eb.eC;}
s5("updatemsgcount",1);if(f9<=0){if(!eb.ta){if(eb.K1){}
else {alert("Your mailbox is larger than Options->Maximum Messages and will load slower than usual.");}
}
eb.ex=eb.ta=true;}
f_('getfirst');}
function tg(fL){if(eb.wP!=null){for(var ct=0;ct<eb.wP.length;ct++){if((eb.wP[ct]!=null)&&(eb.wP[ct].fL==fL))return 1;}
}
if(eb.eG!=null){for(var ct=0;ct<eb.eG.length;ct++){if((eb.eG[ct]!=null)&&(eb.eG[ct].fL==fL))return 1;}
}
return 0;}
function s5(fL,uQ,f5,f6){if((fL=="getnewemail")&&(tg('getnewemail')||tg('get')))return ;if((fL=="get")||(fL=="getmore")||(fL=="reorder")){var w0;for(var ct=0;ct<eb.eG.length;ct++){if((eb.eG[ct]!=null)&&((eb.eG[ct].fL=="get")||(eb.eG[ct].fL=="getmore"))){if(typeof (w0)=="undefined")w0=ct;if((uQ<=eb.eG[ct].fM)&&(f5>=eb.eG[ct].fN)){if((fL=="reorder")&&(ct!=w0)){var dx=eb.eG[ct];eb.eG[ct]=eb.eG[0];eb.eG[0]=dx;var w1=eb.eG[ct].fO;eb.eG[ct].fO=eb.eG[0].fO;eb.eG[0].fO=w1;}
return ;}
}
}
if(fL=="reorder"){return ;}
}
if(fL=='get'||fL=='getmore'||fL=='pause'||fL=='del'||fL=='getnewemail'||fL=='updatemsgcount'||fL=='getfirst'){eb.eG[eb.eG.length]=new fK(fL,uQ,f5,f6);}
else {eb.wP[eb.wP.length]=new fK(fL,uQ,f5,f6);}
}
function th(fL,ti){if(jj.jB)np("mailbox","removeCommands("+fL+","+ti+")");if((eb.eG==null)&&(eb.wP==null))return ;if(fL=="all"){eb.eG=new Array();eb.wP=new Array();if(jj.jB)np("mailbox","removeCommands(): removing everything");return ;}
var tj=new Array();var wR=new Array();var dG=0;if(eb.wP!=null){for(var ct=0;ct<eb.wP.length;ct++){if(eb.wP[ct]==null)continue;if(eb.wP[ct].status=="remove")continue;if(fL&&(eb.wP[ct].fL==fL))if(ti){if(!dG&&(eb.wP[ct].status=='pending')){dG=1;eb.wQ=0;continue;}
}
else continue;if(jj.jB)np("mailbox","removeCommands(): keeping "+eb.wP[ct].fL);wR[wR.length]=eb.wP[ct];}
if(eb.wP.length!=wR.length){eb.wP=wR;}
}
if(eb.eG!=null){dG=0;for(var ct=0;ct<eb.eG.length;ct++){if(eb.eG[ct]==null)continue;if(eb.eG[ct].status=="remove")continue;if(fL&&(eb.eG[ct].fL==fL))if(ti){if(!dG&&(eb.eG[ct].status=='pending')){dG=1;eb.wQ=0;continue;}
}
else continue;if(jj.jB)np("mailbox","removeCommands(): keeping "+eb.eG[ct].fL);tj[tj.length]=eb.eG[ct];}
if(eb.eG.length!=tj.length){eb.eG=tj;}
}
}
function f_(tk){if((eb.eG==null)&&(eb.wP==null))return ;if(jj.jB){if(eb.wP!=null){for(var ct=0;ct<eb.wP.length;ct++){if(eb.wP[ct]!=null){np("mailbox","cmdList["+ct+"]="+eb.wP[ct].fL+"/"+eb.wP[ct].fM+"/"+eb.wP[ct].fN);}
}
}
if(eb.eG!=null){for(var ct=0;ct<eb.eG.length;ct++){if(eb.eG[ct]!=null){np("mailbox","loadList["+ct+"]="+eb.eG[ct].fL+"/"+eb.eG[ct].fM+"/"+eb.eG[ct].fN);}
}
}
}
th(tk,1);if(eb.wQ==0){var uT=wS();if(!uT)wU();}
}
function wS(){if(eb.wP==null)return false;if(eb.wP[0]!=null){var tl=0;for(;tl<eb.wP.length;tl++){if(eb.wP[tl].status=="active"){break;}
}
if(tl==eb.wP.length){return false;}
if(eb.wP[tl].fL=="fetch"){if(jj.jB)np("mailbox","prefetch is done, reloading");eb.wP[tl].status="remove";ie(eb.wP[tl].fM,eb.wP[tl].fN);}
else if(eb.wP[tl].fL=="chkLanding"){var cJ=eb.wP[tl].fM;if(jj.jB)np("mailbox","loading url="+cJ);mG(cJ,'chkLanding',Jf);eb.wP[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();}
else if(eb.wP[tl].fL=="empty"){var cJ=eb.wP[tl].fM;if(jj.jB)np("mailbox","loading url="+cJ);mG(cJ,'empty',ic);eb.wP[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();}
else if(eb.wP[tl].fL=="folders"){var cJ=eb.wP[tl].fM;if(jj.jB)np("mailbox","loading url="+cJ);mG(cJ,'folders',u6);eb.wP[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();}
else if(eb.wP[tl].fL=="getpref"){var cJ=eb.wP[tl].fM;if(jj.jB)np("mailbox","loading url="+cJ);mG(cJ,'getpref',kY);eb.wP[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();}
else if(eb.wP[tl].fL=="setpref"){var cJ=eb.wP[tl].fM;if(jj.jB)np("mailbox","loading url="+cJ);mG(cJ,'setpref',kX);eb.wP[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();}
else if(eb.wP[tl].fL=="move"){vH("[Moving]");var cJ=eb.wP[tl].fM;if(jj.jB)np("mailbox","loading url="+cJ);mG(cJ,'move',d0,eb.wP[tl].fN);eb.wP[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();vI();}
else {return false;}
}
else {eb.wP=new Array();l_();return false;}
return true;}
function wU(){if(eb.eG==null)return false;var eG=eb.eG;if(eG[0]!=null){var tl=0;for(;tl<eG.length;tl++){if(eG[tl].status=="active"){break;}
}
if(tl==eG.length){return ;}
if((eG[tl].fL=="get")||(eG[tl].fL=="getmore")||(eG[tl].fL=="getfirst")){var gc=(eG[tl].fM-eG[tl].fN+1);var gd=eG[tl].fM;var cJ=ek()+'?folder='+wY(eb.en);if(eG[tl].fL=="getfirst"){cJ+='&cmd=List&sid='+eG[tl].fO+'&templ=messagelist.xml&pgsize='+eG[tl].fN;eG[tl].fO=0;}
else {cJ+='&cmd=FList&sid='+eb.eo+'&templ=messages.xml&pgsize='+gc+'&no='+gd;}
cJ+=eb.uP;if(jj.jB)np("mailbox","loading url="+cJ);if(eG[tl].fO!=-1)hl('whereAreWe',Math.ceil(100*eG[tl].fO),'','diskUsedOK','');if(eG[tl].fL=="get")mG(cJ,'msg',g7);else if(eG[tl].fL=="getfirst")mG(cJ,'msg',f7);else mG(cJ,'msg',g8);eG[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();}
else if(eG[tl].fL=="getnewemail"){vH("[Checking]");new JO('checkMailIconDiv',{JP:1000*xl.Ki,K3:''}
);var gc=eG[tl].fN;var cJ=ek()+'?cmd=List&folder='+wY(eb.en)+'&sid='+eb.eo+'&templ=messages.xml&no=0&pgsize='+gc;if(jj.jB)np("mailbox","loading url="+cJ);mG(cJ,'newmailcheck',eG[tl].fM?s8:iX);eG[tl].status="pending";var wT=new Date();eb.wQ=wT.getTime();vI();}
else if(eG[tl].fL=="del"){Lo();eG[tl].status="remove";f_();}
else if(eG[tl].fL=="updatemsgcount"){vI();l_();eG[tl].status="remove";f_();}
else if(eG[tl].fL=="pause"){setTimeout(f_,eG[tl].fM);eG[tl].status="remove";}
}
else {eG=new Array();l_();}
}
function Lo(){return ;var Lp=eb;var Lq=lw;var ez=eb.ez;var Lr=eb.Lg,minTimeStampIndex=-1;if(jj.jB)np("mailbox","loadedMessages="+eb.eE+", maxMessagesToLoad="+eb.eD);if(eb.eE>eb.eD){for(var dt=0;dt<ez.length-1;dt++){if(ez[dt]){if(minTimeStampIndex==-1){Lr=ez[dt].Lg;minTimeStampIndex=dt;if(jj.jB)np("mailbox","trim: found thou="+dt+", timestamp="+Lr);}
else if(Lr>ez[dt].Lg){Lr=ez[dt].Lg;minTimeStampIndex=dt;if(jj.jB)np("mailbox","trim: found thou="+dt+", timestamp="+Lr);}
else {if(jj.jB)np("mailbox","trim: skipping thou="+dt+", timestamp="+Lr+"\n"+"minTimeStamp="+Lr+", index="+minTimeStampIndex);}
}
}
if(jj.jB)np("mailbox","minTimeStamp="+Lr+", minTimeStampIndex="+minTimeStampIndex+"\n");var Le=ez[minTimeStampIndex];if(Le){var left=Lv(Le,0);while(left<Le.length){var right=Lw(Le,left);var Ls=0;for(var al=left;al<right;al++){var fA=Le[al].fA;delete eb.eA[fA];delete Le[al];Le[al]=null;Ls++;}
var Lt=Ll(minTimeStampIndex,left);var Lu=Ll(minTimeStampIndex,right-1);if(jj.jB)np("mailbox","deleting thou="+minTimeStampIndex+", left="+left+", right="+right+"\nindex left="+Lt+", right="+Lu);Ly(Lu,Lt);eb.eE-=Ls;left=Lv(Le,right);}
delete ez[minTimeStampIndex];ez[minTimeStampIndex]=null;}
}
var al=0;}
function Lv(AY,fM){for(;fM<AY.length;fM++){if(AY[fM])break;}
return fM;}
function Lw(AY,fM){for(;fM<AY.length;fM++){if(!AY[fM])break;}
return fM;}
function wV(){if(eb.wQ!=0){var wT=new Date();if((wT.getTime()-eb.wQ)>xl.wW*1000){eb.wQ=0;}
}
setTimeout(wV,xl.wX*1000);}
function ge(gf,gg){if((gf!="nochange")&&eb.ex){if(!eb.tb)if(eb.K1){}
else {alert("Your mailbox is larger than Options->Maximum Messages and will sort slower than usual.");}
eb.tb=true;ie(escape(eb.en),eb.eo,gf);return ;}
if(gg)gh();if(eb.ez==null)return ;tm(gf);hy(1);mq();hS(false);}
function Jc(Jd){var cr=mt.mx?mt.mw[Jd].responseXML:mt.mw[Jd];var gj=cr.getElementsByTagName('auth_user');eb.eq=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";jd();var gj=cr.getElementsByTagName('current_user');eb.ep=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=cr.getElementsByTagName('server');hi(gj[0].getAttribute('used'),gj[0].getAttribute('maxsize'));gj=cr.getElementsByTagName('current_user_sid');eb.eo=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=cr.getElementsByTagName('current_protocol');eb.uC=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue.toLowerCase():"";gj=cr.getElementsByTagName('current_server');eb.wH=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=cr.getElementsByTagName('has_folders');var jb=gj[0]&&gj[0].firstChild&&gj[0].firstChild.nodeValue=='1'?true:false;if(jb!=eb.uD){eb.uD=jb;var wI=rY("moveToFolder");if(eb.uD){G0("moveToFolder");}
else {xL("moveToFolder");}
}
gj=cr.getElementsByTagName('localUser');jb=gj[0]&&gj[0].firstChild&&gj[0].firstChild.nodeValue=='1'?true:false;if(jb!=eb.uE){eb.uE=jb;var uF=rY("currentSettings");var uG=rY("diskUsageMenu");if(eb.uE){if(uF)uF.style.display="";uG.style.display="";uB(true);}
else {if(uF)uF.style.display="none";uG.style.display="none";uB(false);}
}
ix=rY('mailboxTitle');ix.innerHTML=xV(eb.uE,eb.ep,eb.wH);}
function gh(){var cr=mt.mx?mt.mw['msg'].responseXML:mt.mw['msg'];var gi=cr.getElementsByTagName('messageheaders');if(gi==null)return ;eb.en=gi[0].getAttribute('mailbox');if(eb.en.toLowerCase()=="inbox")eb.en="INBOX";eb.ew=parseInt(gi[0].getAttribute('max'));if(isNaN(eb.ew))eb.ew=0;var gj=cr.getElementsByTagName('auth_user');eb.eq=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";jd();var gj=cr.getElementsByTagName('current_user');eb.ep=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=cr.getElementsByTagName('server');if(gj[0])hi(gj[0].getAttribute('used'),gj[0].getAttribute('maxsize'));gj=cr.getElementsByTagName('current_user_sid');eb.eo=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=cr.getElementsByTagName('current_protocol');eb.uC=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue.toLowerCase():"";gj=cr.getElementsByTagName('current_server');eb.wH=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=cr.getElementsByTagName('has_folders');var jb=gj[0]&&gj[0].firstChild&&gj[0].firstChild.nodeValue=='1'?true:false;if(jb!=eb.uD){eb.uD=jb;var wI=rY("moveToFolder");if(eb.uD){G0("moveToFolder");}
else {xL("moveToFolder");}
}
gj=cr.getElementsByTagName('localUser');jb=gj[0]&&gj[0].firstChild&&gj[0].firstChild.nodeValue=='1'?true:false;if(jb!=eb.uE){eb.uE=jb;var uF=rY("currentSettings");var uG=rY("diskUsageMenu");if(eb.uE){if(uF)uF.style.display="";uG.style.display="";uB(true);}
else {if(uF)uF.style.display="none";uG.style.display="none";uB(false);}
}
ix=rY('mailboxTitle');ix.innerHTML=xV(eb.uE,eb.ep,eb.wH);var gk=rY('folderTitle');gk.innerHTML=xT(eb.en);var gs=gi[0].getElementsByTagName('messageheader');eb.ez=new Array();eb.ey=null;eb.eE=0;eb.eA=new Array();if(gs)gq(gs);}
function v9(dE){return "0000000000000000000000000000000000000000000000000000000000000000000000".substr(dE.length)+dE;}
function gq(gs){var top=null;var bottom=null;for(var al=0;al<gs.length;al++){var gt=gs[al];var gj=gt.getElementsByTagName('num');var fr=gj[0]&&gj[0].firstChild?parseInt(gj[0].firstChild.nodeValue):1;if(top==null)top=fr;else if(fr>top)top=fr;if(bottom==null)bottom=fr;else if(fr<bottom)bottom=fr;var gu=gw(gt);gP(fr,gu);eb.eE++;}
if(jj.jB){var gv=new Date();np("mailbox","msg XML: "+(gv.getTime()-mt.mv['msg'].getTime()));}
Lx(top,bottom);}
function gw(gt){var gx=gt.getAttribute('hasattachments')=="true";var gy=gt.getAttribute('isSeen')=="false";var gz=gt.getAttribute('isAnswered')=="true";var gA=gt.getAttribute('isForwarded')=="true";var gj=gt.getElementsByTagName('uid');var gB=(gj[0]&&gj[0].firstChild)?gj[0].firstChild.nodeValue:0;gj=gt.getElementsByTagName('fromto');var ft="";var uR=gj[0].childNodes[0]&&gj[0].childNodes[0].firstChild?gj[0].childNodes[0].firstChild.nodeValue:"";var uS=gj[0].childNodes[1]&&gj[0].childNodes[1].firstChild?gj[0].childNodes[1].firstChild.nodeValue:"";var gE=uR;if(uS==uR)ft=uR;else ft=uR+" <"+uS+">";gj=gt.getElementsByTagName('subject');var gF=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=gt.getElementsByTagName('date');var gK=gj[0]?(gj[0].getAttribute('seconds')*1000):cw();var gL=new Date(gK);var gM=setTime(gL);var gJ=(gL.getMonth()+1)+"/"+gL.getDate()+"/"+(gL.getFullYear());gj=gt.getElementsByTagName('size');var gN=gj[0]&&gj[0].firstChild?gj[0].firstChild.nodeValue:"";gj=gt.getElementsByTagName('num');var gO=gj[0]&&gj[0].firstChild?parseInt(gj[0].firstChild.nodeValue):1;return new ff(gE,ft,"",gF,gJ,gN,gB,gz,gA,gx,gy,false,gK,gM,gO);}
function gP(fr,gu){var index=Lh(fr);if(!eb.ez)eb.ez=new Array();if(!eb.ez[index.dt]){eb.ez[index.dt]=new Array();eb.ez[index.dt].Lg=eb.Lg++;}
eb.ez[index.dt][index.du]=gu;eb.eA[gu.fA]=fr;}
function gQ(gR){if(eb.ez==null)return ;if(jj.jB)np("mailbox","sortMessageHeaders()");var gS=new Array();for(var al=0;al<eb.ez.length;al++){if(eb.ez[al]){for(var ct=0;ct<eb.ez[al].length;ct++){var gT=eb.ez[al][ct];if(gT){gS[gS.length]=gT;}
}
}
}
gS.sort(gR);eb.ez=new Array();for(ct=0,q8=1;ct<gS.length;ct++,q8++){gP(q8,gS[ct]);}
}
function Lx(gV,gW){if(eb.ey==null)eb.ey=new Array();if(eb.ey.length==0){eb.ey[0]=new fQ(gV,gW);return ;}
var dG=null;for(var al=0;al<eb.ey.length&&!dG;al++){var fi=eb.ey[al].top;var gX=eb.ey[al].bottom;if((gV>=fi)&&(gV<=gX)){if(gW>gX)eb.ey[al].bottom=gW;dG=1;}
else if((gW>=fi)&&(gW<=gX)){if(gV<fi)eb.ey[al].top=gV;dG=1;}
else if(gV==gX-1){eb.ey[al].bottom=gW;dG=1;}
else if(gW==fi+1){eb.ey[al].top=gV;dG=1;}
}
if(!dG){eb.ey[eb.ey.length]=new fQ(gV,gW);}
if(eb.ey.length>1)eb.ey.sort(gY);}
function Ly(gV,gW){if((eb.ey==null)||(eb.ey.length==0))return ;if(jj.jB)np("mailbox","removeMsgSpan(ntop="+gV+", nbottom="+gW+")");var dG=false;var Lz=false;var LA=false;for(var al=0;al<eb.ey.length&&!dG;al++){if(eb.ey[al]){var fi=eb.ey[al].top;var gX=eb.ey[al].bottom;if((gV>=fi)&&(gV<=gX)){if((gW>=fi)&&(gW<=gX)){if(gV==fi){if(gW==gX){eb.ey[al]=null;LA=true;}
else {eb.ey[al].top=gW-1;}
}
else {if(gW==gX){eb.ey[al].bottom=gV+1;}
else {eb.ey[al].bottom=gV+1;eb.ey[eb.ey.length]=new fQ(gW-1,gX);Lz=true;}
}
dG=true;}
else {if(gV==fi){gV=gX-1;eb.ey[al]=null;LA=true;al=-1;}
else {eb.ey[al].bottom=gV+1;gV=gX-1;al=-1;}
}
}
}
}
if(LA){var LB=[];for(var al=0;al<eb.ey.length&&!dG;al++){if(eb.ey[al]){LB[LB.length]=eb.ey[al];}
}
eb.ey=LB;}
if(Lz){eb.ey.sort(gY);}
}
function gY(gZ,g0){return g0.top-gZ.top;}
function g1(Jd){if(!Jd)Jd='msg';ih(Jd);u4(Jd);ij();}
function g2(){var cJ=xl.s0+"&url="+escape(xl.KZ);window.location=cJ;}
function x9(){if(document.cookie.indexOf("AUTH=")<0)w8();}
function w8(){var cJ=xl.w9+"?url="+window.location.href;window.location=cJ;}
function g3(g4,g5,g6){if(g6||(g4!=null&&g4.indexOf("Authentication Failed")>=0)){w8();}
else if((g4!=null)&&((g4.indexOf("Your login failed")>=0)||(g4.indexOf("Connection to email server failed")>=0))){hH('Mailbox',eb.vZ);alert("There was a problem logging in. Mailbox Manager will be started for you.\n\nThe detailed error message is: "+g5+" / "+g4);}
else if((g4!=null)&&(g4.indexOf("Message UIDs are changed")>=0)){alert("Message Identifiers have changed on the server.  Reloading all messages.");ie(escape(eb.en),eb.eo);}
else {if(g4!=null){alert("An error has occurred, please try again.\n\nThe detailed error message is:\n"+g5+" / "+g4);}
}
}
function g7(){if(jj.jB)np("mailbox","addToTables(), visibleStartNum="+eb.visibleStartNum+", max="+eb.ew);ho(0);f_('get');}
function g8(){if(jj.jB)np("mailbox","addToTables(), visibleStartNum="+eb.visibleStartNum+", max="+eb.ew);ho(0);f_('getmore');}
function g9(g_,ha){if(g_==null)return ha==null?0:1;if(ha==null)return g_==null?0:-1;var wq=ha.fs.toLowerCase();var wr=g_.fs.toLowerCase();if(wq==wr)return hc(g_,ha);return wq<wr?-1:1;}
function hb(g_,ha){if(g_==null)return ha==null?0:1;if(ha==null)return g_==null?0:-1;if(g_.fw==-1)g_.fw=iU(g_.fv);if(ha.fw==-1)ha.fw=iU(ha.fv);iu=g_.fv.toLowerCase().substring(g_.fw);subb=ha.fv.toLowerCase().substring(ha.fw);if(subb==iu)return hc(g_,ha);return subb<iu?-1:1;}
function hc(g_,ha){if(g_==null)return ha==null?0:-1;if(ha==null)return g_==null?0:-1;if(g_.fy<ha.fy){return -1;}
else if(g_.fy>ha.fy){return 1;}
else {return 0;}
}
function hd(g_,ha){if(g_==null)return ha==null?0:-1;if(ha==null)return g_==null?0:-1;return g_.fz-ha.fz;}
function setTime(gL){var hf=gL.getHours();var hg=gL.getMinutes();var hh="am";if(hf>11){hh="pm";}
if(hf>12){hf-=12;}
if(hf==0){hf=12;}
if(hg<10){hg="0"+hg;}
return hf+":"+hg+hh;}
function hi(er,es){if(jj.jB)np("mailbox","updateDiskUsage("+er+","+es+")");if(er==0&&es==0){return ;}
else if(es!=0){eb.es=es*1024;}
es=eb.es;eb.er=er;var f6=Math.ceil(100*er/es);var hj=f6<=75?"diskUsedOK":f6<=90?"diskUsedCAUTION":"diskUsedWARNING";var hk=(es/(1024*1024))+"MB";hl('diskUsageMenu',f6,"Mailbox Usage",hj,hk);}
function hl(fI,f6,f2,hj,hk){var hm=rY(fI);var cn="";if(f2!="")cn+="<span class='diskUsageText'>"+f2+"</span>";if(f6!=-1){if(f6>100)f6=100;var hn=100-f6;cn+="<table cellpadding='0' cellspacing='0' class='diskGraph'><tr>"+"<td width='"+f6+"%' class='"+hj+"'>&nbsp;</td>"+"<td width='"+hn+"%' class='diskUnused'>&nbsp;</td>"+"</tr></table>";}
if(hk!="")cn+="<span class='diskUsageText'>"+f6+"% of "+hk+"</span>";hm.innerHTML=cn;}
function ho(hp){var cr=mt.mx?mt.mw['msg'].responseXML:mt.mw['msg'];var gi=cr.getElementsByTagName('messageheaders');if(gi==null||gi[0]==null)return ;var hq=gi[0].getAttribute('max');if(hq!=eb.ew){s5("getnewemail",0,hq-eb.ew);}
var gs=gi[0].getElementsByTagName('messageheader');if(gs)gq(gs);tm("nochange");hy(hp);hS(false);}
function tm(gf,tn){if(gf=="nochange"){}
else if((gf!=eb.el)||(gf=="resort")){var hs;if(jj.jB)np("mailbox","NEW SORT ORDER: "+gf);if(gf=="resort"){gf=eb.el;}
else {eb.em=eb.uM;if((eb.el=='from')||(eb.el=='subject')||(eb.el=='date')||(eb.el=='size')){hs=rY(eb.el+'_col');hs.setAttribute("src","images/pixelclear.gif");}
}
if(gf=="from"){if(!tn)gQ(g9);hs=rY('from_col');hs.setAttribute("src",(eb.em==eb.uM)?"images/ascending.gif":"images/descending.gif");}
else if(gf=="subject"){if(!tn)gQ(hb);hs=rY('subject_col');hs.setAttribute("src",(eb.em==eb.uM)?"images/ascending.gif":"images/descending.gif");}
else if(gf=="date"){if(!tn)gQ(hc);hs=rY('date_col');hs.setAttribute("src",(eb.em==eb.uM)?"images/ascending.gif":"images/descending.gif");}
else if(gf=="size"){if(!tn)gQ(hd);hs=rY('size_col');hs.setAttribute("src",(eb.em==eb.uM)?"images/ascending.gif":"images/descending.gif");}
else {}
eb.el=gf;}
else {if(eb.em==eb.uM){eb.em=eb.uN;if(jj.jB)np("mailbox","NOW SORTING DESCENDING");if((eb.el=='from')||(eb.el=='subject')||(eb.el=='date')||(eb.el=='size')){hs=rY(eb.el+'_col');hs.setAttribute("src","images/descending.gif");}
}
else {eb.em=eb.uM;if(jj.jB)np("mailbox","NOW SORTING ASCENDING");if((eb.el=='from')||(eb.el=='subject')||(eb.el=='date')||(eb.el=='size')){hs=rY(eb.el+'_col');hs.setAttribute("src","images/ascending.gif");}
}
}
}
function ht(hu,hv,hw){if(jj.jB)np("mailbox","dateToMilliSeconds("+hu+","+hv+","+hw+")");var hx=new Date(hu,hv-1,hw);return hx.getTime();}
function uf(){return jj.w2;}
function hy(hp){var hz=uf();var eu=eb.eu;var hA;if(jj.jB)np("mailbox","refilterMessageList("+hp+"), filterCriteria="+eu+",filterStr="+hz);l8('filtertext',"");l8('searchtext',"");l8('backtoalltext',"");if(eu!="all"){var cw,hB,hx;if(eu=="today"){l8('filtertext',": Today's msgs");cw=new Date();hB=new Date(cw.getFullYear(),cw.getMonth(),cw.getDate());hA=hB.getTime();}
else if(eu=="twodays"){l8('filtertext',": Today and yesterday's msgs");cw=new Date();hB=new Date(cw.getFullYear(),cw.getMonth(),cw.getDate());hx=new Date(hB.getTime()-24*60*60*1000);hA=hx.getTime();}
else if(eu=="week"){l8('filtertext',": This week's msgs");cw=new Date();hB=new Date(cw.getFullYear(),cw.getMonth(),cw.getDate());hx=new Date(hB.getTime()-6*24*60*60*1000);hA=hx.getTime();}
else if(eu=="month"){l8('filtertext',": This month's msgs");cw=new Date();hB=new Date(cw.getFullYear(),cw.getMonth(),cw.getDate());hx=new Date(hB.getTime()-30*24*60*60*1000);hA=hx.getTime();}
else if(eu=="unread"){l8('filtertext',": Unread msgs");}
else {l8('filtertext',": ??? filtered msgs: '"+eu+"'");}
l8('backtoalltext',"Back to all");}
else {}
if(hz!=null){var hC=hz;l8('searchtext','Search: "'+hC+'"');l8('backtoalltext',"Back to all");}
var al=0;var fj=0;var ct=0;var wf=0;eb.eI=0;lw.lx=new Array();if(hp){yg();}
lw.ly=new Array();if((eb.em!=eb.uN)||eb.ex){for(fj=0;fj<eb.ey.length;fj++){var top=eb.ey[fj].top;if(fj>0){ct+=eb.ey[fj-1].bottom-eb.ey[fj].top-1;}
var hD=ct;var bottom=eb.ey[fj].bottom;for(al=top;al>=bottom;al--){var index=Lh(al);if(eb.ez[index.dt]&&eb.ez[index.dt][index.du]){var gu=eb.ez[index.dt][index.du];if(gu.fB&eU.eY){if(jj.jB)np("mailbox",">>>>deleted");wf++;}
else if(!hF(gu,eu,hz,hA)){lw.lx[ct++]=al;var Le=Lj(al);eb.eI+=(Le.fB&eU.eZ)?0:1;if(!Le.e0&&dk.w_)xf();}
}
}
var hE=ct-1;lw.ly[lw.ly.length]=new Ln(top,bottom,hD,hE);}
}
else {for(fj=eb.ey.length-1;fj>=0;fj--){var top=eb.ey[fj].top;if(fj!=eb.ey.length-1){ct+=eb.ey[fj].bottom-eb.ey[fj+1].top-1;}
var hD=ct;var bottom=eb.ey[fj].bottom;for(al=bottom;al<=top;al++){var index=Lh(al);if(eb.ez[index.dt]&&eb.ez[index.dt][index.du]){var gu=eb.ez[index.dt][index.du];if(gu.fB&eU.eY){if(jj.jB)np("mailbox",">>>>deleted");wf++;}
else if(!hF(gu,eu,hz,hA)){lw.lx[ct++]=al;var Le=Lj(al);eb.eI+=(Le.fB&eU.eZ)?0:1;if(!Le.e0&&dk.w_)xf();}
}
}
var hE=ct-1;lw.ly[lw.ly.length]=new Ln(top,bottom,hD,hE);}
}
if(hp){lw.hW=0;}
var vf=lw.lA;if((eu=="all")&&(hz==null))lw.lA=eb.ew-wf;else lw.lA=ct;tv(lw.hW+eb.ev);if(vf!=lw.lA)l_();if(jj.jB)np("mailbox","...startmsg="+lw.hW+", endmsg="+lw.hX);}
function xi(gR){for(var fj=0;fj<eb.ey.length;fj++){var top=eb.ey[fj].top;var bottom=eb.ey[fj].bottom;for(var al=top;al>=bottom;al--){var index=Lh(al);if(eb.ez[index.dt]&&eb.ez[index.dt][index.du]){gR(eb.ez[index.dt][index.du]);}
}
}
}
function LX(gR){for(var al=0;al<lw.lx.length;al++){hQ=lw.lx[al];var Le=Lj(hQ);if(Le)gR(Le);}
}
function hF(gu,eu,hz,hA){if(jj.jB)np("mailbox","filterOutMessage("+eu+","+hz+","+hA+")");if(eu=="all"){}
else if(eu=="unread"){if(gu.fB&eU.eZ)return true;}
else if((eu=="today")||(eu=="twodays")||(eu=="week")||(eu=="month")){if(gu.fy<hA)return true;}
else if(eu=="attach"){if(!(gu.fB&eU.eX))return true;}
else if(eu=="noattach"){if(gu.fB&eU.eX)return true;}
if(hz!=null&&hz!=""){if(jj.jB)np("mailbox","subject="+gu.fv);if((gu.fv.toLowerCase().indexOf(hz)==-1)&&(gu.ft.toLowerCase().indexOf(hz)==-1)&&(gu.fu.toLowerCase().indexOf(hz)==-1))return true;}
if(jj.jB)np("mailbox","....keeping message");return false;}
function ek(){return eb.ek+Math.random().toString().substring(2);}
function hG(){return "sid="+eb.eo;}
function hH(action,oh){var hM;var hJ;if(screen.height<=884){hJ=eval(parseInt(screen.height*0.88));}
else {hJ=780;}
var hK=eval((screen.width-614)/2);var hL=eval((screen.height-hJ)/4);if(action=="AddressBook"){hM=window.open(ek()+"?cmd=QueryForm");}
else if(action=="Calendar"){hM=window.open(xl.sS);}
else if(action=="Forward"){hM=window.open(xl.sV);}
else if(action=="ParentControl"){hM=window.open(xl.sU);}
else if(action=="Password"){hM=window.open(xl.sT);}
else if(action=="MemberSvcs"){hM=window.open(xl.sW);}
else if(action=="PWP"){hM=window.open(xl.Km);}
else if(action=="Feedback"){hM=window.open(xl.sX);}
else if(action=="Virus"){hM=window.open(xl.sW+"VirusFilter");}
else if(action=="SpamBlock"){hM=window.open(xl.sW+"EmailScreener");}
else if(action=="RSSedit"){hM=window.open(xl.KP);}
else if(action=="Help"){hM=window.open('/wm/help/advhelp.html',"Help",'width=575,height=400,top='+hL+',left='+hK+',scrollbars=yes,resizable=yes,menubar=no,toolbar=no,status=no,location=no,address=no');}
else if(action=="HelpCheck"){hM=window.open('/wm/help/advhelp.html#a11',"Help",'width=575,height=400,top='+hL+',left='+hK+',scrollbars=yes,resizable=yes,menubar=no,toolbar=no,status=no,location=no,address=no');}
else if(action=="Reminder"){lt='cgi-bin/cal?op=create&what=reminder&txtSubject='+escape(eb.eJ);hM=window.open(xl.sS+lt,"",'width=770,height=554,top='+hL+',left='+hK+',scrollbars=yes,resizable=yes,menubar=no,toolbar=no,status=no,location=no,address=no');}
else if(action=="Contact"){hM=window.open(eb.eK);}
else {if(action=="Folders"){xD(oh);return ;}
else if(action=="Mailbox"){xE(oh);return ;}
else if(action=="Options"){xF(oh);return ;}
else if(action=="Option2"){lt="?cmd=Pref&"+hG();if(oh&&oh!=""){lt+="&url=/wmui/close.html";lt+="#"+oh;}
}
hM=window.open(ek()+lt,"",'width=770,height=554,top='+hL+',left='+hK+',scrollbars=yes,resizable=yes,menubar=no,toolbar=no,status=no,location=no,address=no');}
hM.focus();}
function hN(){if((eb.eL!=-1)&&(eb.eL<ms()-1))hP(eb.eL+1);return false;}
function hO(){if((eb.eL!=-1)&&(eb.eL>mr()))hP(eb.eL-1);return false;}
function hP(hQ,hR){if(hR&&hR.type=='checkbox'){return ;}
if(jj.jn=="Minimize"){return ;}
eb.eL=hQ;var dE=u0(hQ,eb.en);if(dE=="")return ;var cJ=ek()+'?cmd=Show&uid='+dE+'&folder='+wY(eb.en)+'&sid='+eb.eo+'&templ=readpane.html';var h7=rY('readmessage');if(h7){var al=h7.src.indexOf('?');var ct=cJ.indexOf('?');if(al!=-1&&ct!=-1&&h7.src.substring(al)==cJ.substring(ct)){if(jj.jB)np("mailbox","hP: already have url...early return");return ;}
}
h8();if(h7){h7.src=cJ;h7.onload=vG;}
}
function u0(hQ,e5){if(eb.en!=e5){return "";}
var Le=Lj(hQ);if(!(Le.fB&eU.eZ)){Le.fB|=eU.eZ;eb.eI--;up();for(var al=0;al<eb.ec.length;al++){if(eb.ec[al].e5==e5){eb.ec[al].e6--;if((e5=="INBOX")||jj.jE||(e5=="Screened Mail"))ij();break;}
}
}
return Le.fA;}
function vO(dE,e5,vP){if(eb.en!=e5){return ;}
var hQ=dH(dE);if(hQ<0){return ;}
var ui=Lj(hQ);if(!(ui.fB&vP)){ui.fB|=vP;var hW=mr();var hX=ms();for(var al=hW;al<hX;al++){if((lw.lx[al]!=null)&&(lw.lx[al]==hQ)){an=rY("RepFor"+dE);if((ui.fB&eU.eV)&&(ui.fB&eU.eW)){an.innerHTML='<img src="images/status-replyforward.gif" alt="replied and forwarded." title="replied and forwarded." border="0" hspace="0">';}
else if(ui.fB&eU.eW){an.innerHTML='<img src="images/status-forward.gif" alt="forwarded." title="forwarded." border="0" hspace="0">';}
else if(ui.fB&eU.eV){an.innerHTML='<img src="images/status-reply.gif" alt="replied." title="replied." border="0" hspace="0">';}
else {an.innerHTML='<img src="images/pixelclear.gif" alt=" " border="0" hspace="0">';}
}
}
}
}
function vG(){if(jj.jB)np("mailbox","iframeOnload: triggered");}
function hS(){var hT=new Date();var hV='<table id="message-table" summary=" " class="listbody" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed; width:658px;border-collapse: collapse;">\n';eb.x8=-1;hV+='<tbody id="messagelist">\n';hV+='<tr class="listread" valign="top" style="height:0px;">';hV+='<th class="ml-check" id="mlCheck2" align="center" width="20">';hV+='<img src="images/pixelclear.gif" alt=" " border="0" hspace="0">';hV+='</th>';hV+='<th class="ml-status" id="mlStatus2" align="center" width="20">';hV+='<img src="images/pixelclear.gif" alt=" " border="0" hspace="0">';hV+='</th>';hV+='<th class="ml-attach" id="mlAttach2" align="center" width="20">';hV+='<img src="images/pixelclear.gif" alt=" " border="0" hspace="0">';hV+='</th>';hV+='<th class="ml-from" id="mlFrom2"></th>';hV+='<th class="ml-subject" id="mlSubject2"></th>';hV+='<th class="ml-date" id="mlDate2"></th>';hV+='<th class="ml-size" id="mlSize2"></th>';hV+='</tr>';var hW=mr();var hX=ms();if(jj.jB)np("mailbox","redrawMessageList: displaying msgs "+hW+" thru "+hX);for(var al=hW;al<hX;al++){hV+=x1(lw.lx[al],al);}
hV+='</tbody>\n';hV+='</table>\n';var h0=rY('messagelistdiv');h0.innerHTML=hV;db(sA("message-header-table"));if(jj.jB){np("mailbox",'tally selected: '+dk.uy);}
if(dk.uy==0){uq("Open,Print,Reply,ReplyAll,Forward,Source,Delete,MarkRead,MarkUnread,Spam");}
else if(dk.uy==1){ux("Open,Print,Reply,ReplyAll,Forward,Source,Delete,Spam");x_(eb.x8);}
else {uq("Open,Print,Reply,ReplyAll,Forward,Source");ux("Delete,Spam,MarkRead,MarkUnread");}
if(jj.jB){var h1=new Date();np("mailbox",'render ml: '+(h1.getTime()-hT.getTime()));}
}
function x_(ya){if(ya==-1){var al=dH(dk.current);if(al!=-1){var ui=Lj(al);ya=(ui.fB&eU.eZ)?1:0;}
}
if(ya==1){ux("MarkUnread");uq("MarkRead");}
else {ux("MarkRead");uq("MarkUnread");}
}
function up(){var hT=new Date();var hW=mr();var hX=ms();eb.x8=-1;if(jj.jB)np("mailbox","morphMessageList: morphing msgs "+hW+" thru "+hX);for(var al=hW;al<hX;al++){if(lw.lx[al]!=null){var hQ=lw.lx[al];var ui=Lj(hQ);if(ui&&!(ui.fB&eU.eY)){var hY="listread";var hZ="normal";if(!(ui.fB&eU.eZ)){hY="listunread";hZ="bold";}
if(eb.x8==-1&&(ui.fB&eU.e0)){eb.x8=(ui.fB&eU.eZ)?1:0;}
var dx=(ui.fB&eU.e0)?'On':'';if(jj.jB)np("mailbox","Morphing message "+al+" => "+hQ+",class="+hY+dx+",isSelected="+((ui.fB&eU.e0)?"true":"false"));var an=rY("Wrap"+ui.fA);an.setAttribute(eb.et,hY+dx);an=rY("From"+ui.fA);an.style.fontWeight=hZ;an=rY("Subject"+ui.fA);an.style.fontWeight=hZ;an=rY("Date"+ui.fA);an.style.fontWeight=hZ;an=rY("Size"+ui.fA);an.style.fontWeight=hZ;an=rY("Check"+ui.fA);an.checked=(ui.fB&eU.e0)!=0;}
}
}
if(jj.jB)np("mailbox",'tally selected: '+dk.uy);if(dk.uy==0){uq("Open,Print,Reply,ReplyAll,Forward,Source,Delete,MarkRead,MarkUnread,Spam");}
else if(dk.uy==1){ux("Open,Print,Reply,ReplyAll,Forward,Source,Delete,Spam");x_(eb.x8);}
else {uq("Open,Print,Reply,ReplyAll,Forward,Source");ux("Delete,Spam,MarkRead,MarkUnread");}
if(jj.jB){var h1=new Date();np("mailbox",'render ml: '+(h1.getTime()-hT.getTime()));}
}
function h6(){var h7=rY('readmessage');if(!h7){return ;}
if(jj.jB)np("mailbox","defaultReadPane entry: pane.src='"+h7.src+"'");var h5='';if(jj.jn!='Minimize'){if(h7.src.indexOf("/select.html")>=0){return ;}
h7.src="select.html";}
else {if(h7.src.indexOf("/minimized.html")>=0){return ;}
h7.src="minimized.html";}
}
function GN(){var h7=rY('readrss');if(!h7){return ;}
if(jj.jB)np("mailbox","defaultReadRssPane entry: pane.src='"+h7.src+"'");if(jj.jn!='Minimize'){if(h7.src.indexOf("/selectrss.html")>=0){return ;}
h7.src="selectrss.html";}
else {if(h7.src.indexOf("/minimizedrss.html")>=0){return ;}
h7.src="minimizedrss.html";}
}
function h8(){if(jj.jB)np("mailbox","loadingReadPane entry for message "+eb.eL);var h7=rY('readmessage');if(h7){h7.src="loading.html";}
}
function Kl(){if(jj.jB)np("mailbox","loadingReadRssPane entry");var h7=rY('readrss');if(h7){h7.src="loading.html";}
}
function h9(){var h7=rY('readmessage');if(h7){h7.src="minimized.html";}
}
function Je(ig){if(!ig)ig=eb.eo;var cJ=ek()+'?cmd=List&templ=message_center.xml&sid='+ig;s5('chkLanding',cJ);f_();}
function Jf(){var cq=mL('chkLanding');if(cq){g3("Action failed.\n\n"+cq,'Initial Pref Check',false);f_('chkLanding');return ;}
ih('chkLanding');tX('chkLanding');if(jj.jB)np("mailbox","handleLandingCheck(): createNavigation()");Jc('chkLanding');g1('chkLanding');f_('chkLanding');if(jj.jA){GJ();}
else {fT('INBOX','c0');}
}
function ia(ib,ig){if((ib=='Trash'||ib=='Screened Mail')){GR("Are you sure?",null,"Yes","No",function (){if(!ig)ig=eb.eo;var cJ=ek()+'?cmd=EmptyFolder&xmlack=y&confirmed=1&folder='+wY(ib)+'&sid='+ig;s5('empty',cJ);f_();tP.tQ='empty';tP.tS=ib;tP.tR=null;tP.folderArg3=ig;t2();}
,null);}
}
function ic(){var cq=mL('empty');if(cq&&(cq.substring(0,10)!="No Referer")){g3("Action failed.\n\n"+cq,'Emptying Folder',false);}
f_('empty');}
function ie(ib,ig,gf){GI();eb.ez=null;eb.ew=0;eb.eE=0;lw.lx=new Array();yg();var h0=rY('messagelistdiv');h0.innerHTML="";if(ig!=eb.eo){if((eb.el=='from')||(eb.el=='subject')||(eb.el=='date')||(eb.el=='size')){hs=rY(eb.el+'_col');hs.setAttribute("src","images/pixelclear.gif");}
eb.ex=null;eb.ta=null;eb.tb=null;eb.uP="";eb.em=eb.uM;eb.el=null;gf=null;eb.vd=eb.en;eb.ve=eb.eo;eb.vZ=ig;}
k6('all','backToAll');ge("nochange",false);fT(unescape(ib),ig,gf);}
function LV(uW,uY,uZ){var u3=-1;var LW=0;uW=unescape(uW);for(var al=0;al<eb.ec.length;al++){if(eb.ec[al].e5==uW){u3=al;break;}
}
if(u3>=0){if(eb.ec[u3].e6!=uY){eb.ec[u3].e6=uY;LW=1;}
if(eb.ec[u3].e9!=uZ){eb.ec[u3].e9=uZ;LW=1;}
}
else if(eb.uD&&(uW=='Draft'||uW=='Trash')){eb.ec[al]=new e4(uW,uY,0,'/',uZ);LW=1;}
if(LW==1)ij();}
function u1(uV,uW,uZ,uY,uX){var u2=-1;var u3=-1;uW=unescape(uW);if(uW==uV){if(uW!='Trash'){alert("Error:  you cannot move or copy messages within the same folder.");return ;}
uW="";}
for(var al=0;al<eb.ec.length&&((u2<0&&uV&&uV!='')||u3<0);al++){var e5=eb.ec[al].e5;if(e5==uV){u2=al;}
else if(e5==uW){u3=al;}
}
if(u2>=0){eb.ec[u2].e6-=uY;eb.ec[u2].e9-=uZ;}
if(u3>=0){if(!uX)eb.ec[u3].e6+=uY;eb.ec[u3].e9+=uZ;}
else if(eb.uD&&(uW=='Draft'||uW=='Trash')){eb.ec[al]=new e4(uW,uY,0,'/',uZ);}
ij();}
function ih(fI){if(!fI)fI='msg';var cr=mt.mx?mt.mw[fI].responseXML:mt.mw[fI];var x=cr.getElementsByTagName('folder');eb.ec=new Array();for(var al=0;al<x.length;al++){var e5=x[al].firstChild?x[al].firstChild.nodeValue:"";if(e5.toLowerCase()=="inbox")e5="INBOX";var e6=new Number(x[al].getAttribute('new'));var e9=new Number(x[al].getAttribute('msgs'));var e7=x[al].getAttribute('custom');var e8=x[al].getAttribute('separator');eb.ec[al]=new e4(e5,e6,e7,e8,e9);}
}
function u4(fI){if(!fI)fI='msg';var cr=mt.mx?mt.mw[fI].responseXML:mt.mw[fI];x=cr.getElementsByTagName('account');eb.ei=new Array();for(al=0;al<x.length;al++){var fa=x[al].getAttribute('islocal');var ii=x[al].getElementsByTagName('url');var fb=ii[0].firstChild?ii[0].firstChild.nodeValue:"";ii=x[al].getElementsByTagName('user');var fc=ii[0].firstChild?ii[0].firstChild.nodeValue:"";ii=x[al].getElementsByTagName('server');var fd=ii[0].firstChild?ii[0].firstChild.nodeValue:"";ii=x[al].getElementsByTagName('sid');var fe=ii[0].firstChild?ii[0].firstChild.nodeValue:"";eb.ei[al]=new e_(fa,fb,fc,fd,fe);}
}
function iA(){document.onkeydown=null;eb.eh=iC('arrowFolder','myfoldersmenu',eb.eh);var JE=30;var exp=new Date();exp.setTime(exp.getTime()+(JE*24*60*60*1000));JB("webmailUI");Jy("webmailUI","contentOpenStatus",(eb.eh?'true':'false'),exp,"/",xl.JM);if(jj.jB)np("mailbox","iA return: displayfolders="+(eb.eh?'true':'false'));return false;}
function iB(){document.onkeydown=null;eb.ej=iC('arrowMailbox','mymbmenu',eb.ej);return false;}
function iC(iD,iE,gX){if(jj.jB)np("mailbox","toggleNMenu("+iD+","+iE+","+(gX?'true':'false')+") entry");var is=rY(iE);var iF=rY(iD);if(!gX){is.style.display="block";iF.setAttribute('src','images/1A/icon_collapse.gif');iF.title="Collapse.";iF.kE="Collapse.";return true;}
else {is.style.display="none";iF.setAttribute('src','images/1A/icon_expand.gif');iF.title="Expand.";iF.kE="Expand.";return false;}
}
function iQ(){var iR=rY('phishwarning');var iS=rY('realmessage');if(!iS)return ;if(iR)iR.style.display='none';iS.style.display='';}
function ws(fj){if(fj==null)return "";fj=fj.replace(/&amp;/g,"&");fj=fj.replace(/&lt;/g,"<");fj=fj.replace(/&gt;/g,">");fj=fj.replace(/&quot;/g,'"');return fj;}
function iT(fj,tp){if(fj==null)return "";fj=fj.replace(/&/g,"&amp;");fj=fj.replace(/</g,"&lt;");fj=fj.replace(/>/g,"&gt;");if(tp)fj=fj.replace(/"/g,"&quot;");return fj;}
function iU(fj){var iV=fj.length;fj=fj.toLowerCase();while(1){if(fj.match(/^[ \t]/)){fj=fj.substring(1);}
else if(fj.substring(0,3)=="fw:"){fj=fj.substring(3);}
else if(fj.substring(0,4)=="fwd:"){fj=fj.substring(4);}
else if(fj.substring(0,3)=="re:"){fj=fj.substring(3);}
else {break;}
}
return iV-fj.length;}
function tq(rx){var gk=rY('folderTitle');gk.innerHTML=xU(rx,eb.en);ix=rY('mailboxTitle');ix.innerHTML=xV(eb.uE,eb.ep,eb.wH);}
function s6(){if(eb.en=="INBOX"&&mQ.GC=='emailPane'){iW(1);}
else {document.searchMail.filterstr.value='Search mail...';jj.w2=null;fT('INBOX',eb.eo,eb.el);}
xM('emailPane');return true;}
function iW(vX){if(jj.jB)np("mailbox","iW()");if(vX||(mQ.GC!="messageCenterPane")){s5("getnewemail",vX,eS.td);f_("getnewemail");return true;}
else {GJ();}
}
function s8(){iX(1);}
function iX(vX){var cq=mL('newmailcheck');if(cq){g3("Action failed.\n\n"+cq,'Checking New Mail',false);f_('getnewemail');return ;}
if(jj.jB)np("mailbox","getNewmail()");var cr=mt.mx?mt.mw['newmailcheck'].responseXML:mt.mw['newmailcheck'];var vr=cr.getElementsByTagName('messageheaders');if(vr==null){tq(0);f_('getnewemail');return ;}
var iY=cr.getElementsByTagName('uid');var v_=(iY&&iY[0]&&iY[0].firstChild)?iY[0].firstChild.nodeValue:"";if(eb.eA!=null&&typeof (eb.eA[v_])!="undefined"){tq(0);f_('getnewemail');if(jj.jB)np("mailbox","getNewMail done");return ;}
var gj=cr.getElementsByTagName('server');hi(gj[0].getAttribute('used'),gj[0].getAttribute('maxsize'));var gr=vr[0];var vs=gr.getElementsByTagName('messageheader');if(vs==null||vs.length==0){f_('getnewemail');return ;}
var i2=new Array();for(var al=0;al<vs.length;al++){var gu=gw(vs[al]);if(eb.eA==null||typeof (eb.eA[gu.fA])=="undefined"){i2[i2.length]=gu;}
else break;}
if(i2.length==vs.length){s5("getnewemail",vX,i2.length+eS.te);f_('getnewemail');return ;}
new JO('Z__INBOX',{JP:1000*xl.Ki,K4:K0}
);var wa=mr();var vY=null;var wb=null;if(!vX){var uT=wd();vY=uT[0];wb=uT[1];}
var e9=i2.length;var vx=eb.ey[0].top;var vy=0;for(var al=vx+e9,ct=0;al>vx;al--,ct++){gP(al,i2[ct]);if(!(i2[ct].fB&eU.eZ))vy++;}
eb.ew+=e9;u1(eb.en,null,-vy,-e9,0);Lx(vx+e9,vx+1);if(eb.ex){s5("del",i2.length);f_('getnewemail');return ;}
tm("resort");hy(1);if(!vX){we(vY,wb,wa);}
hS(false);l_();f_('getnewemail');}
function K5(){}
function u5(){if(jj.jB)np("mailbox","updateFolderList()");var cJ=ek()+'?cmd=Folders&sid='+eb.eo+'&templ=folders.xml';if(jj.jB)np("mailbox","loading url="+cJ);s5('folders',cJ);f_();}
function u6(){var cq=mL('folders');if(cq){g3("Action failed.\n\n"+cq,'Updating folder counts',false);f_('folders');return ;}
if(jj.jB)np("mailbox","setFolderList()");ih('folders');ij();f_('folders');}
function i9(){if(jj.wK!=null){jj.wK.replace('/','_');var cJ='skins/'+jj.wK+'/'+jj.wK+'.xml?vn='+xl.vN;if(jj.jB)np("mailbox",'loadSkin: '+cJ);mG(cJ,'skin',i_);}
return false;}
function i_(){if(jj.jB)np("mailbox","readSkin()");var cq=mL('skin');if(cq){alert(cq+", readSkin");return ;}
var cr=mt.mx?mt.mw['skin'].responseXML:mt.mw['skin'];var x=cr.getElementsByTagName('setting');if(jj.jB)np("mailbox","readSkin: <setting>, len="+x.length);for(var al=0;al<x.length;al++){var id=x[al].getAttribute('id');var ja=x[al].getAttribute('parm');var jb=x[al].getAttribute('value');if(jj.jB)np("mailbox","id="+id+", parm="+ja+", val="+jb);var an=rY(id);if(an!=null)switch(ja){case "alt":mP(an,"alt",jb);break;case "background-color":an.style.backgroundColor=jb;break;case "background-image":an.style.backgroundImage=jb;break;case "background-position":an.style.backgroundPosition=jb;break;case "background-repeat":an.style.backgroundRepeat=jb;break;case "border":an.style.border=jb;break;case "border-bottom":an.style.borderBottom=jb;break;case "border-color":an.style.borderColor=jb;break;case "border-left":an.style.borderLeft=jb;break;case "border-right":an.style.borderRight=jb;break;case "border-style":an.style.borderStyle=jb;break;case "border-top":an.style.borderTop=jb;break;case "border-width":an.style.borderWidth=jb;break;case "class":an.setAttribute(eb.et,jb);break;case "clear":an.style.AT=jb;break;case "clip":an.style.clip=jb;break;case "color":an.style.az=jb;break;case "cursor":an.style.cursor=jb;break;case "display":an.style.display=jb;break;case "float":an.style.cssFloat=jb;break;case "font":an.style.font=jb;break;case "font-family":an.style.fontFamily=jb;break;case "font-size":an.style.fontSize=jb;break;case "font-style":an.style.fontStyle=jb;break;case "font-weight":an.style.fontWeight=jb;break;case "height":an.style.height=jb;break;case "left":an.style.left=jb;break;case "line-height":an.style.lineHeight=jb;break;case "list-style-type":an.style.listStyleType=jb;break;case "margin":an.style.margin=jb;break;case "margin-left":an.style.marginLeft=jb;break;case "margin-right":an.style.marginRight=jb;break;case "margin-top":an.style.marginTop=jb;break;case "overflow":an.style.ex=jb;break;case "padding":an.style.padding=jb;break;case "padding-left":an.style.paddingLeft=jb;break;case "padding-right":an.style.paddingRight=jb;break;case "position":an.style.position=jb;break;case "src":mP(an,"src",jb);break;case "text-align":an.style.textAlign=jb;break;case "text-decoration":an.style.textDecoration=jb;break;case "text-transform":an.style.textTransform=jb;break;case "title":mP(an,"title",jb);break;case "top":an.style.top=jb;break;case "valign":an.style.valign=jb;break;case "vertical-align":an.style.verticalAlign=jb;break;case "visibility":an.style.visibility=jb;break;case "white-space":an.style.whiteSpace=jb;break;case "width":an.style.width=jb;break;case "z-index":an.style.zIndex=jb;break;}
}
x=cr.getElementsByTagName('assign');if(jj.jB)np("mailbox","readSkin: <assign>, len="+x.length);for(var al=0;al<x.length;al++){var id=x[al].getAttribute('id');var jb=x[al].getAttribute('value');if(jj.jB)np("mailbox","id="+id+", val="+jb);eval(id+"="+jb);}
x=cr.getElementsByTagName('overlay');for(var al=0;al<x.length;al++){var id=x[al].getAttribute('id');var wJ=x[al];var r4=null;if(id=='copyright'){if(jj.jB)np("mailbox","readSkin: copyright <overlay>, nodeType="+wJ.nodeType);r4=rY("copyright");}
else if(id=='appheader'){if(jj.jB)np("mailbox","readSkin: appheader <overlay>, nodeType="+wJ.nodeType);r4=rY("appheader");}
else if(id=='safelist'){if(jj.jB)np("mailbox","readSkin: safelist <overlay>, nodeType="+wJ.nodeType);r4=rY("safelist");}
else if(id=='title'){for(ct=0;ct<wJ.childNodes.length;ct++){if(wJ.childNodes[ct].nodeType!=3){document.title=wJ.childNodes[ct].nodeValue;break;}
}
}
else {if(jj.jB)np("mailbox","readSkin: unknown overlay id="+id);}
if(r4!=null&&wJ){if(jj.jB)np("mailbox","readSkin: ol len="+wJ.childNodes.length);while(r4.childNodes[0]!=null){r4.removeChild(r4.childNodes[0]);}
for(ct=0;ct<wJ.childNodes.length;ct++){if(wJ.childNodes[ct].nodeType!=3){r4.innerHTML=wJ.childNodes[ct].nodeValue;}
}
}
}
m8();m9(false);if(jj.jB)np("mailbox","<<<< readSkin()");if(Jg()){if(jj.jB)np("mailbox","readSkin: before fT");fT('INBOX','c0');if(jj.jB)np("mailbox","readSkin: after fT");}
else {if(jj.jB)np("mailbox","readSkin: before chkLandingFlag");Je();if(jj.jB)np("mailbox","readSkin: after chkLandingFlag");}
}
function Jg(){if(document.cookie.indexOf("webmail1_application=")<0)return false;return true;}
function jc(){var e3=new fC();var ts=e3.fH("debug");if(ts){switch(ts){default:tM();La(ts,e3.fH("debugoptions"),e3.fH("debugwidewidth"));case "enabled":var tt=rY("menuOptionsDebug");tt.className="menuItem";break;}
}
jj.wK=e3.fH("skin",xl.wN);if(jj.wK==null){jj.wK=xl.wN;}
jj.xO=e3.fH("theme",xl.x2);if(jj.xO==null){jj.xO=xl.x2;}
}
function w5(fj,width){var fi=fj;if(width<4){fi=fj.substring(0,width);}
else if(fj.length>width){var al=Math.floor((width/2)-1);var ct=width-al-2;fi=fj.substring(0,ct)+".."+fj.substring(fj.length-al);}
return fi;}
function jd(){l8('whoami',w5(eb.eq,20));var id=rY('whoami');id.title=eb.eq;}
function je(title){eb.eJ=title;hH('Reminder');return false;}
function jg(gD){eb.eK=gD;hH('Contact');return false;}
function wY(fj){if(fj==null)return "";fj=escape(fj);fj=fj.replace(/\+/g,"%2B");return fj;}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var mt={mu:"",mv:null,mw:null,tI:null,tJ:null,tK:null,mx:null}
;function my(x){for(var al=0;al<x.length;al++){alert("x["+al+"]="+x[al]);}
}
function mz(x){for(var io in x){alert("x."+io+"="+x[io]);}
}
function mA(){}
if(a5&&window.ActiveXObject){document.write('<sc'+'ript language="javascript" src="/wmui/js/xmldom.js"></'+'script>');}
function mF(){if(window.XMLHttpRequest){return false;}
else if(window.ActiveXObject){mA();if(mt.mu!=null&&mt.mu!="")return false;}
return true;}
function mG(cJ,fI,mH,tJ){if(mt.mv==null)mt.mv=new Array();mt.mv[fI]=new Date();if(mt.mw==null)mt.mw=new Array();if(mt.tI==null)mt.tI=new Array();if(mt.tJ==null)mt.tJ=new Array();if(mt.tK==null)mt.tK=new Array();if(jj.jB)np("ndom","importXML("+cJ+")");mt.tI[fI]=cJ;mt.tJ[fI]=tJ;mt.tK[fI]=0;if(window.XMLHttpRequest){mt.mx=true;mt.mw[fI]=new XMLHttpRequest();mt.mw[fI].onreadystatechange=function (){try{if((mt.mw[fI].readyState==4)&&(typeof mt.mw[fI].status!="undefined")&&(mt.mw[fI].status<300)){if(!mt.tK[fI]){if(jj.jB)np("ndom","importXML:XMLHttpRequest:about call createfunc");eb.wQ=0;mH();}
else {if(jj.jB)np("ndom","importXML:XMLHttpRequest:abortFlag set");}
}
}
catch(rk){if(jj.jB)np("ndom",rk);}
}
;try{mt.mw[fI].open("GET",cJ,true);if(jj.jB)np("ndom","importXML:XMLHttpRequest:about to send");mt.mw[fI].send(null);}
catch(rk){if(jj.jB)np("ndom",rk+"\nurl="+cJ);}
}
else if(document.implementation&&document.implementation.createDocument){mt.mw[fI]=document.implementation.createDocument("","",null);mt.mw[fI].onload=function (){if(!mt.tK[fI]){eb.wQ=0;mH();}
}
;mt.mw[fI].async=true;mt.mw[fI].load(cJ);}
else if(window.ActiveXObject){mA();if(jj.jB){np("ndom","using DOM "+mt.mu);np("ndom","new ActiveXObject()");}
mt.mw[fI]=new ActiveXObject(mt.mu);mt.mw[fI].onreadystatechange=function (){if(mt.mw[fI].readyState==4){if(!mt.tK[fI]){eb.wQ=0;mH();}
}
}
;if(mt.mx){mt.mw[fI].open("GET",cJ,true);mt.mw[fI].send(null);}
else {mt.mw[fI].async=true;mt.mw[fI].load(cJ);}
}
else {alert("Your browser does not support XML HTTP Request or XML DOM documents, and cannot be used with this page");return ;}
}
function tL(fI){if(mt.tK)mt.tK[fI]=1;if(mt.mw&&mt.mw[fI]&&typeof (mt.mw[fI].abort)!="unknown"){mt.mw[fI].abort();}
}
function mI(mJ){if(jj.jB)np("ndom","TRAVERSE!!!!!!!!!!!!!!!!");if(mJ.hasChildNodes()){var mK=mJ.childNodes;if(jj.jB)np("ndom","tree.tagName="+mJ.tagName+", tree.childNodes.length="+mK.length);for(var al=0;al<mK.length;al++){mI(mK.jY(al));}
}
else {if(jj.jB)np("ndom","tree.text="+mJ.text);}
}
function mL(fI){if(jj.jB)np("ndom","checkForXMLErrors("+fI+")");if(mt.mw[fI]==null)alert("checkForXMLErrors("+fI+") == NULL");if((mt.mw[fI].parseError!=null)&&(mt.mw[fI].parseError!=0)){return "MS DOM error, parseError="+mt.mw[fI].parseError;}
else if(!mt.mx&&!mt.mw[fI].hasChildNodes()){return "error1";}
else if(mt.mx&&(!mt.mw[fI].responseXML)){return "error2";}
else if(mt.mx&&(!mt.mw[fI].responseXML.hasChildNodes())){if(jj.jB)mI(mt.mw[fI].responseXML);return "error3";}
else {var cr=mt.mx?mt.mw[fI].responseXML:mt.mw[fI];var mM=cr.getElementsByTagName('response');if(mM!=null&&mM[0]!=null){var ii=cr.getElementsByTagName('title');var title=ii[0].firstChild?ii[0].firstChild.nodeValue:"";if(title=="OK")return null;ii=cr.getElementsByTagName('text');var text=ii[0].firstChild?ii[0].firstChild.nodeValue:"";return title+": "+text;}
else {var wL=cr.getElementsByTagName('parsererror');if(wL!=null&&wL[0]!=null){var text=wL[0].firstChild?wL[0].firstChild.nodeValue:"";return "Error: "+text;}
else if(fI=="msg"){var gi=cr.getElementsByTagName('messageheaders');if(gi==null)return "?? DOM error, messageheaders==null";if(gi[0]==null)return "?? DOM error, messageheaders[0]==null";}
}
}
return null;}
function mN(mO){var an=document.createElement(mO);for(var al=1;al<arguments.length;al+=2){if(an!=null&&arguments[al]!=null&&arguments[al+1]!=null)an.setAttribute(arguments[al],arguments[al+1]);}
return an;}
function mP(an){for(var al=1;al<arguments.length;al+=2){if(an!=null&&arguments[al]!=null&&arguments[al+1]!=null)an.setAttribute(arguments[al],arguments[al+1]);}
return an;}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
function nz(which){var nA=rY('large');nA.disabled=true;nA=rY('medium');nA.disabled=true;nA=rY('small');nA.disabled=true;var nB;nB=rY(which);nB.disabled=false;return true;}
function nC(){var nA=rY('large');nA.disabled=true;nA=rY('medium');nA.disabled=true;var nD=rY('small');nD.disabled=false;return true;}
function nE(){var nA=rY('small');nA.disabled=true;nA=rY('large');nA.disabled=true;var nD=rY('medium');nD.disabled=false;return true;}
function nF(){var nA=rY('small');nA.disabled=true;nA=rY('medium');nA.disabled=true;var nD=rY('large');nD.disabled=false;return true;}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var ca={cb:null}
;function cc(cd,ce,cf){this.cd=cd;this.ce=ce;this.cf=cf;this.cg=new Array();}
function ch(ci,cj,text){this.ci=ci;this.cj=cj;this.text=text;}
function cl(cd,ce){var cm=new Array('January','February','March','April','May','June','July','August','September','October','November','December');var cn="";cn+="<table class='cal_event_title'><tbody><tr><th colspan='2'>Events for "+cm[cd]+" "+ce+"</th></tr>";if(ca.cb[ce]!=null){for(var al=0;al<ca.cb[ce].cg.length;al++){var ci=ca.cb[ce].cg[al].ci;var cj=ca.cb[ce].cg[al].cj;var text=ca.cb[ce].cg[al].text;cn+="<tr><td class='cal_time'>";if(ci!=null){if(cj==null)cn+=ci;else cn+=ci+" - "+cj;}
cn+="</td><td class='cal_event'>"+text+"</td></tr>";}
}
cn+="</tbody></table>";var co=rY('calendarEntry');co.innerHTML=cn;return false;}
function cp(){var cq=mL('cal');if(cq){g3("Action failed.\n\n"+cq,"Getting Calendar",false);return ;}
var al;var cr=mt.mx?mt.mw['cal'].responseXML:mt.mw['cal'];var cs=cr.getElementsByTagName('day');if(cs!=null){ca.cb=new Array();for(al=0;al<cs.length;al++){var cd=cs[al].getAttribute('month');var ce=cs[al].getAttribute('day');var cf=cs[al].getAttribute('year');ca.cb[ce]=new cc(cd,ce,cf);var cg=cs[al].getElementsByTagName('date');for(var ct=0;ct<cg.length;ct++){var text=cg[ct].childNodes[0].nodeValue;var ci=cg[ct].getAttribute('starttime');var cj=cg[ct].getAttribute('endtime');ca.cb[ce].cg[ct]=new ch(ci,cj,text);}
}
}
var cu=new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');var cm=new Array('January','February','March','April','May','June','July','August','September','October','November','December');var cv=[31,0,31,30,31,30,31,31,30,31,30,31];cv[1]=(((cx%100!=0)&&(cx%4==0))||(cx%400==0))?29:28;var cw=new Date();var cx=cw.getFullYear();var cy=cw.getMonth();var cz=cw.getDate();var cA=cw.getDay();var cB=new Date(cx,cy,1);var cC=cB.getDay();var cn='';cn+='<table border="1" id="table1"><tbody>';cn+='<tr>'+'<td colspan="7" class="cal_month">'+cm[cy]+' '+cx+'</td></tr>';cn+='<tr>';for(al=0;al<7;al++)cn+='<td class="cal_hdr">'+cu[al]+'</td>';cn+='</tr>';cn+='<tr>';for(al=0;al<cC;al++){cn+='<td class="cal_day_outside">&nbsp;</td>';}
var cD=1;for(al=cC;al<7;al++,cD++){cn+=(cD==cz)?'<td class="cal_day_cur">':ca.cb[cD]?'<td class="cal_day_sel">':'<td class="cal_day">';cn+="<span onmouseover='return cl("+cy+","+cD+");'>";cn+=cD;cn+='</span></td>';}
cn+='</tr><tr>';var cE=0;for(;cD<=cv[cy];cE++,cD++){if(cE==7)cn+='</tr><tr>';cE%=7;cn+=(cD==cz)?'<td class="cal_day_cur">':ca.cb[cD]?'<td class="cal_day_sel">':'<td class="cal_day">';cn+="<span onmouseover='return cl("+cy+","+cD+");'>";cn+=cD;cn+='</span></td>';}
for(;cE<7;cE++){cn+='<td class="cal_day_outside">&nbsp;</td>';}
cn+='</tr></tbody></table>';var cF=rY('calendarDiv');cF.innerHTML=cn;cl(cy,cz);}
function cG(){var cH=rY('calendarDiv');cH.innerHTML='';cH=rY('calendarEntry');cH.innerHTML='';}
function cI(){if(k3("calendarDiv")){cG();var cJ='/cgi-bin/gencalendar.cgi';mG(cJ,'cal',cp);kF("calendarCheck");aA('calendarEntry');}
else {kG("calendarCheck");aB('calendarEntry');}
return false;}

/// /*  Prototype JavaScript framework, version 1.4.0
///  *  (c) 2005 Sam Stephenson <sam@conio.net>
///  *
///  *  Prototype is freely distributable under the terms of an MIT-style license.
///  *  For details, see the Prototype web site: http://prototype.conio.net/
///  *
/// /*--------------------------------------------------------------------------*/
var zH={zI:'1.4.0',zJ:'(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)',zK:function (){}
,zL:function (x){return x}
}
var Class={create:function (){return function (){this.initialize.apply(this,arguments);}
}
}
var zP=new Object();Object.extend=function (zQ,source){for(AI in source){zQ[AI]=source[AI];}
return zQ;}
Object.Ao=function (zR){try{if(zR==undefined)return 'undefined';if(zR==null)return 'null';return zR.Ao?zR.Ao():zR.toString();}
catch(rk){if(rk instanceof RangeError)return '...';throw rk;}
}
Function.prototype.bind=function (){var zS=this,fD=AR(arguments),zR=fD.shift();return function (){return zS.apply(zR,fD.concat(AR(arguments)));}
}
Function.prototype.bindAsEventListener=function (zR){var zS=this;return function (event){return zS.call(zR,event||window.event);}
}
Object.extend(Number.prototype,{zT:function (){var zU=this.toString(16);if(this<16)return '0'+zU;return zU;}
,zV:function (){return this+1;}
,zW:function (zX){A9(0,this,true).As(zX);return this;}
}
);var zY={zZ:function (){var returnValue;for(var al=0;al<arguments.length;al++){var z1=arguments[al];try{returnValue=z1();break;}
catch(rk){}
}
return returnValue;}
}
var z2=Class.create();z2.prototype={initialize:function (ko,z3){this.ko=ko;this.z3=z3;this.z4=false;this.z5();}
,z5:function (){setInterval(this.z6.bind(this),this.z3*1000);}
,z6:function (){if(!this.z4){try{this.z4=true;this.ko();}
finally{this.z4=false;}
}
}
}
function $(){var elements=new Array();for(var al=0;al<arguments.length;al++){var z7=arguments[al];if(typeof z7=='string')z7=document.getElementById(z7);if(arguments.length==1)return z7;elements.push(z7);}
return elements;}
Object.extend(String.prototype,{z8:function (){return this.replace(/<\/?[^>]+>/gi,'');}
,z9:function (){return this.replace(new RegExp(zH.zJ,'img'),'');}
,z_:function (){var Aa=new RegExp(zH.zJ,'img');var Ab=new RegExp(zH.zJ,'im');return (this.match(Aa)||[]).AO(function (Ac){return (Ac.match(Ab)||['',''])[1];}
);}
,Ad:function (){return this.z_().AO(eval);}
,Ae:function (){var kr=document.createElement('div');var text=document.createTextNode(this);kr.appendChild(text);return kr.innerHTML;}
,Af:function (){var kr=document.createElement('div');kr.innerHTML=this.z8();return kr.childNodes[0]?kr.childNodes[0].nodeValue:'';}
,Ag:function (){var Ah=this.match(/^\??(.*)$/)[1].split('&');return Ah.AC({}
,function (Ai,Aj){var fE=Aj.split('=');Ai[fE[0]]=fE[1];return Ai;}
);}
,Ak:function (){return this.split('');}
,Al:function (){var Am=this.split('-');if(Am.length==1)return Am[0];var An=this.indexOf('-')==0?Am[0].charAt(0).toUpperCase()+Am[0].substring(1):Am[0];for(var al=1,Hx=Am.length;al<Hx;al++){var fj=Am[al];An+=fj.charAt(0).toUpperCase()+fj.substring(1);}
return An;}
,Ao:function (){return "'"+this.replace('\\','\\\\').replace("'",'\\\'')+"'";}
}
);String.prototype.parseQuery=String.prototype.Ag;var Ap=new Object();var Aq=new Object();var Ar={As:function (zX){var index=0;try{this.At(function (value){try{zX(value,index++);}
catch(rk){if(rk!=Aq)throw rk;}
}
);}
catch(rk){if(rk!=Ap)throw rk;}
}
,all:function (zX){var aE=true;this.As(function (value,index){aE=aE&&!!(zX||zH.zL)(value,index);if(!aE)throw Ap;}
);return aE;}
,Au:function (zX){var aE=true;this.As(function (value,index){if(aE=!!(zX||zH.zL)(value,index))throw Ap;}
);return aE;}
,Av:function (zX){var Aw=[];this.As(function (value,index){Aw.push(zX(value,index));}
);return Aw;}
,Ax:function (zX){var aE;this.As(function (value,index){if(zX(value,index)){aE=value;throw Ap;}
}
);return aE;}
,Ay:function (zX){var Aw=[];this.As(function (value,index){if(zX(value,index))Aw.push(value);}
);return Aw;}
,Az:function (pt,zX){var Aw=[];this.As(function (value,index){var AA=value.toString();if(AA.match(pt))Aw.push((zX||zH.zL)(value,index));}
);return Aw;}
,AB:function (zR){var dG=false;this.As(function (value){if(value==zR){dG=true;throw Ap;}
}
);return dG;}
,AC:function (AD,zX){this.As(function (value,index){AD=zX(AD,value,index);}
);return AD;}
,AE:function (method){var fD=AR(arguments).slice(1);return this.Av(function (value){return value[method].apply(value,fD);}
);}
,max:function (zX){var aE;this.As(function (value,index){value=(zX||zH.zL)(value,index);if(value>=(aE||value))aE=value;}
);return aE;}
,min:function (zX){var aE;this.As(function (value,index){value=(zX||zH.zL)(value,index);if(value<=(aE||value))aE=value;}
);return aE;}
,AF:function (zX){var AG=[],falses=[];this.As(function (value,index){((zX||zH.zL)(value,index)?AG:falses).push(value);}
);return [AG,falses];}
,AH:function (AI){var Aw=[];this.As(function (value,index){Aw.push(value[AI]);}
);return Aw;}
,AJ:function (zX){var Aw=[];this.As(function (value,index){if(!zX(value,index))Aw.push(value);}
);return Aw;}
,AK:function (zX){return this.Av(function (value,index){return {value:value,AL:zX(value,index)}
;}
).sort(function (left,right){var d3=left.AL,gX=right.AL;return d3<gX?-1:d3>gX?1:0;}
).AH('value');}
,Ak:function (){return this.Av(zH.zL);}
,AM:function (){var zX=zH.zL,fD=AR(arguments);if(typeof fD.AV()=='function')zX=fD.pop();var AN=[this].concat(fD).AO(AR);return this.AO(function (value,index){zX(value=AN.AH(index));return value;}
);}
,Ao:function (){return '#<Enumerable:'+this.Ak().Ao()+'>';}
}
Object.extend(Ar,{AO:Ar.Av,find:Ar.Ax,select:Ar.Ay,AP:Ar.AB,AQ:Ar.Ak}
);var AR=Array.fs=function (AS){if(!AS)return [];if(AS.Ak){return AS.Ak();}
else {var Aw=[];for(var al=0;al<AS.length;al++)Aw.push(AS[al]);return Aw;}
}
Object.extend(Array.prototype,Ar);Array.prototype._reverse=Array.prototype.reverse;Object.extend(Array.prototype,{At:function (zX){for(var al=0;al<this.length;al++)zX(this[al]);}
,AT:function (){this.length=0;return this;}
,AU:function (){return this[0];}
,AV:function (){return this[this.length-1];}
,AW:function (){return this.select(function (value){return value!=undefined||value!=null;}
);}
,AX:function (){return this.AC([],function (AY,value){return AY.concat(value.constructor==Array?value.AX():[value]);}
);}
,AZ:function (){var A0=AR(arguments);return this.select(function (value){return !A0.AB(value);}
);}
,indexOf:function (zR){for(var al=0;al<this.length;al++)if(this[al]==zR)return al;return -1;}
,reverse:function (A1){return (A1!==false?this:this.Ak())._reverse();}
,shift:function (){var aE=this[0];for(var al=0;al<this.length-1;al++)this[al]=this[al+1];this.length--;return aE;}
,Ao:function (){return '['+this.AO(Object.Ao).join(', ')+']';}
}
);var A2={At:function (zX){for(key in this){var value=this[key];if(typeof value=='function')continue;var fE=[key,value];fE.key=key;fE.value=value;zX(fE);}
}
,A3:function (){return this.AH('key');}
,A0:function (){return this.AH('value');}
,A4:function (hash){return A7(hash).AC(A7(this),function (A5,fE){A5[fE.key]=fE.value;return A5;}
);}
,A6:function (){return this.AO(function (fE){return fE.AO(encodeURIComponent).join('=');}
).join('&');}
,Ao:function (){return '#<Hash:{'+this.AO(function (fE){return fE.AO(Object.Ao).join(': ');}
).join(', ')+'}>';}
}
function A7(zR){var hash=Object.extend({}
,zR||{}
);Object.extend(hash,Ar);Object.extend(hash,A2);return hash;}
ObjectRange=Class.create();Object.extend(ObjectRange.prototype,Ar);Object.extend(ObjectRange.prototype,{initialize:function (fM,fN,A8){this.fM=fM;this.fN=fN;this.A8=A8;}
,At:function (zX){var value=this.fM;do{zX(value);value=value.zV();}
while(this.AB(value));}
,AB:function (value){if(value<this.fM)return false;if(this.A8)return value<this.fN;return value<=this.fN;}
}
);var A9=function (fM,fN,A8){return new ObjectRange(fM,fN,A8);}
var A_={Ba:function (){return zY.zZ(function (){return new XMLHttpRequest()}
,function (){return new ActiveXObject('Msxml2.XMLHTTP')}
,function (){return new ActiveXObject('Microsoft.XMLHTTP')}
)||false;}
,Bb:0}
A_.Responders={Bc:[],At:function (zX){this.Bc.At(zX);}
,Bd:function (Be){if(!this.AB(Be))this.Bc.push(Be);}
,Bf:function (Bg){this.Bc=this.Bc.AZ(Bg);}
,Bh:function (ko,t9,transport,Bi){this.As(function (Bj){if(Bj[ko]&&typeof Bj[ko]=='function'){try{Bj[ko].apply(Bj,[t9,transport,Bi]);}
catch(rk){}
}
}
);}
}
;Object.extend(A_.Responders,Ar);A_.Responders.Bd({Bk:function (){A_.Bb++;}
,Bl:function (){A_.Bb--;}
}
);A_.Base=function (){}
;A_.Base.prototype={tX:function (options){this.options={method:'post',asynchronous:true,parameters:''}
Object.extend(this.options,options||{}
);}
,Bo:function (){return this.transport.status==undefined||this.transport.status==0||(this.transport.status>=200&&this.transport.status<300);}
,Bp:function (){return !this.Bo();}
}
A_.Request=Class.create();A_.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];A_.Request.prototype=Object.extend(new A_.Base(),{initialize:function (cJ,options){this.transport=A_.Ba();this.tX(options);this.t9(cJ);}
,t9:function (cJ){var parameters=this.options.parameters||'';if(parameters.length>0)parameters+='&_=';try{this.cJ=cJ;if(this.options.method=='get'&&parameters.length>0)this.cJ+=(this.cJ.match(/\?/)?'&':'?')+parameters;A_.Responders.Bh('onCreate',this,this.transport);this.transport.open(this.options.method,this.cJ,this.options.asynchronous);if(this.options.asynchronous){this.transport.onreadystatechange=this.Bq.bind(this);setTimeout((function (){this.Br(1)}
).bind(this),10);}
this.Bs();var body=this.options.postBody?this.options.postBody:parameters;this.transport.send(this.options.method=='post'?body:null);}
catch(rk){this.Bt(rk);}
}
,Bs:function (){var Bu=['X-Requested-With','XMLHttpRequest','X-Prototype-Version',zH.zI];if(this.options.method=='post'){Bu.push('Content-type','application/x-www-form-urlencoded');if(this.transport.overrideMimeType)Bu.push('Connection','close');}
if(this.options.Bu)Bu.push.apply(Bu,this.options.Bu);for(var al=0;al<Bu.length;al+=2)this.transport.setRequestHeader(Bu[al],Bu[al+1]);}
,Bq:function (){var readyState=this.transport.readyState;if(readyState!=1)this.Br(this.transport.readyState);}
,Bw:function (name){try{return this.transport.getResponseHeader(name);}
catch(rk){}
}
,Bx:function (){try{return eval(this.Bw('X-JSON'));}
catch(rk){}
}
,By:function (){try{return eval(this.transport.responseText);}
catch(rk){this.Bt(rk);}
}
,Br:function (readyState){var event=A_.Request.Events[readyState];var transport=this.transport,Bi=this.Bx();if(event=='Complete'){try{(this.options['on'+this.transport.status]||this.options['on'+(this.Bo()?'Success':'Failure')]||zH.zK)(transport,Bi);}
catch(rk){this.Bt(rk);}
if((this.Bw('Content-type')||'').match(/^text\/javascript/i))this.By();}
try{(this.options['on'+event]||zH.zK)(transport,Bi);A_.Responders.Bh('on'+event,this,transport,Bi);}
catch(rk){this.Bt(rk);}
if(event=='Complete')this.transport.onreadystatechange=zH.zK;}
,Bt:function (Bz){(this.options.onException||zH.zK)(this,Bz);A_.Responders.Bh('onException',this,Bz);}
}
);A_.Updater=Class.create();Object.extend(Object.extend(A_.Updater.prototype,A_.Request.prototype),{initialize:function (BA,cJ,options){this.BB={BC:BA.BC?$(BA.BC):$(BA),BD:BA.BD?$(BA.BD):(BA.BC?null:$(BA))}
this.transport=A_.Ba();this.tX(options);var Bl=this.options.Bl||zH.zK;this.options.Bl=(function (transport,zR){this.BE();Bl(transport,zR);}
).bind(this);this.t9(cJ);}
,BE:function (){var BF=this.Bo()?this.BB.BC:this.BB.BD;var mM=this.transport.responseText;if(!this.options.Ad)mM=mM.z9();if(BF){if(this.options.insertion){new this.options.insertion(BF,mM);}
else {BP.BS(BF,mM);}
}
if(this.Bo()){if(this.Bl)setTimeout(this.Bl.bind(this),10);}
}
}
);A_.PeriodicalUpdater=Class.create();A_.PeriodicalUpdater.prototype=Object.extend(new A_.Base(),{initialize:function (BA,cJ,options){this.tX(options);this.Bl=this.options.Bl;this.z3=(this.options.z3||2);this.BG=(this.options.BG||1);this.BH={}
;this.BA=BA;this.cJ=cJ;this.fM();}
,fM:function (){this.options.Bl=this.BI.bind(this);this.z6();}
,stop:function (){this.BH.Bl=undefined;clearTimeout(this.BJ);(this.Bl||zH.zK).apply(this,arguments);}
,BI:function (t9){if(this.options.BG){this.BG=(t9.responseText==this.BK?this.BG*this.options.BG:1);this.BK=t9.responseText;}
this.BJ=setTimeout(this.z6.bind(this),this.BG*this.z3*1000);}
,z6:function (){this.BH=new A_.Updater(this.BA,this.cJ,this.options);}
}
);document.getElementsByClassName=function (className,parentElement){var BN=($(parentElement)||document.body).getElementsByTagName('*');return AR(BN).AC([],function (elements,BO){if(BO.className.match(new RegExp("(^|\\s)"+className+"(\\s|$)")))elements.push(BO);return elements;}
);}
if(!window.BP){var BP=new Object();}
Object.extend(BP,{BQ:function (z7){return $(z7).style.display!='none';}
,kO:function (){for(var al=0;al<arguments.length;al++){var z7=$(arguments[al]);BP[BP.BQ(z7)?'hide':'show'](z7);}
}
,aB:function (){for(var al=0;al<arguments.length;al++){var z7=$(arguments[al]);z7.style.display='none';}
}
,aA:function (){for(var al=0;al<arguments.length;al++){var z7=$(arguments[al]);z7.style.display='';}
}
,BR:function (z7){z7=$(z7);z7.parentNode.removeChild(z7);}
,BS:function (z7,xP){$(z7).innerHTML=xP.z9();setTimeout(function (){xP.Ad()}
,10);}
,BT:function (z7){z7=$(z7);return z7.offsetHeight;}
,BU:function (z7){return new BP.ClassNames(z7);}
,kf:function (z7,className){if(!(z7=$(z7)))return ;return BP.BU(z7).AB(className);}
,BV:function (z7,className){if(!(z7=$(z7)))return ;return BP.BU(z7).Ck(className);}
,kh:function (z7,className){if(!(z7=$(z7)))return ;return BP.BU(z7).BR(className);}
,BW:function (z7){z7=$(z7);for(var al=0;al<z7.childNodes.length;al++){var kc=z7.childNodes[al];if(kc.nodeType==3&&!/\S/.test(kc.nodeValue))BP.BR(kc);}
}
,BX:function (z7){return $(z7).innerHTML.match(/^\s*$/);}
,scrollTo:function (z7){z7=$(z7);var x=z7.x?z7.x:z7.offsetLeft,y=z7.y?z7.y:z7.offsetTop;window.scrollTo(x,y);}
,BY:function (z7,style){z7=$(z7);var value=z7.style[style.Al()];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var sg=document.defaultView.getComputedStyle(z7,null);value=sg?sg.getPropertyValue(style):null;}
else if(z7.currentStyle){value=z7.currentStyle[style.Al()];}
}
if(window.opera&&['left','top','right','bottom'].AB(style))if(BP.BY(z7,'position')=='static')value='auto';return value=='auto'?null:value;}
,BZ:function (z7,style){z7=$(z7);for(name in style)z7.style[name.Al()]=style[name];}
,B0:function (z7){z7=$(z7);if(BP.BY(z7,'display')!='none')return {width:z7.offsetWidth,height:z7.offsetHeight}
;var B1=z7.style;var B2=B1.visibility;var B3=B1.position;B1.visibility='hidden';B1.position='absolute';B1.display='';var B4=z7.clientWidth;var B5=z7.clientHeight;B1.display='none';B1.position=B3;B1.visibility=B2;return {width:B4,height:B5}
;}
,B6:function (z7){z7=$(z7);var wi=BP.BY(z7,'position');if(wi=='static'||!wi){z7._madePositioned=true;z7.style.position='relative';if(window.opera){z7.style.top=0;z7.style.left=0;}
}
}
,B7:function (z7){z7=$(z7);if(z7._madePositioned){z7._madePositioned=undefined;z7.style.position=z7.style.top=z7.style.left=z7.style.bottom=z7.style.right='';}
}
,B8:function (z7){z7=$(z7);if(z7._overflow)return ;z7._overflow=z7.style.ex;if((BP.BY(z7,'overflow')||'visible')!='hidden')z7.style.ex='hidden';}
,B9:function (z7){z7=$(z7);if(z7._overflow)return ;z7.style.ex=z7._overflow;z7._overflow=undefined;}
}
);var B_=new Object();B_.display=BP.kO;zP.Cg=function (Ca){this.Ca=Ca;}
zP.Cg.prototype={initialize:function (z7,Cb){this.z7=$(z7);this.Cb=Cb.z9();if(this.Ca&&this.z7.insertAdjacentHTML){try{this.z7.insertAdjacentHTML(this.Ca,this.Cb);}
catch(rk){if(this.z7.tagName.toLowerCase()=='tbody'){this.Cc(this.Cd());}
else {throw rk;}
}
}
else {this.Ce=this.z7.ownerDocument.createRange();if(this.Cf)this.Cf();this.Cc([this.Ce.createContextualFragment(this.Cb)]);}
setTimeout(function (){Cb.Ad()}
,10);}
,Cd:function (){var kr=document.createElement('div');kr.innerHTML='<table><tbody>'+this.Cb+'</tbody></table>';return AR(kr.childNodes[0].childNodes[0].childNodes);}
}
var Cg=new Object();Cg.Before=Class.create();Cg.Before.prototype=Object.extend(new zP.Cg('beforeBegin'),{Cf:function (){this.Ce.setStartBefore(this.z7);}
,Cc:function (Ch){Ch.As((function (Ci){this.z7.parentNode.insertBefore(Ci,this.z7);}
).bind(this));}
}
);Cg.Top=Class.create();Cg.Top.prototype=Object.extend(new zP.Cg('afterBegin'),{Cf:function (){this.Ce.selectNodeContents(this.z7);this.Ce.collapse(true);}
,Cc:function (Ch){Ch.reverse(false).As((function (Ci){this.z7.insertBefore(Ci,this.z7.firstChild);}
).bind(this));}
}
);Cg.Bottom=Class.create();Cg.Bottom.prototype=Object.extend(new zP.Cg('beforeEnd'),{Cf:function (){this.Ce.selectNodeContents(this.z7);this.Ce.collapse(this.z7);}
,Cc:function (Ch){Ch.As((function (Ci){this.z7.appendChild(Ci);}
).bind(this));}
}
);Cg.After=Class.create();Cg.After.prototype=Object.extend(new zP.Cg('afterEnd'),{Cf:function (){this.Ce.setStartAfter(this.z7);}
,Cc:function (Ch){Ch.As((function (Ci){this.z7.parentNode.insertBefore(Ci,this.z7.nextSibling);}
).bind(this));}
}
);BP.ClassNames=Class.create();BP.ClassNames.prototype={initialize:function (z7){this.z7=$(z7);}
,At:function (zX){this.z7.className.split(/\s+/).select(function (name){return name.length>0;}
).At(zX);}
,Cj:function (className){this.z7.className=className;}
,Ck:function (Cl){if(this.AB(Cl))return ;this.Cj(this.Ak().concat(Cl).join(' '));}
,BR:function (Cm){if(!this.AB(Cm))return ;this.Cj(this.select(function (className){return className!=Cm;}
).join(' '));}
,toString:function (){return this.Ak().join(' ');}
}
Object.extend(BP.ClassNames.prototype,Ar);var Cn={AT:function (){for(var al=0;al<arguments.length;al++)$(arguments[al]).value='';}
,focus:function (z7){$(z7).focus();}
,Co:function (){for(var al=0;al<arguments.length;al++)if($(arguments[al]).value=='')return false;return true;}
,select:function (z7){$(z7).select();}
,Cp:function (z7){z7=$(z7);z7.focus();if(z7.select)z7.select();}
}
var Form={Cr:function (form){var elements=Form.Cu($(form));var Cs=new Array();for(var al=0;al<elements.length;al++){var Ct=Form.BP.Cr(elements[al]);if(Ct)Cs.push(Ct);}
return Cs.join('&');}
,Cu:function (form){form=$(form);var elements=new Array();for(tagName in Form.BP.Serializers){var Cv=form.getElementsByTagName(tagName);for(var ct=0;ct<Cv.length;ct++)elements.push(Cv[ct]);}
return elements;}
,Cw:function (form,Cx,name){form=$(form);var Cy=form.getElementsByTagName('input');if(!Cx&&!name)return Cy;var Cz=new Array();for(var al=0;al<Cy.length;al++){var input=Cy[al];if((Cx&&input.type!=Cx)||(name&&input.name!=name))continue;Cz.push(input);}
return Cz;}
,CA:function (form){var elements=Form.Cu(form);for(var al=0;al<elements.length;al++){var z7=elements[al];z7.blur();z7.disabled='true';}
}
,CB:function (form){var elements=Form.Cu(form);for(var al=0;al<elements.length;al++){var z7=elements[al];z7.disabled='';}
}
,CC:function (form){return Form.Cu(form).find(function (z7){return z7.type!='hidden'&&!z7.disabled&&['input','select','textarea'].AB(z7.tagName.toLowerCase());}
);}
,CD:function (form){Cn.Cp(Form.CC(form));}
,reset:function (form){$(form).reset();}
}
Form.BP={Cr:function (z7){z7=$(z7);var method=z7.tagName.toLowerCase();var CE=Form.BP.Serializers[method](z7);if(CE){var key=encodeURIComponent(CE[0]);if(key.length==0)return ;if(CE[1].constructor!=Array)CE[1]=[CE[1]];return CE[1].AO(function (value){return key+'='+encodeURIComponent(value);}
).join('&');}
}
,CG:function (z7){z7=$(z7);var method=z7.tagName.toLowerCase();var CE=Form.BP.Serializers[method](z7);if(CE)return CE[1];}
}
Form.BP.Serializers={input:function (z7){switch(z7.type.toLowerCase()){case 'submit':case 'hidden':case 'password':case 'text':return Form.BP.Serializers.CI(z7);case 'checkbox':case 'radio':return Form.BP.Serializers.CH(z7);}
return false;}
,CH:function (z7){if(z7.checked)return [z7.name,z7.value];}
,CI:function (z7){return [z7.name,z7.value];}
,select:function (z7){return Form.BP.Serializers[z7.type=='select-one'?'selectOne':'selectMany'](z7);}
,CJ:function (z7){var value='',CL,index=z7.selectedIndex;if(index>=0){CL=z7.options[index];value=CL.value;if(!value&&!('value' in CL))value=CL.text;}
return [z7.name,value];}
,CK:function (z7){var value=new Array();for(var al=0;al<z7.length;al++){var CL=z7.options[al];if(CL.selected){var CM=CL.value;if(!CM&&!('value' in CL))CM=CL.text;value.push(CM);}
}
return [z7.name,value];}
}
var CN=Form.BP.CG;zP.TimedObserver=function (){}
zP.TimedObserver.prototype={initialize:function (z7,z3,ko){this.z3=z3;this.z7=$(z7);this.ko=ko;this.CO=this.CG();this.z5();}
,z5:function (){setInterval(this.z6.bind(this),this.z3*1000);}
,z6:function (){var value=this.CG();if(this.CO!=value){this.ko(this.z7,value);this.CO=value;}
}
}
Form.BP.Observer=Class.create();Form.BP.Observer.prototype=Object.extend(new zP.TimedObserver(),{CG:function (){return Form.BP.CG(this.z7);}
}
);Form.Observer=Class.create();Form.Observer.prototype=Object.extend(new zP.TimedObserver(),{CG:function (){return Form.Cr(this.z7);}
}
);zP.EventObserver=function (){}
zP.EventObserver.prototype={initialize:function (z7,ko){this.z7=$(z7);this.ko=ko;this.CO=this.CG();if(this.z7.tagName.toLowerCase()=='form')this.CP();else this.z5(this.z7);}
,CQ:function (){var value=this.CG();if(this.CO!=value){this.ko(this.z7,value);this.CO=value;}
}
,CP:function (){var elements=Form.Cu(this.z7);for(var al=0;al<elements.length;al++)this.z5(elements[al]);}
,z5:function (z7){if(z7.type){switch(z7.type.toLowerCase()){case 'checkbox':case 'radio':Event.C1(z7,'click',this.CQ.bind(this));break;case 'password':case 'text':case 'textarea':case 'select-one':case 'select-multiple':Event.C1(z7,'change',this.CQ.bind(this));break;}
}
}
}
Form.BP.EventObserver=Class.create();Form.BP.EventObserver.prototype=Object.extend(new zP.EventObserver(),{CG:function (){return Form.BP.CG(this.z7);}
}
);Form.EventObserver=Class.create();Form.EventObserver.prototype=Object.extend(new zP.EventObserver(),{CG:function (){return Form.Cr(this.z7);}
}
);if(!window.Event){var Event=new Object();}
Object.extend(Event,{xo:8,xp:9,xq:13,xr:27,xw:37,xx:38,xy:39,xz:40,xA:46,z7:function (event){return event.target||event.srcElement;}
,CR:function (event){return (((event.which)&&(event.which==1))||((event.button)&&(event.button==1)));}
,CS:function (event){return event.pageX||(event.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));}
,CT:function (event){return event.pageY||(event.clientY+(document.documentElement.scrollTop||document.body.scrollTop));}
,stop:function (event){if(event.preventDefault){event.preventDefault();event.stopPropagation();}
else {event.returnValue=false;event.cancelBubble=true;}
}
,CU:function (event,tagName){var z7=Event.z7(event);while(z7.parentNode&&(!z7.tagName||(z7.tagName.toUpperCase()!=tagName.toUpperCase())))z7=z7.parentNode;return z7;}
,CW:false,CX:function (z7,name,CY,CZ){if(!this.CW)this.CW=[];if(z7.addEventListener){this.CW.push([z7,name,CY,CZ]);z7.addEventListener(name,CY,CZ);}
else if(z7.attachEvent){this.CW.push([z7,name,CY,CZ]);z7.attachEvent('on'+name,CY);}
}
,C0:function (){if(!Event.CW)return ;for(var al=0;al<Event.CW.length;al++){Event.C2.apply(this,Event.CW[al]);Event.CW[al][0]=null;}
Event.CW=false;}
,C1:function (z7,name,CY,CZ){var z7=$(z7);CZ=CZ||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||z7.attachEvent))name='keydown';this.CX(z7,name,CY,CZ);}
,C2:function (z7,name,CY,CZ){var z7=$(z7);CZ=CZ||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||z7.detachEvent))name='keydown';if(z7.removeEventListener){z7.removeEventListener(name,CY,CZ);}
else if(z7.detachEvent){z7.detachEvent('on'+name,CY);}
}
}
);Event.C1(window,'unload',Event.C0,false);var C3={C4:false,C5:function (){this.au=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.av=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;}
,C6:function (z7){var C7=0,valueL=0;do{C7+=z7.scrollTop||0;valueL+=z7.scrollLeft||0;z7=z7.parentNode;}
while(z7);return [valueL,C7];}
,C8:function (z7){var C7=0,valueL=0;do{C7+=z7.offsetTop||0;valueL+=z7.offsetLeft||0;z7=z7.offsetParent;}
while(z7);return [valueL,C7];}
,C9:function (z7){var C7=0,valueL=0;do{C7+=z7.offsetTop||0;valueL+=z7.offsetLeft||0;z7=z7.offsetParent;if(z7){io=BP.BY(z7,'position');if(io=='relative'||io=='absolute')break;}
}
while(z7);return [valueL,C7];}
,offsetParent:function (z7){if(z7.offsetParent)return z7.offsetParent;if(z7==document.body)return z7;while((z7=z7.parentNode)&&z7!=document.body)if(BP.BY(z7,'position')!='static')return z7;return document.body;}
,Da:function (z7,x,y){if(this.C4)return this.Db(z7,x,y);this.Dc=x;this.Dd=y;this.ol=this.C8(z7);return (y>=this.ol[1]&&y<this.ol[1]+z7.offsetHeight&&x>=this.ol[0]&&x<this.ol[0]+z7.offsetWidth);}
,Db:function (z7,x,y){var De=this.C6(z7);this.Dc=x+De[0]-this.au;this.Dd=y+De[1]-this.av;this.ol=this.C8(z7);return (this.Dd>=this.ol[1]&&this.Dd<this.ol[1]+z7.offsetHeight&&this.Dc>=this.ol[0]&&this.Dc<this.ol[0]+z7.offsetWidth);}
,Df:function (Dg,z7){if(!Dg)return 0;if(Dg=='vertical')return ((this.ol[1]+z7.offsetHeight)-this.Dd)/z7.offsetHeight;if(Dg=='horizontal')return ((this.ol[0]+z7.offsetWidth)-this.Dc)/z7.offsetWidth;}
,Dh:function (source,target){source=$(source);target=$(target);target.style.position='absolute';var Di=this.C8(source);target.style.top=Di[1]+'px';target.style.left=Di[0]+'px';target.style.width=source.offsetWidth+'px';target.style.height=source.offsetHeight+'px';}
,Dj:function (Dk){var C7=0,valueL=0;var z7=Dk;do{C7+=z7.offsetTop||0;valueL+=z7.offsetLeft||0;if(z7.offsetParent==document.body)if(BP.BY(z7,'position')=='absolute')break;}
while(z7=z7.offsetParent);z7=Dk;do{C7-=z7.scrollTop||0;valueL-=z7.scrollLeft||0;}
while(z7=z7.parentNode);return [valueL,C7];}
,Dh:function (source,target){var options=Object.extend({Dl:true,Dm:true,Dn:true,Do:true,offsetTop:0,offsetLeft:0}
,arguments[2]||{}
);source=$(source);var io=C3.Dj(source);target=$(target);var c0=[0,0];var parent=null;if(BP.BY(target,'position')=='absolute'){parent=C3.offsetParent(target);c0=C3.Dj(parent);}
if(parent==document.body){c0[0]-=document.body.offsetLeft;c0[1]-=document.body.offsetTop;}
if(options.Dl)target.style.left=(io[0]-c0[0]+options.offsetLeft)+'px';if(options.Dm)target.style.top=(io[1]-c0[1]+options.offsetTop)+'px';if(options.Dn)target.style.width=source.offsetWidth+'px';if(options.Do)target.style.height=source.offsetHeight+'px';}
,Dr:function (z7){z7=$(z7);if(z7.style.position=='absolute')return ;C3.C5();var Di=C3.C9(z7);var top=Di[1];var left=Di[0];var width=z7.clientWidth;var height=z7.clientHeight;z7._originalLeft=left-parseFloat(z7.style.left||0);z7._originalTop=top-parseFloat(z7.style.top||0);z7._originalWidth=z7.style.width;z7._originalHeight=z7.style.height;z7.style.position='absolute';z7.style.top=top+'px';;z7.style.left=left+'px';;z7.style.width=width+'px';;z7.style.height=height+'px';;}
,Ds:function (z7){z7=$(z7);if(z7.style.position=='relative')return ;C3.C5();z7.style.position='relative';var top=parseFloat(z7.style.top||0)-(z7._originalTop||0);var left=parseFloat(z7.style.left||0)-(z7._originalLeft||0);z7.style.top=top+'px';z7.style.left=left+'px';z7.style.height=z7._originalHeight;z7.style.width=z7._originalWidth;}
}
if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){C3.C8=function (z7){var C7=0,valueL=0;do{C7+=z7.offsetTop||0;valueL+=z7.offsetLeft||0;if(z7.offsetParent==document.body)if(BP.BY(z7,'position')=='absolute')break;z7=z7.offsetParent;}
while(z7);return [valueL,C7];}
}

///	 Copyright 2006 AT&T. All Rights Reserved. See odjs.txt for information.
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var Dt=Class.create();Dt.NODETYPES={Du:1,Dv:2,Dw:3}
;Dt.prototype={initialize:function (id,Dx){this.id=id;this.ym=$(id);this.ym.rsstree=this;this.yO={Dy:"",kg:[],Dz:{}
,DA:{}
}
;this.Dx={DB:60}
;this.data={reload:[]}
;Object.extend(this.Dx,Dx);var DC=this;var yT=DC.Dx.yT;var gT="post";var DD=this.Dx.yY+"&rand="+Math.random()+(new Date()).getTime();var Ai=""+Math.random()+(new Date()).getTime();if(DC.Dx.G_){yT=DC.Dx.opmlUrlUrl;gT="get";}
if(yT){if(this.Dx.yW)this.Dx.yW(id,this.ym,"Retrieving subscription list");new A_.Request(yT,{method:gT,postBody:DD,parameters:Ai,onFailure:this.DE.bind(this),onSuccess:this.DF.bind(this)}
);}
else if(this.Dx.feedUrlUrl){this.DG(this.Dx.feedUrlUrl);}
else if(this.Dx.opmlIncore){this.yO=this.Dx.opmlIncore;if(this.Dx.yU)this.Dx.yU(this.id,this.ym,this.yO,this.id+"_list");if(this.Dx.Hc)this.DH();}
else {var g4="Internal error #1: Missing parameters";if(this.Dx.Ha)this.Dx.Ha(id,ym,g4);else alert(g4);}
}
,DE:function (DI){if(this.Dx.yV)this.Dx.yV(this.id,this.ym,"Failure loading list");}
,DF:function (DI){var DJ=this.LQ(DI);var DK=DJ.type;if(DK=="xmlError"){this.yO.Eq=Dt.getElementContent(DI.responseXML.firstChild);}
else if(DK=="parsererror"){this.yO.Eq=Dt.getElementContent(DI.responseXML.firstChild);}
else if(DK==""){this.yO.Eq="Error parsing the subscription";}
else if(DK!="opml"){this.yO.Eq="Invalid subscription type: "+DK;}
else {var body=DI.responseXML.getElementsByTagName('body')[0];this.yO.Dy=this.DL(DI);this.yO.kg=this.DM(body);}
if(this.Dx.yU)this.Dx.yU(this.id,this.ym,this.yO,this.id+"_list");if(this.Dx.Hc)this.DH();}
,DN:function (yO,kg){for(var al=0;al<kg.length;al++){if(kg[al].kg){DN(yO,kg[al].kg);}
else if(kg[al].cJ){yO.DA[kg[al].cJ]=kg[al];}
}
}
,DH:function (){var DO=this.DP(this.yO.kg,true);this.DQ(this.yO.kg,0,DO);}
,DQ:function (kg,DR,DO){for(var al=0;al<kg.length;al++){if(kg[al].kg){DR=this.DQ(kg[al].kg,DR,DO);}
else if(kg[al].cJ){if(!this.Dx.preLoadFilter||this.Dx.preLoadFilter(this.id,kg[al].cJ)){this.DS(kg[al].cJ,DR,DO);DR++;}
}
}
return DR;}
,DS:function (cJ,DR,DO){var DC=this;var DT=DC.Dx.DT;var gT="post";var DD="url="+escape(cJ);var Ai=""+Math.random()+(new Date()).getTime();if(DC.Dx.G_){DT=cJ;gT="get";DD="";}
new A_.Request(DT,{method:gT,postBody:DD,parameters:Ai,onFailure:function (DI){DC.DT=unescape(cJ);DC.DU(DI,DR,DO);}
,onSuccess:function (DI){DC.DT=unescape(cJ);DC.DV(DI,DR,DO);}
}
);}
,DU:function (DI,DR,DO){this.yO.Dz[this.DT]="failed";if(this.Dx.DU)this.Dx.DU(this.id,this.ym,"Failure loading feed",DR,DO);}
,DV:function (DI,DR,DO){this.yO.Dz[this.DT]="success";var DW=this.DX(DI);this.yO.DA[this.DT].DW=DW;if(this.Dx.gotPreloadFeed)this.Dx.gotPreloadFeed(this.id,this.ym,DW,this.DT,DR,DO);this.DY(DW.DB);var DZ=this.DZ();if((DZ.D1==DO)&&this.Dx.gotAllPreloadFeeds)this.Dx.gotAllPreloadFeeds(this.id,yO,DZ.D2,DZ.D0,DO);}
,DZ:function (){var D0=0,D2=0;var io=this.yO.Dz;for(var al=0;al<io.length;al++){if(io[al]=="success")D2++;else if(io[al]=="failed")D0++;}
return {D1:(D0+D2),D0:D0,D2:D2}
;}
,DP:function (kg,D3){var uT=0;for(var al=0;al<kg.length;al++){if(kg[al].kg)uT+=this.DP(kg[al].kg,D3);else if(kg[al].cJ&&(!D3||!this.yO.DA[kg[al].cJ].DW))uT++;}
return uT;}
,DG:function (cJ,D4){if(this.yO.DA[cJ]==null)this.yO.DA[cJ]={}
;var DC=this;var DT=DC.Dx.DT;var gT="post";var DD="url="+escape(cJ);var Ai=""+Math.random()+(new Date()).getTime();if(DC.Dx.G_){DT=cJ;gT="get";DD="";}
new A_.Request(DT,{method:gT,postBody:DD,parameters:Ai,onFailure:function (DI){DC.D4=D4;DC.DT=unescape(cJ);DC.D5(DI);}
,onSuccess:function (DI){DC.D4=D4;DC.DT=unescape(cJ);DC.D6(DI);}
}
);}
,D5:function (DI){if(this.Dx.D5)this.Dx.D5(this.id,this.ym,this.D4,"Failure loading feed");}
,D6:function (DI){var DW=this.DX(DI);this.yO.DA[this.DT].DW=DW;if(this.Dx.G9)this.Dx.G9(this.id,DW,this.D4,this.DT);this.DY(DW.DB);}
,DY:function (D7){if(this.data.reload[this.DT]){clearTimeout(this.data.reload[this.DT]);this.data.reload[this.DT]=null;}
if(this.Dx.D9){var DC=this;var D8=this.Dx.Hb?this.Dx.Hb:60;var D9=DC.Dx.D9;var id=DC.id;var D4=DC.D4;var DT=DC.DT;if(D7&&(D7>D8))D8=D7;this.data.reload[DT]=setTimeout(function (){DC.data.reload[DT]=null;D9(id,D4,DT);}
,D8*60000);}
}
,DL:function (DI){var title="";var pd=DI.responseXML.getElementsByTagName('head')[0];if(pd&&pd.childNodes){for(var al=0;al<pd.childNodes.length;al++){var D_=pd.childNodes[al];if((D_.nodeType==Dt.NODETYPES.Du)&&(D_.nodeName=='title')){title=Dt.getElementContent(D_);break;}
}
}
return title;}
,DM:function (body){var yO=[];if(body&&body.childNodes){for(var al=0;al<body.childNodes.length;al++){var D_=body.childNodes[al];if(D_.nodeType==Dt.NODETYPES.Du){if(D_.nodeName=="outline"){var hasChildNodes=D_.hasChildNodes();var text=D_.getAttribute('text');var kg=this.DM(D_);var Ec=D_.getAttribute('xmlUrl');if(hasChildNodes||!Ec){var Eb={name:text,kg:kg}
;yO.push(Eb);}
else {var Ed=D_.getAttribute('htmlUrl');var Ee=D_.getAttribute('subtitle');if(typeof (this.yO.DA[Ec])=="undefined"){var Ef=D_.getAttribute('image');var Ei=D_.getAttribute('lastDateTime');var Eg=Dt.parseDate(Ei);var Eb={name:text,cJ:Ec,Eh:Ed,Ef:Ef,Ee:Ee,Ei:Eg}
;this.yO.DA[Ec]=Eb;yO.push(Eb);}
}
}
}
}
}
return yO;}
,DX:function (DI){var uT={Ej:[],name:"",Ef:null,Ek:null,DB:0,El:0,cJ:this.DT}
;var Em=DI.responseXML;var DJ=this.LQ(DI);var DK=DJ.type;var jK=DJ.jK;var En="http://purl.org/dc/elements/1.1/";var Eo=this.yO.DA[this.DT]?this.yO.DA[this.DT].Ei:Dt.defaultDate;if(DK=="xmlError"){var Ep=Dt.getElementContent(DI.responseXML.firstChild);uT.Ej.push({Eq:Ep}
);}
else if(DK=="parsererror"){var Ep=Dt.getElementContent(DI.responseXML.firstChild);uT.Ej.push({Eq:Ep}
);}
else if(DK=="feed"){var Er=Em.getElementsByTagName('icon');uT.Ek=(Er&&Er[0])?Er[0].getAttribute('xml:base'):null;var Es=Em.getElementsByTagName('title');if(Es&&Es[0]){uT.name=(Es&&Es[0]&&Es[0].firstChild)?Es[0].firstChild.data:"";}
var Et=Em.getElementsByTagName('subtitle');if(Et&&Et[0]){uT.Ee=(Et&&Et[0]&&Et[0].firstChild)?Et[0].firstChild.data:"";}
else {var Eu=Em.getElementsByTagName('tagline');if(Eu&&Eu[0]){uT.Ee=(Eu&&Eu[0]&&Eu[0].firstChild)?Eu[0].firstChild.data:"";}
}
var images=Em.getElementsByTagName('logo');uT.Ef=(images&&images[0])?images[0].getAttribute('xml:base'):null;var AQ=Em.getElementsByTagName('entry');var Ev=AQ.length;if(this.Dx.maxArticlesPerFeed&&(Ev>this.Dx.maxArticlesPerFeed))Ev=this.Dx.maxArticlesPerFeed;for(var al=0;al<Ev;al++){var Es=AQ[al].getElementsByTagName('title');var Ew=Dt.getXMLdata(Es);var links=AQ[al].getElementsByTagName('link');var Ex,Ey;for(var ct=0;ct<links.length;ct++){if(links[ct].getAttribute('rel')=='related'){Ex=links[ct].getAttribute('href');}
else if(links[ct].getAttribute('rel')=='enclosure'){Ey={href:links[ct].getAttribute('href'),length:links[ct].getAttribute('length'),title:links[ct].getAttribute('title'),type:links[ct].getAttribute('type')}
;}
}
var Ex=(links&&links[0])?links[0].getAttribute('href'):"";var Ez=AQ[al].getElementsByTagName('summary');var EA=Dt.getXMLdata(Ez);var EB=this.EC(Ez[0],jK);var ED=AQ[al].getElementsByTagName('content');var EE=(ED&&ED[0])?ED[0].textContent:"";var EF=this.EC(ED[0],jK);var EG=AQ[al].getElementsByTagName('updated');var EH=Dt.getXMLdata(EG);var EI=AQ[al].getElementsByTagName('modified');var EJ=Dt.getXMLdata(EI);var EK=AQ[al].getElementsByTagName('published');var EL=Dt.getXMLdata(EK);var EM=AQ[al].getElementsByTagName('created');var EN=Dt.getXMLdata(EM);var EO=AQ[al].getElementsByTagName('issued');var EP=Dt.getXMLdata(EO);var EQ=AQ[al].getElementsByTagName('dc:date');var ER=Dt.getXMLdata(EQ);var ES=Dt.parseDate((EH!="")?EH:(EJ!="")?EJ:(EL!="")?EL:(EP!="")?EP:(EN!="")?EN:(ER!="")?ER:Dt.defaultDateStr);var Jr=Eo>ES;if(!Jr)uT.El++;var EU={title:Ew,EV:EA,EB:EB,Cb:EE,EF:EF,link:Ex,EW:ES,EX:!Jr,EY:Ey}
;uT.Ej.push(EU);}
}
else if((DK=="rss")||(DK=="rdf:RDF")){var images=Em.getElementsByTagName('image');if(images&&images[0]){var EZ=images[0];var tI=EZ.getElementsByTagName('url');uT.Ef=(tI&&tI[0]&&tI[0].firstChild)?tI[0].firstChild.data:"";}
var Es=Em.getElementsByTagName('title');if(Es&&Es[0]){uT.name=(Es&&Es[0]&&Es[0].firstChild)?Es[0].firstChild.data:"";}
var E0=Em.getElementsByTagName('description');if(E0&&E0[0]){uT.Ee=(E0&&E0[0]&&E0[0].firstChild)?E0[0].firstChild.data:"";}
var E1=Em.getElementsByTagName('ttl');if(E1&&E1[0]){uT.DB=(E1&&E1[0]&&E1[0].firstChild)?E1[0].firstChild.data:"";}
var E2=Em.getElementsByTagName('item');var E3=E2.length;if(this.Dx.maxArticlesPerFeed&&(E3>this.Dx.maxArticlesPerFeed))E3=this.Dx.maxArticlesPerFeed;for(var al=0;al<E3;al++){var Es=E2[al].getElementsByTagName('title');var Ew=Dt.getXMLdata(Es);var links=E2[al].getElementsByTagName('link');var Ex=Dt.getXMLdata(links);var E0=E2[al].getElementsByTagName('description');var E4=Dt.getXMLdata(E0);var E5=E2[al].getElementsByTagName('enclosure');var Ey;if(E5&&E5[0]){Ey={href:E5[0].getAttribute('url'),length:E5[0].getAttribute('length'),title:Dt.getXMLdata(E5[0]),type:E5[0].getAttribute('type')}
;}
var E6=E2[al].getElementsByTagName('pubDate');var E7=Dt.getXMLdata(E6);var EQ=E2[al].getElementsByTagName('dc:date');var ER=Dt.getXMLdata(EQ);var ES=Dt.parseDate((E7!="")?E7:(ER!="")?ER:Dt.defaultDateStr);var E8=E2[al].getElementsByTagName('author');var E9=Dt.getXMLdata(E8);var Jr=Eo>ES;if(!Jr)uT.El++;var EU={title:Ew,E_:E4,Fa:"unknown",link:Ex,EW:ES,EX:!Jr,Fb:E9}
;uT.Ej.push(EU);}
}
else {uT.Ej.push({Eq:"Invalid response type: "+DK}
);}
return uT;}
,LQ:function (DI){var DK='',jK='',Ff=[];var Em=DI.responseXML;for(var al=0;al<Em.childNodes.length;al++){var Fc=Em.childNodes[al];var nodeType=Fc.nodeType;if(nodeType==Dt.NODETYPES.Du){DK=Fc.nodeName;var attributes=Fc.attributes;var Fe=/^xmlns:(.*)$/i;for(var ct=0;ct<attributes.length;ct++){var nodeName=attributes[ct].nodeName;var fI=Fe.exec(nodeName);if((fI!=null)&&(fI[1]!='')){Ff[attributes[ct].nodeValue]=fI[1];}
else if(nodeName=="version"){jK=attributes[ct].nodeValue;}
}
break;}
}
return {type:DK,jK:jK,Ff:Ff}
;}
,EC:function (kc,jK){var EF=(kc==null)?null:(jK=="0.9")?kc.getAttribute('mode'):kc.getAttribute('type');if(EF==""){if(jK=="0.9")EF="xml";else EF="text";}
return EF;}
}
;////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
Dt.DG=function (id,cJ,Fg){return $(id).rsstree.DG(cJ,Fg);}
;Dt.DW=function (id,cJ){var yO=$(id).rsstree.yO;var Eb=yO.DA[cJ];return Eb?Eb.DW:Eb;}
;////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
Dt.getElementContent=function (z7){return z7.firstChild?z7.firstChild.data:'';}
;Dt.htmlEncode=function (fj,tp,G6){if(fj==null)return "";fj=fj.replace(/&/g,"&amp;");fj=fj.replace(/</g,"&lt;");fj=fj.replace(/>/g,"&gt;");if(tp)fj=fj.replace(/"/g,"&quot;");if(tp)fj=fj.replace(/'/g,"&apos;");return fj;}
;Dt.hrefEncode=function (fj){if(fj==null)return "";return fj.replace(/["']/g,"");}
;Dt.quoteToDquote=function (n0){if(n0==null)return "";return n0.replace(/[']/g,'"');}
;Dt.trim=function (n0){if(n0==null)n0="";n0+="";return n0.replace(/^\s*/,'').replace(/\s*$/,'');}
Dt.monthNames={Fh:1,Fi:1,Fj:2,Fk:2,Fl:3,Fm:3,Fn:4,Fo:4,Fp:5,Fq:6,Fr:6,Fs:7,Ft:7,Fu:8,Fv:8,Fw:9,Fx:9,Fy:10,Fz:10,FA:11,FB:11,FC:12,FD:12}
;Dt.tzNames={FE:"-04:00",FF:"-05:00",FG:"-06:00",FH:"-07:00",FI:"-05:00",FJ:"-06:00",FK:"-07:00",FL:"-08:00",FM:"00:00",FN:"00:00"}
;Dt.yrmodyRegExp=/^(\d{4})-(\d\d)-(\d\d)$/;Dt.rfc3339RegExp=/^(\d\d\d\d)(-(\d\d)(-(\d\d)(T(\d\d)(:(\d\d)(:(\d\d)([.]\d*)?(.*))?)?)?)?)?$/i;Dt.rfc2822RegExp=/^(\w{3}, *)?(\d+) (\w+) (\d+) (\d+):(\d+):(\d+)( [-+]?\w+)$/i;Dt.parseDate=function (FO){FO=Dt.trim(FO);var FP=Dt.rfc3339RegExp.exec(FO);var FQ=Dt.yrmodyRegExp.exec(FO);var FR=Dt.rfc2822RegExp.exec(FO);var cf=0,cd=0,ce=0,hf=0,min=0,FS=0,FT=0,FU=0,FV;if(FQ){cf=parseInt(FQ[1]);cd=parseInt(FQ[2]);ce=parseInt(FQ[3]);hf=min=FS=FT=0;FU="";FV="yrmody";}
else if(FP){cf=parseInt(FP[1]);cd=parseInt(FP[3]?FP[3]:'');ce=parseInt(FP[5]?FP[5]:'');hf=parseInt(FP[7]?FP[7]:'');min=parseInt(FP[9]?FP[9]:'');FS=parseInt(FP[11]?FP[11]:'');FT=FP[12]?parseInt(FP[12]):0;FU=FP[13]?Dt.trim(FP[13].toLowerCase()):'';FV="rfc3339";}
else if(FR){dow=parseInt(FR[1]?FR[1]:'');ce=parseInt(FR[2]?FR[2]:'');cd=Dt.monthNames[FR[3]?FR[3].toLowerCase():'jan'];cf=parseInt(FR[4]?FR[4]:'');hf=parseInt(FR[5]?FR[5]:'');min=parseInt(FR[6]?FR[6]:'');FS=parseInt(FR[7]?FR[7]:'');FT=0;FU=FR[8]?Dt.trim(FR[8].toLowerCase()):'';FV="rfc2822";}
else if(FO==""){ce=1;cd=1;cf=1970;}
else {var FW=Date.parse(FO);return FW;}
var FW=new Date(cf,cd-1,ce,hf,min,FS);if(Dt.tzNames[FU])FU=Dt.tzNames[FU];var FX=/^(-*)(\d\d):?(\d\d)$/;var FY=FX.exec(FU);var FZ=0;if(FY){FZ=(60*FY[2]+1*FY[3])*60000;if(FY[1]=="-")FZ=-FZ;FZ+=FW.getTimezoneOffset()*60000;}
FW.setTime(FW.getTime()+FZ+FT);return FW;}
;Dt.defaultDateStr="2000-01-01T00:00:00Z";Dt.defaultDate=Dt.parseDate(Dt.defaultDateStr);Dt.F8=function (kr,F0){kr=$(kr);var F1=kr&&kr.style?kr.style.display:"";var F2=F1=="none";if(F1==''){var BU=kr.className.split(' ');for(var ct=0;ct<BU.length;ct++){if(BU[ct]==F0){F2=true;break;}
}
}
return !F2;}
;Dt.swapVisibility=function (F3,F4,F5,F6,F7){var fV=$(F3);var F8=Dt.F8(F7,F4);var F9=F8?F5:F6;if(fV)fV.src=F9;for(var al=4;al<arguments.length;al++){var kr=$(arguments[al]);if(kr){if(F8){kr.style.display="none";kr.style.visibility="hidden";}
else {kr.style.display="block";kr.style.visibility="visible";}
}
}
}
;Dt.stripHtml=function (f2){var uT=[];var F_=/^([^<]*)(.*)/;var Ga=/^<\/?[^\s>]\s*/;var Gb=/^\w*(=('([^']|\\')*'|"([^"]|\\")*"))?\s*/;var Gc=/\/?>/;for(var al=0;al<arguments.length;al++){f2=arguments[al];while(f2!=""){var Gd=F_.exec(f2);if(Gd&&(Gd[0]!='')){uT.push(Gd[1]);f2=Gd[2];}
else {uT.push(f2);f2='';}
var Ge=Ga.exec(f2);if(Ge&&(Ge[0].length>0)){uT.push(' ');f2=f2.substring(Ge[0].length);var Gf=Gb.exec(f2);while(Gf&&(Gf[0]!='')){f2=f2.substring(Gf[0].length);Gf=Gb.exec(f2);}
var Gg=Gc.exec(f2);if(Gg&&(Gg[0].length>0))f2=f2.substring(Gg[0].length);else f2=f2.substring(1);}
else {f2=f2.substring(1);}
}
}
var Gh=uT.join('');Gh=Gh.replace(/'/g,"&#39;");Gh=Gh.replace(/"/g,"&#34;");return Gh;}
;Dt.LY={"class":1,"id":1,"name":1,"style":1,"title":1}
;Dt.protectedHTML={"a":{"href":1,"target":1,"title":1,"type":1}
,"abbr":{}
,"acronym":{}
,"address":{"align":1,"clear":1,"height":1,"width":1}
,"area":{"alt":1,"coords":1,"disabled":1,"href":1,"shape":1,"tabindex":1,"target":1}
,"b":{}
,"base":{"href":1,"target":1}
,"big":{}
,"blockquote":{"align":1,"cite":1,"clear":1,"height":1,"type":1,"width":1}
,"br":{"clear":1}
,"caption":{"align":1,"height":1,"width":1}
,"center":{"align":1,"height":1,"width":1}
,"cite":{}
,"code":{}
,"col":{"align":1,"char":1,"charoff":1,"span":1,"valign":1,"width":1}
,"colgroup":{"align":1,"bgcolor":1,"char":1,"charoff":1,"span":1,"valign":1,"width":1}
,"dd":{"align":1,"clear":1,"height":1,"nowrap":1,"width":1}
,"dfn":{}
,"dir":{"align":1,"clear":1,"compact":1,"height":1,"start":1,"type":1,"width":1}
,"div":{"align":1,"clear":1,"cols":1,"gutter":1,"height":1,"nowrap":1,"width":1}
,"dl":{"align":1,"clear":1,"compact":1,"height":1,"width":1}
,"dt":{"align":1,"clear":1,"height":1,"nowrap":1,"width":1}
,"em":{}
,"embed":{"align":1,"disabled":1,"height":1,"hidden":1,"hspace":1,"palette":1,"pluginspage":1,"pluginurl":1,"src":1,"type":1,"units":1,"vspace":1,"width":1,"flashvars":1}
,"font":{"color":1,"face":1,"font-weight":1,"point-size":1,"size":1}
,"hr":{"align":1,"clear":1,"color":1,"noshade":1,"size":1,"width":1}
,"h1":{"align":1,"clear":1,"height":1,"width":1}
,"h2":{"align":1,"clear":1,"height":1,"width":1}
,"h3":{"align":1,"clear":1,"height":1,"width":1}
,"h4":{"align":1,"clear":1,"height":1,"width":1}
,"h5":{"align":1,"clear":1,"height":1,"width":1}
,"h6":{"align":1,"clear":1,"height":1,"width":1}
,"i":{}
,"img":{"align":1,"alt":1,"border":1,"controls":1,"height":1,"hspace":1,"ismap":1,"longdesc":1,"loop":1,"lowsrc":1,"src":1,"start":1,"usemap":1,"vspace":1,"width":1}
,"kbd":{}
,"li":{"align":1,"clear":1,"height":1,"type":1,"value":1,"width":1}
,"listing":{"align":1,"height":1,"width":1}
,"multicol":{"cols":1,"gutter":1,"width":1}
,"nobr":{}
,"noscript":{}
,"object":{"align":1,"archive":1,"border":1,"classid":1,"code":1,"codebase":1,"codetype":1,"data":1,"declare":1,"height":1,"hspace":1,"standby":1,"type":1,"vspace":1,"width":1}
,"ol":{"align":1,"clear":1,"compact":1,"height":1,"start":1,"type":1,"width":1}
,"p":{"align":1,"clear":1,"height":1,"width":1}
,"param":{"name":1,"type":1,"value":1,"valuetype":1}
,"plaintext":{"align":1}
,"pre":{"clear":1,"cols":1,"width":1,"wrap":1}
,"q":{"cite":1}
,"s":{}
,"samp":{}
,"select":{"align":1,"multiple":1,"size":1,"width":1}
,"small":{}
,"span":{}
,"spell":{}
,"strike":{}
,"strong":{}
,"style":{"disabled":1,"language":1,"media":1,"title":1,"type":1}
,"sub":{}
,"sup":{}
,"table":{"align":1,"background":1,"bgcolor":1,"border":1,"bordercolor":1,"bordercolordark":1,"bordercolorlight":1,"bottompadding":1,"cellpadding":1,"cellspacing":1,"clear":1,"cols":1,"height":1,"hspace":1,"leftpadding":1,"rightpadding":1,"rules":1,"toppadding":1,"vspace":1,"width":1}
,"tbody":{"align":1,"bgcolor":1,"char":1,"charoff":1,"valign":1}
,"td":{"abbr":1,"align":1,"axis":1,"background":1,"bgcolor":1,"bordercolor":1,"bordercolordark":1,"bordercolorlight":1,"char":1,"charoff":1,"colspan":1,"headers":1,"height":1,"nowrap":1,"rowspan":1,"scope":1,"valign":1,"width":1}
,"textarea":{"accesskey":1,"cols":1,"disabled":1,"height":1,"name":1,"readonly":1,"rows":1,"width":1,"wrap":1}
,"tfoot":{"align":1,"bgcolor":1,"char":1,"charoff":1,"valign":1}
,"thtd":{"abbr":1,"align":1,"axis":1,"background":1,"bgcolor":1,"bordercolor":1,"bordercolordark":1,"bordercolorlight":1,"char":1,"charoff":1,"colspan":1,"headers":1,"height":1,"nowrap":1,"rowspan":1,"scope":1,"valign":1,"width":1}
,"thead":{"align":1,"bgcolor":1,"char":1,"charoff":1,"valign":1}
,"tr":{"align":1,"background":1,"bgcolor":1,"bordercolor":1,"bordercolordark":1,"bordercolorlight":1,"char":1,"charoff":1,"height":1,"nowrap":1,"valign":1}
,"tt":{}
,"u":{}
,"ul":{"align":1,"clear":1,"compact":1,"height":1,"start":1,"type":1,"width":1}
,"var":{}
,"wbr":{}
}
;Dt.mungeName=function (fI){if(fI==null)return fI;return fI.toLowerCase();}
;Dt.protectHtml=function (f2){var uT=[];var F_=/^([^<]*)(.*)/;var Ga=/^<(\/?)([^\s>]*)\s*/;var Gb=/^(\w*)(=('([^']|\\')*'|"([^"]|\\")*"))?\s*/;var Gc=/\/?>/;var LY=Dt.LY;for(var al=0;al<arguments.length;al++){f2=arguments[al];while(f2!=""){var Gd=F_.exec(f2);if(Gd&&(Gd[0]!='')){uT.push(Gd[1]);f2=Gd[2];}
else {uT.push(f2);f2='';}
var Ge=Ga.exec(f2);if(Ge&&(Ge[0].length>0)){var ii=Dt.mungeName(Ge[2]);var LZ=ii?Dt.protectedHTML[ii]:null;if(LZ)uT.push('<'+Ge[1]+ii+' ');else uT.push(' ');f2=f2.substring(Ge[0].length);var Gf=Gb.exec(f2);while(Gf&&(Gf[0]!='')){var L0=Dt.mungeName(Gf[1]);if(L0&&LZ){var L1=Gf[0];if(LZ[L0]){if(L0=="href"){var jb=Gf[3];if(jb.match(/^[^:\/]*script/)){L1=L1.replace(/script/,"xscript");}
}
uT.push(L1);}
else if(LY[L0]){if(L0=="style"){L1=L1.replace(/\bposition\b/g,"xposition").replace(/\burl\b/g,"xurl").replace(/script/g,"xscript").replace(/\bdisplay\b/g,"xdisplay").replace(/\beval\b/g,"xeval").replace(/\bexpression\b/g,"xexpression").replace(/\bimport\b/g,"ximport");}
uT.push(L1);}
}
f2=f2.substring(Gf[0].length);Gf=Gb.exec(f2);}
var Gg=Gc.exec(f2);if(Gg&&(Gg[0].length>0)){f2=f2.substring(Gg[0].length);if(LZ)uT.push(Gg[0]);}
else {f2=f2.substring(1);uT.push(">");}
}
else {f2=f2.substring(1);}
}
}
var Gh=uT.join('');return Gh;}
;Dt.setImage=function (F3,F6){var fV=$(F3);if(fV)fV.src=F6;}
;Dt.makeVisible=function (Gi){for(var al=0;al<arguments.length;al++){var kr=$(arguments[al]);if(kr){kr.style.display="block";kr.style.visibility="visible";}
}
}
;Dt.makeInvisible=function (Gi){for(var al=0;al<arguments.length;al++){var kr=$(arguments[al]);if(kr){kr.style.display="none";kr.style.visibility="hidden";}
}
}
;Dt.genOpmlOutlineXml=function (Gj){var Gk=[];for(var al=0;al<Gj.length;al++){if(!Gj[al].invisible){Gk.push("<outline text='"+Dt.htmlEncode(Gj[al].name)+"'");if(Gj[al].kg){Gk.push(">\n");Gk.push(Dt.genOpmlOutlineXml(Gj[al].kg));Gk.push("</outline>\n");}
else {Gk.push(" type='rss' ");if(Gj[al].cJ)Gk.push(" xmlUrl='"+Dt.htmlEncode(Gj[al].cJ)+"' ");if(Gj[al].Eh)Gk.push(" htmlUrl='"+Dt.htmlEncode(Gj[al].Eh,true)+"' ");if(Gj[al].Ee)Gk.push(" subtitle='"+Dt.htmlEncode(Gj[al].Ee)+"' ");if(Gj[al].key)Gk.push(" key='"+Dt.htmlEncode(Gj[al].key)+"' ");if(Gj[al].Ef)Gk.push(" image='"+Dt.htmlEncode(Gj[al].Ef,true)+"' ");Gk.push("/>\n");}
}
}
return Gk.join('');}
;Dt.genOpmlXml=function (yO,Gl){var Gk=[];Gk.push("<?xml version='1.0' encoding='UTF-8'?>\n");Gk.push("<opml version='1.0'><head><title>"+Dt.htmlEncode(yO.Dy)+"</title></head>\n<body>\n");Gk.push(Dt.genOpmlOutlineXml(yO.kg));Gk.push("</body></opml>\n");var uT=Gk.join('');if(Gl)return Dt.encode64(uT);return uT;}
;Dt.resizeImage=function (fV,Gm,Gn){fV=$(fV);if(!fV)return ;var Go=fV.width/fV.height;if(Gm&&fV.width>Gm){fV.width=Gm;fV.height=fV.width/Go;}
if(Gn&&fV.height>Gn){fV.height=Gn;fV.width=fV.height*Go;}
}
;Dt.getXMLdata=function (Gp){var Gk=[];if(!Gp||!Gp[0]||!Gp[0].firstChild)return Gk;var AQ=Gp[0].childNodes;for(var al=0;al<AQ.length;al++){Gk.push(AQ[al].data);}
return Gk.join('');}
;Dt.guessEncoding=function (text){return /&amp;|&gt;|&lt;|&quot;|&nbsp;/.test(text)?"text":"html";}
;Dt.decodeContent=function (text,encoding){if(text==null)return text;if((encoding=="unknown")||(encoding==null))encoding=Dt.guessEncoding(text);if((encoding=="xml")||(encoding=="xhtml")||(encoding=="html")){return text;}
else if(encoding=="escaped"){return text;}
else if(encoding=="base64"){return escape(Dt.decode64(text));}
else if(encoding=="text"){return escape(text);}
}
;Dt.protectContent=function (text){return text;}
;Dt.encode64=function (input){var Gq="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var Gr="";var Gs,Gt,Gu;var Gv,Gw,Gx,Gy;var al=0;do{Gs=input.charCodeAt(al++);Gt=input.charCodeAt(al++);Gu=input.charCodeAt(al++);Gv=Gs>>2;Gw=((Gs&3)<<4)|(Gt>>4);Gx=((Gt&15)<<2)|(Gu>>6);Gy=Gu&63;if(isNaN(Gt)){Gx=Gy=64;}
else if(isNaN(Gu)){Gy=64;}
Gr=Gr+Gq.charAt(Gv)+Gq.charAt(Gw)+Gq.charAt(Gx)+Gq.charAt(Gy);}
while(al<input.length);return Gr;}
;Dt.decode64=function (input){var Gq="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var Gr="";var Gs,Gt,Gu;var Gv,Gw,Gx,Gy;var al=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{Gv=Gq.indexOf(input.charAt(al++));Gw=Gq.indexOf(input.charAt(al++));Gx=Gq.indexOf(input.charAt(al++));Gy=Gq.indexOf(input.charAt(al++));Gs=(Gv<<2)|(Gw>>4);Gt=((Gw&15)<<4)|(Gx>>2);Gu=((Gx&3)<<6)|Gy;Gr=Gr+String.fromCharCode(Gs);if(Gx!=64){Gr=Gr+String.fromCharCode(Gt);}
if(Gy!=64){Gr=Gr+String.fromCharCode(Gu);}
}
while(al<input.length);return Gr;}
;Dt.insertToArray=function (rI,al,kc){if(al<0)al=0;else if(al>rI.length)al=rI.length;for(;al<rI.length;al++){var dx=rI[al];rI[al]=kc;kc=dx;}
rI[rI.length]=kc;}
;Dt.removeFromArray=function (rI,al){if(al<rI.length){if(al<0)al=0;for(;al<rI.length-1;al++){rI[al]=rI[al+1];}
rI.pop();}
}
;Dt.max_depth=10;Dt.ni=function (an,name,Gz,zj){if(zj>Dt.max_depth){return Gz+name+":<max depth reached>\n";}
if(typeof an=="object"){var BO=null;var Gr=Gz+name+"\n";Gz+="\t";for(var jY in an){try{BO=an[jY];}
catch(rk){BO="<Unable to eval>";}
if(typeof BO=="object"){Gr+=ni(BO,jY,Gz,zj+1);}
else {Gr+=Gz+jY+":"+BO+"\n";}
}
return Gr;}
else {return an;}
}
;Dt.DK=function (DI){var DK='';var DK='';var Em=DI.responseXML;for(var al=0;al<Em.childNodes.length;al++){var Fc=Em.childNodes[al];var nodeType=Fc.nodeType;if(nodeType==Dt.NODETYPES.Du){DK=Fc.nodeName;break;}
}
return DK;}
;////////////////////////////////////////////////////////////////

///	 Copyright 2006 AT&T. All Rights Reserved. See odjs.txt for information.
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function G7(G8){new Dt(G8,{yT:xl.yT,yU:Hd,G9:Hr,DT:xl.DT,G_:false,yW:HE,D9:Hi,yV:HF,D5:HG,DU:HH,Ha:HI,Hb:xl.Hb,Hc:false}
);}
function Hd(id,ym,yO){ym.Hs={}
;var He=false;if(!He){if(yO.Eq)ym.innerHTML=H1(id,ym,Dt.htmlEncode(yO.Eq,true));else ym.innerHTML=HN(id,ym,yO.kg,id+"_list");}
}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Hf(id,iO,cJ){var Hg=$(iO+"_arrow");if(Hg)Hg.onclick=function (){Hj(iO);}
;var Eb=Dt.DW(id,unescape(cJ));if(!Eb){$(iO+"_msg").innerHTML="Retrieving feed";Dt.makeVisible(iO+"_msg",iO+"_div");Dt.DG(id,cJ,iO);}
Dt.setImage(iO+"_arrow","images/icon_minus_green.gif");Dt.makeVisible(iO+"_div");}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Hh(id,iO,cJ){$(iO+"_msg").innerHTML=H1(id,$(id),"Retrieving feed again");Dt.makeVisible(iO+"_msg");Dt.DG(id,cJ,iO);}
function Hi(id,iO,cJ){HE(id,$(iO+"_div"),"Updating Feed");Dt.DG(id,cJ,iO);}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Hj(iO){return Dt.swapVisibility(iO+"_arrow","rsslistDefaultDisplayNone","images/icon_plus_green.gif","images/icon_minus_green.gif",iO+"_div");}
function Hk(F3,Hl,Hm,iO){var Hn=false;Dt.setImage(F3,Hn?"images/pin-gray-pinned.gif":"images/icon_feed_gray.gif");Dt.makeVisible(iO+"_div",iO+"_msg");var fV=$(F3);fV.onclick=function (){Ho(F3,Hl,Hm,iO);}
;fV.onmouseover=fV.onmouseout=null;var Hg=$(Hl);if(Hg)Hg.onmouseover=Hg.onmouseout=null;var anchor=$(Hm);if(anchor)anchor.onmouseover=anchor.onmouseout=null;}
function Ho(F3,Hl,Hm,iO){var Hn=false;Dt.setImage(F3,Hn?"images/pin-gray-unpinned.gif":"images/icon_feed_gray.gif");Dt.makeInvisible(iO+"_div",iO+"_msg");var fV=$(F3);fV.onclick=function (){Hk(F3,Hl,Hm,iO);}
;fV.onmouseover=function (){Hp(iO);}
;fV.onmouseout=function (){Hq(iO);}
;var Hg=$(Hl);if(Hg){Hg.onmouseover=function (){Hp(iO);}
;Hg.onmouseout=function (){Hq(iO);}
;}
var anchor=$(Hm);if(anchor){anchor.onmouseover=function (){Hp(iO);}
;anchor.onmouseout=function (){Hq(iO);}
;}
}
function Hp(iO){Dt.makeVisible(iO+"_description",iO+"_msg");}
function Hq(iO){Dt.makeInvisible(iO+"_div",iO+"_msg")}
function Hr(id,Eb,iO,DT){if(!iO){var ym=$(id);var Hs=ym.Hs?ym.Hs[DT]:null;iO=Hs?Hs.iO:null;}
var Ht=false;if(Eb.Ef&&Ht){$(iO+"_image_div").innerHTML="<img border='0' src='"+Dt.hrefEncode(Eb.Ef)+"' "+"id='"+iO+"_image' "+"onload='Dt.resizeImage(this,0,15)'"+"/>";}
$(iO+"_reload_div").innerHTML="<img src='images/reload-15x15.gif' "+"title='Refresh' id='"+iO+"_reload' "+"onclick='Hh(\""+id+'", "'+iO+'","'+escape(DT)+'")'+"'"+"/>\n";$(iO+"_msg").innerHTML="";Dt.makeInvisible(iO+"_msg");$(iO+"_div").innerHTML=HQ(id,Eb,iO);new A_.Request('/cgi-bin/rss/nupdatelastreaddate.cgi',{method:"get",parameters:"url="+DT,onFailure:function (Js){}
,onSuccess:function (Js){}
}
);}
function Hu(id,ym,Eb,DT,Hv,DO){var Ht=false;var Hs=ym.Hs?ym.Hs[DT]:null;var iO=Hs?Hs.iO:null;$(iO+"_reload_div").innerHTML="<img src='images/reload-15x15.gif' "+"title='Refresh' id='"+iO+"_reload' "+"onclick='Hh(\""+id+'", "'+iO+'","'+escape(DT)+'")'+"'"+"/>\n";$(iO+"_msg").innerHTML="";Dt.makeInvisible(iO+"_msg");$(iO+"_div").innerHTML=HQ(id,Eb,iO);}
function Hw(f2,Hx){if(!Hx)Hx=80;fj=f2.substr(0,Hx);if(f2.length>Hx){for(var al=fj.length-1;al>0;al--){if(fj.charAt(al)==' '){fj=f2.substr(0,al)+"...";break;}
}
}
return fj;}
function Hy(EW,Hz){var xP=[];if(EW&&!isNaN(EW.getMonth())){var KK=Dt.defaultDate;if((EW.getFullYear()!=KK.getFullYear())||(EW.getMonth()!=KK.getMonth())||(EW.getDate()!=KK.getDate())){var HA=["January","February","March","April","May","June","July","August","September","October","November","December"];xP.push(HA[EW.getMonth()]+" ");xP.push(EW.getDate()+", ");xP.push(EW.getFullYear()+" ");if(!Hz){var HB=new Date()-EW;var HC=parseInt(HB/86400000);if(HC>0){if(HC>1)xP.push("("+HC+" Days ago)");else xP.push("("+HC+" Day ago)");}
else {var HD=parseInt(HB/3600000)-24*HC;if(HD>0){if(HD>1)xP.push("("+HD+" Hours ago)");else xP.push("("+HD+" Hour ago)");}
}
}
}
}
return xP.join('');}
function HE(id,ym,g4){}
function HF(id,ym,g4){HJ(id,ym,g4);}
function HG(id,ym,iO,g4){HJ(id,iO+"_msg",g4);}
function HH(id,ym,g4,Hv,DO){}
function HI(id,ym,g4){HJ(id,ym,g4);}
function HJ(id,ym,g4){$(ym).innerHTML=H1(id,ym,g4);}
function HK(cJ,al,id,iO){Kl();var Kk=H2(cJ,al,id,iO);var ai=document.getElementById("readrss").contentWindow.document;ai.open();ai.write(Kk);ai.close();}
function HM(id,EU){window.open(unescape(EU));}

///      Copyright (c) 2005 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var JO=Class.create();JO.prototype={initialize:function (id,Dx){this.id=id;this.ym=$(id);if(!this.ym)return ;this.Dx={JP:1000,JQ:200,JR:100,JS:100,JT:0,JU:0,JV:100,JW:0,K4:null,K3:this.ym.style.backgroundColor}
;Object.extend(this.Dx,Dx);this.Dx.counter=parseInt(this.Dx.JP/this.Dx.JQ)+1;this.Dx.deltaRed=parseInt((this.Dx.JR-this.Dx.JU)/this.Dx.counter);this.Dx.deltaGreen=parseInt((this.Dx.JS-this.Dx.JV)/this.Dx.counter);this.Dx.deltaBlue=parseInt((this.Dx.JT-this.Dx.JW)/this.Dx.counter);this.Dx.BJ=setInterval(this.JX.bind(this),this.Dx.JQ);this.JX();}
,JX:function (){if(jj.jB)np("effects","counter="+this.Dx.counter);this.Dx.counter-=1;if(jj.jB)np("effects","counter >> "+this.Dx.counter);if(this.Dx.counter<=0){clearInterval(this.Dx.BJ);this.ym.style.backgroundColor=this.Dx.K3;if(this.Dx.K4)this.Dx.K4();}
else {var JY=this.Dx.JR;var JZ=this.Dx.JS;var J0=this.Dx.JT;var J1="rgb("+JY+"%,"+JZ+"%,"+J0+"%)";this.Dx.JR=JY-this.Dx.deltaRed;this.Dx.JS=JZ-this.Dx.deltaGreen;this.Dx.JT=J0-this.Dx.deltaBlue;this.ym.style.backgroundColor=J1;}
}
}
;
///      Copyright (c) 2006 AT&T. All Rights Reserved
///      THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF AT&T
///      The copyright notice above does not evidence any
///      actual or intended publication of such source code.
var Kn={GP:null,GQ:null}
;function GR(g4,GS,GT,gd,GP,GQ){Kn.GP=GP;Kn.GQ=GQ;var rk=document;var LC=$("modalCover");BP.aA(LC);var LD=$("modalBox");LD.innerHTML=G1(g4,GS,GT,gd,GU,GV);BP.aA(LD);se(LD,0,0);var LE=$("modalIframe");BP.aA(LE);var LF=sA(document.body);var LG=sB(document.body);var LH=sO();var LI=LG>LH?LG:LH;var LJ=sA(LD);var LK=sB(LD);var LL=parseInt(LF/2-LJ/2);var LM=parseInt(LI/2-LK/2+sn());se(LD,LL,LM);LG=sB(document.body);LH=sO();LI=LG>LH?LG:LH;sA(LC,"100%");sB(LC,LI+1000);}
function GU(){BP.aB("modalIframe");BP.aB("modalCover");BP.aB("modalBox");if(Kn.GP)Kn.GP();}
function GV(){BP.aB("modalIframe");BP.aB("modalCover");BP.aB("modalBox");if(Kn.GQ)Kn.GQ();}

