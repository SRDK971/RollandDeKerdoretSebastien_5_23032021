
const getAllProducts = async function () {
  const response = await fetch('https://op-dw-p5.herokuapp.com')
  if (response.ok) {
    const data = await response.json()
    console.log(data)
  } else {
    console.error('Retour du server : ', response.status)
  }
}
