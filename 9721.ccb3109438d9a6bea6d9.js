(self.webpackChunktimer=self.webpackChunktimer||[]).push([[9721],{9721:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HomePageModule:()=>h});var i=n(1116),s=n(6611),o=n(1462),r=n(4989),c=n(8619),a=n(9624);const l=[{path:"",component:(()=>{class e{constructor(e,t){this.alertController=e,this.titleService=t,this.hours=0,this.minutes=0,this.seconds=0}playAlert(){let e=new Audio;e.src="assets/sound/mixkit-fairy-bells-583.mp3",e.load(),e.play()}play(){this.clearCounter(),this.interval=setInterval(()=>{0===this.hours&&0===this.minutes&&0===this.seconds?(this.titleService.setTitle("Timer"),this.playAlert(),this.clearCounter()):(0===this.seconds&&this.minutes>0&&(this.seconds=60,this.minutes--),0===this.seconds&&0===this.minutes&&this.hours>0&&(this.seconds=60,this.minutes=59,this.hours--),this.seconds--,this.titleService.setTitle(this.hours.toString()+":"+this.minutes.toString()+":"+this.seconds.toString()))},999)}clearCounter(){clearInterval(this.interval)}stop(){this.clearCounter()}reset(){this.clearCounter(),this.hours=0,this.minutes=0,this.seconds=0}disableButton(){let e=!1;return e=0==this.hours&&0==this.minutes&&0==this.seconds,e}checkValue(e,t){return n=this,void 0,s=function*(){null==e&&("hours"==t&&(this.hours=0),"minutes"==t&&(this.minutes=0),"seconds"==t&&(this.seconds=0));let n="Value cannot be negative or above 59";"hours"==t&&(n="Hours cannot be negative",e<0&&(this.hours=0));const i=yield this.alertController.create({header:"Alert",subHeader:"Invalid Value",message:n,buttons:["OK"]});(e>=60||e<0)&&(yield i.present(),"minutes"==t?this.minutes=0:this.seconds=0),yield i.onDidDismiss()},new((i=void 0)||(i=Promise))(function(e,t){function o(e){try{c(s.next(e))}catch(n){t(n)}}function r(e){try{c(s.throw(e))}catch(n){t(n)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i(function(e){e(n)})).then(o,r)}c((s=s.apply(n,[])).next())});var n,i,s}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.Br),c.Y36(a.Dx))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-home"]],decls:31,vars:5,consts:[[3,"fullscreen"],["id","container"],[2,"width","100%","justify-content","center","align-items","center","display","flex"],["src","/assets/icon/clock.png","alt","clock",2,"width","50px"],[2,"background","#121212"],[2,"display","flex","justify-content","center","align-items","center","width","100%"],[2,"width","100%"],["type","number","placeholder","hours","min","0","name","hours",1,"timer",3,"ngModel","ngModelChange","change"],["type","number","placeholder","minutes","min","0","max","59","name","minutes","maxlength","2",1,"timer",3,"ngModel","ngModelChange","change"],["type","number","placeholder","seconds","min","0","max","59","name","seconds","maxlength","2",1,"timer",3,"ngModel","ngModelChange","change"],["color","success",3,"disabled","click"],["color","danger",3,"click"],["color","dark",3,"click"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-content",0),c.TgZ(1,"div",1),c.TgZ(2,"ion-card"),c.TgZ(3,"ion-card-content"),c.TgZ(4,"ion-card-header"),c.TgZ(5,"div",2),c._UZ(6,"ion-img",3),c.qZA(),c.TgZ(7,"ion-card-title"),c._uU(8," Online Timer with Alarm "),c.qZA(),c.TgZ(9,"small"),c._uU(10," Create your timer with alarm and start/pause/stop/reset. "),c._UZ(11,"br"),c._uU(12," Perfect for everyday activities such as cooking meals, taking quizzes, etc."),c.qZA(),c.qZA(),c._UZ(13,"hr",4),c.TgZ(14,"div",5),c.TgZ(15,"ion-item",6),c.TgZ(16,"ion-input",7),c.NdJ("ngModelChange",function(e){return t.hours=e})("change",function(){return t.checkValue(t.hours,"hours")}),c.qZA(),c._uU(17," : "),c.TgZ(18,"ion-input",8),c.NdJ("ngModelChange",function(e){return t.minutes=e})("change",function(){return t.checkValue(t.minutes,"minutes")}),c.qZA(),c._uU(19," : "),c.TgZ(20,"ion-input",9),c.NdJ("ngModelChange",function(e){return t.seconds=e})("change",function(){return t.checkValue(t.seconds,"seconds")}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"div"),c.TgZ(22,"ion-button",10),c.NdJ("click",function(){return t.play()}),c._uU(23,"Play"),c.qZA(),c.TgZ(24,"ion-button",11),c.NdJ("click",function(){return t.stop()}),c._uU(25,"Stop"),c.qZA(),c.TgZ(26,"ion-button",12),c.NdJ("click",function(){return t.reset()}),c._uU(27,"Reset"),c.qZA(),c.qZA(),c._UZ(28,"hr",4),c.TgZ(29,"small"),c._uU(30,"made by edn9 - v.0.0.2"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.Q6J("fullscreen",!0),c.xp6(16),c.Q6J("ngModel",t.hours),c.xp6(2),c.Q6J("ngModel",t.minutes),c.xp6(2),c.Q6J("ngModel",t.seconds),c.xp6(2),c.Q6J("disabled",t.disableButton()))},directives:[s.W2,s.PM,s.FN,s.Zi,s.Xz,s.gZ,s.Ie,s.pK,s.as,o.JJ,o.On,o.nD,s.YG],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;flex-direction:column}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.timer[_ngcontent-%COMP%]{text-align:center}"]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,o.u5,s.Pc,u]]}),e})()}}]);