

function Test(){
  const getRandomDevanagariCharacter = () => {
    const min = 0x0905;
    const max = 0x097F;
    const randomChar = Math.floor(Math.random() * (max - min) + min);
    let name=""
    for(let i=min;i<=max;i++){
      name+=String.fromCharCode(i)
    }
    console.log(name)
    return name
    // return String.fromCharCode(name);
  };
  const getRandomTeluguCharacter = () => {
    const min = 0xD000;
    const max = 0xD7A3;
    const randomChar = Math.floor(Math.random() * (max - min) + min);
    let name=""
    for(let i=min;i<=max;i++){
      name+=String.fromCharCode(i)
    }
    console.log(name)
    return name
  };
  const d=getRandomDevanagariCharacter()
  const s=getRandomTeluguCharacter()
  console.log(d)
  return(<div>
      <>
        {d}
        {s}
      </>

  </div>)
}

export default Test;