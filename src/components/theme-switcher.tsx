import React from 'react'
import { Button } from './ui/button'
import { Moon } from 'lucide-react'

const ThemeSwitcher = () => {
   return (
      <Button size="icon" variant="ghost">
         <Moon />
      </Button>
   )
}

export default ThemeSwitcher
