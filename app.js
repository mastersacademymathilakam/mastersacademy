function generate(){
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const date = tomorrow.toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
 const lines=document.getElementById('schedule').value.trim();
 document.getElementById('output').value=
`📚 Masters Academy

🗓️ ${date}
⏰ Time: Z:XX AM – Z:00 AM
🧬 Subject: ZZZZZZ
${lines}
നാളെ റെഗുലർ ക്ലാസ് ഉണ്ടായിരിക്കുന്നതാണ്. എല്ലാ വിദ്യാർത്ഥികളും കൃത്യസമയത്ത് എത്തി ക്ലാസിൽ പങ്കെടുക്കണമെന്ന് അഭ്യർത്ഥിക്കുന്നു.

Please attend the class on time.

Thank you
Masters Academy`;
}
function copyMsg(){
 const o=document.getElementById('output');
 o.select();
 document.execCommand('copy');
 alert('Copied!');
}
