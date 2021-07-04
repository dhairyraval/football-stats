(this["webpackJsonpfootball-stats"]=this["webpackJsonpfootball-stats"]||[]).push([[0],{158:function(e,t,a){},237:function(e,t,a){},261:function(e,t,a){},305:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(57),i=a.n(s),r=(a(237),a(72)),l=a(21),o=a(31),j=a.n(o),d=a(58),b=a(13),h=(a(158),a(476)),u=a(462),O=a(2),m=function(e){var t=e.id,a=e.name,n=e.lastUpdated,c=e.currentSeason;return Object(O.jsxs)(u.a,{children:[Object(O.jsx)(h.a,{align:"center",children:Object(O.jsx)(r.b,{to:{pathname:"/standings",aboutProps:{id:{id:t}}},children:a})}),Object(O.jsx)(h.a,{align:"center",children:null===c?"TBD":c.startDate}),Object(O.jsx)(h.a,{align:"center",children:null===c?"TBD":c.endDate}),Object(O.jsx)(h.a,{align:"center",children:n})]},t)},p=a(73),x=a.n(p),f=a(466),g=a(468),v=a(464),y=a(467),T=a(463),N=a(465),w=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),r=i[0],l=i[1],o=Object(n.useState)(!1),p=Object(b.a)(o,2),w=p[0],S=p[1],C=[2e3,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021,2152],D=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v2/competitions/",{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95"}}).then((function(e){c(e.data.competitions)}));case 3:S(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){D()}),[]);var k=a.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())&&C.includes(e.id)}));return Object(O.jsx)("div",{className:"mainDiv",children:Object(O.jsx)("div",{className:"secondaryDiv",children:w?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"mainHeading",children:"FOOTY"}),Object(O.jsx)("h3",{className:"subHeading",children:"Made by Dhairy Raval"}),Object(O.jsx)("p",{className:"searchText",children:"Search football competitions"}),Object(O.jsx)("form",{className:"competitionInputForm",children:Object(O.jsx)("input",{type:"text",placeholder:"Search Name",className:"competitionInput",onChange:function(e){l(e.target.value)}})}),Object(O.jsx)("br",{}),Object(O.jsx)(T.a,{children:Object(O.jsx)(v.a,{className:"mainTableContainer",component:N.a,elevation:8,children:Object(O.jsxs)(f.a,{className:"mainTable","aria-label":"simple table",children:[Object(O.jsx)(y.a,{children:Object(O.jsxs)(u.a,{className:"headingRow",children:[Object(O.jsx)(h.a,{align:"center",children:Object(O.jsx)("p",{className:"headingCellText",children:"Competition Name"})}),Object(O.jsx)(h.a,{align:"center",children:Object(O.jsx)("p",{className:"headingCellText",children:"Current Season Start"})}),Object(O.jsx)(h.a,{align:"center",children:Object(O.jsx)("p",{className:"headingCellText",children:"Current Season End"})}),Object(O.jsx)(h.a,{align:"center",children:Object(O.jsx)("p",{className:"headingCellText",children:"Last Updated"})})]})}),Object(O.jsx)(g.a,{children:k.map((function(e){return 2014===e.id&&(e.name="La Liga"),Object(O.jsx)(m,{id:e.id,name:e.name,currentSeason:e.currentSeason,lastUpdated:e.lastUpdated},e.id)}))})]})})}),Object(O.jsx)("p",{className:"subText",children:"All football data provided by the Football-Data.org API"})]}):Object(O.jsx)("p",{children:"Loading . . ."})})})},S=(a(261),function(e){var t=e.standings,a=e.match,c=Object(n.useState)(null),s=Object(b.a)(c,2),i=s[0],r=s[1],l=Object(n.useState)(null),o=Object(b.a)(l,2),m=o[0],p=o[1],x=Object(n.useState)(0),g=Object(b.a)(x,2),w=g[0],S=g[1],C=Object(n.useState)(!0),D=Object(b.a)(C,2),k=D[0],L=D[1];console.log(t),console.log(a);var F=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==a.homeTeam.id&&null!==a.awayTeam.id){e.next=4;break}return S(1),L(!0),e.abrupt("return");case 4:t.forEach((function(e){e.table.forEach((function(e){e.team.id===a.homeTeam.id?r(e.team.crestUrl):e.team.id===a.awayTeam.id&&p(e.team.crestUrl)}))}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){F()}),[]),Object(O.jsx)(O.Fragment,{children:k?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(T.a,{container:!0,style:{marginTop:"2em"},children:Object(O.jsx)(v.a,{className:"matchTableContainer",component:N.a,elevation:6,children:Object(O.jsx)(f.a,{className:"matchTable","aria-label":"simple table",children:Object(O.jsx)(y.a,{children:Object(O.jsxs)(u.a,{className:"matchTableRow",children:[Object(O.jsx)(h.a,{style:{width:"30%"},children:Object(O.jsx)("div",{className:"matchTeamContainer",children:1===w?"TBA":Object(O.jsxs)(O.Fragment,{children:[a.homeTeam.name,null!==i?Object(O.jsx)("img",{src:i,alt:"homeTeamLogo",className:"teamLogo"}):null]})})}),Object(O.jsx)(h.a,{children:Object(O.jsx)("div",{className:"matchScoreContainer",children:"SCHEDULED"===a.status?Object(O.jsx)("p",{children:"vs."}):Object(O.jsxs)("p",{children:[a.score.fullTime.homeTeam," -","  ",a.score.fullTime.awayTeam]})})}),Object(O.jsx)(h.a,{style:{width:"30%"},children:Object(O.jsx)("div",{className:"matchTeamContainer",children:1===w?"TBA":Object(O.jsxs)(O.Fragment,{children:[a.awayTeam.name,null!==m?Object(O.jsx)("img",{src:m,alt:"awayTeamLogo",className:"teamLogo"}):null]})})}),Object(O.jsx)(h.a,{children:Object(O.jsx)("p",{className:a.status,children:a.status})}),Object(O.jsx)(h.a,{children:Object(O.jsx)("p",{className:"matchStatus",children:a.stage})})]})})})})})}):Object(O.jsx)("p",{children:"Loading . . ."})})}),C=a(199),D=a.n(C),k=(a(262),function(e){var t=e.standings,a=e.compId,c=Object(n.useState)("false"),s=Object(b.a)(c,2),i=s[0],r=s[1],o=Object(n.useState)(!1),h=Object(b.a)(o,2),u=h[0],m=h[1],p=Object(n.useState)([]),f=Object(b.a)(p,2),g=f[0],v=f[1],y=Object(n.useState)(new Date),T=Object(b.a)(y,2),N=T[0],w=T[1],C=[],k=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v2/competitions/".concat(a,"/matches"),{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95","Content-Type":"application/json"},crossDomain:!0}).then((function(e){v(e.data.matches)}));case 3:m(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&e.t0.response.data&&(console.log(e.t0.response.data.message),r(e.t0.response.data.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){k()}),[]),g.forEach((function(e){var t=new Date(e.utcDate),a=new Date(t.getTime()+6e4*t.getTimezoneOffset());C.push(new Date(a))})),void 0===a)return Object(O.jsx)(l.a,{to:"/"});if("false"!==i)return alert(i),Object(O.jsx)(l.a,{to:"/"});var L=g.filter((function(e){return 0===e.utcDate.substring(0,10).localeCompare("".concat(N.getFullYear(),"-").concat(("0"+(N.getMonth()+1)).slice(-2),"-").concat(("0"+N.getDate()).slice(-2)))}));return Object(O.jsx)("div",{children:u?Object(O.jsxs)("div",{className:"mainMatchesContainer",children:[Object(O.jsx)("h2",{className:"mainHeadingText",children:"Fixtures / Results :"}),Object(O.jsx)(D.a,{selected:N,onChange:function(e){return w(e)},highlightDates:C}),Object(O.jsx)("div",{className:"matchDayContainer",children:0===L.length?Object(O.jsx)("p",{children:"No games scheduled for the day"}):L.map((function(e){return Object(O.jsx)(S,{standings:t,match:e},e.id)}))})]}):Object(O.jsx)("p",{className:"subText",children:"Loading . . ."})})}),L=(a(305),a(469)),F=a(470),E=a(474),A=a(217),U=a(218),B=a(95),I=a(220),H=function(e){var t=e.standing,a=e.color,c=[],s=Object(n.useState)("asc"),i=Object(b.a)(s,2),r=i[0],l=i[1],o=t.table;if("asc"===r)for(var j=0;j<o.length;j++){var d={name:o[j].team.name,position:o[j].position,played:o[j].playedGames,won:o[j].won,lost:o[j].lost,draw:o[j].draw,points:o[j].points,logo:o[j].team.crestUrl};c.push(d)}else for(var h=o.length-1;h>-1;h--){var u={name:o[h].team.name,position:o[h].position,played:o[h].playedGames,won:o[h].won,lost:o[h].lost,draw:o[h].draw,points:o[h].points,logo:o[h].team.crestUrl};c.push(u)}var m=function(e){var t=e.active,a=e.payload,n=e.label;return t&&a&&a.length?Object(O.jsxs)("div",{className:"tooltipContainer",children:[Object(O.jsx)("p",{className:"toolTipLabel",children:n}),Object(O.jsx)("img",{className:"toolTipImage",src:a[0].payload.logo,alt:"TeamLogo"}),Object(O.jsxs)("div",{className:"toolTipStatsContainer",children:[Object(O.jsxs)("p",{className:"toolTipStats",children:[Object(O.jsx)("strong",{children:"GP"}),Object(O.jsx)("br",{}),a[0].payload.played]}),Object(O.jsxs)("p",{className:"toolTipStats",children:[Object(O.jsx)("strong",{children:"W"}),Object(O.jsx)("br",{}),a[0].payload.won]}),Object(O.jsxs)("p",{className:"toolTipStats",children:[Object(O.jsx)("strong",{children:"L"}),Object(O.jsx)("br",{}),a[0].payload.lost]}),Object(O.jsxs)("p",{className:"toolTipStats",children:[Object(O.jsx)("strong",{children:"D"}),Object(O.jsx)("br",{}),a[0].payload.draw]}),Object(O.jsxs)("p",{className:"toolTipStats",children:[Object(O.jsx)("strong",{children:"Pos"}),Object(O.jsx)("br",{}),a[0].payload.position]}),Object(O.jsxs)("p",{className:"toolTipStats",children:[Object(O.jsx)("strong",{children:"P"}),Object(O.jsx)("br",{}),a[0].payload.points]})]})]}):null};return Object(O.jsxs)("div",{style:{width:"80%",height:"80%",backgroundColor:"lightblue"},children:[Object(O.jsx)("button",{onClick:function(){l("asc"===r?"desc":"asc")},children:r}),Object(O.jsxs)("p",{children:[t.type," ",t.group]}),Object(O.jsx)(L.a,{width:"100%",height:"80%",children:Object(O.jsxs)(F.a,{data:c,layout:"vertical",margin:{top:5,right:30,left:20,bottom:5},children:[Object(O.jsx)(E.a,{strokeDasharray:"5 5"}),Object(O.jsx)(A.a,{dataKey:"points",type:"number"}),Object(O.jsx)(U.a,{dataKey:"name",type:"category",width:150,tick:{fontSize:12}}),Object(O.jsx)(B.a,{content:Object(O.jsx)(m,{})}),Object(O.jsx)(I.a,{dataKey:"points",fill:a})]})})]})},P=function(e){var t=e.location.aboutProps,a=["#6393e0","#3cb44b","#e6194b","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#ffe119","#fabebe","#008080","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080","#ffffff","#000000","#ff9900","#ace600","#ff3300"],c=Object(n.useState)([]),s=Object(b.a)(c,2),i=s[0],o=s[1],h=Object(n.useState)([]),u=Object(b.a)(h,2),m=u[0],p=u[1],f=Object(n.useState)([]),g=Object(b.a)(f,2),v=g[0],y=g[1],T=Object(n.useState)(!1),N=Object(b.a)(T,2),w=N[0],S=N[1],C=Object(n.useState)("false"),D=Object(b.a)(C,2),L=D[0],F=D[1],E=Object(n.useState)(800),A=Object(b.a)(E,2),U=A[0],B=A[1],I=Object(n.useState)(2),P=Object(b.a)(I,2),R=P[0],M=P[1],K=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v2/competitions/".concat(t.id.id,"/standings"),{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95"},crossDomain:!0}).then((function(e){o(e.data.competition),p(e.data.season),y(e.data.standings),B(150+30*e.data.standings[0].table.length),F("false")}));case 3:S(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&e.t0.response.data&&(console.log(e.t0.response.data.message),F(e.t0.response.data.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){K()}),[]);return void 0===t?Object(O.jsx)(l.a,{to:"/"}):"false"!==L?(alert(L),Object(O.jsx)(l.a,{to:"/"})):Object(O.jsx)("div",{className:"mainContainer",children:w?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"mainHeadingContainer",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(O.jsx)("h2",{className:"mainHeadingText",children:i.name}),Object(O.jsxs)("div",{className:"subHeadingContainer",style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",fontSize:"18px",width:"95%"},children:[Object(O.jsxs)("p",{style:{padding:"1%"},children:[Object(O.jsx)("strong",{children:"Start Date:"})," ",m.startDate]}),Object(O.jsxs)("p",{style:{padding:"1%"},children:[Object(O.jsx)("strong",{children:"End Date:"})," ",m.endDate]}),Object(O.jsxs)("p",{style:{padding:"1%"},children:[Object(O.jsx)("strong",{children:"Round:"})," ",m.currentMatchday]}),Object(O.jsxs)("p",{style:{padding:"1%"},children:[Object(O.jsx)("strong",{children:"Winner:"})," ",null===m.winner?"TBA":m.winner.name]})]})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"ButtonsContainer",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(O.jsx)(r.b,{to:"/",children:"<BACK"}),Object(O.jsx)("button",{onClick:function(){M(1===R?2:1)},children:1===R?"Fixtures/Results":"League Positions"})]}),Object(O.jsx)("div",{className:"switchDisplayContainer",children:1===R?Object(O.jsx)(O.Fragment,{children:v.map((function(e,t){return Object(O.jsx)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center",width:"90%",height:U},children:Object(O.jsx)(H,{standing:e,color:a[t]})},t)}))}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"matchesContainer",children:Object(O.jsx)(k,{standings:v,compId:t.id.id})})})})]}):Object(O.jsx)("p",{className:"subText",children:"Loading . . ."})})},R=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/",component:w}),Object(O.jsx)(l.b,{path:"/standings",component:P})]})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))}},[[441,1,2]]]);
//# sourceMappingURL=main.e4ab8a75.chunk.js.map