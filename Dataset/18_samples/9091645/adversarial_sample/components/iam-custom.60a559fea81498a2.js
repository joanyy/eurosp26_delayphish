(()=>{iam.api.customizing.initialize=function(){console.log("Customization Version: 2.5");class e extends iam.api.types.CustomLayout{isApplicable(){return!0}headerHtml(){return(window.location.href.includes("play.idp.swica.ch")?"<div class='swica-instance-banner-play'>INSTANZ: PLAY</div>":window.location.href.includes("test.idp.swica.ch")?"<div class='swica-instance-banner-test'>INSTANZ: TEST</div>":"")+`<header class="header">
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-nav lng-switch">
        {{#availableLanguages}}
        <li class="nav-item {{#languageActive}}selected{{/languageActive}}">
          <button
            id="switchLanguageTo-{{languageKey}}"
            type="submit"
            class="nav-link iam-language-switcher-link"
            name="culture"
            value="{{languageKey}}"
            data-lang="{{languageKey}}"
          >
            {{languageKey}}
          </button>
        </li>
        {{/availableLanguages}}
      </ul>
      <div class="logo-xs">
        <img src="assets/custom/img/SWICA_Logo_RGB_green.svg" />
      </div>
    </div>
  </nav>
</header>`}footerHtml(){return window.location.href.includes("vermittler")?`<footer>
  <div class="swica-consultant-footer iam-card-body">
    <div class="swica-consultant-footer-content">
      <p>
        <b
          >{{#translate}}custom.footer.consulta_vermittler.text{{/translate}}</b
        >
      </p>
    </div>
  </div>
  <div class="footerInfo">
    <div class="footerInfo-container">
      <a
        class="nav-link pr-0"
        href="{{#translate}}custom.footer.site-notice.url{{/translate}}"
        >{{#translate}}custom.footer.site-notice.label{{/translate}}</a
      >
    </div>
  </div>
</footer>`:`<footer>
  <div class="container">
    <div class="contactCard">
      <div class="cardTitle">
        <b>{{#translate}}custom.footer.customer.claim{{/translate}}</b>
      </div>
      <div class="line service">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M.818 10.721l1.082 1.08a3 3 0 004.242 0l1.591-1.592a1.5 1.5 0 000-2.122L4.64 5a1.5 1.5 0 00-2.263.148c-3.241 4.4-1.277 9.036 2.706 13.02 3.983 3.984 8.62 5.946 13.023 2.705a1.5 1.5 0 00.147-2.263l-3.094-3.094a1.5 1.5 0 00-2.122 0l-1.59 1.591a3 3 0 000 4.243l1.094 1.094M12.753 3.75c.3-.9.663-2.25 2.32-2.25v0a2.179 2.179 0 012.18 2.179v0a1.98 1.98 0 01-.58 1.4L12.753 9h4.5M23.25 7.5h-3.747l3.747-6V9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div>
          <div class="lineTitle">
            <b><a href="tel:0800 80 90 80">0800 80 90 80</a></b>
          </div>
          <div class="lineDescription">
            {{#translate}}custom.footer.customer.customer-service{{/translate}}
          </div>
        </div>
      </div>
      <div class="line faq">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 6.75a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v.256m9.75 7.5h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 14.25a.375.375 0 100 .75.375.375 0 000-.75v0"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div>
          <div class="lineTitle">
            <b>
              <a
                href="{{#translate}}custom.footer.customer.faq-url{{/translate}}"
                >{{#translate}}custom.footer.customer.faq-title{{/translate}}</a
              ></b
            >
          </div>
          <div class="lineDescription">
            {{#translate}}custom.footer.customer.faq-subtitle{{/translate}}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footerInfo">
    <div class="footerInfo-container">
      <a
        class="nav-link pr-0"
        href="{{#translate}}custom.footer.site-notice.url{{/translate}}"
        >{{#translate}}custom.footer.site-notice.label{{/translate}}</a
      >
    </div>
  </div>
</footer>`}}iam.api.customizing.registerLayout(new e);class i extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamAuthPassword"===t}onPageEnter(){this.translate}onLanguageChange(){this.translate}}iam.api.customizing.registerPage(new i);class s extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamAuthPassword"===t&&"consulta_vermittler"===e}onPageEnter(){var e=this.translate;t.addShowHidePassword(),t.addPortalSignInLink(this.renderHtml("<a class='iam-general-link' href='/vermittler/ui/app/auth/flow/portal/password'>{{text}}</a>",{text:e("custom.iamAuthPassword.gotoPortal")}))}onLanguageChange(){var e=this.translate;t.addPortalSignInLink(this.renderHtml("<a class='iam-general-link' href='/vermittler/ui/app/auth/flow/portal/password'>{{text}}</a>",{text:e("custom.iamAuthPassword.gotoPortal")}))}}iam.api.customizing.registerPage(new s);class a extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamAuthPassword"===t&&"consulta_vermittler"!==e&&"portal"!==e}onPageEnter(){var e=this.translate;t.addShowHidePassword(),t.addPortalSignInLink(this.renderHtml("<a class='iam-general-link' href='/auth/ui/app/auth/flow/portal/password'>{{text}}</a>",{text:e("custom.iamAuthPassword.gotoPortal")}))}onLanguageChange(){var e=this.translate;t.addPortalSignInLink(this.renderHtml("<a class='iam-general-link' href='/auth/ui/app/auth/flow/portal/password'>{{text}}</a>",{text:e("custom.iamAuthPassword.gotoPortal")}))}}iam.api.customizing.registerPage(new a);class o extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamAuthPassword"===t&&"portal"===e}onPageEnter(){t.addShowHidePassword()}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p>{{text}}</p>",{text:t("custom.flow.portal.authentication.password.instructions")}),position:this.customBlockPosition.BEFORE_CONTENT}]}}iam.api.customizing.registerPage(new o);class n extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamAuthPasswordChange"===t&&"consulta_vermittler"===e||"iamProtectedSelfServicePasswordChange"===t}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p style='width: 100%'>{{text}}</p>",{text:t("custom.iamAuthPasswordChange.copy")}),position:this.customBlockPosition.BEFORE_CONTENT}]}}iam.api.customizing.registerPage(new n);class r extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamPublicSelfServiceEmailOtp"===t||"iamProtectedSelfServiceEmailVerification"===t}onPageEnter(){var e=this.translate;t.addNoCodeTitle(this.renderHtml("<b>{{text}}</b>",{text:e("custom.noCodeReceived")}))}onLanguageChange(){var e=this.translate;t.addNoCodeTitle(this.renderHtml("<b>{{text}}</b>",{text:e("custom.noCodeReceived")}))}}iam.api.customizing.registerPage(new r);class l extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"customer_validator_userdata"===t&&"swica_selfreg"===e}onPageEnter(){this.translate,t.addPartnerNumberInfoOverlay(this.translate)}onLanguageChange(){t.addPartnerNumberInfoOverlay(this.translate)}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p class='swica-selfreg-stepper'>{{text}}</p>",{text:t("custom.SwicaSelfReg.step1.subtitle")}),position:this.customBlockPosition.BEFORE_CONTAINER}]}}iam.api.customizing.registerPage(new l);class c extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"email_userdata"===t&&"swica_selfreg"===e}onPageEnter(){t.addShowHidePassword()}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p class='swica-selfreg-stepper'>{{text}}</p>",{text:t("custom.SwicaSelfReg.step3.subtitle")}),position:this.customBlockPosition.BEFORE_CONTAINER}]}}iam.api.customizing.registerPage(new c);class d extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamUserSelfRegTermsOfService"===t&&"swica_selfreg"===e}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p class='swica-selfreg-stepper'>{{text}}</p>",{text:t("custom.SwicaSelfReg.step2.subtitle")}),position:this.customBlockPosition.BEFORE_CONTAINER},{html:this.renderHtml('<div class="swica-agb-conditions"><a href="{{linkUrl}}" target="_blank">{{linkTitle}}</a></div><p><b>{{text}}</b></p>',{linkUrl:t("custom.SwicaSelfReg.step2.linkUrl"),linkTitle:t("custom.SwicaSelfReg.step2.linkTitle"),text:t("custom.SwicaSelfReg.step2.acceptConditions")}),position:this.customBlockPosition.AFTER_CONTENT}]}}iam.api.customizing.registerPage(new d);class m extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e,stepId:i}){return"iamOtpVerification"===t&&"swica_selfreg"===e&&"email_verification"===i}onPageEnter(){var e=this.translate;t.addGotoTitle(e("custom.noCodeReceived"))}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p class='swica-selfreg-stepper'>{{text}}</p>",{text:t("custom.SwicaSelfReg.step4.subtitle")}),position:this.customBlockPosition.BEFORE_CONTAINER}]}}iam.api.customizing.registerPage(new m);class u extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"mtan_userdata"===t&&"swica_selfreg"===e}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p class='swica-selfreg-stepper'>{{text}}</p>",{text:t("custom.SwicaSelfReg.step5.subtitle")}),position:this.customBlockPosition.BEFORE_CONTAINER}]}}iam.api.customizing.registerPage(new u);class p extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e,stepId:i}){return"iamOtpVerification"===t&&"swica_selfreg"===e&&"mtan_verification"===i}onPageEnter(){const t=document.querySelector("iam-goto-buttons");document.getElementById("iamCustomBlockAfterContent").appendChild(t);const e=document.getElementById("otpInstructions"),i=e.innerText,s=i.match(/\+\d{11}/g);s&&(e.innerText=i.replace(s[0],s[0].slice(0,3)+" "+s[0].slice(3,5)+" "+s[0].slice(5,8)+" "+s[0].slice(8,10)+" "+s[0].slice(10,12)))}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p class='swica-selfreg-stepper'>{{text}}</p>",{text:t("custom.SwicaSelfReg.step6.subtitle")}),position:this.customBlockPosition.BEFORE_CONTAINER}]}}iam.api.customizing.registerPage(new p);class g extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamRegistrationConfirmation"===t&&"swica_selfreg"===e}customBlocks(){return[{html:this.renderHtml("<div id='swica-human'></div>"),position:this.customBlockPosition.BEFORE_CONTAINER}]}}iam.api.customizing.registerPage(new g);class h extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamProtectedSelfServicePasswordChange"===t&&"password_change"===e}onPageEnter(){t.addShowHidePassword()}}iam.api.customizing.registerPage(new h);class w extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamPublicSelfServicePassword"===t&&e.startsWith("password_reset")}onPageEnter(){t.addShowHidePassword()}}iam.api.customizing.registerPage(new w);class f extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamProtectedFidoCredentialManagement"===t}onPageEnter(){document.getElementById("globalPageDialog-dialog-ok").innerText=this.translate("delete"),t.addFidoInfo(this.translate)}onLanguageChange(){t.addFidoInfo(this.translate)}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p>"+t("protected.tokens.fido.instructions")+"</p>"),position:this.customBlockPosition.BEFORE_CONTENT}]}}iam.api.customizing.registerPage(new f);class P extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e,stepId:i}){return"iamAuthSelection"===t&&"fido_registration_selection"===i}onPageEnter(){t.addFidoInfo(this.translate),t.addFidoRegisterEvents()}onLanguageChange(){t.addFidoInfo(this.translate),t.addFidoRegisterEvents()}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p>"+t("protected.tokens.fido.instructions")+"</p>"),position:this.customBlockPosition.BEFORE_CONTENT},{html:this.renderHtml(`<div class="iam-col-12 iam-button-group">\n              <iam-button class="iam-btn-block-level-sm-down iam-btn-wrapper iam-float-right">\n                <button class="iam-btn iam-btn-block-level-sm-down iam-float-right iam-btn-outline-primary" id="swica-fido-registration">${t("custom.step.fido_registration_selection.authentication.selection.actions.select")}</button>\n              </iam-button>\n              <iam-cancel-button class="iam-btn-cancel">\n                <iam-button class="iam-btn-block-level-sm-down iam-btn-wrapper iam-float-right">\n                  <button class="iam-btn iam-btn-block-level-sm-down iam-float-right iam-btn-outline-primary" type="button" id="swica-skip-fido-registration">${t("custom.step.fido_registration_selection.authentication.pages.actions.cancel")}</button>\n                </iam-button>\n              </iam-cancel-button>\n            </div>`),position:this.customBlockPosition.AFTER_CONTENT}]}}iam.api.customizing.registerPage(new P);class v extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamApplicationPortal"===t&&window.location.href.includes("vermittler")}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p>"+t("custom.tenant.48ef3ce9-bfcd-4a27-8c9e-6b12fbca10ba.protected.application-portal.group.self-services.description")+"</p>"),position:this.customBlockPosition.BEFORE_CONTENT}]}}iam.api.customizing.registerPage(new v);class E extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamProtectedMtanNumberManagement"===t}onPageEnter(){const t=document.getElementById("mtanPhoneNumber[0]"),e=t.innerText;12===e.length&&e.startsWith("+41")&&(t.innerText=e.slice(0,3)+" "+e.slice(3,5)+" "+e.slice(5,8)+" "+e.slice(8,10)+" "+e.slice(10,12))}}iam.api.customizing.registerPage(new E);class b extends iam.api.types.CustomProductPage{isApplicable({pageId:t}){return"iamAuthPasswordOnly"===t}onPageEnter(){const t=document.getElementById("password");t&&t.setAttribute("type","text")}customBlocks(){var t=this.translate;return[{html:this.renderHtml("<p>"+t("authentication.password-only.instructions")+"</p>"),position:this.customBlockPosition.BEFORE_CONTENT},{html:this.renderHtml("<p id='troubleshooting-title'>"+t("authentication.password-only.troubleshooting.title")+"</p><p>"+t("authentication.password-only.troubleshooting.text")+"</p>"),position:this.customBlockPosition.AFTER_CONTENT}]}}iam.api.customizing.registerPage(new b);class C extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamPublicSelfServiceConfirmation"===t&&e.startsWith("password_reset")}customBlocks(){return[{html:this.renderHtml('<div id="swica-confirmation-image"></div>'),position:this.customBlockPosition.BEFORE_CONTENT}]}}iam.api.customizing.registerPage(new C);class k extends iam.api.types.CustomProductPage{isApplicable({pageId:t,flowId:e}){return"iamProtectedSelfServiceMtanVerification"===t&&"mtan_change"===e}onPageEnter(){const t=document.querySelector("iam-goto-buttons");document.getElementById("iamCustomBlockAfterContent").before(t)}}iam.api.customizing.registerPage(new k);class y extends iam.api.types.CustomProductPage{isApplicable({pageId:t}){return"iamAuthOAuth2Consent"===t}onPageEnter(){setTimeout((()=>{document.querySelectorAll('input[type="checkbox"]').forEach((t=>{t.checked||t.click()}))}),50)}customBlocks(){return[{html:this.renderHtml(`${this.translate("authentication.oauth2.consent.content")}\n            <div id="swica-link-to-data-privacy">\n              <a href="${this.translate("authentication.oauth2.consent.linkUrl")}">${this.translate("authentication.oauth2.consent.linkLabel")}</a>\n            </div>`),position:this.customBlockPosition.BEFORE_CONTENT}]}}iam.api.customizing.registerPage(new y)};const t={icons:{show_password:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 5.25096C7.96895 5.18296 3.79995 7.99996 1.17895 10.885C0.609133 11.5176 0.609133 12.4784 1.17895 13.111C3.74295 15.935 7.89995 18.817 11.9999 18.748C16.0999 18.817 20.2579 15.935 22.8239 13.111C23.3938 12.4784 23.3938 11.5176 22.8239 10.885C20.1999 7.99996 16.0309 5.18296 11.9999 5.25096Z" stroke="#818A8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7499 12C15.7494 14.0709 14.0702 15.7493 11.9993 15.749C9.92835 15.7486 8.24977 14.0696 8.24995 11.9986C8.25013 9.92769 9.92901 8.24896 11.9999 8.24896C12.9948 8.2487 13.9489 8.64384 14.6522 9.34737C15.3556 10.0509 15.7505 11.0051 15.7499 12Z" stroke="#818A8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',hide_password:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.78295 21L21.5329 3M8.96395 19.051C9.94676 19.3562 10.9709 19.5077 11.9999 19.5C16.0999 19.569 20.2579 16.687 22.8239 13.863C23.3938 13.2304 23.3938 12.2696 22.8239 11.637C21.8944 10.6172 20.8645 9.69356 19.75 8.88M14.4129 6.282C13.6239 6.08565 12.813 5.99088 11.9999 6C7.96895 5.933 3.79995 8.752 1.17895 11.635C0.609133 12.2676 0.609133 13.2284 1.17895 13.861C1.97587 14.7334 2.84569 15.5363 3.77895 16.261M8.24995 12.75C8.24968 11.7554 8.64469 10.8014 9.34801 10.0981C10.0513 9.39474 11.0053 8.99973 11.9999 9M15.7499 12.749C15.7502 13.7437 15.3552 14.6978 14.652 15.4013C13.9487 16.1048 12.9947 16.5 11.9999 16.5" stroke="#818A8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',show_info:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M10.5 12H10C9.44772 12 9 11.5523 9 11V8.5C9 8.22386 8.77614 8 8.5 8H8M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#818A8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 5.27295C8.81568 5.27295 8.66626 5.42237 8.66626 5.60669C8.66626 5.791 8.81568 5.94042 9 5.94042C9.18431 5.94042 9.33373 5.791 9.33373 5.60669C9.33373 5.42237 9.18431 5.27295 9 5.27295Z" stroke="#818A8F" stroke-linecap="round" stroke-linejoin="round"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 22L22 2M22 22L2 2" stroke="#179F96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'},addShowHidePassword:function(){const t=this.icons.show_password,e=this.icons.hide_password;document.querySelectorAll('input[type="password"]').forEach(((i,s)=>{const a=document.getElementById(`swica-toggle-password-${s}`);a&&a.remove(),i.parentElement.style.position="relative";const o=document.createElement("div");o.id=`swica-toggle-password-${s}`,o.className="swica-toggle-password",o.innerHTML=t,o.addEventListener("click",(()=>{"password"===i.getAttribute("type")?(i.setAttribute("type","text"),o.innerHTML=e):(i.setAttribute("type","password"),o.innerHTML=t)})),i.parentElement.appendChild(o)}))},addPortalSignInLink:function(t){const e=document.getElementById("swica-portal-signin-link");e&&e.remove();const i=document.createElement("iam-text-message");i.id="swica-portal-signin-link",i.innerHTML=t,document.getElementById("publicSelfService").parentElement.append(i)},addGotoTitle:function(t){const e=document.getElementById("swicaGotoTitle");e&&e.remove();const i=document.createElement("p");i.id="swicaGotoTitle";const s=document.createElement("b");s.innerText=t,i.appendChild(s),document.querySelector("iam-goto-button").prepend(i)},addPartnerNumberInfoOverlay:function(e){const i=document.querySelector("body"),s=document.getElementById("swica-partner-number-overlay");s&&s.remove();const a=document.createElement("div");a.innerHTML=`\n    <div>\n      <button class="close-icon swica-tertiary-button">${t.icons.close}</button>\n      <div class="image ${e("language-code")}"></div>\n      <div>\n        <p class="title">${e("registration.data.item-label.partner_number")}</p>\n        <p class="text">${e("custom.registration.partner_number.info_text")}</p>\n      </div>\n    </div>`,a.id="swica-partner-number-overlay",a.style.display="none",a.addEventListener("click",(()=>{a.style.display="none"})),i.appendChild(a);const o=this.icons.show_info,n=document.getElementById("swica-partner-number-info");n&&n.remove();const r=document.getElementById("itemPartnerNumber");if(r){r.parentElement.style.position="relative";const t=document.createElement("div");t.id="swica-partner-number-info",t.innerHTML=o,t.addEventListener("click",(()=>{a.style.display="block"})),r.parentElement.appendChild(t)}},addNoCodeTitle(t){const e=document.querySelector("iam-goto-buttons"),i=document.getElementById("custom-noCodeReceived");i&&i.remove();const s=document.createElement("p");s.id="custom-noCodeReceived",s.innerHTML=t,e.prepend(s)},addFidoInfo:function(t){const e=document.getElementById("swica-fido-info-icon");if(!e)return;const i=document.getElementById("swica-fido-info-content");i&&i.remove();const s=document.createElement("div");s.id="swica-fido-info-content",s.innerHTML="<div class='info-icon'></div><p>"+t("custom.fido-info-text")+"</p>",e.append(s),e.addEventListener("click",(()=>{"open"===e.className?e.className="":e.className="open"}))},validateMail:function(t){const e=document.getElementById("username"),i=document.getElementById("loginButton");e.addEventListener("input",(e=>{/^[\S]+@[\S]+\.[\S]+$/.test(e.target.value)?this.removeError("username"):this.addError("username",t),["username","password"].map((t=>this.hasError(t))).some((t=>t))?i.setAttribute("disabled",!0):i.removeAttribute("disabled")}))},addError:function(t,e){const i=document.getElementById(t),s=document.querySelector(`iam-errors > #${t}ValidationErrors`);s&&s.remove(),i.classList.add("iam-is-invalid"),i.classList.add("ng-invalid");const a=document.createElement("iam-errors");a.classList.add("iam-invalid-feedback"),a.innerHTML=`<div role="alert" id="${t}ValidationErrors"><div class="iam-invalid-feedback" id="error.validation-failed.invalid-value">${e}</div></div>`,i.after(a)},removeError:function(t){const e=document.getElementById(t),i=document.querySelector(`iam-errors > #${t}ValidationErrors`);i&&i.remove(),e.classList.remove("iam-is-invalid"),e.classList.remove("ng-invalid")},hasError:function(t){const e=document.getElementById(t);return!!document.querySelector(`#${t}ValidationErrors`)||e.classList.contains("ng-invalid")||!e.value},addFidoRegisterEvents:function(){const t=document.getElementById("selectButton"),e=document.getElementById("swica-fido-registration"),i=document.getElementById("swica-skip-fido-registration");e.addEventListener("click",(()=>{const e=document.getElementById("FIDO_REGISTRATION");e&&(e.click(),setTimeout((()=>{t.click()}),100))})),i.addEventListener("click",(()=>{const e=document.getElementById("SKIP_FIDO_REGISTRATION");e&&(e.click(),setTimeout((()=>{t.click()}),100))}))}};iam.internal.initializeCustomDefaultLayout=function(){iam.internal.types.DefaultLayout=class extends iam.internal.types.DefaultProductLayout{headerHtml(){return `<header class="header">
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-nav lng-switch">
        {{#availableLanguages}}
        <li class="nav-item {{#languageActive}}selected{{/languageActive}}">
          <button
            id="switchLanguageTo-{{languageKey}}"
            type="submit"
            class="nav-link iam-language-switcher-link"
            name="culture"
            value="{{languageKey}}"
            data-lang="{{languageKey}}"
          >
            {{languageKey}}
          </button>
        </li>
        {{/availableLanguages}}
      </ul>
      <div class="logo-xs">
        <img src="assets/custom/img/SWICA_Logo_RGB_green.svg" />
      </div>
    </div>
  </nav>
</header>`}footerHtml(){return `<footer>
  <div class="container">
    <div class="contactCard">
      <div class="cardTitle">
        <b>{{#translate}}custom.footer.customer.claim{{/translate}}</b>
      </div>
      <div class="line service">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M.818 10.721l1.082 1.08a3 3 0 004.242 0l1.591-1.592a1.5 1.5 0 000-2.122L4.64 5a1.5 1.5 0 00-2.263.148c-3.241 4.4-1.277 9.036 2.706 13.02 3.983 3.984 8.62 5.946 13.023 2.705a1.5 1.5 0 00.147-2.263l-3.094-3.094a1.5 1.5 0 00-2.122 0l-1.59 1.591a3 3 0 000 4.243l1.094 1.094M12.753 3.75c.3-.9.663-2.25 2.32-2.25v0a2.179 2.179 0 012.18 2.179v0a1.98 1.98 0 01-.58 1.4L12.753 9h4.5M23.25 7.5h-3.747l3.747-6V9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div>
          <div class="lineTitle">
            <b><a href="tel:0800 80 90 80">0800 80 90 80</a></b>
          </div>
          <div class="lineDescription">
            {{#translate}}custom.footer.customer.customer-service{{/translate}}
          </div>
        </div>
      </div>
      <div class="line faq">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 6.75a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v.256m9.75 7.5h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 14.25a.375.375 0 100 .75.375.375 0 000-.75v0"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div>
          <div class="lineTitle">
            <b>
              <a
                href="{{#translate}}custom.footer.customer.faq-url{{/translate}}"
                >{{#translate}}custom.footer.customer.faq-title{{/translate}}</a
              ></b
            >
          </div>
          <div class="lineDescription">
            {{#translate}}custom.footer.customer.faq-subtitle{{/translate}}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footerInfo">
    <div class="footerInfo-container">
      <a
        class="nav-link pr-0"
        href="{{#translate}}custom.footer.site-notice.url{{/translate}}"
        >{{#translate}}custom.footer.site-notice.label{{/translate}}</a
      >
    </div>
  </div>
</footer>`}}}})();