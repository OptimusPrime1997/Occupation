webpackJsonp([14],{papn:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("dnPc"),i={data:function(){return{filterText:"",list:null,listLoading:!0,dialogFormVisible:!1,dialogFormVisible1:!1,formLabelWidth:"160px",detail:{email:"",name:"",phone:"",birthday:"",gender:"",eduBackground:"",workExperience:"",expectSalary:"",expectCity:"",address:"",description:""},choseJobId:"",choseEe:""}},created:function(){this.fetchData()},computed:{filteredList:function(){var e=this.list,t=this.filterText;return t?(t=t.trim().toLowerCase(),e=e.filter(function(e){if(-1!==e.email.toLowerCase().indexOf(t)||-1!==e.name.toLowerCase().indexOf(t)||-1!==e.description.toLowerCase().indexOf(t))return e}),e):e}},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.c)().then(function(t){e.list=t.data,e.listLoading=!1})},reportEmployee:function(e){var t=this;Object(a.m)(e).then(function(e){t.fetchData()})},handleOffer:function(){var e=this;Object(a.l)(this.choseJobId,this.choseEe).then(function(t){e.dialogFormVisible1=!1,e.fetchData()})}}},n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Search"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.filteredList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",label:"Email",width:"110",prop:"Email"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.email)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Name",width:"90",align:"center",prop:"Name",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Phone",width:"110",prop:"Phone"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.phone)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Birthday",width:"120",prop:"Birthday",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("i",{staticClass:"el-icon-time"}),e._v(" "),l("span",[e._v(e._s(t.row.birthday))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Gender",width:"100",prop:"Gender",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.gender)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Edu Background",width:"170",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.eduBackground)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Work Experience",width:"170",align:"center",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.workExperience)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Expect Salary",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.expectSalary)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Expect City",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.expectCity)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Address"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.address)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"Operation",width:"260",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:function(l){e.dialogFormVisible=!0,e.detail=t.row}}},[e._v("detail")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(l){e.dialogFormVisible1=!0,e.choseEe=t.row.email}}},[e._v("offer")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){e.reportEmployee(t.row.email)}}},[e._v("report")])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{title:"Employee Detail",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{attrs:{model:e.detail}},[l("el-form-item",{attrs:{label:"Email","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.email,callback:function(t){e.$set(e.detail,"email",t)},expression:"detail.email"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Name","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.name,callback:function(t){e.$set(e.detail,"name",t)},expression:"detail.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Phone","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.phone,callback:function(t){e.$set(e.detail,"phone",t)},expression:"detail.phone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Birthday","label-width":e.formLabelWidth}},[l("el-date-picker",{attrs:{type:"date",disabled:!0},model:{value:e.detail.birthday,callback:function(t){e.$set(e.detail,"birthday",t)},expression:"detail.birthday"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Gender","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.gender,callback:function(t){e.$set(e.detail,"gender",t)},expression:"detail.gender"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Edu Background","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.eduBackground,callback:function(t){e.$set(e.detail,"eduBackground",t)},expression:"detail.eduBackground"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Work Experience","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.workExperience,callback:function(t){e.$set(e.detail,"workExperience",t)},expression:"detail.workExperience"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Expect Salary","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.expectSalary,callback:function(t){e.$set(e.detail,"expectSalary",t)},expression:"detail.expectSalary"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Expect City","label-width":e.formLabelWidth}},[l("el-input",{attrs:{disabled:!0},model:{value:e.detail.expectCity,callback:function(t){e.$set(e.detail,"expectCity",t)},expression:"detail.expectCity"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Address","label-width":e.formLabelWidth}},[l("el-input",{attrs:{type:"textarea",disabled:!0},model:{value:e.detail.address,callback:function(t){e.$set(e.detail,"address",t)},expression:"detail.address"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Description","label-width":e.formLabelWidth}},[l("el-input",{attrs:{type:"textarea",disabled:!0},model:{value:e.detail.description,callback:function(t){e.$set(e.detail,"description",t)},expression:"detail.description"}})],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"Choose Job",visible:e.dialogFormVisible1},on:{"update:visible":function(t){e.dialogFormVisible1=t}}},[l("el-form",[l("el-form-item",{attrs:{label:"Job Id","label-width":e.formLabelWidth}},[l("el-input-number",{model:{value:e.choseJobId,callback:function(t){e.choseJobId=t},expression:"choseJobId"}})],1),e._v(" "),l("el-form-item",{attrs:{"label-width":e.formLabelWidth}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleOffer()}}},[e._v("Send")])],1)],1)],1)],1)},staticRenderFns:[]},o=l("VU/8")(i,n,!1,null,null,null);t.default=o.exports}});