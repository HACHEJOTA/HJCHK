import fetch from 'node-fetch' 
let handler = async function (m, { conn, text, usedPrefix }) {
if (text.length != 6) throw `El Bin tiene que contener 6 carácteres obligatoriamente.`
const apiUrl = `https://lookup.binlist.net/${text}`
fetch(apiUrl).then(response => {
if (!response.ok) {
return console.log('La página no esta funcionando actualmente')
}
return response.json()
}).then(data => {
const formattedResult = `
📇| *BIN*: ${text}
💳| *MARCA*: ${data.scheme}
🏧| *TIPO*: ${data.type}
🌐| *PAIS*: ${data.country.name}
🏁| *BANDERA*: ${data.country.emoji}
🏦| *BANCO*: ${data.bank.name}
`
m.reply(formattedResult.trim())
}).catch(error => {
m.reply('Ingrese un Bin válido porfavor.'
})
}
handler.command = /^(bin|card)$/i
export default handler