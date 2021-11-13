(()=>{"use strict";var t={930:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.utility01=void 0;e.utility01=()=>{(new i).init()};class i{constructor(){this.el=document.createElement("div"),this.cookieKey="utility-01",this.cookieMaxAge=2592e3,this.animSpeed=300}init(){document.getElementById("js-utility-01")&&navigator.cookieEnabled&&this.onLoad()}onLoad(){window.onload=()=>{this.getCheckState()||this.showForm()}}getCheckState(){let t=!1;return document.cookie.split(";").forEach((e=>{const i=e.split("=")[0],s=e.split("=")[1];i===this.cookieKey&&s&&(t=!0)})),t}setCheckState(t){document.cookie=t?`${this.cookieKey}=true; max-age=${this.cookieMaxAge}`:`${this.cookieKey}=; expires=0`}showForm(){this.el.insertAdjacentHTML("beforeend",'\n      <div class="utility-01 has-background-white p-2 content">\n        <p class="is-size-7">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>\n        <div class="buttons are-small">\n          <button class="js-agree button is-primary">同意します</button>\n          <button class="js-disagree button is-primary is-inverted">同意しません</button>\n        </div>\n      </div>\n    '),this.el.style.transition=`${this.animSpeed}ms`,this.onClickForm(),document.body.appendChild(this.el),setTimeout((()=>{this.el.classList.add("is-animated")}),40)}hideForm(){this.el.classList.remove("is-animated"),setTimeout((()=>{document.body.removeChild(this.el)}),this.animSpeed)}onClickForm(){this.el.addEventListener("click",(t=>{const e=t.target;e.classList.contains("js-agree")&&(this.setCheckState(!0),this.hideForm()),e.classList.contains("js-disagree")&&(this.setCheckState(!1),alert("同意しない場合の処理を実行（ページ遷移など）"))}))}}},343:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.utility02=void 0;e.utility02=()=>{new i("js-utility-02").init()};class i{constructor(t){this.el=document.getElementById(t),this.checkboxEl=document.getElementById("js-utility-02-checkbox"),this.buttonEl=document.getElementById("js-utility-02-button"),this.modalEl=document.getElementById("js-utility-02-modal"),this.modalOpenEls=document.getElementsByClassName("js-utility-02-modal-open"),this.modalCloseEls=document.getElementsByClassName("js-utility-02-modal-close")}init(){this.el&&(this.onChangeCheckbox(),this.onClickButton(),this.onClickModalOpen(),this.onClickModalClose())}onChangeCheckbox(){this.checkboxEl.addEventListener("change",(t=>{t.preventDefault();t.target.checked?this.buttonEl.disabled=!1:this.buttonEl.disabled=!0}))}onClickButton(){this.buttonEl.addEventListener("click",(t=>{t.preventDefault(),alert("ボタンクリック時の処理")}))}onClickModalOpen(){this.modalOpenEls.length&&[...this.modalOpenEls].forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),this.modalOpen()}))}))}onClickModalClose(){this.modalCloseEls.length&&[...this.modalCloseEls].forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),this.modalClose()}))}))}modalOpen(){this.modalEl.classList.add("is-active")}modalClose(){this.modalEl.classList.remove("is-active")}}},497:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.U_COOKIE=void 0,e.U_COOKIE={get:(t="")=>{let e=null;return document.cookie.split(";").forEach((i=>{const s=i.split("=")[0],n=i.split("=")[1];s===t&&(e=n)})),e},getAll:()=>{const t=new Array;return document.cookie.split("; ").forEach((e=>{t.push({key:e.split("=")[0],val:e.split("=")[1]})})),t},set:(t="",e="",i=null)=>{t&&(document.cookie=i?`${t}=${e}; max-age=${i}`:`${t}=${e}`)},clear:(t="")=>{if(!t)return;document.cookie.split("; ").forEach((e=>{e.split("=")[0]===t&&(document.cookie=`${t}=; expires=0`)}))}}},479:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.utility03=void 0;const s=i(497);e.utility03=()=>{(new n).init()};class n{constructor(){this.el=document.createElement("div"),this.cookieKey="utility-03",this.cookieMaxAge=2592e3,this.bannerLink="#",this.bannerImg="https://bulma.io/images/placeholders/256x256.png",this.bannerCloseEls=document.getElementsByClassName("js-utility-03-banner-close")}init(){document.getElementById("js-utility-03")&&navigator.cookieEnabled&&this.onLoad()}onLoad(){window.onload=()=>{s.U_COOKIE.get(this.cookieKey)||this.showBanner()}}showBanner(){const t=`\n      <div class="modal is-active">\n        <div class="js-utility-03-banner-close modal-background"></div>\n        <div class="modal-content utility-03__content">\n          <a class="utility-03__banner" href="${this.bannerLink}">\n            <div class="image is-square">\n              <img src="${this.bannerImg}" />\n            </div>\n          </a>\n        </div>\n        <button class="js-utility-03-banner-close modal-close is-large" aria-label="close"></button>\n      </div>\n    `;this.el.insertAdjacentHTML("beforeend",t),document.body.appendChild(this.el),this.onClickBannerClose()}hideBanner(){s.U_COOKIE.set(this.cookieKey,"true"),document.body.removeChild(this.el)}onClickBannerClose(){this.bannerCloseEls.length&&[...this.bannerCloseEls].forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),this.hideBanner()}))}))}}},631:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.utility04=void 0;e.utility04=()=>{new i("js-utility-04").init()};class i{constructor(t){this.el=document.getElementById(t),this.inputEl=document.getElementById("js-utility-04-input"),this.recommendEl=document.getElementById("js-utility-04-recommend"),"https://zakzakst.github.io"===location.origin?this.recommendItemsUrl="/parts/data/utility04.json":this.recommendItemsUrl="/data/utility04.json",this.recommendItems=[],this.recommendMaxNum=3}async init(){this.el&&(this.recommendItems=await this.loadRecommendItems(),this.recommendItems.length&&(this.onInputFrom(),this.onBlurFrom(),this.onClickRecommend()))}loadRecommendItems(){return new Promise((t=>{fetch(this.recommendItemsUrl).then((t=>t.json())).then((e=>{t(e)})).catch((e=>{console.log(e),t([])}))}))}getRecommendItems(t){const e=new Array;for(let i of this.recommendItems)if(-1===i.text.indexOf(t)&&-1===i.hiragana.indexOf(t)||e.push(i),e.length>this.recommendMaxNum-1)break;return e}showRecommend(t){this.recommendEl.innerHTML="",t.forEach((t=>{const e=`<a class="js-utility-04-recommend-item panel-block" data-keyword-text="${t.text}">${t.text}</a>`;this.recommendEl.insertAdjacentHTML("beforeend",e)}))}hideRecommend(){this.recommendEl.innerHTML=""}onInputFrom(){this.inputEl.addEventListener("input",(t=>{t.preventDefault();const e=this.inputEl.value,i=this.getRecommendItems(e);e&&i.length?this.showRecommend(i):this.hideRecommend()}))}onBlurFrom(){this.inputEl.addEventListener("blur",(t=>{setTimeout((()=>{t.preventDefault(),this.hideRecommend()}),400)}))}onClickRecommend(){this.recommendEl.addEventListener("click",(t=>{t.preventDefault();const e=t.target.closest(".js-utility-04-recommend-item").dataset.keywordText;this.inputEl.value=e,this.inputEl.focus()}))}}},346:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.utility05=void 0;e.utility05=()=>{new i("js-utility-05").init()};class i{constructor(t){this.el=document.getElementById(t),this.prefectureEl=document.getElementById("js-utility-05-prefecture"),this.districtEl=document.getElementById("js-utility-05-district"),this.townEl=document.getElementById("js-utility-05-town"),this.prefectureId="",this.districtId="",this.townId="","https://zakzakst.github.io"===location.origin?this.dataUrl="/parts/data/utility05.json":this.dataUrl="/data/utility05.json",console.log(location.origin),this.data=null}async init(){this.el&&(this.data=await this.loadData(),Object.keys(this.data).length&&(this.setPrefecture(),this.onChangePrefecture(),this.onChangeDistrict()))}loadData(){return new Promise((t=>{fetch(this.dataUrl).then((t=>t.json())).then((e=>{t(e)})).catch((e=>{console.log(e),t({})}))}))}setPrefecture(){const t=[{id:"",label:"選択してください"}];for(let e in this.data){const{id:i,label:s}=this.data[e];t.push({id:i,label:s})}this.prefectureEl.innerHTML="";let e="";t.forEach((t=>{e+=`<option value="${t.id}">${t.label}</option>`})),this.prefectureEl.insertAdjacentHTML("beforeend",e),this.prefectureEl.disabled=null}setDistrict(){const t=this.data[this.prefectureId]?.dists||null;if(!Object.keys(t).length)return;const e=[{id:"",label:"選択してください"}];for(let i in t){const{id:s,label:n}=t[i];e.push({id:s,label:n})}this.districtEl.innerHTML="";let i="";e.forEach((t=>{i+=`<option value="${t.id}">${t.label}</option>`})),this.districtEl.insertAdjacentHTML("beforeend",i),this.districtEl.disabled=null}setTown(){const t=this.data[this.prefectureId]?.dists[this.districtId]?.towns||null;if(!Object.keys(t).length)return;const e=[{id:"",label:"選択してください"}];for(let i in t){const{id:s,label:n}=t[i];e.push({id:s,label:n})}this.townEl.innerHTML="";let i="";e.forEach((t=>{i+=`<option value="${t.id}">${t.label}</option>`})),this.townEl.insertAdjacentHTML("beforeend",i),this.townEl.disabled=null}clearDistrict(){this.clearTown(),this.districtEl.innerHTML="",this.districtEl.disabled=!0,this.districtId=""}clearTown(){this.townEl.innerHTML="",this.townEl.disabled=!0,this.townId=""}onChangePrefecture(){this.prefectureEl.addEventListener("change",(()=>{this.prefectureId=this.prefectureEl.value,this.prefectureId?this.setDistrict():this.clearDistrict()}))}onChangeDistrict(){this.districtEl.addEventListener("change",(()=>{this.districtId=this.districtEl.value,this.districtId?this.setTown():this.clearTown()}))}}},800:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.utility06=void 0;e.utility06=()=>{new i("js-utility-06").init()};class i{constructor(t){this.el=document.getElementById(t)}init(){this.el&&console.log("utility 06")}}}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var l=e[s]={exports:{}};return t[s](l,l.exports,i),l.exports}(()=>{i(930).utility01();i(343).utility02();i(479).utility03();i(631).utility04();i(346).utility05();i(800).utility06()})()})();