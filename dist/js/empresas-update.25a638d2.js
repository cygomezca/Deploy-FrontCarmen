(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["empresas-update"],{b46b:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.selectedEmpresas?t("div",[t("empresa-form",{attrs:{empresa:e.selectedEmpresas,submitText:"Actualizar Empresa"},on:{submitForm:e.updateEmpresa}})],1):e._e()},r=[],p=t("5530"),m=t("2f62"),c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("empresas-list")},n=[],u={name:"EmpresasForm",mounted:function(){this.fetchEmpresas()},computed:Object(p["a"])({},Object(m["e"])("empresas",["empresas"])),methods:Object(p["a"])(Object(p["a"])(Object(p["a"])({},Object(m["b"])("empresas",["fetchEmpresas"])),Object(m["d"])("empresas",["setEmpresa"])),{},{goToUpdateEmpresa:function(){this.setEmpresa(this.empresas),this.$router.push({name:"empresas-update",params:{id:this.empresa.id}})}})},o=u,i=t("2877"),d=Object(i["a"])(o,c,n,!1,null,null,null),b=d.exports,l={name:"EmpresaUpdate",components:{EmpresasForm:b},computed:Object(p["a"])({},Object(m["e"])("empresas",["selectedEmpresa"])),methods:Object(p["a"])(Object(p["a"])({},Object(m["b"])({_updateEmpresa:"empresas/updateEmpresa"})),{},{updateEmpresa:function(e){var s=this;this._updateEmpresa(e).then((function(){s.$router.push({name:"empresas"})}))}})},E=l,h=Object(i["a"])(E,a,r,!1,null,null,null);s["default"]=h.exports}}]);
//# sourceMappingURL=empresas-update.25a638d2.js.map