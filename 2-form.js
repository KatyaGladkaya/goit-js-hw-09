import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),l=t.querySelector('input[name="email"]'),o=t.querySelector('textarea[name="message"]');t.addEventListener("input",a=>{const{name:m,value:s}=a.target;m==="email"?e.email=s.trim():m==="message"&&(e.message=s.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))});window.addEventListener("load",()=>{const a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(e.email=a.email||"",e.message=a.message||"",l.value=e.email,o.value=e.message)});t.addEventListener("submit",a=>{if(a.preventDefault(),e.email.trim()===""||e.message.trim()===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",l.value="",o.value=""});console.log(localStorage.getItem("feedback-form-state"));
//# sourceMappingURL=2-form.js.map
