webpackJsonp([15],{FYj8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("e8iq"),i={data:function(){return{formLabelWidth:"160px",detail:{email:"",name:"",phone:"",birthday:"",gender:"",eduBackground:"",workExperience:"",expectSalary:"",expectCity:"",address:"",description:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(l.e)().then(function(t){e.detail=t.data})},handleSave:function(){var e=this;Object(l.g)(this.detail).then(function(t){e.fetchData()})}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{model:e.detail}},[a("el-form-item",{attrs:{label:"Email","label-width":e.formLabelWidth}},[a("el-input",{attrs:{disabled:!0},model:{value:e.detail.email,callback:function(t){e.$set(e.detail,"email",t)},expression:"detail.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Name","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.detail.name,callback:function(t){e.$set(e.detail,"name",t)},expression:"detail.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Phone","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.detail.phone,callback:function(t){e.$set(e.detail,"phone",t)},expression:"detail.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Birthday","label-width":e.formLabelWidth}},[a("el-date-picker",{attrs:{type:"date"},model:{value:e.detail.birthday,callback:function(t){e.$set(e.detail,"birthday",t)},expression:"detail.birthday"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Gender","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.detail.gender,callback:function(t){e.$set(e.detail,"gender",t)},expression:"detail.gender"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Edu Background","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.detail.eduBackground,callback:function(t){e.$set(e.detail,"eduBackground",t)},expression:"detail.eduBackground"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Work Experience","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.detail.workExperience,callback:function(t){e.$set(e.detail,"workExperience",t)},expression:"detail.workExperience"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Expect Salary","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.detail.expectSalary,callback:function(t){e.$set(e.detail,"expectSalary",t)},expression:"detail.expectSalary"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Expect City","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.detail.expectCity,callback:function(t){e.$set(e.detail,"expectCity",t)},expression:"detail.expectCity"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Address","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.detail.address,callback:function(t){e.$set(e.detail,"address",t)},expression:"detail.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Description","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.detail.description,callback:function(t){e.$set(e.detail,"description",t)},expression:"detail.description"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":e.formLabelWidth}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSave()}}},[e._v("save")])],1)],1)],1)},staticRenderFns:[]},r=a("VU/8")(i,d,!1,null,null,null);t.default=r.exports}});