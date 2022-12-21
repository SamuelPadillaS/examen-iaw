"use strict";const performance=require("./vs/base/common/performance");performance.mark("code/fork/start");const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node");bootstrapNode.removeGlobalNodeModuleLookupPaths(),bootstrap.enableASARSupport(),process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH&&bootstrapNode.injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),!!process.send&&process.env.VSCODE_PIPE_LOGGING==="true"&&pipeLoggingToParent(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||handleExceptions(),process.env.VSCODE_PARENT_PID&&terminateWhenParentTerminates(),require("./bootstrap-amd").load(process.env.VSCODE_AMD_ENTRYPOINT);function pipeLoggingToParent(){function l(e){const r=[],c=[];if(e.length)for(let n=0;n<e.length;n++){let o=e[n];if(typeof o>"u")o="undefined";else if(o instanceof Error){const t=o;t.stack?o=t.stack:o=t.toString()}c.push(o)}try{const n=JSON.stringify(c,function(o,t){if(d(t)||Array.isArray(t)){if(r.indexOf(t)!==-1)return"[Circular]";r.push(t)}return t});return n.length>1e5?"Output omitted for a large object that exceeds the limits":n}catch(n){return`Output omitted for an object that cannot be inspected ('${n.toString()}')`}}function E(e){try{process.send&&process.send(e)}catch{}}function d(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!(e instanceof RegExp)&&!(e instanceof Date)}function _(e,r){E({type:"__$console",severity:e,arguments:r})}function i(e,r){Object.defineProperty(console,e,{set:()=>{},get:()=>function(){_(r,l(arguments))}})}function f(e,r){const c=process[e],n=c.write;let o="";Object.defineProperty(c,"write",{set:()=>{},get:()=>(t,u,O)=>{o+=t.toString(u);const a=o.length>1048576?o.length:o.lastIndexOf(`
`);a!==-1&&(console[r](o.slice(0,a)),o=o.slice(a+1)),n.call(c,t,u,O)}})}process.env.VSCODE_VERBOSE_LOGGING==="true"?(i("info","log"),i("log","log"),i("warn","warn"),i("error","error")):(console.log=function(){},console.warn=function(){},console.info=function(){},i("error","error")),f("stderr","error"),f("stdout","log")}function handleExceptions(){process.on("uncaughtException",function(s){console.error("Uncaught Exception: ",s)}),process.on("unhandledRejection",function(s){console.error("Unhandled Promise Rejection: ",s)})}function terminateWhenParentTerminates(){const s=Number(process.env.VSCODE_PARENT_PID);typeof s=="number"&&!isNaN(s)&&setInterval(function(){try{process.kill(s,0)}catch{process.exit()}},5e3)}

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/5235c6bb189b60b01b1f49062f4ffa42384f8c91/core/bootstrap-fork.js.map
