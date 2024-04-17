/*!
 * PSPDFKit for Web 2024.3.0 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(self.webpackChunkPSPDFKit=self.webpackChunkPSPDFKit||[]).push([[6377],{22425:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var s=n(17375),a=n(96156),o=n(35369),i=n(15359),r=n(34997),c=n(81249),l=n(87463),d=n(71856),u=n(84254),h=n(98492),m=n(11765),p=n(2427),f=n(96723),g=n(20063);class y extends(o.WV({authPayload:null,serverUrl:null,hostedBaseUrl:null,documentId:null,backendPermissions:null,documentURL:null,imageToken:null,instantSettings:null,token:null,features:(0,o.aV)(),signatureFeatureAvailability:g.H.NONE,isFormsEnabled:!0,minSearchQueryLength:1,documentHandle:null,isDocumentHandleOutdated:!1,digitalSignatures:null,defaultGroup:void 0,hasCollaborationPermissions:!1,forceLegacySignaturesFeature:!1})){}var w=n(94809),P=n(87856),_=n(60209),S=n(68944),b=n(98179);const v="The image can not be rendered because of an unknown error.";class F{constructor(e){let{identifier:t,url:n,token:s,payload:a,doNotRequestWebP:o=!1}=e;this.identifier=t,this.url=n,this.token=s,this.payload=a,this.doNotRequestWebP=o}abort(){var e;null===(e=this.httpRequest)||void 0===e||e.abort()}request(){return new Promise(((e,t)=>{const n=new XMLHttpRequest;this.httpRequest=n,n.open(this.payload?"POST":"GET",this.url,!0),n.setRequestHeader("X-PSPDFKit-Image-Token",this.token),n.setRequestHeader("PSPDFKit-Platform","web"),n.setRequestHeader("PSPDFKit-Version",(0,S.oM)()),P.Zy&&!this.doNotRequestWebP&&n.setRequestHeader("Accept","image/webp,*/*"),n.responseType="blob",n.onreadystatechange=(async()=>{if(4!==n.readyState)return;if(n.response&&n.response.type.startsWith("application/json")){const s=new FileReader;return s.onload=n=>{var s;const a=JSON.parse(null===(s=n.target)||void 0===s?void 0:s.result);a.attachments_not_found?e({attachmentsNotFound:a.attachments_not_found}):a.error?"initialization_error"===a.error?e(null):t(new i.p2(`The server could not render the requested image (${a.error})`)):t(new i.p2(v))},s.onerror=()=>t(new i.p2(v)),void s.readAsText(n.response)}if(!(0,w.vu)(n.status))return void t(new i.p2(v));const s=n.response,a=URL.createObjectURL(s),o=new Image;o.onerror=()=>t(new i.p2(v)),o.src=a;const r=o.decode();try{await r}catch(e){if(!b.i7)throw new i.p2(`The image could not be decoded: ${e.message}`);await new Promise((e=>setTimeout(e,200)))}e(new _.Z(o,(()=>URL.revokeObjectURL(a))))}).bind(this),n.send(this.payload)}))}}var R=n(10983),$=n(65160),k=n(33427),O=n(7407),D=n(66701),A=n(78025);var T=n(88265),j=n(91038),U=n(32751),x=n(96650),C=n(87460),E=n(67055),I=n(21853),L=n(43069),N=n(44550),q=n(12705),H=n(74311),K=n(67009),J=n(86528);const M=["color","fillColor","outlineColor"];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}class z extends C.W{constructor(e){var t,n;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;if(super(),t=this,(0,a.Z)(this,"_password",null),(0,a.Z)(this,"type","SERVER"),(0,a.Z)(this,"_requestRenderAnnotation",((e,n,s,a,o,c)=>{const l=`${this._state.documentURL}/render_annotation`,d=`render-annotation-${c?(0,r.SK)():e.id}`,u=JSON.stringify({data:(0,m.Hs)(e),width:a,height:o,detached:c||void 0,formFieldValue:n?(0,m.kr)(n):void 0});let h,p,f=!1,g=[];const y=new Promise(((e,t)=>{h=e,p=t}));return function n(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const c=new FormData;c.append("render",u),r.length>0&&"imageAttachmentId"in e&&e.imageAttachmentId&&s&&c.append(e.imageAttachmentId,s);const m=new F({identifier:d,url:l,token:t._state.imageToken,payload:c,doNotRequestWebP:a>R.pt||o>R.pt}),y=t._requestQueue.enqueue(m,!1);y.promise.then((e=>{f||(null!=e&&e.attachmentsNotFound?n(e.attachmentsNotFound):null!=e&&e.attachmentsNotFound?p(new i.p2("Attachment could not be found.")):h(e))})).catch((e=>{f||p(e)})),g.push(y)}(),{promise:y,cancel:()=>{f=!0,g.forEach((e=>{e.cancel()}))}}})),(0,a.Z)(this,"_requestRenderAnnotations",((e,t,n,s,a)=>{const o=`${this._state.documentURL}/render_annotations`,i=JSON.stringify({annotations:t.map(((t,a)=>({pageIndex:e,pdfObjectId:t,width:n[a],height:s[a]}))),formFieldValues:a});let r,c,l=!1;const d=new Promise(((e,t)=>{r=e,c=t}));return this._fetch(o,{method:"post",body:i,credentials:"include",headers:{"X-PSPDFKit-Image-Token":this._state.imageToken,"Content-Type":"application/json",Accept:"multipart/form-data"}}).then((e=>e.formData())).then((e=>{l||r(Array.from(e.values()))})).catch((e=>{l||c(e)})),{promise:d,cancel:()=>{l=!0}}})),(0,a.Z)(this,"handleDocumentHandleConflict",(()=>{this._state=this._state.set("isDocumentHandleOutdated",!0),this.cancelRequests(),this._destroyProvider()})),"object"!=typeof e.authPayload)throw new i.p2("authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`");const o=null===(n=e.authPayload)||void 0===n?void 0:n.accessToken;let c=null,l=null,d=null;if(o)d=e.hostedBaseUrl||"https://api.pspdfkit.com/",(0,w.sf)(d),(0,p.eU)(o);else{if(c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;const n=e.serverUrl||(0,S.SV)(t.document);if("/"!==n.substr(-1))throw new i.p2("`serverUrl` must have a slash at the end (e.g. `https://pspdfkit.example.com/`).");if(!e.serverUrl){if(n===`${t.location.protocol}//${t.location.host}/`)throw new i.p2('PSPDFKit automatically infers the URL of PSPDFKit Document Engine from the current `<script>` tag.\nIn the current case, this URL is set to the same as the current browser\'s location.\nThis can happen when you bundle pspdfkit.js with your custom JavaScript for example.\n\nTo make sure everything works as expected, please set the `serverUrl` to the URL of PSPDFKit Document Engine:\n\nPSPDFKit.load({\n  serverUrl: "https://pspdfkit-server.example.com/",\n  ...,\n});')}return n}(e,s),"string"!=typeof e.documentId)throw new i.p2("`documentId` must be of type string.");if(l=`${c}i/d/${e.documentId}`,"object"!=typeof e.authPayload||!("jwt"in e.authPayload)||"string"!=typeof e.authPayload.jwt)throw new i.p2("authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`");(0,p.yK)(e.authPayload.jwt)}!function(e){let t="";if("boolean"!=typeof e&&((0,i.PO)(e)?(e.hasOwnProperty("clientsPresenceEnabled")&&"boolean"!=typeof e.clientsPresenceEnabled&&(t+="`clientsPresenceEnabled` in instance settings is not valid. Must be `true` or `false`.\n"),e.hasOwnProperty("listenToServerChangesEnabled")&&"boolean"!=typeof e.listenToServerChangesEnabled&&(t+="`listenToServerChangesEnabled` in instance settings is not valid. Must be `true` or `false`.\n")):t="`instant` flag must either be set to `true` or `false`\n",t))throw new i.p2(`${t}\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/`)}(e.instant);let u=null;if(e.instant)if((0,i.PO)(e.instant)){const t=e.instant;u={clientsPresenceEnabled:!1!==t.clientsPresenceEnabled,listenToServerChangesEnabled:!1!==t.listenToServerChangesEnabled}}else u=j.q;this._requestQueue=new i.gO(R.Qc);const h=!!e.electronicSignatures&&Boolean(e.electronicSignatures.forceLegacySignaturesFeature);this._state=new y({serverUrl:c,hostedBaseUrl:d,documentId:e.documentId,instantSettings:u,documentURL:l,authPayload:e.authPayload,isFormsEnabled:!e.disableForms,forceLegacySignaturesFeature:h}),e.trustedCAsCallback&&(0,i.ZK)("PSPDFKit.Configuration#trustedCAsCallback is only used on Standalone deployments. On a Server-Backed deployment, please follow the instructions at https://pspdfkit.com/guides/web")}isUsingInstantProvider(){return null!=this._state.instantSettings}hasClientsPresence(){const e=this._state.instantSettings;return null!=e&&!1!==e.clientsPresenceEnabled}async load(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await this.tryAuthenticateHostedViewer();const{imageToken:t,token:n,permissions:s,features:a,signatureFeatureAvailability:r,hasPassword:d,minSearchQueryLength:u,layerHandle:h,allowedTileScales:p,digitalSignatures:f,defaultGroup:y,collaborationPermissions:w,creatorName:P,serverVersion:_,documentEngineVersion:b}=await async function(e,t,n){const s=await fetch(`${e}/auth`,{method:"POST",headers:{"Content-Type":"application/json","PSPDFKit-Platform":"web","PSPDFKit-Version":(0,S.oM)()},body:JSON.stringify({jwt:t.jwt,origin:window.location.href,password:n}),credentials:"include"});return s.ok?s.json():s.text().then((e=>{throw"INVALID_PASSWORD"===e?new i.p2(e):new i.p2(`An error occurred while connecting to PSPDFKit Document Engine: ${e||s.statusText}`)}))}(`${this._state.serverUrl}i/d/${this._state.documentId}`,this._state.authPayload,e.password);this._password=e.password;const v=(0,c.valid)((0,c.coerce)(_)),F=(0,c.valid)((0,c.coerce)(b));if(_&&(0,c.lt)(v||"","2023.5.0"))throw new i.p2(`Server version ${_} does not meet minimum required version 2023.5.0`);if(b&&(0,c.lt)(F||"","1.0.0"))throw new i.p2(`Document Engine version ${b} does not meet minimum required version 1.0.0`);if(this._state.instantSettings&&!a.includes(N.q.INSTANT))throw new i.p2("Instant feature is not enabled on this server. Please set `instant` to `false`.\n\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/");const R=r===g.H.ELECTRONIC_SIGNATURES&&(0,q.Vz)(a)&&this._state.forceLegacySignaturesFeature?g.H.LEGACY_SIGNATURES:r;if(this._state=this._state.withMutations((e=>e.set("imageToken",t).set("token",n).set("features",(0,o.aV)(a)).set("signatureFeatureAvailability",R).set("backendPermissions",new A.Z({readOnly:-1===s.indexOf("write"),downloadingAllowed:s.indexOf("download")>=0})).set("documentURL",`${this._state.serverUrl}i/d/${this._state.documentId}/h/${h}`).set("documentHandle",h).set("isDocumentHandleOutdated",!1).set("digitalSignatures",(0,m.rS)(f)))),this.corePDFBridge=new J.V(l.f.createServerContext({url:this._state.serverUrl,token:this._state.token,imageToken:this._state.imageToken,documentId:this._state.documentId,layerHandle:h,headers:{"PSPDFKit-Platform":"web","PSPDFKit-Version":(0,S.oM)()}})),w&&!this._state.instantSettings)throw new i.p2("Collaboration Permissions is not supported when `instant` is disabled. Please make sure `configuration#instant` is set to `true`.");return this._state=this._state.withMutations((e=>{e.defaultGroup=y,e.hasCollaborationPermissions=Boolean(w)})),this.provider&&this.provider.destroy(),this.provider=await this._initProvider(),this._state.instantSettings&&this.provider.setDocumentHandleConflictCallback(this.handleDocumentHandleConflict),{features:this._state.features,signatureFeatureAvailability:this._state.signatureFeatureAvailability,hasPassword:d,minSearchQueryLength:u,allowedTileScales:p,creatorName:P,defaultGroup:y}}async tryAuthenticateHostedViewer(){if("accessToken"in this._state.authPayload){const{hostedBaseUrl:e}=this._state,t=this._state.authPayload.accessToken,{serverUrl:n,serverId:s,jwt:a}=await async function(e,t){const n=await fetch(`${e}i/documents/auth`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","PSPDFKit-Platform":"web","PSPDFKit-Version":"cloud-protocol=1, server-protocol=5, client=2024.3.0, client-git=69afe55ebe"},body:JSON.stringify({accessToken:t})});if(n.ok)return n.json();throw new Error(`An error occurred while connecting to PSPDFKit API: ${await n.text()}`)}(e,t);this._state=this._state.withMutations((e=>{e.set("serverUrl",n).set("documentId",s).set("documentURL",`${n}i/d/${s}`).set("authPayload",{jwt:a})}))}}async _initProvider(){if(this._state.instantSettings){const e=`${this._state.serverUrl}i/d/${this._state.documentId}/h/${this._state.documentHandle}`,{InstantProvider:t}=await n.e(2333).then(n.bind(n,36344));return new t(`${this._state.serverUrl}i/d/${this._state.documentId}`,e,{auth_token:this._state.token},this._state.instantSettings)}{const e=this._state.isFormsEnabled&&this._state.features.includes(N.q.FORMS),{RESTProvider:t}=await n.e(4099).then(n.bind(n,87629));return new t(this._state.documentURL,{token:this._state.token},{isFormsEnabled:e})}}destroy(){this._destroyProvider(),this._requestQueue&&this._requestQueue.destroy()}documentInfo(){return this._fetch(`${this._state.documentURL}/document.json`).then((e=>e.json())).then((e=>e.data))}getFormJSON(){return this._fetch(`${this._state.documentURL}/form.json`).then((e=>403===e.status?{v:1,type:"pspdfkit/form",annotations:[],fields:[]}:e.json().then((e=>e.data))))}async evalFormValuesActions(){throw new Error("not implemented")}async evalScript(){throw new Error("not implemented")}async setFormJSONUpdateBatchMode(){throw new Error("not implemented")}compareDocuments(){throw new Error("not implemented")}updateButtonIcon(){throw new Error("not implemented")}permissions(){return Promise.resolve(this._state.backendPermissions)}getDefaultGroup(){return this._state.defaultGroup}isCollaborationPermissionsEnabled(){return this._state.hasCollaborationPermissions}textForPageIndex(e){const t=`${this._state.documentURL}/page-${e}-text`,n=new(this._getJSONRequestHandler())(t,this._state.token),s=this._requestQueue.enqueue(n,!0);return{promise:s.promise.then((t=>(0,$.TH)(t,e))),cancel:()=>{s.cancel()}}}async getSuggestedLineHeightFactor(){return 1}getAvailableFontFaces(){throw new i.p2("Custom fonts need to be mounted on the server in Server-Backed deployments.")}getContentTreeForPageIndex(e){const t=`${this._state.documentURL}/page-${e}-text-content`,n=new(this._getJSONRequestHandler())(t,this._state.token),s=this._requestQueue.enqueue(n,!0);return{promise:s.promise.then((t=>{let n=[],s=0,a=0;return n=t.reduce(((t,n)=>{let{nodes:o}=n;const i=(0,$.uv)(o,e,t.length,s,a);return s+=i.reduce(((e,t)=>{let{textLines:n}=t;return e+n.size}),0),a+=i.reduce(((e,t)=>{let{contentElements:n}=t;return e+n.size}),0),t.concat(i)}),[]),(0,o.aV)(n)})),cancel:()=>{s.cancel()}}}getTextFromRects(e,t){const n=encodeURIComponent(JSON.stringify(t.map(h.u).toArray()));return this._fetch(`${this._state.documentURL}/page-${e}-highlighted?rects=${n}`).then((e=>e.json())).then((e=>e.text))}_getJSONRequestHandler(){return f.Z}renderAnnotation(e,t,n,s,a){return this._requestRenderAnnotation(e,t,n,s,a)}async renderPageAnnotations(e,t,n){if(!P.Rh){const t=Promise.resolve();return this.pageAPStreamsPromises=this.pageAPStreamsPromises.set(e,t),t}const s=this.provider,a=t.some((e=>e instanceof D.Z));a&&await s._setReadStateCallbacksPromise;const o=[],i=t.filter((e=>{const t=a?s._readStateCallbacks.getAnnotationWithFormField(e.id):null,n=null==t?void 0:t.formField,i=(0,k._R)(e,n);if(i&&n&&"number"==typeof e.pdfObjectId){o.find((e=>e.name===n.name))||o.push((0,m.kr)((0,L.CH)(n)))}return i&&"number"==typeof e.pdfObjectId}));if(0===i.size&&0===o.length)return Promise.resolve();const r=new Promise(((t,s)=>{const{promise:a,cancel:r}=this._requestRenderAnnotations(e,i.map((e=>e.pdfObjectId)).toArray(),i.map((e=>Math.floor(e.boundingBox.width*n))).toArray(),i.map((e=>Math.floor(e.boundingBox.height*n))).toArray(),o);a.then((e=>{const n=e.map((e=>e&&(0,I.R4)(e)));n.forEach((async(e,t)=>{const n=await e,s=i.get(t);if(s){const e=this.annotationAPStreamPromises.get(s.id);e&&(this.annotationAPStreamPromises=this.annotationAPStreamPromises.delete(s.id),e(n)),n&&this.cacheAPStream(n,s)}})),Promise.all(n).then((()=>t()))})).catch((e=>{r(),s(e)}))}));return this.pageAPStreamsPromises=this.pageAPStreamsPromises.set(e,r),r}renderDetachedAnnotation(e,t,n,s){return this._requestRenderAnnotation(e,null,t,n,s,!0)}async getAttachment(e){try{const t=await this._fetch(`${this._state.documentURL}/attachments/${e}`);switch(t.status){case 404:throw new i.p2("Attachment not Found.");case 200:return await t.blob();default:throw new i.p2("Bad Request.")}}catch(e){throw new i.p2(`Could not fetch attachment from PSPDFKit Document Engine. ${e}`)}}async search(e,t,n,s){let a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:x.S.TEXT;const i=`q=${o===x.S.PRESET?e.replace(/_/g,"-"):encodeURIComponent(e)}&start=${t}&limit=${n}&type=${o}&include_annotations=${a.toString()}&case_sensitive=${s.toString()}`,r=`${this._state.documentURL}/search?${i}`,c=await new f.Z(r,this._state.token).request();return(0,u.E)(c.data)}async getMeasurementSnappingPoints(e){}async searchAndRedact(e,t){const{searchType:n,annotationPreset:a,searchInAnnotations:i,caseSensitive:r}=t,{color:c,fillColor:l,outlineColor:d}=a,u=(0,s.Z)(a,M),h=await this._fetch(`${this._state.documentURL}/redactions`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({strategy:n,strategyOptions:{[n]:n===x.S.PRESET?e.replace(/_/g,"-"):e,includeAnnotations:i,caseSensitive:r},content:B(B({},u),{},{color:c&&c.toHex(),fillColor:l&&l.toHex(),outlineColor:d&&d.toHex()})})}),{data:m}=await h.json();return(0,o.aV)(m&&m.annotations?m.annotations.map((e=>U.Z.fromJSON(e.id,e.content))):[])}exportPDF(){let{flatten:e=!1,includeComments:t=!0,excludeAnnotations:n=!1,outputFormat:s=!1,optimize:a=!1,flattenElectronicSignatures:o=e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&!1===o)throw new i.p2("Cannot set `flattenElectronicSignatures` to `false` when `flatten` is set to `true`.");const r=`${this._state.documentURL}/pdf?token=${this._state.token}${e?`&flatten=${String(e)}`:""}&comments=${String(t)}&render_ap_streams=${String(!e)}&remove_annotations=${String(n)}${e?"":`&keep_signatures=${!o}`}`;if(a){const e={documentFormat:"pdf",grayscaleText:!1,grayscaleGraphics:!1,grayscaleFormFields:!1,grayscaleAnnotations:!1,grayscaleImages:!1,disableImages:!1,mrcCompression:!1,imageOptimizationQuality:2,linearize:!1};let t;if("boolean"!=typeof a){t=B(B({},e),a)}else t=e;const{documentFormat:n,grayscaleText:s,grayscaleGraphics:o,grayscaleFormFields:i,grayscaleAnnotations:c,grayscaleImages:l,disableImages:d,mrcCompression:u,imageOptimizationQuality:h,linearize:m}=t;return fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({parts:[{document:{id:"#self"}}],output:{type:n,grayscaleText:s,grayscaleGraphics:o,grayscaleFormFields:i,grayscaleAnnotations:c,grayscaleImages:l,disableImages:d,mrcCompression:u,imageOptimizationQuality:h,linearize:m}}),credentials:"include"}).then((e=>e.arrayBuffer()))}if(s){const e={conformance:H.w.PDFA_2B,vectorization:!0,rasterization:!0};let t;if("boolean"!=typeof s){t=B(B({},e),s)}else t=e;const{conformance:n,vectorization:a,rasterization:o}=t;return fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({parts:[{document:{id:"#self"}}],output:{type:"pdfa",conformance:n,vectorization:a,rasterization:o}}),credentials:"include"}).then((e=>e.arrayBuffer()))}return fetch(r,{method:"GET",credentials:"include"}).then((e=>e.arrayBuffer()))}exportOffice(){throw new Error("this feature is not available in DE")}exportXFDF(){return this._fetch(`${this._state.documentURL}/document.xfdf`).then((e=>e.text()))}exportInstantJSON(e){return this._fetch(`${this._state.documentURL}/instant.json${"number"==typeof e?`?version=${e}`:""}`).then((e=>e.json()))}getPDFURL(){let{includeComments:e=!0,excludeAnnotations:t=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{promise:Promise.resolve(`${this._state.documentURL}/pdf?token=${this._state.token}&flatten=true&comments=${String(e)}&remove_annotations=${String(t)}`),revoke:()=>{}}}generatePDFObjectURL(){let e,{includeComments:t=!0,excludeAnnotations:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=!1;return{promise:new Promise((a=>{this.exportPDF({flatten:!0,includeComments:t,excludeAnnotations:n}).then((t=>{if(s)return;const n=new Blob([t],{type:"application/pdf"});e=window.URL.createObjectURL(n),a(e)}))})),revoke:()=>{e&&window.URL.revokeObjectURL(e),s=!0}}}async getDocumentOutline(){let e;try{e=(await this._fetch(`${this._state.documentURL}/outline.json`).then((e=>e.json()))).data}catch(t){e={}}const t=Array.isArray(e.outline)?e.outline:[];return(0,o.aV)(t.map(O.i))}async setDocumentOutline(){throw new i.p2("Not implemented in Server backend.")}async getPageGlyphs(){throw new i.p2("Not implemented in Server backend.")}onKeystrokeEvent(){throw new Error("not implemented")}async getMeasurementScales(){let e;try{return e=(await this._fetch(`${this._state.documentURL}/measurement_content_formats`).then((e=>e.json()))).data,e}catch(e){throw new i.p2(`Fetching measurement scales failed: ${e}`)}}async getSecondaryMeasurementUnit(){let e;try{return e=(await this._fetch(`${this._state.documentURL}/secondary_measurement_unit`).then((e=>e.json()))).data,e}catch(e){throw new i.p2(`Fetching secondary measurement unit failed: ${e}`)}}async setSecondaryMeasurementUnit(e){try{const t=JSON.stringify({unitTo:e?e.unitTo:null,precision:e?e.precision:null});await this._fetch(`${this._state.documentURL}/secondary_measurement_unit`,{method:"post",body:t,credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){throw new i.p2(`Setting secondary measurement unit failed: ${e}`)}}async addMeasurementScale(e){try{const t=JSON.stringify((0,d.f)(e));await this._fetch(`${this._state.documentURL}/measurement_content_formats`,{method:"post",body:t,credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){throw new i.p2(`Adding a new measurement scale failed: ${e}`)}}async removeMeasurementScale(e){try{const t=JSON.stringify((0,d.f)(e));await this._fetch(`${this._state.documentURL}/measurement_content_formats/delete`,{method:"post",body:t,credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){throw new i.p2(`Removing scale failed: ${e}`)}}async applyOperationsAndReload(e){try{const t=await G(e);this._destroyProvider(),await this._fetch(`${this._state.documentURL}/apply-operations`,{method:"post",body:t,credentials:"include"})}catch(e){throw new i.p2(`Applying operations failed: ${e}`)}return this.reloadDocument()}async applyRedactionsAndReload(){try{return this._destroyProvider(),await this._fetch(`${this._state.documentURL}/redact`,{method:"post",credentials:"include"}),this.reloadDocument()}catch(e){throw this.provider.load(),new i.p2(`Applying redactions failed: ${e}`)}}async reloadDocument(){try{return await this.load({password:this._password})}catch(e){throw new i.p2(`Reloading the document failed: ${e}`)}}async exportPDFWithOperations(e){try{const t=await G(e);return this._fetch(`${this._state.documentURL}/pdf-with-operations`,{method:"post",body:t,credentials:"include"}).then((e=>e.arrayBuffer()))}catch(e){throw new i.p2(`Exporting PDF with operations failed: ${e}`)}}async setSignaturesLTV(e){throw new Error("not implemented")}async getSignaturesInfo(){return this._refreshSignaturesInfoPromise&&await this._refreshSignaturesInfoPromise,this._state.digitalSignatures}refreshSignaturesInfo(){return this._refreshSignaturesInfoPromise||(this._refreshSignaturesInfoPromise=new Promise(((e,t)=>{this._fetch(`${this._state.documentURL}/signatures`,{method:"get",credentials:"include"}).then((e=>e.json())).then((t=>{let{data:n}=t;this._state=this._state.set("digitalSignatures",(0,m.rS)(n)),this._refreshSignaturesInfoPromise=null,e()})).catch((e=>{this._state=this._state.set("digitalSignatures",null),this._refreshSignaturesInfoPromise=null,t(e)}))}))),this._refreshSignaturesInfoPromise}async signDocumentAndReload(e,t){(0,i.kG)(void 0===t||"object"==typeof t,"Signing service data must be an object if specified.");try{var n;if(void 0!==t&&"object"!=typeof t)throw new i.p2("Signing service data must be an object if specified.");(0,K.tK)(e);const s=e?B(B(B(B(B(B(B(B({},"placeholderSize"in e?{estimatedSize:e.placeholderSize}:null),"flatten"in e?{flatten:e.flatten}:null),null!=e&&e.signatureMetadata?{signatureMetadata:(0,m._D)(e.signatureMetadata)}:null),"position"in e?{position:(0,m.eE)(e.position)}:null),"appearance"in e?{appearance:(0,m.sr)(e.appearance)}:null),"formFieldName"in e?{formFieldName:e.formFieldName}:null),void 0!==(null==e?void 0:e.signingData)&&"signatureContainer"in e.signingData?{signatureContainer:e.signingData.signatureContainer}:null),void 0!==(null==e?void 0:e.signingData)&&"signatureType"in e.signingData?{signatureType:m.YA[e.signingData.signatureType]}:null):null,a=(null==e||null===(n=e.appearance)||void 0===n?void 0:n.watermarkImage)||null,o=B(B({},t?{signingToken:t.signingToken}:null),s),r=new FormData;if(r.append("data",JSON.stringify(o)),a&&r.append("image",a),this._destroyProvider(),await this._fetch(`${this._state.documentURL}/sign`,{method:"post",body:r,credentials:"include"}),await this.reloadDocument(),null!=e&&e.formFieldName)return e.formFieldName}catch(e){throw this.provider.load(),new i.p2(`Adding digital signature failed: ${e.message||e}`)}}async setFontSubstitutions(e){try{const t=`${this._state.documentURL}/font-substitutions`;await this._fetch(t,{method:"put",body:JSON.stringify({fontSubstitutions:e}),credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){throw new i.p2(`Error setting font substitution: ${e.message}`)}}getDocumentHandle(){return this._state.documentHandle}async getEmbeddedFiles(){var e;const t=await this._fetch(`${this._state.documentURL}/embedded-files`,{method:"get",credentials:"include"}),n=await t.json();return(0,o.aV)(null!=n&&null!==(e=n.data)&&void 0!==e&&null!==(e=e.embeddedFiles)&&void 0!==e&&e.length?n.data.embeddedFiles.map((e=>{let{id:t,content:n}=e;return(0,E.i)(t,n)})):[])}cancelRequests(){this._requestQueue.cancelAll()}_destroyProvider(){this.provider&&(this.provider._clients&&this.provider._clients.disconnect(),this.provider.destroy())}async _fetch(e,t){const n=await fetch(e,B(B({},t),{},{headers:B(B({},null==t?void 0:t.headers),{},{"X-PSPDFKit-Token":this._state.token,"PSPDFKit-Platform":"web","PSPDFKit-Version":(0,S.oM)()})}));if(!n.ok){let e=await function(e){return e.clone().json().catch((()=>e.text()))}(n);e="object"==typeof e?e.reason:e;const t=e||`${n.status} ${n.statusText}`;throw new i.p2(t)}return n}syncChanges(){return this.provider.syncChanges()}async clearAPStreamCache(){}async runPDFFormattingScripts(){return[]}async runPDFFormattingScriptsFromWidgets(){return this.runPDFFormattingScripts()}async lazyLoadPages(){}async contentEditorReload(){throw new Error("not implemented")}getOCGs(){throw new Error("not implemented")}getOCGVisibilityState(){throw new Error("not implemented")}setOCGVisibilityState(){throw new Error("not implemented")}}async function G(e){const t={},n=new WeakMap,s=await Promise.all(e.map((async(e,s)=>{if("importDocument"===e.type){const a=e.document;return(0,i.kG)(a instanceof File||a instanceof Blob,"Wrong `importDocument` operation `document` value: it must be a File or a Blob"),(0,T.M)(n,t,a,e,s,"document")}if("applyInstantJson"===e.type){const a=e.instantJson;(0,i.kG)("object"==typeof a&&null!==a,"Wrong `applyInstantJson` operation `instantJson` value: it must be an object");const o=JSON.stringify(a),r=new Blob([o],{type:"application/json"});return(0,T.M)(n,t,r,e,s,"dataFilePath")}if("applyXfdf"===e.type){const a=e.xfdf;(0,i.kG)("string"==typeof a,"Wrong `applyXfdf` operation `xfdf` value: it must be a string");const o=new Blob([a],{type:"application/vnd.adobe.xfdf"});return(0,T.M)(n,t,o,e,s,"dataFilePath")}return e}))),a=new FormData;a.append("operations",JSON.stringify({operations:s}));for(const e in t)a.append(e,t[e]);return a}},91038:(e,t,n)=>{n.d(t,{q:()=>s});const s={clientsPresenceEnabled:!0,listenToServerChangesEnabled:!0}}}]);