import React from 'react'

type Props = {
children: React.ReactNode
}

const TopCategoriesLayout = ({children}: Props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default TopCategoriesLayout
