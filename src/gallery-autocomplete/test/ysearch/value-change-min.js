YUI.add("value-change",function(E){function G(M,K){var L=E.on("available",function(){L.handle=E.on.apply(E,K);},M);return L;}function A(M,K,L){K[0]=L+B(M);K.splice(2,1);M.publish(K[0],{broadcast:true,emitFacade:true});F(J,M,L);return M.on.apply(M,K);}function B(K){return E.stamp(K)+"-"+H;}function F(K,N,M){for(var L in K){I(L,K[L],N,M);}}function I(N,K,M,L){E.after(E.bind(E.detach,E,L),E.on(L+N,K,M),"detach");}var C={},D={on:function(Q,R,M,L){var P=E.Array(arguments,0,true),N=E.all((E.Lang.isString(M)||E.Lang.isArray(M))?M:[M]);if(N.size()===0){return G(M,P);}P[3]=L=L||((N.size()===1)?N.item(0):N);var S=[],K,O=[];N.each(function(T){E.after(E.bind(E.detach,E,O.push(K=E.guid()+"|")),S.push(A(T,P,K)),"detach");});return{evt:S,sub:N,detach:E.bind(E.Array.each,E.Array,O,E.bind(E.detach,E))};}},H="valueChange",J=(function(){var M={},P={},K={};function R(U,V){var T=B(U);Q(U);P[T]=setInterval(E.bind(S,null,U,V),50);K[T]=setTimeout(E.bind(Q,null,U),10000);}function Q(U){var T=B(U);clearTimeout(K[T]);clearInterval(P[T]);}function S(U,W){var T=B(U);var V=U.get("value");if(V===M[T]){return;}U.fire(T,{type:H,value:V,oldValue:M[T],_event:W,target:U,currentTarget:U});M[T]=U.get("value");R(U,W);}function N(T){if(T.charCode===229||T.charCode===197){R(T.currentTarget,T);}}function O(T){Q(T.currentTarget);}function L(T){R(T.currentTarget,T);}return{keyup:N,blur:O,keydown:L};})();E.Env.evt.plugins[H]=D;if(E.Node){E.Node.DOM_EVENTS[H]=D;}},"@VERSION@",{optional:["event-custom"],requires:["node-base","event-focus"]});