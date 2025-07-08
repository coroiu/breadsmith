import{A as ae,B as Rt,C as vn,D as pe,E as _e,F,G as Lt,H as Me,I as Ne,J as B,K as Cn,a as pt,b as Nt,f as me,g as ge,h as be,i as ye,j as hn,k as U,n as ht,o as fn,q as Ve,r as Ae,s as mn,t as Be,u as Ot,v as gn,w as bn,x as yn,y as Pt,z as _n}from"./chunk-3RALROQQ.js";import{c as jt,d as ft,f as mt,g as gt,h as bt}from"./chunk-W4BNGQYG.js";import{$ as Ke,$a as le,Aa as kt,Bb as dt,Da as D,Ea as O,Eb as v,Fa as q,Fb as de,Gb as Se,Ha as C,Hb as ue,Ia as x,Ib as pn,K as Qe,Ka as rn,L as k,M as N,O as Te,Oa as m,Pa as l,Qa as an,R as I,Ra as oe,Sa as he,Ta as E,Ua as lt,Va as ut,W as ce,Wa as h,X as y,Xa as f,Y as _,Ya as V,Z as ne,Za as J,_ as b,_a as ee,a as M,ab as X,b as L,da as z,db as T,ea as on,eb as d,fb as te,ga as ie,gb as Z,h as Jt,ha as Ie,hb as De,ia as $e,ib as H,jb as sn,k as en,kb as j,lb as G,ma as st,mb as At,nb as ln,ob as Bt,p as tn,pb as Q,qb as fe,rb as ct,sa as u,sb as $,tb as re,u as nn,ub as un,vb as cn,wa as Ze,wb as dn,xa as Y,xb as ke}from"./chunk-IOLJBLFH.js";var bi={flourAmount:500,ingredients:[{name:"White flour",percentage:90,type:"flour"},{name:"Fullwheat flour",percentage:10,type:"flour"},{name:"Water",percentage:75,type:"water"},{name:"Salt",percentage:2.2,type:"other"},{name:"Yeast",percentage:2,type:"other"},{name:"Sugar",percentage:2,type:"other"},{name:"Oil",percentage:8,type:"other"}]},yt=class t{recipe=$e(bi);getRecipe(o){return this.recipe}static \u0275fac=function(e){return new(e||t)};static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})};var yi={Flour:"flour",Water:"water",Other:"other"},Gt=Object.values(yi);var En=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(Y(Ze),Y(Ie))};static \u0275dir=q({type:t})}return t})(),_i=(()=>{class t extends En{static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275dir=q({type:t,features:[C]})}return t})(),wt=new Te("");var vi={provide:wt,useExisting:Qe(()=>It),multi:!0};function Ci(){let t=Nt()?Nt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var xi=new Te(""),It=(()=>{class t extends En{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Ci())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(Y(Ze),Y(Ie),Y(xi,8))};static \u0275dir=q({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&T("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[$([vi]),C]})}return t})();var wi=new Te(""),Ii=new Te("");function Fn(t){return t!=null}function Tn(t){return rn(t)?en(t):t}function $n(t){let o={};return t.forEach(e=>{o=e!=null?M(M({},o),e):o}),Object.keys(o).length===0?null:o}function kn(t,o){return o.map(e=>e(t))}function Di(t){return!t.validate}function An(t){return t.map(o=>Di(o)?o:e=>o.validate(e))}function Si(t){if(!t)return null;let o=t.filter(Fn);return o.length==0?null:function(e){return $n(kn(e,o))}}function Bn(t){return t!=null?Si(An(t)):null}function Vi(t){if(!t)return null;let o=t.filter(Fn);return o.length==0?null:function(e){let n=kn(e,o).map(Tn);return nn(n).pipe(tn($n))}}function Nn(t){return t!=null?Vi(An(t)):null}function xn(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function Mi(t){return t._rawValidators}function Ei(t){return t._rawAsyncValidators}function zt(t){return t?Array.isArray(t)?t:[t]:[]}function vt(t,o){return Array.isArray(t)?t.includes(o):t===o}function wn(t,o){let e=zt(o);return zt(t).forEach(i=>{vt(e,i)||e.push(i)}),e}function In(t,o){return zt(o).filter(e=>!vt(t,e))}var Ct=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=Bn(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Nn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},Ht=class extends Ct{name;get formDirective(){return null}get path(){return null}},Ee=class extends Ct{_parent=null;name=null;valueAccessor=null},Ut=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Fi={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ra=L(M({},Fi),{"[class.ng-submitted]":"isSubmitted"}),Dt=(()=>{class t extends Ut{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(Y(Ee,2))};static \u0275dir=q({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&oe("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[C]})}return t})();var Ye="VALID",_t="INVALID",Oe="PENDING",Xe="DISABLED",Re=class{},xt=class extends Re{value;source;constructor(o,e){super(),this.value=o,this.source=e}},Je=class extends Re{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},et=class extends Re{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},Pe=class extends Re{status;source;constructor(o,e){super(),this.status=o,this.source=e}};function Ti(t){return(St(t)?t.validators:t)||null}function $i(t){return Array.isArray(t)?Bn(t):t||null}function ki(t,o){return(St(o)?o.asyncValidators:t)||null}function Ai(t){return Array.isArray(t)?Nn(t):t||null}function St(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Wt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Se(this.statusReactive)}set status(o){Se(()=>this.statusReactive.set(o))}_status=ue(()=>this.statusReactive());statusReactive=$e(void 0);get valid(){return this.status===Ye}get invalid(){return this.status===_t}get pending(){return this.status==Oe}get disabled(){return this.status===Xe}get enabled(){return this.status!==Xe}errors;get pristine(){return Se(this.pristineReactive)}set pristine(o){Se(()=>this.pristineReactive.set(o))}_pristine=ue(()=>this.pristineReactive());pristineReactive=$e(!0);get dirty(){return!this.pristine}get touched(){return Se(this.touchedReactive)}set touched(o){Se(()=>this.touchedReactive.set(o))}_touched=ue(()=>this.touchedReactive());touchedReactive=$e(!1);get untouched(){return!this.touched}_events=new Jt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(wn(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(wn(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(In(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(In(o,this._rawAsyncValidators))}hasValidator(o){return vt(this._rawValidators,o)}hasAsyncValidator(o){return vt(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(L(M({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new et(!0,n))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,n),e&&o.emitEvent!==!1&&this._events.next(new et(!1,n))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(L(M({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new Je(!1,n))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,n),e&&o.emitEvent!==!1&&this._events.next(new Je(!0,n))}markAsPending(o={}){this.status=Oe;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Pe(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(L(M({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Xe,this.errors=null,this._forEachChild(i=>{i.disable(L(M({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new xt(this.value,n)),this._events.next(new Pe(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(L(M({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Ye,this._forEachChild(n=>{n.enable(L(M({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(L(M({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,e){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ye||this.status===Oe)&&this._runAsyncValidator(n,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new xt(this.value,e)),this._events.next(new Pe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(L(M({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Xe:Ye}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=Oe,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=Tn(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(o,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new Pe(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,n)}_initObservables(){this.valueChanges=new z,this.statusChanges=new z}_calculateStatus(){return this._allControlsDisabled()?Xe:this.errors?_t:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Oe)?Oe:this._anyControlsHaveStatus(_t)?_t:Ye}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,e),i&&this._events.next(new Je(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new et(this.touched,e)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){St(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let e=this._parent&&this._parent.dirty;return!o&&!!e&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=$i(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Ai(this._rawAsyncValidators)}};var On=new Te("",{providedIn:"root",factory:()=>qt}),qt="always";function Bi(t,o){return[...o.path,t]}function Ni(t,o,e=qt){Pi(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),Ri(t,o),ji(t,o),Li(t,o),Oi(t,o)}function Dn(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Oi(t,o){if(o.valueAccessor.setDisabledState){let e=n=>{o.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Pi(t,o){let e=Mi(t);o.validator!==null?t.setValidators(xn(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ei(t);o.asyncValidator!==null?t.setAsyncValidators(xn(n,o.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Dn(o._rawValidators,i),Dn(o._rawAsyncValidators,i)}function Ri(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Pn(t,o)})}function Li(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Pn(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function Pn(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ji(t,o){let e=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Gi(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function zi(t){return Object.getPrototypeOf(t.constructor)===_i}function Hi(t,o){if(!o)return null;Array.isArray(o);let e,n,i;return o.forEach(r=>{r.constructor===It?e=r:zi(r)?n=r:i=r}),i||n||e||null}function Sn(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function Vn(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ui=class extends Wt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,n){super(Ti(e),ki(n,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),St(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Vn(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Sn(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Sn(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Vn(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Wi={provide:Ee,useExisting:Qe(()=>Fe)},Mn=Promise.resolve(),Fe=(()=>{class t extends Ee{_changeDetectorRef;callSetDisabledState;control=new Ui;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new z;constructor(e,n,i,r,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=Hi(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Gi(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ni(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Mn.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,i=n!==0&&v(n);Mn.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Bi(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(Y(Ht,9),Y(wi,10),Y(Ii,10),Y(wt,10),Y(dt,8),Y(On,8))};static \u0275dir=q({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[$([Wi]),C,ce]})}return t})();var qi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({})}return t})();var Le=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:On,useValue:e.callSetDisabledState??qt}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[qi]})}return t})();var Rn=(()=>{class t extends B{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),A=(()=>{class t{document=I(pt);platformId=I(st);el=I(Ie);injector=I(Ke);cd=I(dt);renderer=I(Ze);config=I(Cn);baseComponentStyle=I(Rn);baseStyle=I(B);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=pe("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return vn(e,n,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!fn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Lt.off("theme:change",e))}_loadStyles(){let e=()=>{Ne.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Ne.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Ne.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ne.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Me.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,M({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,M({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,M({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(M({name:"global-style"},this.styleOptions),r),Me.setLoadedStyleName("common")}if(!Me.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,M({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(M({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Me.setLoadedStyleName(this.componentStyle?.name)}if(!Me.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,M({name:"layer-order",first:!0},this.styleOptions)),Me.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,M({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Ne.clearLoadedStyleNames(),Lt.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:M({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=q({type:t,inputs:{dt:"dt"},features:[$([Rn,B]),ce]})}return t})();var Ln=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var a=0;a<i.length;a++){if(i[a]==e)return r;i[a].attributes&&i[a].attributes[n]&&i[a].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=at=>{if(at)return getComputedStyle(at).getPropertyValue("position")==="relative"?at:r(at.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=n.offsetHeight,c=n.getBoundingClientRect(),g=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),w=this.getViewport(),S=r(e)?.getBoundingClientRect()||{top:-1*g,left:-1*p},W,K;c.top+s+a.height>w.height?(W=c.top-S.top-a.height,e.style.transformOrigin="bottom",c.top+W<0&&(W=-1*c.top)):(W=s+c.top-S.top,e.style.transformOrigin="top");let we=c.left+a.width-w.width,rt=c.left-S.left;a.width>w.width?K=(c.left-S.left)*-1:we>0?K=rt-we:K=c.left-S.left,e.style.top=W+"px",e.style.left=K+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=r.height,s=r.width,c=n.offsetHeight,g=n.offsetWidth,p=n.getBoundingClientRect(),w=this.getWindowScrollTop(),R=this.getWindowScrollLeft(),S=this.getViewport(),W,K;p.top+c+a>S.height?(W=p.top+w-a,e.style.transformOrigin="bottom",W<0&&(W=w)):(W=c+p.top+w,e.style.transformOrigin="top"),p.left+s>S.width?K=Math.max(0,p.left+R+g-s):K=p.left+R,e.style.top=W+"px",e.style.left=K+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,a=s=>{let c=window.getComputedStyle(s,null);return r.test(c.getPropertyValue("overflow"))||r.test(c.getPropertyValue("overflowX"))||r.test(c.getPropertyValue("overflowY"))};for(let s of i){let c=s.nodeType===1&&s.dataset.scrollselectors;if(c){let g=c.split(",");for(let p of g){let w=this.findSingle(s,p);w&&a(w)&&n.push(w)}}s.nodeType!==9&&a(s)&&n.push(s)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,c=e.getBoundingClientRect(),p=n.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-r-s,w=e.scrollTop,R=e.clientHeight,S=this.getOuterHeight(n);p<0?e.scrollTop=w+p:p+S>R&&(e.scrollTop=w+p-R+S)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,a=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(e,n){var i=1,r=50,a=n,s=r/a;let c=setInterval(()=>{i=i-s,i<=0&&(i=0,clearInterval(c)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],a=e.innerWidth||i.clientWidth||r.clientWidth,s=e.innerHeight||i.clientHeight||r.clientHeight;return{width:a,height:s}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let a of i){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&r.push(a)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let a=i.indexOf(i[0].ownerDocument.activeElement);n?a==-1||a===0?r=i.length-1:r=a-1:a!=-1&&a!==i.length-1&&(r=a+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,a)=>{let s=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[a].flat().reduce((c,g)=>{if(g!=null){let p=typeof g;if(p==="string"||p==="number")c.push(g);else if(p==="object"){let w=Array.isArray(g)?i(r,g):Object.entries(g).map(([R,S])=>r==="style"&&(S||S===0)?`${R.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${S}`:S?R:void 0);c=w.length?c.concat(w.filter(R=>!!R)):c}}return c},s)};Object.entries(n).forEach(([r,a])=>{if(a!=null){let s=r.match(/^on(.+)/);s?e.addEventListener(s[1].toLowerCase(),a):r==="pBind"?this.setAttributes(e,a):(a=r==="class"?[...new Set(i("class",a))].join(" ").trim():r==="style"?i("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=a),e.setAttribute(r,a))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var je=(()=>{class t extends A{autofocus=!1;_autofocus=!1;focused=!1;platformId=I(st);document=I(pt);host=I(Ie);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ht(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Ln.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275dir=q({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",v],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[C]})}return t})(),jn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({})}return t})();var Ki=["*"],Zi=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Yi=(()=>{class t extends B{name="baseicon";inlineStyles=Zi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var se=(()=>{class t extends A{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=ae(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",v],styleClass:"styleClass"},features:[$([Yi]),C],ngContentSelectors:Ki,decls:1,vars:0,template:function(n,i){n&1&&(te(),Z(0))},encapsulation:2,changeDetection:0})}return t})();var Gn=(()=>{class t extends se{static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["AngleDownIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),h(0,"svg",0),V(1,"path",1),f()),n&2&&(E(i.getClassNames()),m("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var zn=(()=>{class t extends se{static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["AngleUpIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),h(0,"svg",0),V(1,"path",1),f()),n&2&&(E(i.getClassNames()),m("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Hn=(()=>{class t extends se{static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["MinusIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),h(0,"svg",0),V(1,"path",1),f()),n&2&&(E(i.getClassNames()),m("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Un=(()=>{class t extends se{pathId;ngOnInit(){this.pathId="url(#"+pe()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["PlusIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ne(),h(0,"svg",0)(1,"g"),V(2,"path",1),f(),h(3,"defs")(4,"clipPath",2),V(5,"rect",3),f()()()),n&2&&(E(i.getClassNames()),m("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),u(),m("clip-path",i.pathId),u(3),l("id",i.pathId))},encapsulation:2})}return t})();var Wn=(()=>{class t extends se{pathId;ngOnInit(){this.pathId="url(#"+pe()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["SpinnerIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ne(),h(0,"svg",0)(1,"g"),V(2,"path",1),f(),h(3,"defs")(4,"clipPath",2),V(5,"rect",3),f()()()),n&2&&(E(i.getClassNames()),m("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),u(),m("clip-path",i.pathId),u(3),l("id",i.pathId))},encapsulation:2})}return t})();var Vt=(()=>{class t extends se{static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["TimesIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),h(0,"svg",0),V(1,"path",1),f()),n&2&&(E(i.getClassNames()),m("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var Xi=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Ji={root:({instance:t,props:o})=>["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},qn=(()=>{class t extends B{name="inputtext";theme=Xi;classes=Ji;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Mt=(()=>{class t extends A{ngModel;variant;fluid;pSize;filled;_componentStyle=I(qn);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ae(this.fluid)?!!n:this.fluid}constructor(e){super(),this.ngModel=e}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||t)(Y(Fe,8))};static \u0275dir=q({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,i){if(n&1&&T("input",function(a){return i.onInput(a)}),n&2){let r;oe("p-filled",i.filled)("p-variant-filled",((r=i.variant)!==null&&r!==void 0?r:i.config.inputStyle()||i.config.inputVariant())==="filled")("p-inputtext-fluid",i.hasFluid)("p-inputtext-sm",i.pSize==="small")("p-inputfield-sm",i.pSize==="small")("p-inputtext-lg",i.pSize==="large")("p-inputfield-lg",i.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",v],pSize:"pSize"},features:[$([qn]),C]})}return t})(),Qn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({})}return t})();var to=["clearicon"],no=["incrementbuttonicon"],io=["decrementbuttonicon"],oo=["input"];function ro(t,o){if(t&1){let e=X();h(0,"TimesIcon",7),T("click",function(){y(e);let i=d(2);return _(i.clear())}),f()}t&2&&(l("ngClass","p-inputnumber-clear-icon"),m("data-pc-section","clearIcon"))}function ao(t,o){}function so(t,o){t&1&&x(0,ao,0,0,"ng-template")}function lo(t,o){if(t&1){let e=X();h(0,"span",8),T("click",function(){y(e);let i=d(2);return _(i.clear())}),x(1,so,1,0,null,9),f()}if(t&2){let e=d(2);m("data-pc-section","clearIcon"),u(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function uo(t,o){if(t&1&&(J(0),x(1,ro,1,2,"TimesIcon",5)(2,lo,2,2,"span",6),ee()),t&2){let e=d();u(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),u(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function co(t,o){if(t&1&&V(0,"span",13),t&2){let e=d(2);l("ngClass",e.incrementButtonIcon),m("data-pc-section","incrementbuttonicon")}}function po(t,o){t&1&&V(0,"AngleUpIcon"),t&2&&m("data-pc-section","incrementbuttonicon")}function ho(t,o){}function fo(t,o){t&1&&x(0,ho,0,0,"ng-template")}function mo(t,o){if(t&1&&(J(0),x(1,po,1,1,"AngleUpIcon",2)(2,fo,1,0,null,9),ee()),t&2){let e=d(2);u(),l("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),u(),l("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function go(t,o){if(t&1&&V(0,"span",13),t&2){let e=d(2);l("ngClass",e.decrementButtonIcon),m("data-pc-section","decrementbuttonicon")}}function bo(t,o){t&1&&V(0,"AngleDownIcon"),t&2&&m("data-pc-section","decrementbuttonicon")}function yo(t,o){}function _o(t,o){t&1&&x(0,yo,0,0,"ng-template")}function vo(t,o){if(t&1&&(J(0),x(1,bo,1,1,"AngleDownIcon",2)(2,_o,1,0,null,9),ee()),t&2){let e=d(2);u(),l("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),u(),l("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Co(t,o){if(t&1){let e=X();h(0,"span",10)(1,"button",11),T("mousedown",function(i){y(e);let r=d();return _(r.onUpButtonMouseDown(i))})("mouseup",function(){y(e);let i=d();return _(i.onUpButtonMouseUp())})("mouseleave",function(){y(e);let i=d();return _(i.onUpButtonMouseLeave())})("keydown",function(i){y(e);let r=d();return _(r.onUpButtonKeyDown(i))})("keyup",function(){y(e);let i=d();return _(i.onUpButtonKeyUp())}),x(2,co,1,2,"span",12)(3,mo,3,2,"ng-container",2),f(),h(4,"button",11),T("mousedown",function(i){y(e);let r=d();return _(r.onDownButtonMouseDown(i))})("mouseup",function(){y(e);let i=d();return _(i.onDownButtonMouseUp())})("mouseleave",function(){y(e);let i=d();return _(i.onDownButtonMouseLeave())})("keydown",function(i){y(e);let r=d();return _(r.onDownButtonKeyDown(i))})("keyup",function(){y(e);let i=d();return _(i.onDownButtonKeyUp())}),x(5,go,1,2,"span",12)(6,vo,3,2,"ng-container",2),f()()}if(t&2){let e=d();m("data-pc-section","buttonGroup"),u(),E(e.incrementButtonClass),l("ngClass",e._incrementButtonClass)("disabled",e.disabled),m("aria-hidden",!0)("data-pc-section","incrementbutton"),u(),l("ngIf",e.incrementButtonIcon),u(),l("ngIf",!e.incrementButtonIcon),u(),E(e.decrementButtonClass),l("ngClass",e._decrementButtonClass)("disabled",e.disabled),m("aria-hidden",!0)("data-pc-section","decrementbutton"),u(),l("ngIf",e.decrementButtonIcon),u(),l("ngIf",!e.decrementButtonIcon)}}function xo(t,o){if(t&1&&V(0,"span",13),t&2){let e=d(2);l("ngClass",e.incrementButtonIcon),m("data-pc-section","incrementbuttonicon")}}function wo(t,o){t&1&&V(0,"AngleUpIcon"),t&2&&m("data-pc-section","incrementbuttonicon")}function Io(t,o){}function Do(t,o){t&1&&x(0,Io,0,0,"ng-template")}function So(t,o){if(t&1&&(J(0),x(1,wo,1,1,"AngleUpIcon",2)(2,Do,1,0,null,9),ee()),t&2){let e=d(2);u(),l("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),u(),l("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Vo(t,o){if(t&1){let e=X();h(0,"button",11),T("mousedown",function(i){y(e);let r=d();return _(r.onUpButtonMouseDown(i))})("mouseup",function(){y(e);let i=d();return _(i.onUpButtonMouseUp())})("mouseleave",function(){y(e);let i=d();return _(i.onUpButtonMouseLeave())})("keydown",function(i){y(e);let r=d();return _(r.onUpButtonKeyDown(i))})("keyup",function(){y(e);let i=d();return _(i.onUpButtonKeyUp())}),x(1,xo,1,2,"span",12)(2,So,3,2,"ng-container",2),f()}if(t&2){let e=d();E(e.incrementButtonClass),l("ngClass",e._incrementButtonClass)("disabled",e.disabled),m("aria-hidden",!0)("data-pc-section","incrementbutton"),u(),l("ngIf",e.incrementButtonIcon),u(),l("ngIf",!e.incrementButtonIcon)}}function Mo(t,o){if(t&1&&V(0,"span",13),t&2){let e=d(2);l("ngClass",e.decrementButtonIcon),m("data-pc-section","decrementbuttonicon")}}function Eo(t,o){t&1&&V(0,"AngleDownIcon"),t&2&&m("data-pc-section","decrementbuttonicon")}function Fo(t,o){}function To(t,o){t&1&&x(0,Fo,0,0,"ng-template")}function $o(t,o){if(t&1&&(J(0),x(1,Eo,1,1,"AngleDownIcon",2)(2,To,1,0,null,9),ee()),t&2){let e=d(2);u(),l("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),u(),l("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function ko(t,o){if(t&1){let e=X();h(0,"button",11),T("mousedown",function(i){y(e);let r=d();return _(r.onDownButtonMouseDown(i))})("mouseup",function(){y(e);let i=d();return _(i.onDownButtonMouseUp())})("mouseleave",function(){y(e);let i=d();return _(i.onDownButtonMouseLeave())})("keydown",function(i){y(e);let r=d();return _(r.onDownButtonKeyDown(i))})("keyup",function(){y(e);let i=d();return _(i.onDownButtonKeyUp())}),x(1,Mo,1,2,"span",12)(2,$o,3,2,"ng-container",2),f()}if(t&2){let e=d();E(e.decrementButtonClass),l("ngClass",e._decrementButtonClass)("disabled",e.disabled),m("aria-hidden",!0)("data-pc-section","decrementbutton"),u(),l("ngIf",e.decrementButtonIcon),u(),l("ngIf",!e.decrementButtonIcon)}}var Ao=({dt:t})=>`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${t("inputnumber.button.background")};
    color: ${t("inputnumber.button.color")};
    width: ${t("inputnumber.button.width")};
    transition: background ${t("inputnumber.transition.duration")}, color ${t("inputnumber.transition.duration")}, border-color ${t("inputnumber.transition.duration")}, outline-color ${t("inputnumber.transition.duration")};
}

.p-inputnumber-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: 0.75rem;
    color: ${t("inputnumber.button.color")};
}

.p-inputnumber-button:hover {
    background: ${t("inputnumber.button.hover.background")};
    color: ${t("inputnumber.button.hover.color")};
}

.p-inputnumber-button:active {
    background: ${t("inputnumber.button.active.background")};
    color: ${t("inputnumber.button.active.color")};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-start-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: ${t("inputnumber.button.width")};
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
    padding-block: ${t("inputnumber.button.vertical.padding")};
    padding-inline: 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
p-input-number.ng-invalid.ng-dirty > .p-inputtext,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
    border-color: ${t("inputtext.invalid.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}
`,Bo={root:({instance:t})=>({"p-inputnumber p-component p-inputwrapper":!0,"p-inputwrapper-filled":t.filled||t.allowEmpty===!1,"p-inputwrapper-focus":t.focused,"p-inputnumber-stacked":t.showButtons&&t.buttonLayout==="stacked","p-inputnumber-horizontal":t.showButtons&&t.buttonLayout==="horizontal","p-inputnumber-vertical":t.showButtons&&t.buttonLayout==="vertical","p-inputnumber-fluid":t.hasFluid}),pcInput:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:t})=>({"p-inputnumber-button p-inputnumber-increment-button":!0,"p-disabled":t.showButtons&&t.max!==null&&t.maxlength}),decrementButton:({instance:t})=>({"p-inputnumber-button p-inputnumber-decrement-button":!0,"p-disabled":t.showButtons&&t.min!==null&&t.minlength})},Kn=(()=>{class t extends B{name="inputnumber";theme=Ao;classes=Bo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var No={provide:wt,useExisting:Qe(()=>Ge),multi:!0},Ge=(()=>{class t extends A{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;style;placeholder;size;maxlength;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;name;required;autocomplete;min;max;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly=!1;step=1;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;variant;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;get disabled(){return this._disabled}set disabled(e){e&&(this.focused=!1),this._disabled=e,this.timer&&this.clearTimer()}fluid=!1;onInput=new z;onFocus=new z;onBlur=new z;onKeyDown=new z;onClear=new z;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;onModelChange=()=>{};onModelTouched=()=>{};focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_disabled;_componentStyle=I(Kn);ngControl=null;get _rootClass(){return this._componentStyle.classes.root({instance:this})}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}get _incrementButtonClass(){return this._componentStyle.classes.incrementButton({instance:this})}get _decrementButtonClass(){return this._componentStyle.classes.decrementButton({instance:this})}constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(i=>!!e[i])&&this.updateConstructParser()}get hostClass(){return["p-inputnumber p-component p-inputwrapper",this.styleClass,this.filled||this.allowEmpty===!1?"p-inputwrapper-filled":"",this.focused?"p-inputwrapper-focus":"",this.showButtons&&this.buttonLayout==="stacked"?"p-inputnumber-stacked":"",this.showButtons&&this.buttonLayout==="horizontal"?"p-inputnumber-horizontal":"",this.showButtons&&this.buttonLayout==="vertical"?"p-inputnumber-vertical":"",this.hasFluid?"p-inputnumber-fluid":""].filter(e=>!!e).join(" ")}get hostStyle(){return this.style}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(Ee,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),n=new Map(e.map((i,r)=>[i,r]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=i=>n.get(i)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,L(M({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let i=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(i=this.prefix+i),this.suffix&&e!=this.suffix&&(i=i+this.suffix),i}return e.toString()}return""}parseValue(e){let n=new RegExp(this._suffix,""),i=new RegExp(this._prefix,""),r=new RegExp(this._currency,""),a=e.replace(n,"").replace(i,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(a){if(a==="-")return a;let s=+a;return isNaN(s)?null:s}return null}repeat(e,n,i){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,i)},r),this.spin(e,i)}spin(e,n){let i=this.step*n,r=this.parseValue(this.input?.nativeElement.value)||0,a=this.validateValue(r+i);this.maxlength&&this.maxlength<this.formatValue(a).length||(this.updateInput(a,null,"spin",null),this.updateModel(e,a),this.handleOnInput(e,r,a))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.disabled||this.clearTimer()}onUpButtonMouseLeave(){this.disabled||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.disabled||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.disabled||this.clearTimer()}onDownButtonMouseLeave(){this.disabled||this.clearTimer()}onDownButtonKeyUp(){this.disabled||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,i=e.target.selectionEnd,r=e.target.value,a=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let s=n;s<=r.length;s++){let c=s===0?0:s-1;if(this.isNumeralChar(r.charAt(c))){this.input.nativeElement.setSelectionRange(s,s);break}}break;case"ArrowRight":for(let s=i;s>=0;s--)if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(s,s);break}break;case"Tab":case"Enter":a=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(a),this.input.nativeElement.setAttribute("aria-valuenow",a),this.updateModel(e,a);break;case"Backspace":{if(e.preventDefault(),n===i){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let s=r.charAt(n-1),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:g}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let p=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n-1,n-1):a=r.slice(0,n-1)+r.slice(n);else if(c>0&&n>c){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";a=r.slice(0,n-1)+w+r.slice(n)}else g===1?(a=r.slice(0,n-1)+"0"+r.slice(n),a=this.parseValue(a)>0?a:""):a=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&s.search(this._currency)!=-1&&(a=r.slice(1));this.updateValue(e,a,null,"delete-single")}else a=this.deleteRange(r,n,i),this.updateValue(e,a,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===i){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let s=r.charAt(n),{decimalCharIndex:c,decimalCharIndexWithoutPrefix:g}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let p=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,a=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(s))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n+1,n+1):a=r.slice(0,n)+r.slice(n+1);else if(c>0&&n>c){let w=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";a=r.slice(0,n)+w+r.slice(n+1)}else g===1?(a=r.slice(0,n)+"0"+r.slice(n+1),a=this.parseValue(a)>0?a:""):a=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,a,null,"delete-back-single")}else a=this.deleteRange(r,n,i),this.updateValue(e,a,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,i=String.fromCharCode(n),r=this.isDecimalSign(i),a=this.isMinusSign(i);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,i=this._decimalChar,n=i.charCodeAt(0));let{value:s,selectionStart:c,selectionEnd:g}=this.input.nativeElement,p=this.parseValue(s+i),w=p!=null?p.toString():"",R=s.substring(c,g),S=this.parseValue(R),W=S!=null?S.toString():"";if(c!==g&&W.length>0){this.insert(e,i,{isDecimalSign:r,isMinusSign:a});return}this.maxlength&&w.length>this.maxlength||(48<=n&&n<=57||a||r)&&this.insert(e,i,{isDecimalSign:r,isMinusSign:a})}onPaste(e){if(!this.disabled&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(n){this.maxlength&&(n=n.toString().substring(0,this.maxlength));let i=this.parseValue(n);i!=null&&this.insert(e,i.toString())}}}allowMinusSign(){return this.min==null||this.min<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let i=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let a=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:i,suffixCharIndex:r,currencyCharIndex:a}}insert(e,n,i={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let a=this.input?.nativeElement.selectionStart,s=this.input?.nativeElement.selectionEnd,c=this.input?.nativeElement.value.trim(),{decimalCharIndex:g,minusCharIndex:p,suffixCharIndex:w,currencyCharIndex:R}=this.getCharIndexes(c),S;if(i.isMinusSign)a===0&&(S=c,(p===-1||s!==0)&&(S=this.insertText(c,n,0,s)),this.updateValue(e,S,n,"insert"));else if(i.isDecimalSign)g>0&&a===g?this.updateValue(e,c,n,"insert"):g>a&&g<s?(S=this.insertText(c,n,a,s),this.updateValue(e,S,n,"insert")):g===-1&&this.maxFractionDigits&&(S=this.insertText(c,n,a,s),this.updateValue(e,S,n,"insert"));else{let W=this.numberFormat.resolvedOptions().maximumFractionDigits,K=a!==s?"range-insert":"insert";if(g>0&&a>g){if(a+n.length-(g+1)<=W){let we=R>=a?R-1:w>=a?w:c.length;S=c.slice(0,a)+n+c.slice(a+n.length,we)+c.slice(we),this.updateValue(e,S,n,K)}}else S=this.insertText(c,n,a,s),this.updateValue(e,S,n,K)}}insertText(e,n,i,r){if((n==="."?n:n.split(".")).length===2){let s=e.slice(i,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,i)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-i===e.length?this.formatValue(n):i===0?n+e.slice(r):r===e.length?e.slice(0,i)+n:e.slice(0,i)+n+e.slice(r)}deleteRange(e,n,i){let r;return i-n===e.length?r="":n===0?r=e.slice(i):i===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(i),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,i=this.input?.nativeElement.value,r=i.length,a=null,s=(this.prefixChar||"").length;i=i.replace(this._prefix,""),(e===n||e!==0||n<s)&&(e-=s);let c=i.charAt(e);if(this.isNumeralChar(c))return e+s;let g=e-1;for(;g>=0;)if(c=i.charAt(g),this.isNumeralChar(c)){a=g+s;break}else g--;if(a!==null)this.input?.nativeElement.setSelectionRange(a+1,a+1);else{for(g=e;g<r;)if(c=i.charAt(g),this.isNumeralChar(c)){a=g+s;break}else g++;a!==null&&this.input?.nativeElement.setSelectionRange(a,a)}return a||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==yn()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,i,r){let a=this.input?.nativeElement.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,i,r,n),this.handleOnInput(e,a,s))}handleOnInput(e,n,i){this.isValueChanged(n,i)&&(this.input.nativeElement.value=this.formatValue(i),this.input?.nativeElement.setAttribute("aria-valuenow",i),this.updateModel(e,i),this.onInput.emit({originalEvent:e,value:i,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let i=typeof e=="string"?this.parseValue(e):e;return n!==i}return!1}validateValue(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e}updateInput(e,n,i,r){n=n||"";let a=this.input?.nativeElement.value,s=this.formatValue(e),c=a.length;if(s!==r&&(s=this.concatValues(s,r)),c===0){this.input.nativeElement.value=s,this.input.nativeElement.setSelectionRange(0,0);let p=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(p,p)}else{let g=this.input.nativeElement.selectionStart,p=this.input.nativeElement.selectionEnd;if(this.maxlength&&s.length>this.maxlength&&(s=s.slice(0,this.maxlength),g=Math.min(g,this.maxlength),p=Math.min(p,this.maxlength)),this.maxlength&&this.maxlength<s.length)return;this.input.nativeElement.value=s;let w=s.length;if(i==="range-insert"){let R=this.parseValue((a||"").slice(0,g)),W=(R!==null?R.toString():"").split("").join(`(${this.groupChar})?`),K=new RegExp(W,"g");K.test(s);let we=n.split("").join(`(${this.groupChar})?`),rt=new RegExp(we,"g");rt.test(s.slice(K.lastIndex)),p=K.lastIndex+rt.lastIndex,this.input.nativeElement.setSelectionRange(p,p)}else if(w===c)i==="insert"||i==="delete-back-single"?this.input.nativeElement.setSelectionRange(p+1,p+1):i==="delete-single"?this.input.nativeElement.setSelectionRange(p-1,p-1):(i==="delete-range"||i==="spin")&&this.input.nativeElement.setSelectionRange(p,p);else if(i==="delete-back-single"){let R=a.charAt(p-1),S=a.charAt(p),W=c-w,K=this._group.test(S);K&&W===1?p+=1:!K&&this.isNumeralChar(R)&&(p+=-1*W+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(p,p)}else if(a==="-"&&i==="insert"){this.input.nativeElement.setSelectionRange(0,0);let S=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(S,S)}else p=p+(w-c),this.input.nativeElement.setSelectionRange(p,p)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let i=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+n.slice(i):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),i=n?.toString();this.input.nativeElement.value=this.formatValue(i),this.input.nativeElement.setAttribute("aria-valuenow",i),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let i=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,i&&this.focused||this.onModelChange(n)):i&&this.onModelChange(n)}writeValue(e){this.value=e&&Number(e),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get filled(){return this.value!=null&&this.value.toString().length>0}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||t)(Y(Ke))};static \u0275cmp=D({type:t,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,i,r){if(n&1&&(H(r,to,4),H(r,no,4),H(r,io,4),H(r,_e,4)),n&2){let a;j(a=G())&&(i.clearIconTemplate=a.first),j(a=G())&&(i.incrementButtonIconTemplate=a.first),j(a=G())&&(i.decrementButtonIconTemplate=a.first),j(a=G())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&sn(oo,5),n&2){let r;j(r=G())&&(i.input=r.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(m("data-pc-name","inputnumber")("data-pc-section","root"),he(i.hostStyle),E(i.hostClass))},inputs:{showButtons:[2,"showButtons","showButtons",v],format:[2,"format","format",v],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",style:"style",placeholder:"placeholder",size:"size",maxlength:[2,"maxlength","maxlength",de],tabindex:[2,"tabindex","tabindex",de],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",v],name:"name",required:[2,"required","required",v],autocomplete:"autocomplete",min:[2,"min","min",de],max:[2,"max","max",de],incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",v],step:[2,"step","step",de],allowEmpty:[2,"allowEmpty","allowEmpty",v],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",v],variant:"variant",minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>de(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>de(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",v],autofocus:[2,"autofocus","autofocus",v],disabled:"disabled",fluid:[2,"fluid","fluid",v]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[$([No,Kn]),C,ce],decls:6,vars:33,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","ngClass","ngStyle","value","variant","disabled","readonly","pSize","pAutoFocus","fluid"],[4,"ngIf"],["class","p-inputnumber-button-group",4,"ngIf"],["type","button","tabindex","-1",3,"ngClass","class","disabled","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["class","p-inputnumber-clear-icon",3,"click",4,"ngIf"],[3,"click","ngClass"],[1,"p-inputnumber-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[1,"p-inputnumber-button-group"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","ngClass","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,i){if(n&1){let r=X();h(0,"input",1,0),T("input",function(s){return y(r),_(i.onUserInput(s))})("keydown",function(s){return y(r),_(i.onInputKeyDown(s))})("keypress",function(s){return y(r),_(i.onInputKeyPress(s))})("paste",function(s){return y(r),_(i.onPaste(s))})("click",function(){return y(r),_(i.onInputClick())})("focus",function(s){return y(r),_(i.onInputFocus(s))})("blur",function(s){return y(r),_(i.onInputBlur(s))}),f(),x(2,uo,3,2,"ng-container",2)(3,Co,7,17,"span",3)(4,Vo,3,8,"button",4)(5,ko,3,8,"button",4)}n&2&&(E(i.inputStyleClass),l("ngClass","p-inputnumber-input")("ngStyle",i.inputStyle)("value",i.formattedValue())("variant",i.variant)("disabled",i.disabled)("readonly",i.readonly)("pSize",i.size)("pAutoFocus",i.autofocus)("fluid",i.hasFluid),m("id",i.inputId)("aria-valuemin",i.min)("aria-valuemax",i.max)("aria-valuenow",i.value)("placeholder",i.placeholder)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-describedby",i.ariaDescribedBy)("title",i.title)("name",i.name)("autocomplete",i.autocomplete)("maxlength",i.maxlength)("tabindex",i.tabindex)("aria-required",i.ariaRequired)("required",i.required)("min",i.min)("max",i.max)("data-pc-section","input"),u(2),l("ngIf",i.buttonLayout!="vertical"&&i.showClear&&i.value),u(),l("ngIf",i.showButtons&&i.buttonLayout==="stacked"),u(),l("ngIf",i.showButtons&&i.buttonLayout!=="stacked"),u(),l("ngIf",i.showButtons&&i.buttonLayout!=="stacked"))},dependencies:[U,me,ge,ye,be,Mt,je,Vt,zn,Gn,F],encapsulation:2,changeDetection:0})}return t})(),ze=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[Ge,F,F]})}return t})();var Oo=["*"],Po=({dt:t})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,Ro={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},Yn=(()=>{class t extends B{name="inputgroup";theme=Po;classes=Ro;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var tt=(()=>{class t extends A{style;styleClass;_componentStyle=I(Yn);static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(n,i){n&2&&(m("data-pc-name","inputgroup"),he(i.style),E(i.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[$([Yn]),C],ngContentSelectors:Oo,decls:1,vars:0,template:function(n,i){n&1&&(te(),Z(0))},dependencies:[U,F],encapsulation:2})}return t})(),He=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[tt,F,F]})}return t})();var Lo=["*"],jo={root:"p-inputgroupaddon"},Jn=(()=>{class t extends B{name="inputgroupaddon";classes=jo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),nt=(()=>{class t extends A{style;styleClass;_componentStyle=I(Jn);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(n,i){n&2&&(m("data-pc-name","inputgroupaddon"),he(i.hostStyle),E(i.styleClass),oe("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[$([Jn]),C],ngContentSelectors:Lo,decls:1,vars:0,template:function(n,i){n&1&&(te(),Z(0))},dependencies:[U],encapsulation:2})}return t})(),Ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[nt,F,F]})}return t})();var Go=["*"],zo=({dt:t})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${t("floatlabel.font.weight")};
    inset-inline-start: ${t("floatlabel.position.x")};
    color: ${t("floatlabel.color")};
    transition-duration: ${t("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${t("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${t("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${t("floatlabel.active.font.size")};
    font-weight: ${t("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${t("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${t("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${t("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${t("floatlabel.on.border.radius")};
    background: ${t("floatlabel.on.active.background")};
    padding: ${t("floatlabel.on.active.padding")};
}
`,Ho={root:({instance:t,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},ti=(()=>{class t extends B{name="floatlabel";theme=zo;classes=Ho;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var it=(()=>{class t extends A{_componentStyle=I(ti);variant="over";static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(n,i){n&2&&oe("p-floatlabel",!0)("p-floatlabel-over",i.variant==="over")("p-floatlabel-on",i.variant==="on")("p-floatlabel-in",i.variant==="in")},inputs:{variant:"variant"},features:[$([ti]),C],ngContentSelectors:Go,decls:1,vars:0,template:function(n,i){n&1&&(te(),Z(0))},dependencies:[U,F],encapsulation:2,changeDetection:0})}return t})(),We=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[it,F,F]})}return t})();var Uo=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Wo={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":Rt(t.value)&&String(t.value).length===1,"p-badge-dot":ae(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},ii=(()=>{class t extends B{name="badge";theme=Uo;classes=Wo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Kt=(()=>{class t extends A{styleClass=ie();style=ie();badgeSize=ie();size=ie();severity=ie();value=ie();badgeDisabled=ie(!1,{transform:v});_componentStyle=I(ii);containerClass=ue(()=>{let e="p-badge p-component";return Rt(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),ae(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,i){n&2&&(he(i.style()),E(i.containerClass()),an("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[$([ii]),C],decls:1,vars:1,template:function(n,i){n&1&&Q(0),n&2&&fe(i.value())},dependencies:[U,F],encapsulation:2,changeDetection:0})}return t})(),oi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[Kt,F,F]})}return t})();var Qo=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Ko={root:"p-ink"},ri=(()=>{class t extends B{name="ripple";theme=Qo;classes=Ko;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Ft=(()=>{class t extends A{zone=I(on);_componentStyle=I(ri);animationListener;mouseDownListener;timeout;constructor(){super(),pn(()=>{ht(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Ae(n,"p-ink-active"),!Ot(n)&&!Pt(n)){let s=Math.max(mn(this.el.nativeElement),bn(this.el.nativeElement));n.style.height=s+"px",n.style.width=s+"px"}let i=gn(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-Pt(n)/2,a=e.pageY-i.top+this.document.body.scrollLeft-Ot(n)/2;this.renderer.setStyle(n,"top",a+"px"),this.renderer.setStyle(n,"left",r+"px"),Ve(n,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&Ae(s,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Ae(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Ae(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,_n(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=q({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[$([ri]),C]})}return t})();var Zo=["content"],Yo=["loadingicon"],Xo=["icon"],Jo=["*"],li=t=>({class:t});function er(t,o){t&1&&le(0)}function tr(t,o){if(t&1&&V(0,"span",8),t&2){let e=d(3);l("ngClass",e.iconClass()),m("aria-hidden",!0)("data-pc-section","loadingicon")}}function nr(t,o){if(t&1&&V(0,"SpinnerIcon",9),t&2){let e=d(3);l("styleClass",e.spinnerIconClass())("spin",!0),m("aria-hidden",!0)("data-pc-section","loadingicon")}}function ir(t,o){if(t&1&&(J(0),x(1,tr,1,3,"span",6)(2,nr,1,4,"SpinnerIcon",7),ee()),t&2){let e=d(2);u(),l("ngIf",e.loadingIcon),u(),l("ngIf",!e.loadingIcon)}}function or(t,o){}function rr(t,o){if(t&1&&x(0,or,0,0,"ng-template",10),t&2){let e=d(2);l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ar(t,o){if(t&1&&(J(0),x(1,ir,3,2,"ng-container",2)(2,rr,1,1,null,5),ee()),t&2){let e=d();u(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),u(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",re(3,li,e.iconClass()))}}function sr(t,o){if(t&1&&V(0,"span",8),t&2){let e=d(2);E(e.icon),l("ngClass",e.iconClass()),m("data-pc-section","icon")}}function lr(t,o){}function ur(t,o){if(t&1&&x(0,lr,0,0,"ng-template",10),t&2){let e=d(2);l("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function cr(t,o){if(t&1&&(J(0),x(1,sr,1,4,"span",11)(2,ur,1,1,null,5),ee()),t&2){let e=d();u(),l("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),u(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",re(3,li,e.iconClass()))}}function dr(t,o){if(t&1&&(h(0,"span",12),Q(1),f()),t&2){let e=d();m("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),u(),fe(e.label)}}function pr(t,o){if(t&1&&V(0,"p-badge",13),t&2){let e=d();l("value",e.badge)("severity",e.badgeSeverity)}}var hr=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,fr={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Ce=(()=>{class t extends B{name="button";theme=hr;classes=fr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var ve={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},ai=(()=>{class t extends A{_componentStyle=I(Ce);static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275dir=q({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&oe("p-button-label",!0)},features:[$([Ce]),C]})}return t})(),si=(()=>{class t extends A{_componentStyle=I(Ce);static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275dir=q({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&oe("p-button-icon",!0)},features:[$([Ce]),C]})}return t})(),ui=(()=>{class t extends A{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=kt(si);labelSignal=kt(ai);isIconOnly=ue(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ve);isTextButton=ue(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=I(Ce);ngAfterViewInit(){super.ngAfterViewInit(),Ve(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}getStyleClass(){let e=[ve.button,ve.component];return this.icon&&!this.label&&ae(this.htmlElement.textContent)&&e.push(ve.iconOnly),this.loading&&(e.push(ve.disabled,ve.loading),!this.icon&&this.label&&e.push(ve.labelOnly),this.icon&&!this.label&&!ae(this.htmlElement.textContent)&&e.push(ve.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ae(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Be(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Be(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&Ve(n,i);let r=this.getIconClass();r&&Ve(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Be(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Be(this.htmlElement,".p-button-icon"),n=Be(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275dir=q({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&(At(r,i.iconSignal,si,5),At(r,i.labelSignal,ai,5)),n&2&&ln(2)},hostVars:4,hostBindings:function(n,i){n&2&&oe("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],outlined:[2,"outlined","outlined",v],size:"size",plain:[2,"plain","plain",v],fluid:[2,"fluid","fluid",v],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[$([Ce]),C,ce]})}return t})(),ot=(()=>{class t extends A{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new z;onFocus=new z;onBlur=new z;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ae(this.fluid)?!!n:this.fluid}_componentStyle=I(Ce);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let i=n.currentValue;for(let r in i)this[r]=i[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(H(r,Zo,5),H(r,Yo,5),H(r,Xo,5),H(r,_e,4)),n&2){let a;j(a=G())&&(i.contentTemplate=a.first),j(a=G())&&(i.loadingIconTemplate=a.first),j(a=G())&&(i.iconTemplate=a.first),j(a=G())&&(i.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",v],loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],severity:"severity",outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",de],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",v],fluid:[2,"fluid","fluid",v],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[$([Ce]),C,ce],ngContentSelectors:Jo,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,i){n&1&&(te(),h(0,"button",0),T("click",function(a){return i.onClick.emit(a)})("focus",function(a){return i.onFocus.emit(a)})("blur",function(a){return i.onBlur.emit(a)}),Z(1),x(2,er,1,0,"ng-container",1)(3,ar,3,5,"ng-container",2)(4,cr,3,5,"ng-container",2)(5,dr,2,3,"span",3)(6,pr,1,2,"p-badge",4),f()),n&2&&(l("ngStyle",i.style)("disabled",i.disabled||i.loading)("ngClass",i.buttonClass)("pAutoFocus",i.autofocus),m("type",i.type)("aria-label",i.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex),u(2),l("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),u(),l("ngIf",i.loading),u(),l("ngIf",!i.loading),u(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),u(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[U,me,ge,ye,be,Ft,je,Wn,oi,Kt,F],encapsulation:2,changeDetection:0})}return t})(),xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[U,ot,F,F]})}return t})();var mr=["header"],gr=["expandicon"],br=["collapseicon"],yr=["content"],_r=["*",[["p-header"]]],vr=["*","p-header"],Cr=(t,o)=>({"p-fieldset p-component":!0,"p-fieldset-toggleable":t,"p-fieldset-expanded":o}),xr=t=>({transitionParams:t,height:"0"}),wr=t=>({value:"hidden",params:t}),Ir=t=>({transitionParams:t,height:"*"}),Dr=t=>({value:"visible",params:t});function Sr(t,o){t&1&&V(0,"PlusIcon",11),t&2&&(l("styleClass","p-fieldset-toggler"),m("data-pc-section","togglericon"))}function Vr(t,o){t&1&&le(0)}function Mr(t,o){if(t&1&&(h(0,"span",12),x(1,Vr,1,0,"ng-container",6),f()),t&2){let e=d(3);m("data-pc-section","togglericon"),u(),l("ngTemplateOutlet",e.expandIconTemplate||e._expandIconTemplate)}}function Er(t,o){if(t&1&&(J(0),x(1,Sr,1,2,"PlusIcon",9)(2,Mr,2,2,"span",10),ee()),t&2){let e=d(2);u(),l("ngIf",!e.expandIconTemplate&&!e._expandIconTemplate),u(),l("ngIf",e.expandIconTemplate||e._expandIconTemplate)}}function Fr(t,o){t&1&&V(0,"MinusIcon",11),t&2&&(l("styleClass","p-fieldset-toggler"),m("aria-hidden",!0)("data-pc-section","togglericon"))}function Tr(t,o){t&1&&le(0)}function $r(t,o){if(t&1&&(h(0,"span",12),x(1,Tr,1,0,"ng-container",6),f()),t&2){let e=d(3);m("data-pc-section","togglericon"),u(),l("ngTemplateOutlet",e.collapseIconTemplate||e._collapseIconTemplate)}}function kr(t,o){if(t&1&&(J(0),x(1,Fr,1,3,"MinusIcon",9)(2,$r,2,2,"span",10),ee()),t&2){let e=d(2);u(),l("ngIf",!e.collapseIconTemplate&&!e._collapseIconTemplate),u(),l("ngIf",e.collapseIconTemplate||e._collapseIconTemplate)}}function Ar(t,o){t&1&&le(0)}function Br(t,o){if(t&1){let e=X();J(0),h(1,"button",7),T("click",function(i){y(e);let r=d();return _(r.toggle(i))})("keydown",function(i){y(e);let r=d();return _(r.onKeyDown(i))}),x(2,Er,3,2,"ng-container",8)(3,kr,3,2,"ng-container",8)(4,Ar,1,0,"ng-container",6),f(),ee()}if(t&2){let e=d(),n=Bt(4);u(),m("id",e.id+"_header")("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)("aria-label",e.buttonAriaLabel),u(),l("ngIf",e.collapsed),u(),l("ngIf",!e.collapsed),u(),l("ngTemplateOutlet",n)}}function Nr(t,o){t&1&&le(0)}function Or(t,o){if(t&1&&(h(0,"span",13),Q(1),f(),Z(2,1),x(3,Nr,1,0,"ng-container",6)),t&2){let e=d();m("data-pc-section","legendtitle"),u(),fe(e.legend),u(2),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Pr(t,o){t&1&&le(0)}var Rr=({dt:t})=>`
.p-fieldset {
    background: ${t("fieldset.background")};
    border: 1px solid ${t("fieldset.border.color")};
    border-radius: ${t("fieldset.border.radius")};
    color: ${t("fieldset.color")};
    padding:  ${t("fieldset.padding")};
    margin: 0;
}

.p-fieldset-legend {
    background: ${t("fieldset.legend.background")};
    border-radius: ${t("fieldset.legend.border.radius")};
    border-width: ${t("fieldset.legend.border.width")};
    border-style: solid;
    border-color: ${t("fieldset.legend.border.color")};
    color: ${t("fieldset.legend.color")};
    padding: ${t("fieldset.legend.padding")};
    transition: background ${t("fieldset.transition.duration")}, color ${t("fieldset.transition.duration")}, outline-color ${t("fieldset.transition.duration")}, box-shadow ${t("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: ${t("fieldset.legend.gap")};
    align-items: center;
    justify-content: center;
    padding: ${t("fieldset.legend.padding")};
    background: transparent;
    border: 0 none;
    border-radius: ${t("fieldset.legend.border.radius")};
    transition: background ${t("fieldset.transition.duration")}, color ${t("fieldset.transition.duration")}, outline-color ${t("fieldset.transition.duration")}, box-shadow ${t("fieldset.transition.duration")};
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: ${t("fieldset.legend.font.weight")};
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: ${t("fieldset.legend.focus.ring.shadow")};
    outline: ${t("fieldset.legend.focus.ring.width")} ${t("fieldset.legend.focus.ring.style")} ${t("fieldset.legend.focus.ring.color")};
    outline-offset: ${t("fieldset.legend.focus.ring.offset")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: ${t("fieldset.legend.hover.color")};
    background: ${t("fieldset.legend.hover.background")};
}

.p-fieldset-toggle-icon {
    color: ${t("fieldset.toggle.icon.color")};
    transition: color ${t("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: ${t("fieldset.toggle.icon.hover.color")};
}

.p-fieldset .p-fieldset-content {
    padding: ${t("fieldset.content.padding")};
}

/* For PrimeNG */
.p-fieldset-toggleable.p-fieldset-expanded > .p-fieldset-content-container:not(.ng-animating) {
    overflow: visible
}

.p-fieldset-toggleable .p-fieldset-content-container {
    overflow: hidden;
}
`,Lr={root:({props:t})=>["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},ci=(()=>{class t extends B{name="fieldset";theme=Rr;classes=Lr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var Yt=(()=>{class t extends A{legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new z;onBeforeToggle=new z;onAfterToggle=new z;get id(){return pe("pn_id_")}get buttonAriaLabel(){return this.legend}animating;_componentStyle=I(ci);headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed}),e.preventDefault()}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"expandicon":this._expandIconTemplate=e.template;break;case"collapseicon":this._collapseIconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-fieldset"]],contentQueries:function(n,i,r){if(n&1&&(H(r,mr,4),H(r,gr,4),H(r,br,4),H(r,yr,4),H(r,_e,4)),n&2){let a;j(a=G())&&(i.headerTemplate=a.first),j(a=G())&&(i.expandIconTemplate=a.first),j(a=G())&&(i.collapseIconTemplate=a.first),j(a=G())&&(i.contentTemplate=a.first),j(a=G())&&(i.templates=a)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",v],collapsed:[2,"collapsed","collapsed",v],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[$([ci]),C],ngContentSelectors:vr,decls:9,vars:28,consts:[["legendContent",""],[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["role","region",1,"p-fieldset-content-container"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-fieldset-toggle-button",3,"click","keydown"],[4,"ngIf"],[3,"styleClass",4,"ngIf"],["class","p-fieldset-toggler",4,"ngIf"],[3,"styleClass"],[1,"p-fieldset-toggler"],[1,"p-fieldset-legend-label"]],template:function(n,i){if(n&1){let r=X();te(_r),h(0,"fieldset",1)(1,"legend",2),x(2,Br,5,7,"ng-container",3)(3,Or,4,3,"ng-template",null,0,ke),f(),h(5,"div",4),T("@fieldsetContent.done",function(){return y(r),_(i.onToggleDone())}),h(6,"div",5),Z(7),x(8,Pr,1,0,"ng-container",6),f()()()}if(n&2){let r=Bt(4);E(i.styleClass),l("ngClass",un(17,Cr,i.toggleable,!i.collapsed&&i.toggleable))("ngStyle",i.style),m("id",i.id)("data-pc-name","fieldset")("data-pc-section","root"),u(),m("data-pc-section","legend"),u(),l("ngIf",i.toggleable)("ngIfElse",r),u(3),l("@fieldsetContent",i.collapsed?re(22,wr,re(20,xr,i.transitionOptions)):re(26,Dr,re(24,Ir,i.animating?i.transitionOptions:"0ms"))),m("id",i.id+"_content")("aria-labelledby",i.id+"_header")("aria-hidden",i.collapsed)("data-pc-section","toggleablecontent"),u(),m("data-pc-section","content"),u(2),l("ngTemplateOutlet",i.contentTemplate||i._contentTemplate)}},dependencies:[U,me,ge,ye,be,xe,Hn,Un,F],encapsulation:2,data:{animation:[jt("fieldsetContent",[gt("hidden",mt({height:"0"})),gt("visible",mt({height:"*"})),bt("visible <=> hidden",[ft("{{transitionParams}}")]),bt("void => *",ft(0))])]},changeDetection:0})}return t})(),qe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[Yt,F,F]})}return t})();var pi=["*"],Gr=["display"],zr=["content"],Hr=["closeicon"],Ur=[[["","pInplaceDisplay",""]],[["","pInplaceContent",""]]],Wr=["[pInplaceDisplay]","[pInplaceContent]"],qr=t=>({"p-inplace p-component":!0,"p-inplace-closable":t}),Qr=t=>({"p-disabled":t}),Kr=t=>({closeCallback:t});function Zr(t,o){t&1&&le(0)}function Yr(t,o){if(t&1){let e=X();h(0,"div",3),T("click",function(i){y(e);let r=d();return _(r.onActivateClick(i))})("keydown",function(i){y(e);let r=d();return _(r.onKeydown(i))}),Z(1),x(2,Zr,1,0,"ng-container",4),f()}if(t&2){let e=d();l("ngClass",re(2,Qr,e.disabled)),u(2),l("ngTemplateOutlet",e.displayTemplate||e._displayTemplate)}}function Xr(t,o){t&1&&le(0)}function Jr(t,o){if(t&1){let e=X();h(0,"button",10),T("click",function(i){y(e);let r=d(3);return _(r.onDeactivateClick(i))}),f()}if(t&2){let e=d(3);l("icon",e.closeIcon),m("aria-label",e.closeAriaLabel)}}function ea(t,o){t&1&&V(0,"TimesIcon")}function ta(t,o){}function na(t,o){t&1&&x(0,ta,0,0,"ng-template")}function ia(t,o){if(t&1){let e=X();h(0,"button",11),T("click",function(i){y(e);let r=d(3);return _(r.onDeactivateClick(i))}),x(1,ea,1,0,"TimesIcon",7)(2,na,1,0,null,4),f()}if(t&2){let e=d(3);l("ngClass","p-button-icon-only"),m("aria-label",e.closeAriaLabel),u(),l("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),u(),l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function oa(t,o){if(t&1&&(J(0),x(1,Jr,1,2,"button",8)(2,ia,3,4,"button",9),ee()),t&2){let e=d(2);u(),l("ngIf",e.closeIcon),u(),l("ngIf",!e.closeIcon)}}function ra(t,o){if(t&1&&(h(0,"div",5),Z(1,1),x(2,Xr,1,0,"ng-container",6)(3,oa,3,2,"ng-container",7),f()),t&2){let e=d();u(2),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",re(3,Kr,e.onDeactivateClick.bind(e))),u(),l("ngIf",e.closable)}}var aa=({dt:t})=>`
.p-inplace-display {
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    padding: ${t("inplace.padding")};
    border-radius: ${t("inplace.border.radius")};
    transition: background ${t("inplace.transition.duration")}, color ${t("inplace.transition.duration")}, outline-color ${t("inplace.transition.duration")}, box-shadow ${t("inplace.transition.duration")};
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: ${t("inplace.display.hover.background")};
    color: ${t("inplace.display.hover.color")};
}

.p-inplace-display:focus-visible {
    box-shadow: ${t("inplace.focus.ring.shadow")};
    outline: ${t("inplace.focus.ring.width")} ${t("inplace.focus.ring.style")} ${t("inplace.focus.ring.color")};
    outline-offset: ${t("inplace.focus.ring.offset")};
}

.p-inplace-content {
    display: block;
}
`,sa={root:"p-inplace p-component",display:({props:t})=>["p-inplace-display",{"p-disabled":t.disabled}],content:"p-inplace-content"},di=(()=>{class t extends B{name="inplace";theme=aa;classes=sa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})();var la=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["p-inplacedisplay"],["p-inplaceDisplay"]],ngContentSelectors:pi,decls:1,vars:0,template:function(n,i){n&1&&(te(),Z(0))},dependencies:[U],encapsulation:2})}return t})(),ua=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["p-inplacecontent"],["p-inplaceContent"]],ngContentSelectors:pi,decls:1,vars:0,template:function(n,i){n&1&&(te(),Z(0))},dependencies:[U],encapsulation:2})}return t})(),Xt=(()=>{class t extends A{active=!1;closable=!1;disabled=!1;preventClick;style;styleClass;closeIcon;closeAriaLabel;onActivate=new z;onDeactivate=new z;hover;displayTemplate;contentTemplate;closeIconTemplate;_componentStyle=I(di);onActivateClick(e){this.preventClick||this.activate(e)}onDeactivateClick(e){this.preventClick||this.deactivate(e)}activate(e){this.disabled||(this.active=!0,this.onActivate.emit(e),this.cd.markForCheck())}deactivate(e){this.disabled||(this.active=!1,this.hover=!1,this.onDeactivate.emit(e),this.cd.markForCheck())}onKeydown(e){e.code==="Enter"&&(this.activate(e),e.preventDefault())}templates;_displayTemplate;_closeIconTemplate;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"display":this._displayTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-inplace"]],contentQueries:function(n,i,r){if(n&1&&(H(r,Gr,4),H(r,zr,4),H(r,Hr,4),H(r,_e,4)),n&2){let a;j(a=G())&&(i.displayTemplate=a.first),j(a=G())&&(i.contentTemplate=a.first),j(a=G())&&(i.closeIconTemplate=a.first),j(a=G())&&(i.templates=a)}},inputs:{active:[2,"active","active",v],closable:[2,"closable","closable",v],disabled:[2,"disabled","disabled",v],preventClick:[2,"preventClick","preventClick",v],style:"style",styleClass:"styleClass",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel"},outputs:{onActivate:"onActivate",onDeactivate:"onDeactivate"},features:[$([di]),C],ngContentSelectors:Wr,decls:3,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-inplace-display","tabindex","0","role","button",3,"ngClass","click","keydown",4,"ngIf"],["class","p-inplace-content",4,"ngIf"],["tabindex","0","role","button",1,"p-inplace-display",3,"click","keydown","ngClass"],[4,"ngTemplateOutlet"],[1,"p-inplace-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],["type","button","pButton","","pRipple","",3,"icon","click",4,"ngIf"],["type","button","pButton","","pRipple","",3,"ngClass","click",4,"ngIf"],["type","button","pButton","","pRipple","",3,"click","icon"],["type","button","pButton","","pRipple","",3,"click","ngClass"]],template:function(n,i){n&1&&(te(Ur),h(0,"div",0),x(1,Yr,3,4,"div",1)(2,ra,4,5,"div",2),f()),n&2&&(E(i.styleClass),l("ngClass",re(7,qr,i.closable))("ngStyle",i.style),m("aria-live","polite"),u(),l("ngIf",!i.active),u(),l("ngIf",i.active))},dependencies:[U,me,ge,ye,be,xe,ui,Vt,F,Ft],encapsulation:2,changeDetection:0})}return t})(),hi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=O({type:t});static \u0275inj=N({imports:[Xt,ua,la,F,F]})}return t})();function da(t,o){if(t&1&&(h(0,"span",9),Q(1),f()),t&2){let e=d(2);u(),ct("",e.ingredient().name," ")}}function pa(t,o){if(t&1){let e=X();h(0,"input",10),T("ngModelChange",function(i){y(e);let r=d(2);return _(r.ingredient().setName(i))})("blur",function(){let i=y(e).closeCallback;return _(i())})("keydown.enter",function(){let i=y(e).closeCallback;return _(i())}),f()}if(t&2){let e=d(2);l("pAutoFocus",!0)("ngModel",e.ingredient().name)}}function ha(t,o){t&1&&(h(0,"p-inplace"),x(1,da,2,1,"ng-template",null,1,ke)(3,pa,1,2,"ng-template",null,2,ke),f())}var Tt=class t{ingredient=ie.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-ingredient"]],inputs:{ingredient:[1,"ingredient"]},decls:19,vars:15,consts:[["header",""],["display",""],["content",""],[1,"flex","flex-row","gap-6","mt-3"],["variant","on"],[3,"ngModelChange","inputId","ngModel","min","max","step"],[3,"for"],[3,"ngModelChange","inputId","ngModel","min","step"],["icon","pi pi-trash","aria-label","Delete","severity","danger","variant","text",3,"click"],[1,"cursor-pointer","decoration-dashed","hover:underline"],["pInputText","","placeholder","Ingredient name",3,"ngModelChange","blur","keydown.enter","pAutoFocus","ngModel"]],template:function(e,n){if(e&1){let i=X();h(0,"p-fieldset"),x(1,ha,5,0,"ng-template",null,0,ke),h(3,"div",3)(4,"p-inputgroup")(5,"p-floatlabel",4)(6,"p-inputnumber",5),T("ngModelChange",function(a){return y(i),_(n.ingredient().setPercentage(a))}),f(),h(7,"label",6),Q(8,"Percentage"),f()(),h(9,"p-inputgroup-addon"),Q(10,"%"),f()(),h(11,"p-inputgroup")(12,"p-floatlabel",4)(13,"p-inputnumber",7),T("ngModelChange",function(a){return y(i),_(n.ingredient().setWeight(a))}),f(),h(14,"label",6),Q(15,"Weight"),f()(),h(16,"p-inputgroup-addon"),Q(17,"g"),f()(),h(18,"p-button",8),T("click",function(){return y(i),_(n.ingredient().delete())}),f()()()}e&2&&(u(6),De("inputId","",n.ingredient().name,"-percentage"),l("ngModel",n.ingredient().percentage)("min",0)("max",100)("step",1),u(),De("for","",n.ingredient().name,"-percentage"),u(6),De("inputId","",n.ingredient().name,"-weight"),l("ngModel",n.ingredient().weight)("min",0)("step",1),u(),De("for","",n.ingredient().name,"-weight"))},dependencies:[Le,It,Dt,Fe,Qn,Mt,ze,Ge,He,tt,Ue,nt,We,it,qe,Yt,xe,ot,hi,Xt,jn,je],encapsulation:2})};var fa=(t,o)=>o.index;function ma(t,o){if(t&1&&V(0,"app-ingredient",1),t&2){let e=o.$implicit;l("ingredient",e)}}var $t=class t{ingredientType=ie.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-ingredient-group"]],inputs:{ingredientType:[1,"ingredientType"]},decls:6,vars:3,consts:[[1,"flex","flex-col","gap-4"],[3,"ingredient"],["icon","pi pi-plus","aria-label","Add ingredient","variant","text","severity","success",1,"self-end",3,"click","label"]],template:function(e,n){e&1&&(h(0,"div",0)(1,"h2"),Q(2),f(),lt(3,ma,1,1,"app-ingredient",1,fa),h(5,"p-button",2),T("click",function(){return n.ingredientType().addIngredient()}),f()()),e&2&&(u(2),fe(n.ingredientType().name),u(),ut(n.ingredientType().ingredients),u(2),De("label","Add ",n.ingredientType().value," ingredient"))},dependencies:[Le,ze,He,Ue,We,qe,Tt,xe,ot],encapsulation:2})};function mi(t){let o=t.ingredients.map(e=>({name:e.name,weight:e.percentage/100*t.flourAmount,percentage:e.percentage,type:e.type}));return{flourAmount:t.flourAmount,ingredients:o}}var ga=(t,o)=>o.name;function ba(t,o){if(t&1&&(h(0,"div",1),V(1,"app-ingredient-group",6),f()),t&2){let e=o.$implicit;u(),l("ingredientType",e)}}var gi=class t{dataService=I(yt);data=ue(()=>{let o=this.dataService.getRecipe("default"),e=mi(o()),n=e.ingredients.map((i,r)=>({index:r,ingredient:i}));return{flourAmount:e.flourAmount,setFlourAmount:i=>{o.update(r=>{let a=L(M({},r),{ingredients:[...r.ingredients]});return a.flourAmount=i,a})},totalWeight:e.ingredients.reduce((i,r)=>i+r.weight,0),ingredientTypes:Gt.map(i=>{let r=n.filter(({ingredient:s})=>s.type===i).map(({ingredient:s,index:c})=>({index:c,name:s.name,weight:s.weight,percentage:s.percentage,type:s.type,setName:g=>{o.update(p=>{let w=L(M({},p),{ingredients:[...p.ingredients]});return w.ingredients[c]=L(M({},w.ingredients[c]),{name:g}),w})},setWeight:g=>{o.update(p=>{let w=L(M({},p),{ingredients:[...p.ingredients]});return w.ingredients[c]=L(M({},w.ingredients[c]),{percentage:g/e.flourAmount*100}),w})},setPercentage:g=>{o.update(p=>{let w=L(M({},p),{ingredients:[...p.ingredients]});return w.ingredients[c]=L(M({},w.ingredients[c]),{percentage:g}),w})},delete:()=>{o.update(g=>{let p=L(M({},g),{ingredients:[...g.ingredients]});return p.ingredients.splice(c,1),p})}})),a=r.map(s=>s.weight).reduce((s,c)=>s+c,0);return{name:i.charAt(0).toUpperCase()+i.slice(1),value:i,total:a,ingredients:r,addIngredient:()=>{o.update(s=>{let c=L(M({},s),{ingredients:[...s.ingredients]});return c.ingredients.push({name:"New ingredient",percentage:0,type:i}),c})}}})}});ingredientTypes=Gt;value=0;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-calculator"]],decls:14,vars:5,consts:[[1,"text-xl","mb-4"],[1,"mb-4"],[1,"mb-6"],["variant","on"],["inputId","total-flour-weight",3,"ngModelChange","ngModel"],["for","total-flour-weight"],[3,"ingredientType"]],template:function(e,n){e&1&&(h(0,"h1",0),Q(1,"Calculator"),f(),h(2,"p",1),Q(3),cn(4,"number"),f(),h(5,"p-inputgroup",2)(6,"p-floatlabel",3)(7,"p-inputnumber",4),T("ngModelChange",function(r){return n.data().setFlourAmount(r)}),f(),h(8,"label",5),Q(9,"Flour"),f()(),h(10,"p-inputgroup-addon"),Q(11,"g"),f()(),lt(12,ba,2,1,"div",1,ga)),e&2&&(u(3),ct("Total weight: ",dn(4,2,n.data().totalWeight,"1.0-2")," g"),u(4),l("ngModel",n.data().flourAmount),u(5),ut(n.data().ingredientTypes))},dependencies:[U,hn,Le,Dt,Fe,ze,Ge,He,tt,Ue,nt,We,it,qe,$t],encapsulation:2})};export{gi as CalculatorComponent};
