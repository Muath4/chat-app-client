(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7533:function(e,t,n){Promise.resolve().then(n.t.bind(n,4817,23)),Promise.resolve().then(n.bind(n,7648))},7648:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var o=n(9268),s=n(6006),r=n(2477),a=n(3709),i=n(4425),c=n.n(i);let l=e=>{let{setRoomId:t,setUser:n,userName:i}=e,[l,u]=(0,s.useState)(""),m=e=>{e.preventDefault(),t(l)};return(0,o.jsxs)("form",{className:c().form,onSubmit:m,children:[(0,o.jsx)(r.Z,{id:"outlined-basic",label:"enter your name",variant:"outlined",onChange:e=>n(e.target.value),value:i,type:"text"}),(0,o.jsx)(r.Z,{id:"outlined-basic",label:"Enter room ID",variant:"outlined",onChange:e=>{var t;null==(t=e.target.value)||isNaN(Number(t.toString()))||u(e.target.value)},value:l,type:"text",inputMode:"numeric"}),(0,o.jsx)(a.Z,{variant:"outlined",type:"submit",disabled:!i||!l,children:"Submit"})]})};var u=n(5644),m=n(1752),d=n(4992),_=n.n(d),g=n(6394),h=n.n(g);let v=e=>{let{roomId:t,setRoomId:n,userName:i,setMessages:c,setUserCount:l}=e,[d,g]=(0,s.useState)(""),[v,p]=(0,s.useState)(null);(0,s.useEffect)(()=>{if(t){let e=e=>{c(t=>[...t,{user:"System",text:e}])},o=(e,t)=>{c(n=>[...n,{user:e,text:t}])},s=e=>{l(e)},r=new u.s().withUrl("https://mchatapp.azurewebsites.net/chatHub").withAutomaticReconnect().build();return r.start().then(async()=>{console.log("Connection started"),await r.invoke("JoinRoom",t,i)}).catch(e=>console.error("Error while starting connection: "+e)),r.on("ReceiveSystemMessage",e),r.on("LeaveRoom",e),r.on("ReceiveMessage",o),r.on("UpdateUserCount",s),r.onreconnecting(e=>{console.log("try to reconnect")}),r.onclose(e=>{console.log("lost the connection"),n("")}),p(r),()=>{r&&r.state===m.A.Connected&&r.invoke("LeaveRoom",t).then(()=>{r.stop().then(()=>{console.log("Connection stopped")}).catch(e=>console.error("Error while stopping connection: "+e))})}}},[t,c]);let f=async e=>{if(e.preventDefault(),v)try{await v.invoke("SendMessage",t,i,d),g("")}catch(e){console.error(e)}},x=async()=>{if(v&&v.state===m.A.Connected)try{await v.invoke("LeaveRoom",t,i),await v.stop(),c([]),n("")}catch(e){console.error(e)}};return(0,o.jsxs)("form",{className:_().form,onSubmit:f,children:[(0,o.jsx)(r.Z,{id:"outlined-basic",label:"Message",variant:"outlined",onChange:e=>g(e.target.value),value:d,type:"text"}),(0,o.jsx)(a.Z,{variant:"outlined",type:"submit",disabled:!i||!d,children:"Send"}),(0,o.jsx)(a.Z,{variant:"outlined",onClick:x,color:"error",size:"small",endIcon:(0,o.jsx)(h(),{src:"/exit.svg",alt:"Logo",width:30,height:30}),children:"Leave the room"})]})};var p=n(7712),f=n.n(p);let x=e=>{let{messages:t}=e,n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{n.current&&n.current.scrollIntoView({behavior:"smooth"})},[t]),(0,o.jsx)("div",{className:f().messageListBox,children:t.map((e,s)=>(0,o.jsxs)("div",{className:f().message,ref:s===t.length-1?n:null,children:[(0,o.jsxs)("strong",{children:[e.user,":"]})," ",e.text]},s))})};var b=n(2001),C=n.n(b);let j=()=>{let[e,t]=(0,s.useState)(""),[n,r]=(0,s.useState)(""),[a,i]=(0,s.useState)([]),[c,u]=(0,s.useState)(0);return(0,o.jsxs)("div",{className:C().mainChat,children:[!e&&(0,o.jsx)(l,{setRoomId:t,setUser:r,userName:n}),e&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("h4",{className:C().userCount,children:["User count in this room: ",c]}),(0,o.jsx)(x,{messages:a}),(0,o.jsx)(v,{roomId:e,setRoomId:t,userName:n,setMessages:i,setUserCount:u})]})]})};var S=j},2001:function(e){e.exports={mainChat:"ChatForm_mainChat__SyuwC",userCount:"ChatForm_userCount__PiUfS"}},4425:function(e){e.exports={form:"JoinRoomForm_form__nDvMH"}},4992:function(e){e.exports={form:"MessageForm_form__X9q7f"}},7712:function(e){e.exports={messageListBox:"MessageList_messageListBox__VZKj0",message:"MessageList_message__rcufl"}},4817:function(e){e.exports={main:"page_main__ibFHK",description:"page_description__s_Lqk",code:"page_code__Cdcue",grid:"page_grid__2WZXq",card:"page_card__ftWzl",center:"page_center__GvJ9Y",logo:"page_logo__M5piD",content:"page_content__rFejU",vercelLogo:"page_vercelLogo__1QD2W",rotate:"page_rotate__P15uU"}}},function(e){e.O(0,[173,667,139,744],function(){return e(e.s=7533)}),_N_E=e.O()}]);