(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{204:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),o=n(33),c=n.n(o),s=(n(204),n(205),n(308)),u=n(86),l=n(68),d=n(32),h=n(48),p=n(49),A=n(57),j=n(56),b=n(9),g=function(e){Object(A.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsx)("h1",{children:"\u7535\u5f71\u9996\u9875"})}}]),n}(i.a.Component),f=n(25),v=n.n(f),m=n(35),E=n(44),O=n(193),Q=n(311),x=n(192),y=n(106),C=n(313),k=n(315),I=n(39),w=n(310),B=n(314),S=n(317),N=function(e){Object(A.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e}return Object(p.a)(n,[{key:"getUploadContent",value:function(){return this.props.curImageUrl?null:Object(b.jsxs)("div",{children:[Object(b.jsx)(S.a,{}),Object(b.jsx)("div",{children:"\u70b9\u51fb\u4e0a\u4f20"})]})}},{key:"getFileList",value:function(){return this.props.curImageUrl?[{uid:this.props.curImageUrl,name:this.props.curImageUrl,url:this.props.curImageUrl}]:[]}},{key:"handleRequest",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append(t.filename,t.file),a=new Request(t.action,{method:"post",body:n}),e.next=5,fetch(a).then((function(e){return e.json()}));case 5:(r=e.sent).err?O.b.error("\u4e0a\u4f20\u5931\u8d25"):this.props.onChange&&this.props.onChange(r.data);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(w.a,{action:"/api/upload",name:"imagefile",listType:"picture-card",accept:".jpg,.png,.jiff,.jpeg,.bmp,.gif",fileList:this.getFileList(),customRequest:this.handleRequest.bind(this),onRemove:function(){e.props.onChange&&e.props.onChange("")},onPreview:function(){e.setState({showModal:!0})},children:this.getUploadContent()}),Object(b.jsx)(B.a,{width:500,visible:this.state.showModal,onCancel:function(){e.setState({showModal:!1})},footer:[],children:Object(b.jsx)("img",{alt:"example",style:{width:"95%",margin:"auto"},src:this.props.curImageUrl})})]})}}]),n}(i.a.Component),J=(n(275),[{label:"\u4e2d\u56fd\u5927\u9646",value:"\u4e2d\u56fd\u5927\u9646"},{label:"\u4e2d\u56fd\u9999\u6e2f",value:"\u4e2d\u56fd\u9999\u6e2f"},{label:"\u97e9\u56fd",value:"\u97e9\u56fd"},{label:"\u65e5\u672c",value:"\u65e5\u672c"},{label:"\u7f8e\u56fd",value:"\u7f8e\u56fd"}]),K=[{label:"\u7231\u60c5",value:"\u7231\u60c5"},{label:"\u559c\u5267",value:"\u559c\u5267"},{label:"\u52a8\u4f5c",value:"\u52a8\u4f5c"},{label:"\u6218\u4e89",value:"\u6218\u4e89"},{label:"\u707e\u96be",value:"\u707e\u96be"}],M=function(e){Object(A.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={image:"",movie:{}},e}return Object(p.a)(n,[{key:"onFinish",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,a=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.poster=this.state.image,e.next=3,this.props.onSubmit(t);case 3:return(n=e.sent)?O.b.success("\u63d0\u4ea4\u6210\u529f",1,(function(){console.log("over"),a.props.onSuccessCallback()})):O.b.error("\u63d0\u4ea4\u5931\u8d25"),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onFinishFailed",value:function(e){console.log("Failed:",e)}},{key:"componentDidMount",value:function(){var e=this.props.movie;e&&this.setState({movie:e,image:e.poster})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(Q.a,{initialValues:Object(E.a)(Object(E.a)({},this.props.movie),{},{poster:this.state.image}),labelCol:{span:5},wrapperCol:{span:20,offset:1},style:{width:"400px"},onFinish:this.onFinish.bind(this),onFinishFailed:this.onFinishFailed.bind(this),children:[Object(b.jsx)(Q.a.Item,{label:"\u7535\u5f71\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u7535\u5f71\u540d\u79f0"}],children:Object(b.jsx)(x.a,{})}),Object(b.jsx)(Q.a.Item,{label:"\u5c01\u9762\u56fe",name:"poster",valuePropName:"poster",getValueFromEvent:function(t){e.setState({image:t})},children:Object(b.jsx)(N,{curImageUrl:this.state.image})}),Object(b.jsx)(Q.a.Item,{label:"\u5730\u533a",name:"areas",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5730\u533a"}],children:Object(b.jsx)(y.a.Group,{options:J})}),Object(b.jsx)(Q.a.Item,{label:"\u7c7b\u578b",name:"types",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7c7b\u578b"}],children:Object(b.jsx)(y.a.Group,{options:K})}),Object(b.jsx)(Q.a.Item,{label:"\u65f6\u957f\uff08\u5206\u949f\uff09",name:"timeLong",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65f6\u957f"}],children:Object(b.jsx)(C.a,{min:1,step:10})}),Object(b.jsx)(Q.a.Item,{label:"\u6b63\u5728\u70ed\u6620",name:"isHot",valuePropName:"checked",children:Object(b.jsx)(k.a,{})}),Object(b.jsx)(Q.a.Item,{label:"\u5373\u5c06\u4e0a\u6620",name:"isComing",valuePropName:"checked",children:Object(b.jsx)(k.a,{})}),Object(b.jsx)(Q.a.Item,{label:"\u7ecf\u5178\u7535\u5f71",name:"isClassic",valuePropName:"checked",children:Object(b.jsx)(k.a,{})}),Object(b.jsx)(Q.a.Item,{label:"\u63cf\u8ff0",name:"description",children:Object(b.jsx)(x.a.TextArea,{})}),Object(b.jsx)(Q.a.Item,{labelCol:{span:5},wrapperCol:{span:20,offset:5},children:Object(b.jsx)(I.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]})}}]),n}(i.a.Component),R=M,U=n(107),F=n.n(U),P=function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,null,[{key:"add",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("/api/movie",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(m.a)(v.a.mark((function e(t,n){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.put("/api/movie/"+t,n);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.delete("/api/movie/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/api/movie/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=Object(m.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("/api/movie/",{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),L=function(e){Object(A.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={image:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(R,{onSubmit:function(){var e=Object(m.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.add(t);case 2:if(!e.sent.err){e.next=7;break}return e.abrupt("return",!1);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onSuccessCallback:function(){console.log("aa"),e.props.history.push("/movie")}})}}]),n}(i.a.Component),D=function(e){Object(A.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movie:void 0},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getMovieById(this.props.match.params.id);case 2:t=e.sent,console.log(t,"rep"),t.data&&this.setState({movie:t.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:this.state.movie&&Object(b.jsx)(R,{movie:this.state.movie,onSubmit:function(){var t=Object(m.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.edit(e.props.match.params.id,n);case 2:if(!t.sent.err){t.next=7;break}return t.abrupt("return",!1);case 7:return t.abrupt("return",!0);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onSuccessCallback:function(){console.log("aa"),e.props.history.push("/movie")}})})}}]),n}(i.a.Component),H=n(312),Y=n(316),z=n(309);!function(e){e.isHot="isHot",e.isComing="isComing",e.isClassic="isClassic"}(a||(a={}));var q=n(105),T=function(e){Object(A.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onLoad&&this.props.onLoad()}},{key:"handleSearch",value:function(){this.props.onSearch()}},{key:"getFilterDropDown",value:function(){var e=this;return Object(b.jsxs)("div",{style:{padding:8},children:[Object(b.jsx)(x.a,{style:{width:188,marginBottom:8,display:"block"},value:this.props.condition.key,onChange:function(t){return e.props.onKeyChange(t.target.value)},onPressEnter:function(){return e.handleSearch()}}),Object(b.jsx)(I.a,{type:"primary",size:"small",style:{width:90,marginRight:8},onClick:function(){return e.handleSearch()},children:"\u641c\u7d22"}),Object(b.jsx)(I.a,{size:"small",style:{width:90},onClick:function(){e.props.onKeyChange(""),e.handleSearch()},children:"\u91cd\u7f6e"})]})}},{key:"getColumns",value:function(){var e=this;return[{title:"\u5c01\u9762",dataIndex:"poster",render:function(e){return e?Object(b.jsx)(H.a,{width:50,height:50,src:e,preview:!1}):Object(b.jsx)(H.a,{width:50,height:50,src:"error",fallback:"data:image/png;base64,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"})}},{title:"\u540d\u79f0",dataIndex:"name",filterDropdown:this.getFilterDropDown.bind(this),filterIcon:Object(b.jsx)(q.a,{})},{title:"\u5730\u533a",dataIndex:"areas",render:function(e){return e.join(", ")}},{title:"\u7c7b\u578b",dataIndex:"types",render:function(e){return e.join(", ")}},{title:"\u65f6\u957f",dataIndex:"timeLong",render:function(e){return e+"\u5206\u949f"}},{title:"\u6b63\u5728\u70ed\u6620",dataIndex:"isHot",render:function(t,n){return Object(b.jsx)(k.a,{checked:t,onChange:function(t){e.props.onSwitchChange(a.isHot,t,n._id)}})}},{title:"\u5373\u5c06\u4e0a\u6620",dataIndex:"isComing",render:function(t,n){return Object(b.jsx)(k.a,{checked:t,onChange:function(t){e.props.onSwitchChange(a.isComing,t,n._id)}})}},{title:"\u7ecf\u5178\u5f71\u7247",dataIndex:"isClassic",render:function(t,n){return Object(b.jsx)(k.a,{checked:t,onChange:function(t){e.props.onSwitchChange(a.isClassic,t,n._id)}})}},{title:"\u7968\u623f",dataIndex:"boxOffice"},{title:"\u64cd\u4f5c",dataIndex:"_id",render:function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(l.b,{to:"/movie/edit/"+t,children:Object(b.jsx)(I.a,{type:"primary",children:"\u7f16\u8f91"})}),Object(b.jsx)(Y.a,{title:"\u786e\u5b9a\u8981\u5220\u9664\uff1f",onConfirm:function(){e.props.onDelete(t)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:Object(b.jsx)(I.a,{type:"default",children:"\u5220\u9664"})})]})}}]}},{key:"getPageConfig",value:function(){return!!this.props.total&&{current:this.props.condition.page,pageSize:this.props.condition.limit,total:this.props.total}}},{key:"handleChange",value:function(e){this.props.onPageChange(e.current)}},{key:"render",value:function(){return Object(b.jsx)(z.a,{rowKey:"_id",dataSource:this.props.data,columns:this.getColumns(),loading:this.props.isLoading,pagination:this.getPageConfig(),onChange:this.handleChange.bind(this)})}}]),n}(i.a.Component),Z=n(143),G=n(127);function X(e,t){return{type:"movie_save",payload:{movies:e,total:t}}}function W(e){return{type:"movie_setLoading",payload:e}}function V(e){return{type:"movie_setCondition",payload:e}}function _(e){return{type:"movie_delete",payload:e}}function $(e,t,n){return{type:"movie_switch",payload:{type:e,newVal:t,id:n}}}var ee={saveMoviesAction:X,setConditionAction:V,setLoadingAction:W,deleteAction:_,fetchMovies:function(e){return function(){var t=Object(m.a)(v.a.mark((function t(n,a){var r,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(W(!0)),n(V(e)),r=a().movie.condition,t.next=5,P.getMovies(r);case 5:i=t.sent,n(X(i.data,i.total)),n(W(!1));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},deleteMovie:function(e){return function(){var t=Object(m.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(W(!0)),t.next=3,P.delete(e);case 3:n(_(e)),n(W(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeSwitchAction:$,changeSwitch:function(e,t,n){return function(){var a=Object(m.a)(v.a.mark((function a(r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r($(e,t,n)),a.next=3,P.edit(n,Object(G.a)({},e,t));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}};var te=Object(Z.b)((function(e){return e.movie}),(function(e){return{onLoad:function(){e(ee.fetchMovies({page:1,limit:10,key:""}))},onSwitchChange:function(t,n,a){e(ee.changeSwitch(t,n,a))},onDelete:function(t){return Object(m.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(ee.deleteMovie(t));case 2:case"end":return n.stop()}}),n)})))()},onPageChange:function(t){e(ee.fetchMovies({page:t}))},onKeyChange:function(t){e(ee.setConditionAction({key:t}))},onSearch:function(){e(ee.fetchMovies({page:1}))}}}))(T),ne=s.a.Header,ae=s.a.Sider,re=s.a.Content,ie=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(ne,{className:"header",children:Object(b.jsx)(l.b,{to:"/",children:"\u732b\u773c\u7535\u5f71\u7ba1\u7406\u7cfb\u7edf"})}),Object(b.jsxs)(s.a,{children:[Object(b.jsx)(ae,{children:Object(b.jsxs)(u.a,{mode:"inline",theme:"dark",children:[Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(l.b,{to:"/",children:"\u9996\u9875"})},"1"),Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(l.b,{to:"/movie",children:"\u7535\u5f71\u5217\u8868"})},"2"),Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(l.b,{to:"/movie/add",children:"\u6dfb\u52a0\u7535\u5f71"})},"3"),Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(l.b,{to:"/movie/edit/234",children:"\u7f16\u8f91\u7535\u5f71"})},"4")]})}),Object(b.jsx)(re,{children:Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(d.a,{path:"/",component:g,exact:!0}),Object(b.jsx)(d.a,{path:"/movie",component:te,exact:!0}),Object(b.jsx)(d.a,{path:"/movie/add",component:L}),Object(b.jsx)(d.a,{path:"/movie/edit/:id",component:D})]})})]})]})})},oe=n(117),ce={data:[],condition:{page:1,limit:10,key:""},total:0,isLoading:!1,totalPage:0},se=function(e,t){return Object.assign({},e,{total:t.payload.total,data:t.payload.movies,totalPage:Math.ceil(t.payload.total/e.condition.limit)})},ue=function(e,t){var n=Object(E.a)(Object(E.a)({},e),{},{condition:Object(E.a)(Object(E.a)({},e.condition),t.payload)});return n.totalPage=Math.ceil(n.total/n.condition.limit),n},le=function(e,t){return Object(E.a)(Object(E.a)({},e),{},{isLoading:t.payload})},de=function(e,t){return Object(E.a)(Object(E.a)({},e),{},{data:e.data.filter((function(e){return e._id!==t.payload})),total:e.total-1,totalPage:Math.ceil((e.total-1)/e.condition.limit)})},he=function(e,t){var n=e.data.find((function(e){return e._id===t.payload.id}));if(!n)return e;var a=Object(E.a)({},n);a[t.payload.type]=t.payload.newVal;var r=e.data.map((function(e){return e._id===t.payload.id?a:e}));return Object(E.a)(Object(E.a)({},e),{},{data:r})},pe=Object(oe.b)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"movie_save":return se(e,t);case"movie_setCondition":return ue(e,t);case"movie_setLoading":return le(e,t);case"movie_delete":return de(e,t);case"movie_switch":return he(e,t);default:return e}}}),Ae=n(189),je=n.n(Ae),be=n(190),ge=Object(oe.c)(pe,Object(oe.a)(be.a,je.a));var fe=function(){return Object(b.jsx)(Z.a,{store:ge,children:Object(b.jsx)(l.a,{children:Object(b.jsx)(d.a,{path:"/",component:ie})})})};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(fe,{})}),document.getElementById("root"))}},[[307,1,2]]]);
//# sourceMappingURL=main.f69ae03e.chunk.js.map