import {useEffect, useState} from "react";

export const useToggleMode = () => {
  const [value, setValue]  = useState('light')
  const body = document.querySelector('body')

  useEffect(()=>{
    body.dataset.mode = value
  }, [value])
  const changeMode=()=>{
    setValue(prev => prev === 'light' ?  'dark': 'light')
  }
  return { value , changeMode}
}